export const CreditsResolvers = {
    person: (parent, args, { dataSources }) => dataSources.movieAPI.getPerson(parent.id),
};
