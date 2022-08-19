import { gql } from '@apollo/client';

export const GET_UPCOMING_MOVIES = gql`
    query GetUpcomingMovies {
        upcomingMovies {
            title
            backdrop_path
        }
    }
`;
