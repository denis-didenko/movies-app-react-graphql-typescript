export const MovieResolvers = {
    casts: (parent, args, { dataSources }) => dataSources.movieAPI.getCasts(parent.id),
    reviews: (parent, args, { dataSources }) => dataSources.movieAPI.getReviews(parent.id),
    recommendations: (parent, args, { dataSources }) => dataSources.movieAPI.getRecommendations(parent.id),
};
