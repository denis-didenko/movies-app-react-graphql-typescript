import { gql } from '@apollo/client';

export const GET_MOVIE = gql`
  query GetMovie($id: ID!) {
    movie(id: $id) {
      __typename
      id
      title
      overview
      release_date
      poster_path
      backdrop_path
      vote_average
      runtime
      homepage
      popularity
      production_companies {
        name
        id
        logo_path
        origin_country
      }
      genres {
        id
        name
      }
      credits {
        cast {
          id
          name
          character
          profile_path
          known_for_department
          job
          department
          person {
            id
            name
            profile_path
            biography
            birthday
            deathday
            place_of_birth
          }
        }
        crew {
          id
          name
          department
          job
          profile_path
        }
      }
      reviews {
        id
        author_details {
          username
          avatar_path
        }
        content
        created_at
      }
      recommendations {
        id
        title
        overview
        release_date
        poster_path
        backdrop_path
        popularity
      }
      videos {
        id
        key
        name
        site
        type
      }
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
