export const SearchTypes = `
    extend type Query {
        searchMovies(query: String!, page: Int): MoviesResponse
    }
`;
