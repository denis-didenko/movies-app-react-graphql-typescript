import { gql } from '@apollo/client';

export const SEARCH_MOVIES = gql`
    query SearchMovies($query: String!, $page: Int!) {
        searchMovies(query: $query, page: $page) {
            page
            total_results
            total_pages
            results {
                id
                title
                poster_path
                release_date
                popularity
            }
        }
    }
`;
