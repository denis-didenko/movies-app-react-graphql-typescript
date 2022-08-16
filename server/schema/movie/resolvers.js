export const MovieResolvers = {
    // here we only write a resolver for reviews and apollo server will create a default
    // resolver for other fields.
    casts: (parent, args, { dataSources }) => dataSources.movieAPI.getCasts(parent.id),
    reviews: (parent, args, { dataSources }) => dataSources.movieAPI.getReviews(parent.id),
    recommendations: (parent, args, { dataSources }) => dataSources.movieAPI.getRecommendations(parent.id),
};
