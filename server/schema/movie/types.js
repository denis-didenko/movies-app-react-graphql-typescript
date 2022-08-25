export const MovieTypes = `
    extend type Query {
        movie(id: ID!): Movie
        person(id: ID!): Person
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

    type Cast {
        id: ID!
        name: String!
        character: String!
        profile_path: String
        known_for_department: String!
        person: Person!
    }

    type Person {
        id: ID!
        name: String!
        biography: String!
        birthday: String
        deathday: String
        place_of_birth: String
        profile_path: String
        cast: [Movie!]!
    }

    type Review {
        id: ID!
        author_details: ReviewAuthor!
        content: String!
        created_at: String!
    }

    type ReviewAuthor {
        username: String!
        avatar_path: String
    }

    type Genre {
        id: ID!
        name: String!
    }

    input MovieCreateInput {
        title: String!
        overview: String!
        release_date: String!
        poster_path: String!
    }
`;
