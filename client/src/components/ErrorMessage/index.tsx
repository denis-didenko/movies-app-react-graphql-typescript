import { FC } from 'react';
import { ApolloError } from '@apollo/client';

interface IProps {
    error: ApolloError;
}

const ErrorMessage: FC<IProps> = ({ error }) => {
    return <div className='error-message'>{error.message}</div>;
};

export default ErrorMessage;
