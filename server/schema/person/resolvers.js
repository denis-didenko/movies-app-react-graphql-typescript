export const PersonResolvers = {
    cast: (parent, args, { dataSources }) => dataSources.movieAPI.getCombinedCredits(parent.id),
};
