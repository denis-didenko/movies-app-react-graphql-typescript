export const MovieTypes = `
    extend type Query {
        movie(id: ID!): Movie
        upcomingMovies(page: Int): MoviesResponse!
        nowPlayingMovies(page: Int): MoviesResponse!
        discoverMovies(input: DiscoverMoviesInput): MoviesResponse!
    }

    extend type Mutation {
        movieCreate(input: MovieCreateInput!): Movie
    }

    type Movie {
        id: ID!
        title: String
        overview: String
        release_date: String
        poster_path: String
        backdrop_path: String
        vote_average: Float
        runtime: Int
        homepage: String
        popularity: Float
        genres: [Genre!]
        credits: Credits
        reviews: [Review]!
        recommendations: [Movie]!
        videos: [Video]!
    }

    type MoviesResponse {
        page: Int!
        total_results: Int!
        total_pages: Int!
        results: [Movie!]!
    }

    type Video {
        id: ID!
        key: String
        name: String
        site: String
        type: String
    }

    input DiscoverMoviesInput {
        sortBy: String!
        genreId: ID!
        page: Int!
        year: String!
        language: String!
    }

    input MovieCreateInput {
        title: String!
        overview: String!
        release_date: String!
        poster_path: String!
    }
`;
