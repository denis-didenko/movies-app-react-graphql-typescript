import { gql } from '@apollo/client';

export const GET_GENRES_MOVIES = gql`
  query GetGenres {
    genres {
      id
      name
    }
  }
`;

export const GET_GENRES_SERIES = gql`
  query GetGenresSeries {
    genresSeries {
      id
      name
    }
  }
`;
