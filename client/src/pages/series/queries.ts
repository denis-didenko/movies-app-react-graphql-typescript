import { gql } from '@apollo/client';

export const GET_SERIES = gql`
    query GetSeries($id: ID!) {
        series(id: $id) {
            id
            name
            overview
            backdrop_path
            vote_average
            vote_count
            created_by {
                id
                credit_id
                name
                gender
                profile_path
            }
            first_air_date
            next_episode_to_air {
                air_date
                episode_number
                id
                name
                overview
                production_code
                season_number
                still_path
                vote_average
                vote_count
            }
            last_episode_to_air {
                air_date
                episode_number
                id
                name
                overview
                production_code
                season_number
                still_path
                vote_average
                vote_count
            }
            original_language
            original_name
            in_production
            languages
            status
            tagline
            type
            last_air_date
            networks {
                name
                id
                logo_path
                origin_country
            }
            number_of_episodes
            number_of_seasons
            origin_country
            popularity
            poster_path
            production_companies {
                name
                id
                logo_path
                origin_country
            }
            seasons {
                id
                name
                overview
                poster_path
                season_number
                episode_count
                air_date
                seriesId
                episodes {
                    air_date
                    episode_number
                    id
                    name
                    overview
                    production_code
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
                    jobs {
                        credit_id
                        job
                        episode_count
                    }
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
                name
                overview
                poster_path
                backdrop_path
                popularity
                first_air_date
                vote_average
                vote_count
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
                vote_average
            }
        }
    }
`;
