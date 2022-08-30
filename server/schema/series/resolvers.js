export const SeriesResolvers = {
    credits: (parent, args, { dataSources }) => dataSources.movieAPI.getCreditsTv(parent.id),
    reviews: (parent, args, { dataSources }) => dataSources.movieAPI.getReviewsTv(parent.id),
    recommendations: (parent, args, { dataSources }) => dataSources.movieAPI.getRecommendationsTv(parent.id),
    videos: (parent, args, { dataSources }) => dataSources.movieAPI.getVideosTv(parent.id),
    seasons: (parent, args, { dataSources }) => {
        const seasonId = parent.id;
        const data = dataSources.movieAPI.getSeasons(parent.id);

        return { ...data, seasonId };
    },
};

export const SeasonResolvers = {
    episodes: (parent, args, { dataSources }) => {
        console.log('parent: ', parent);

        dataSources.movieAPI.getEpisodes(parent.seasonId, parent.season_number);
    },
};
