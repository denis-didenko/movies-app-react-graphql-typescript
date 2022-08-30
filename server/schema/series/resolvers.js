export const SeriesResolvers = {
    credits: (parent, args, { dataSources }) => dataSources.movieAPI.getCreditsTv(parent.id),
    reviews: (parent, args, { dataSources }) => dataSources.movieAPI.getReviewsTv(parent.id),
    recommendations: (parent, args, { dataSources }) => dataSources.movieAPI.getRecommendationsTv(parent.id),
    videos: (parent, args, { dataSources }) => dataSources.movieAPI.getVideosTv(parent.id),
    seasons: async (parent, args, { dataSources }) => {
        const seriesId = parent.id;
        const data = await dataSources.movieAPI.getSeasons(parent.id);
        // add seriesId ti each item data
        const mapped = data.map(item => {
            return {
                ...item,
                seriesId,
            };
        });

        return mapped;
    },
};

export const SeasonResolvers = {
    episodes: (parent, args, { dataSources }) => {
        return dataSources.movieAPI.getEpisodes(parent.seriesId, parent.season_number);
    },
};
