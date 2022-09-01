export const SearchTypes = `
    extend type Query {
        searchMovies(query: String!, page: Int): MoviesResponse
        searchSeries(query: String!, page: Int): SeriesResponse
        searchPerson(query: String!, page: Int): PersonResponse
        searchMulti(query: String!, page: Int): SearchResponse
    }

    type SearchResponse {
        page: Int
        total_results: Int
        total_pages: Int
        results: [SearchResults]
    }

    union SearchResults = Movie | Series | Person
`;
