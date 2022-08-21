import { gql } from '@apollo/client';

export const GET_UPCOMING_MOVIES = gql`
    query GetUpcomingMovies {
        upcomingMovies {
            id
            title
            backdrop_path
        }
    }
`;

export const GET_NOW_PLAYING_MOVIES = gql`
    query GetNowPlayingMovies {
        nowPlayingMovies {
            id
            poster_path
        }
    }
`;
