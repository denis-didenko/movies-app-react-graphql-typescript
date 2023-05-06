import { gql } from '@apollo/client';

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
