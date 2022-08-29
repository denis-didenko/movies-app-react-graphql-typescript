export const SeriesTypes = `
    extend type Query {
        series(id: ID!): Series
        discoverSeries(input: DiscoverSeriesInput): MoviesResponse!
    }

    type Series {
        id: ID!
        name: String
        overview: String
        backdrop_path: String
        vote_average: Float
        created_by: [Person!]
        first_air_date: String
        in_production: Boolean
        languages: [String!]
        last_air_date: String
        number_of_episodes: Int
        number_of_seasons: Int
        origin_country: [String!]
        popularity: Float
        poster_path: String
        seasons: [Season!]
        genres: [Genre!]
        credits: Credits
        reviews: [Review]!
        recommendations: [Series]!
        videos: [Video]!
    }

    type Season {
        id: ID!
        air_date: String
        episode_count: Int
        name: String
        overview: String
        poster_path: String
        season_number: Int
    }

    input DiscoverSeriesInput {
        sortBy: String!
        genreId: ID!
        page: Int!
        year: String!
        language: String!
    }
`;
