import { gql } from '@apollo/client';

export const GET_UPCOMING_MOVIES = gql`
    query GetUpcomingMovies($page: Int!) {
        upcomingMovies(page: $page) {
            page
            total_results
            total_pages
            results {
                id
                title
                backdrop_path
                popularity
                release_date
            }
        }
    }
`;

export const GET_NOW_PLAYING_MOVIES = gql`
    query GetNowPlayingMovies($page: Int!) {
        nowPlayingMovies(page: $page) {
            page
            total_results
            total_pages
            results {
                id
                title
                poster_path
                popularity
                release_date
                vote_average
            }
        }
    }
`;
