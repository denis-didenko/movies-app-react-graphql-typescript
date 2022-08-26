export const SearchQuery = {
    searchMovies: async (parent, args, { dataSources }) => {
        return await dataSources.movieAPI.searchMovies(args.query, args.page);
    },
};
