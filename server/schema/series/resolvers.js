export const SeriesResolvers = {
    credits: (parent, args, { dataSources }) => dataSources.movieAPI.getCreditsTv(parent.id),
    reviews: (parent, args, { dataSources }) => dataSources.movieAPI.getReviewsTv(parent.id),
    recommendations: (parent, args, { dataSources }) => dataSources.movieAPI.getRecommendationsTv(parent.id),
    videos: (parent, args, { dataSources }) => dataSources.movieAPI.getVideosTv(parent.id),
};
