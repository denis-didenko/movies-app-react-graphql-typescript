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
        popularity
        release_date
        vote_average
      }
    }
  }
`;

export const SEARCH_SERIES = gql`
  query SearchSeries($query: String!, $page: Int!) {
    searchSeries(query: $query, page: $page) {
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

export const SEARCH_PERSON = gql`
  query SearchPerson($query: String!, $page: Int!) {
    searchPerson(query: $query, page: $page) {
      page
      total_results
      total_pages
      results {
        id
        name
        profile_path
        biography
        birthday
        place_of_birth
      }
    }
  }
`;

export const SEARCH_MULTI = gql`
  query SearchMulti($query: String!, $page: Int!) {
    searchMulti(query: $query, page: $page) {
      page
      total_results
      total_pages
      results {
        __typename
        ... on Movie {
          id
          title
          poster_path
          popularity
          release_date
          vote_average
        }
        ... on Series {
          id
          name
          poster_path
          popularity
          vote_average
        }
        ... on Person {
          id
          name
          profile_path
          biography
          birthday
          deathday
          place_of_birth
          cast {
            id
            title
            overview
            release_date
            poster_path
            backdrop_path
            vote_average
            runtime
            homepage
            genres {
              id
              name
            }
          }
        }
      }
    }
  }
`;
