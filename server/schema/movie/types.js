export const MovieTypes = `
    extend type Query {
        movie(id: ID!): Movie
        genres: [Genre!]!
        upcomingMovies: [Movie!]!
        nowPlayingMovies: [Movie!]!
        discoverMovies(sortBy: String!, genreId: ID!, page: Int!): [Movie!]!
    }

    extend type Mutation {
        movieCreate(input: MovieCreateInput!): Movie
    }

    type Movie {
        id: ID!
        title: String
        overview: String!
        release_date: String
        poster_path: String
        backdrop_path: String
        vote_average: Float!
        runtime: Int
        homepage: String
        genres: [Genre!]
        casts: [Cast]!
        reviews: [Review]!
        recommendations: [Movie]!
    }

    input MovieCreateInput {
        title: String!
        overview: String!
        release_date: String!
        poster_path: String!
    }
`;
