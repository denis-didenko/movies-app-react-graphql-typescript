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

export const GET_DISCOVER_SERIES = gql`
  query GetDiscoverSeries($input: DiscoverSeriesInput!) {
    discoverSeries(input: $input) {
      page
      total_results
      total_pages
      results {
        id
        name
        poster_path
        popularity
        vote_average
      }
    }
  }
`;
