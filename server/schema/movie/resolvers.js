export const MovieResolvers = {
    credits: (parent, args, { dataSources }) => dataSources.movieAPI.getCredits(parent.id),
    reviews: (parent, args, { dataSources }) => dataSources.movieAPI.getReviews(parent.id),
    recommendations: (parent, args, { dataSources }) => dataSources.movieAPI.getRecommendations(parent.id),
    videos: (parent, args, { dataSources }) => dataSources.movieAPI.getVideos(parent.id),
};
