export const MovieQuery = {
    movie: async (parent, { id }, { dataSources }) => {
        return await dataSources.movieAPI.getMovie(id);
    },
    upcomingMovies: async (parent, args, { dataSources }) => {
        return await dataSources.movieAPI.getUpcoming();
    },
    nowPlayingMovies: async (parent, args, { dataSources }) => {
        return await dataSources.movieAPI.getNowPlaying();
    },
    discoverMovies: async (parent, { input }, { dataSources }) => {
        return await dataSources.movieAPI.getDiscoverMovies(input);
    },
};
