export const SeriesTypes = `
    extend type Query {
        series(id: ID!): Series
        discoverSeries(input: DiscoverSeriesInput): SeriesResponse!
    }

    type Series {
        id: ID!
        name: String
        overview: String
        backdrop_path: String
        homepage: String
        vote_average: Float
        vote_count: Int
        created_by: [Creator!]
        first_air_date: String
        next_episode_to_air: Episode
        last_episode_to_air: Episode
        original_language: String
        original_name: String
        in_production: Boolean
        production_companies: [ProductionCompany!]
        status: String
        tagline: String
        type: String
        languages: [String!]
        networks: [Network]
        last_air_date: String
        number_of_episodes: Int
        number_of_seasons: Int
        origin_country: [String!]
        popularity: Float
        poster_path: String
        seasons: [Season!]
        genres: [Genre!]
        credits: CreditsTv
        reviews: [Review]!
        recommendations: [Series]!
        videos: [Video]!
    }

    type SeriesResponse {
        page: Int!
        total_results: Int!
        total_pages: Int!
        results: [Series!]!
    }

    type Season {
        id: ID!
        air_date: String
        episode_count: Int
        name: String
        overview: String
        poster_path: String
        season_number: Int   
        episodes: [Episode]
        seriesId: ID!
    }

    type Creator {
        id: ID!
        credit_id: String
        name: String
        gender: Int
        profile_path: String
    }

    type Network {
        name: String
        id: Int
        logo_path: String
        origin_country: String
    }

    type Episode {
        air_date: String
        episode_number: Int
        id: Int
        name: String
        overview: String
        production_code: String
        season_number: Int
        still_path: String
        vote_average: Float
        vote_count: Int
    }

    input DiscoverSeriesInput {
        sortBy: String!
        genreId: ID!
        page: Int!
        year: String!
        network: String!
        language: String!
    }
`;
