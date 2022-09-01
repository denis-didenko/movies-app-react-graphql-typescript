export const SeriesResolvers = {
    credits: (parent, args, { dataSources }) => dataSources.movieAPI.getCreditsTv(parent.id),
    reviews: (parent, args, { dataSources }) => dataSources.movieAPI.getReviewsTv(parent.id),
    recommendations: (parent, args, { dataSources }) => dataSources.movieAPI.getRecommendationsTv(parent.id),
    videos: (parent, args, { dataSources }) => dataSources.movieAPI.getVideosTv(parent.id),
    seasons: async (parent, args, { dataSources }) => {
        const data = await dataSources.movieAPI.getSeasons(parent.id);

        return data.map(item => {
            return {
                ...item,
                seriesId: parent.id,
            };
        });
    },
};

export const SeasonResolvers = {
    episodes: async (parent, args, { dataSources }) => {
        const data = await dataSources.movieAPI.getEpisodes(parent.seriesId, parent.season_number);

        return data.map(item => {
            return {
                ...item,
                seriesId: parent.seriesId,
            };
        });
    },
};

export const EpisodeResolvers = {
    videos: (parent, args, { dataSources }) => {
        return dataSources.movieAPI.getEpisodeVideos(parent.seriesId, parent.season_number, parent.episode_number);
    },
};
