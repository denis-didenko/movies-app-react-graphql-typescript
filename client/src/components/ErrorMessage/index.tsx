import { ApolloError } from '@apollo/client';
import { FC } from 'react';

interface IProps {
  error: ApolloError;
}

const ErrorMessage: FC<IProps> = ({ error }) => {
  console.log(JSON.stringify(error, null, 2)); // eslint-disable-line no-console

  // network error
  if (error.networkError && 'result' in error.networkError) {
    const { result } = error.networkError;

    if (result.errors.length) {
      return result.errors.map((err: { message: string }) => (
        <div key={err.message} className='error-message'>
          {err.message}
        </div>
      ));
    }
  }

  // graphql error
  if (error.graphQLErrors.length) {
    const { extensions, path, message } = error.graphQLErrors[0];

    return (
      <div className='error-message'>
        <p>
          Path:
          {path}
        </p>
        <p>
          Message:
          {message}
        </p>
        <p>
          Extensions:
          {JSON.stringify(extensions, null, 2)}
        </p>
      </div>
    );
  }

  return <div className='error-message'>{error.message}</div>;
};

export default ErrorMessage;
