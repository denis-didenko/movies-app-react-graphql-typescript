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
            popularity
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
            popularity
            release_date
        }
    }
`;

export const GET_NOW_PLAYING_MOVIES = gql`
    query GetNowPlayingMovies {
        nowPlayingMovies {
            id
            poster_path
            popularity
            release_date
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
