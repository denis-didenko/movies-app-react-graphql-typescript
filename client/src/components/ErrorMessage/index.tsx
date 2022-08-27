import { FC } from 'react';
import { ApolloError } from '@apollo/client';

interface IProps {
    error: ApolloError;
}

const ErrorMessage: FC<IProps> = ({ error }) => {
    console.log(JSON.stringify(error, null, 2));

    // network error
    if (error.networkError && 'result' in error.networkError) {
        const { result } = error.networkError;

        if (result.errors.length) {
            return result.errors.map((error: { message: string }) => {
                return (
                    <div key={error.message} className='error-message'>
                        {error.message}
                    </div>
                );
            });
        }
    }

    // graphql error
    if (error.graphQLErrors.length) {
        const { extensions, path, message } = error.graphQLErrors[0];

        return (
            <div className='error-message'>
                <p>Path: {path}</p>
                <p>Message: {message}</p>
                <p>Extensions: {JSON.stringify(extensions, null, 2)}</p>
            </div>
        );
    }

    return <div className='error-message'>{error.message}</div>;
};

export default ErrorMessage;
