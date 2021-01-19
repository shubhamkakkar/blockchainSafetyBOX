import { TSignupArgs } from 'generated/graphql';
import * as Yup from 'yup';

export interface AuthenticationInitialState extends TSignupArgs {
  confirmPassword: string;
  isLogin: boolean
}

const authenticationInitialState: AuthenticationInitialState = {
  email: '',
  password: '',
  firstName: '',
  middleName: '',
  lastName: '',
  confirmPassword: '',
  isLogin: true,
};

const authenticationSchema = Yup.object().shape({
  isLogin: Yup.boolean().required(),
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!')
    .when('isLogin', {
      is: false,
      then: Yup.string().required('Required'),
    }),
  middleName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!')
    .when('isLogin', {
      is: false,
      then: Yup.string().required('Required'),
    }),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Can\'t be less than 6').required('Required'),
  confirmPassword: Yup.string()
    .when('isLogin', {
      is: false,
      then: Yup.string()
        .test('passwords-match', 'Confirm password and password don\'t match', function passwordMatch(value) {
          return this.parent.password === value;
        })
        .required('Required'),
    }),
});

export {
  authenticationInitialState,
  authenticationSchema,
};
