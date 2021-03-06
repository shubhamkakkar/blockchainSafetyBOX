import React, {
  useEffect, useMemo, useState,
} from 'react';
import {
  Alert, Animated, Image, View,
} from 'react-native';
import Input from 'UI/Input';
import AnimatedButton from 'UI/Buttons/AnimatedButton';
import ImageLinks from 'ImageLinks';
import { Formik, FormikHelpers } from 'formik';
import {
  ReturnedUser, useLoginLazyQuery, useSignUpMutation,
} from 'generated/graphql';
import request from 'utils/request';
import navigationRouteNames from 'navigationContainer/navigationRouteNames';
import { useDispatch } from 'react-redux';
import { userProfile } from 'store/actions/user.actions';
import {
  AuthenticationInitialState,
  authenticationInitialState,
  authenticationSchema,
} from './authenticationForm.formik';
import styles from './authenticationForm.styles';

type Props = {
  isLogin: boolean;
  goTo : (_screen: navigationRouteNames, _params?: any) => void
};

type AuthenticationResponse = {
  token?: string;
  privateKey?: string;
  error: any
};

export default function AuthenticationForm({ isLogin, goTo }: Props) {
  const [email, setEmail] = useState<string>('');
  const singUpFormFieldsOpacity = useMemo(() => new Animated.Value(0), []);
  const [loginQuery, loginQueryResponse] = useLoginLazyQuery();
  const [signUpMutation, signUpMutationResponse] = useSignUpMutation();

  const dispatch = useDispatch();
  async function formSubmitHandler(
    value: AuthenticationInitialState,
    helpers: FormikHelpers<AuthenticationInitialState>,
  ) {
    try {
      setEmail(value.email);
      if (isLogin) {
        await loginQuery({ variables: { email: value.email, password: value.password } });
      } else {
        const { isLogin: _isLogin, confirmPassword: _confirmPassword, ...variables } = value;
        await signUpMutation({ variables });
      }
    } catch (e:any) {
      console.log('formSubmitHandler e()', e);
    } finally {
      helpers.setSubmitting(false);
    }
  }

  const authenticatedResponse : AuthenticationResponse = useMemo(() => {
    const authenticationResponse: AuthenticationResponse = { error: false };
    if (isLogin) {
      if (loginQueryResponse.called && (!!loginQueryResponse.error || !loginQueryResponse.data)) {
        authenticationResponse.error.message = loginQueryResponse.error?.message || 'User not found'
      }
      if (loginQueryResponse.data?.login) {
        authenticationResponse.token = loginQueryResponse.data.login.token;
        request.token = authenticationResponse.token;
        dispatch(userProfile(
          { email, ...loginQueryResponse.data.login } as ReturnedUser,
        ));
      } else {
        authenticationResponse.error = loginQueryResponse.error;
      }
    } else if (signUpMutationResponse.data?.signUp) {
      if (signUpMutationResponse.called && (!!signUpMutationResponse.error || !signUpMutationResponse.data)) {
        authenticationResponse.error.message = signUpMutationResponse.error?.message || 'User not found'
      }
      authenticationResponse.token = signUpMutationResponse.data.signUp.token;
      authenticationResponse.privateKey = signUpMutationResponse.data.signUp.privateKey;
      request.token = authenticationResponse.token;
      const { privateKey: _, ...user } = {
        email,
        ...signUpMutationResponse.data.signUp,
      } as ReturnedUser;
      dispatch(userProfile(user as ReturnedUser));
    } else {
      authenticationResponse.error = signUpMutationResponse.error;
    }
    return authenticationResponse;
  }, [
    loginQueryResponse.called, loginQueryResponse.data?.login, loginQueryResponse.error,
    signUpMutationResponse.called, signUpMutationResponse.data?.signUp, signUpMutationResponse.error,
    isLogin,
  ]);

  const translateYLoginFields = singUpFormFieldsOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [-20, 0],
  });

  const logoOpacity = singUpFormFieldsOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  useEffect(() => {
    if (authenticatedResponse.error) {
      Alert.alert('Error', authenticatedResponse.error?.message || 'Invalid Signature');
    }
    if (authenticatedResponse.token) {
      goTo(navigationRouteNames.PublicLedgerScreen, {});
    }
  }, [authenticatedResponse]);

  useEffect(() => {
    function animate(toValue: number) {
      Animated.timing(singUpFormFieldsOpacity, {
        toValue,
        useNativeDriver: true,
      }).start();
    }
    if (!isLogin) {
      animate(1);
    } else {
      animate(0);
    }
  }, [isLogin]);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ ...authenticationInitialState, isLogin }}
        onSubmit={formSubmitHandler}
        validationSchema={authenticationSchema}
        enableReinitialize
      >
        {({
          handleSubmit, isSubmitting, isValid,
        }) => (
          <>
            <View style={styles.formContainer}>
              <Animated.View
                style={{
                  opacity: singUpFormFieldsOpacity,
                  transform: [{ scaleY: singUpFormFieldsOpacity }],
                }}
              >
                <Input
                  placeholder="First name *"
                  iconProps={{ name: 'account' }}
                  fieldName="firstName"
                />
                <Input
                  placeholder="Middle name"
                  iconProps={{ name: 'account' }}
                  fieldName="middleName"
                />
                <Input
                  placeholder="Last name *"
                  textContentType="name"
                  iconProps={{ name: 'account' }}
                  fieldName="lastName"
                />
              </Animated.View>
              <Animated.View style={{ transform: [{ translateY: translateYLoginFields }] }}>
                <Animated.View style={[styles.logoContainer, { opacity: logoOpacity }]}>
                  <Image source={ImageLinks.logo} style={styles.logo} />
                </Animated.View>
                <Input
                  placeholder="Email *"
                  iconProps={{ name: 'email' }}
                  fieldName="email"
                />
                <Input
                  placeholder="Password *"
                  textContentType="password"
                  secureTextEntry
                  iconProps={{ name: 'key-variant' }}
                  fieldName="password"
                />
                <Animated.View style={{ opacity: singUpFormFieldsOpacity }}>
                  <Input
                    placeholder="Confirm Password *"
                    textContentType="password"
                    secureTextEntry
                    iconProps={{ name: 'key-variant' }}
                    fieldName="confirmPassword"
                  />
                </Animated.View>
              </Animated.View>
            </View>
            <View style={styles.authenticationButtonContainer}>
              <AnimatedButton
                disabled={isSubmitting || !isValid}
                isLoading={isSubmitting}
                title={!isLogin ? 'Sign Up' : 'Log In'}
                onPress={handleSubmit as any}
                isFailed={authenticatedResponse.error}
                isSuccess={!!authenticatedResponse?.token}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}
