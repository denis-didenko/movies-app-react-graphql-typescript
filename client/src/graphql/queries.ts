import { gql } from '@apollo/client';

export const GET_MOVIE = gql`
    query GetMovie($id: ID!) {
        movie(id: $id) {
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
            casts {
                id
                name
                character
                profile_path
                known_for_department
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
            }
        }
    }
`;

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
`;

export const GET_UPCOMING_MOVIES = gql`
    query GetUpcomingMovies {
        upcomingMovies {
            id
            title
            backdrop_path
        }
    }
`;

export const GET_NOW_PLAYING_MOVIES = gql`
    query GetNowPlayingMovies {
        nowPlayingMovies {
            id
            poster_path
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
    query GetDiscoverMovies($sortBy: String!, $genreId: ID!, $page: Int!) {
        discoverMovies(genreId: $genreId, sortBy: $sortBy, page: $page) {
            id
            title
            poster_path
        }
    }
`;
