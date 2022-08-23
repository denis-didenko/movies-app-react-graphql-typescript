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

export const GET_GENRES = gql`
    query GetGenres {
        genres {
            id
            name
        }
    }
`;

export const GET_DISCOVER_MOVIES = gql`
    query GetDiscoverMovies($sortBy: String!, $genreId: ID!, $page: Int!) {
        discoverMovies(genreId: $genreId, sortBy: $sortBy, page: $page) {
            id
            title
            poster_path
        }
    }
`;
