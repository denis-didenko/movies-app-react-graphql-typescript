export const SearchQuery = {
    searchMovies: async (parent, { query, page }, { dataSources }) => {
        return await dataSources.movieAPI.searchMovies(query, page);
    },
};
