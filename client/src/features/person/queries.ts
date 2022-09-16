import { gql } from '@apollo/client';

export const GET_PERSON = gql`
  query GetPerson($id: ID!) {
    person(id: $id) {
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
        name
        overview
        release_date
        poster_path
        backdrop_path
        vote_average
        runtime
        homepage
        popularity
        genres {
          id
          name
        }
      }
    }
  }
`;
