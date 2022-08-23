export const MovieTypes = `
    extend type Query {
        movie(id: ID!): Movie
        upcomingMovies: [Movie!]!
        nowPlayingMovies: [Movie!]!
        genres: [Genre!]!
        discoverMovies(sortBy: String!, genreId: ID!, page: Int!): [Movie!]!
    }

    extend type Mutation {
        movieCreate(input: MovieCreateInput!): Movie
    }

    type Movie {
        id: ID!
        title: String!
        overview: String!
        release_date: String!
        poster_path: String
        backdrop_path: String!
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

    type Cast {
        id: ID!
        name: String!
        character: String!
        profile_path: String!
        known_for_department: String!
    }

    type Review {
        id: ID!
        author_details: ReviewAuthor!
        content: String!
        created_at: String!
    }

    type ReviewAuthor {
        username: String!
        avatar_path: String!
    }

    type Genre {
        id: ID!
        name: String!
    }
`;
