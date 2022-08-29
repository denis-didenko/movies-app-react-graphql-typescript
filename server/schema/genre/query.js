export const GenreQuery = {
    genres: async (parent, args, { dataSources }) => {
        return await dataSources.movieAPI.getGenres();
    },
    genresSeries: async (parent, args, { dataSources }) => {
        return await dataSources.movieAPI.getGenresSeries();
    },
};
