export const CastResolvers = {
    person: (parent, args, { dataSources }) => dataSources.movieAPI.getPerson(parent.id),
};
