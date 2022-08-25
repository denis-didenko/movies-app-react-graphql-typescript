export const MovieResolvers = {
    casts: (parent, args, { dataSources }) => dataSources.movieAPI.getCasts(parent.id),
    reviews: (parent, args, { dataSources }) => dataSources.movieAPI.getReviews(parent.id),
    recommendations: (parent, args, { dataSources }) => dataSources.movieAPI.getRecommendations(parent.id),
};

export const CastResolvers = {
    person: (parent, args, { dataSources }) => dataSources.movieAPI.getPerson(parent.id),
};

export const PersonResolvers = {
    cast: (parent, args, { dataSources }) => dataSources.movieAPI.getCombinedCredits(parent.id),
};
