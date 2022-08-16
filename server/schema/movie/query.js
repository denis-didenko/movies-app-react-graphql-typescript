export const MovieQuery = {
    getMovie: async (parent, { id }, { dataSources }) => {
        return await dataSources.movieAPI.getMovie(id);
    },
};
