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
    genres: async (parent, args, { dataSources }) => {
        return await dataSources.movieAPI.getGenres();
    },
    discoverMovies: async (parent, { sortBy, genreId }, { dataSources }) => {
        return await dataSources.movieAPI.getDiscoverMovies({ sortBy, genreId });
    },
};
