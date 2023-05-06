import { gql } from '@apollo/client';

export const GET_DISCOVER_MOVIES = gql`
  query GetDiscoverMovies($input: DiscoverMoviesInput!) {
    discoverMovies(input: $input) {
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
