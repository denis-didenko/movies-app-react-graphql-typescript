export const PersonResolvers = {
    cast: (parent, args, { dataSources }) => dataSources.movieAPI.getPersonCombinedCredits(parent.id),
};
