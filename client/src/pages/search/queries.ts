import { gql } from '@apollo/client';

export const GET_SEARCH_MOVIES = gql`
    query GetSearchMovies($query: String!, $page: Int!) {
        searchMovies(query: $query, page: $page) {
            id
            title
            poster_path
        }
    }
`;
