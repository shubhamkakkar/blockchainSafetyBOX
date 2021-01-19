export type InputValidatorType = 'EMAIL' | 'PASSWORD' | 'REQUIRED' |'NOT_REQUIRED';

export default function inputValidator(type: InputValidatorType, value: string): string {
  let errorMessage: string = '';
  switch (type) {
    case 'EMAIL': {
      if (!!value && value.trim().length) {
        const reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
        if (!reg.test(value)) {
          errorMessage = 'Invalid email';
        }
      } else {
        errorMessage = 'value can\'t be an empty string';
      }
      break;
    }
    case 'PASSWORD': {
      if (!!value && value.trim().length) {
        if (value.trim().length < 6) {
          errorMessage = 'Password can\'t be less than 6 characters';
        }
      } else {
        errorMessage = 'value can\'t be an empty string';
      }
      break;
    }
    case 'REQUIRED': {
      if (!(!!value && value.trim().length)) {
        errorMessage = 'value is required';
      }
      break;
    }
    default: {
      errorMessage = '';
    }
  }
  return errorMessage;
}
