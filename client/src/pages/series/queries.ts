import { gql } from '@apollo/client';

export const GET_SERIES = gql`
    query GetSeries($id: ID!) {
        series(id: $id) {
            id
            name
            overview
            backdrop_path
            vote_average
            created_by {
                id
                name
                image {
                    medium
                }
            }
            first_air_date
            in_production
            languages
            last_air_date
            number_of_episodes
            number_of_seasons
            origin_country
            popularity
            poster_path
            seasons {
                id
                name
                overview
                poster_path
                season_number
                episodes {
                    id
                    name
                    overview
                    air_date
                    episode_number
                    season_number
                    still_path
                    vote_average
                    vote_count
                }
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

export const GET_GENRES_SERIES = gql`
    query GetGenresSeries {
        genresSeries {
            id
            name
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
                release_date
                vote_average
            }
        }
    }
`;
