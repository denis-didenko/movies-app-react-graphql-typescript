import { FC } from 'react';
import { ApolloError } from '@apollo/client';

interface IProps {
    error: ApolloError;
}

const ErrorMessage: FC<IProps> = ({ error }) => {
    console.log(JSON.stringify(error, null, 2));

    return <div className='error-message'>{error.message}</div>;
};

export default ErrorMessage;
