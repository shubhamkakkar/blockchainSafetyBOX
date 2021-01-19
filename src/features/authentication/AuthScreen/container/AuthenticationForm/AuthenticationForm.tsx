import React, {
  useEffect, useMemo,
} from 'react';
import {
  Alert,
  Animated, Image, View,
} from 'react-native';
import Input from 'UI/Input';
import AnimatedButton from 'UI/Buttons/AnimatedButton';
import ImageLinks from 'ImageLinks';
import { Formik, FormikHelpers } from 'formik';
import { useLoginLazyQuery, useSignUpMutation } from 'generated/graphql';
import request from 'utils/request';
import { ApolloError } from '@apollo/client/errors';
import {
  AuthenticationInitialState,
  authenticationInitialState,
  authenticationSchema,
} from './authenticationForm.formik';
import styles from './authenticationForm.styles';

type Props = {
  isLogin: boolean;
  goTo : (_screen: 'PublicLedger' | 'PrivateKeyDownloadScreen', _params?: any) => void
};

type AuthenticationResponse = {
  token?: string; privateKey?: string, error:boolean
};

export default function AuthenticationForm({ isLogin, goTo }: Props) {
  const singUpFormFieldsOpacity = useMemo(() => new Animated.Value(0), []);
  const [loginQuery, loginQueryResponse] = useLoginLazyQuery();
  const [signUpMutation, signUpMutationResponse] = useSignUpMutation();
  const toSendNavigationParams = { email: '' };
  async function formSubmitHandler(
    value: AuthenticationInitialState,
    helpers: FormikHelpers<AuthenticationInitialState>,
  ) {
    try {
      if (isLogin) {
        await loginQuery({
          variables: {
            email: value.email,
            password: value.password,
          },
        });
      } else {
        const { isLogin: _isLogin, confirmPassword: _confirmPassword, ...variables } = value;
        await signUpMutation({
          variables,
        });
      }
      toSendNavigationParams.email = value.email;
    } catch (e:any) {
      console.log('AuthenticationForm -> formSubmitHandler e()', e);
    } finally {
      helpers.setSubmitting(false);
    }
  }

  const authenticatedResponse : AuthenticationResponse = useMemo(() => {
    const authenticationResponse: AuthenticationResponse = { error: false };
    if (isLogin) {
      if (loginQueryResponse.data?.login) {
        authenticationResponse.token = loginQueryResponse.data.login.token;
        request.token = authenticationResponse.token;
      } else {
        authenticationResponse.error = !!loginQueryResponse.error;
      }
    } else if (signUpMutationResponse.data?.signUp) {
      authenticationResponse.token = signUpMutationResponse.data.signUp.token;
      authenticationResponse.privateKey = signUpMutationResponse.data.signUp.privateKey;
      request.token = authenticationResponse.token;
    } else {
      authenticationResponse.error = !!signUpMutationResponse.error;
    }
    return authenticationResponse;
  }, [
    loginQueryResponse.data?.login, loginQueryResponse.error,
    signUpMutationResponse.data?.signUp, signUpMutationResponse.error,
    isLogin,
  ]);

  useEffect(() => {
    if (authenticatedResponse.token) {
      const screen = isLogin ? 'PublicLedger' : 'PrivateKeyDownloadScreen';
      const payload = isLogin ? {} : {
        privateKey: authenticatedResponse.privateKey,
        email: toSendNavigationParams.email,
      };
      goTo(screen, payload);
    }
  }, [isLogin, authenticatedResponse, toSendNavigationParams]);

  useEffect(() => {
    if (!isLogin) {
      Animated.timing(singUpFormFieldsOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(singUpFormFieldsOpacity, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [isLogin]);

  const translateYLoginFields = singUpFormFieldsOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [-20, 0],
  });

  const logoOpacity = singUpFormFieldsOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  function errorAlert(error?: ApolloError) {
    if (error) {
      Alert.alert('Error', 'User credentials are invalid');
    }
  }

  useEffect(() => {
    errorAlert(loginQueryResponse.error);
  }, [loginQueryResponse.error]);

  useEffect(() => {
    errorAlert(signUpMutationResponse.error);
  }, [signUpMutationResponse.error]);

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
                  autoFocus={!isLogin}
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
              <Animated.View
                style={{ transform: [{ translateY: translateYLoginFields }] }}
              >
                <Animated.View style={[styles.logoContainer, { opacity: logoOpacity }]}>
                  <Image source={ImageLinks.logo} style={styles.logo} />
                </Animated.View>
                <Input
                  placeholder="Email *"
                  iconProps={{ name: 'email' }}
                  fieldName="email"
                  autoFocus={isLogin}
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
                onPress={handleSubmit}
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
