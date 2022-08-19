export const MovieQuery = {
    movie: async (parent, { id }, { dataSources }) => {
        return await dataSources.movieAPI.getMovie(id);
    },
    upcomingMovies: async (parent, args, { dataSources }) => {
        return await dataSources.movieAPI.getUpcoming();
    },
};
