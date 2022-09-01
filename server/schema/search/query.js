export const SearchQuery = {
    searchMovies: async (parent, { query, page }, { dataSources }) => {
        return await dataSources.movieAPI.searchMovies(query, page);
    },
    searchSeries: async (parent, { query, page }, { dataSources }) => {
        return await dataSources.movieAPI.searchSeries(query, page);
    },
    searchPerson: async (parent, { query, page }, { dataSources }) => {
        return await dataSources.movieAPI.searchPerson(query, page);
    },
    searchMulti: async (parent, { query, page }, { dataSources }) => {
        return await dataSources.movieAPI.searchMulti(query, page);
    },
};
