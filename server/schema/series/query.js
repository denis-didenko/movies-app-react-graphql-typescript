export const SeriesQuery = {
    series: async (parent, { id }, { dataSources }) => {
        return await dataSources.movieAPI.getSeries(id);
    },
    discoverSeries: async (parent, { input }, { dataSources }) => {
        return await dataSources.movieAPI.getDiscoverSeries(input);
    },
};
