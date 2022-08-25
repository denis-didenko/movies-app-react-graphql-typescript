export const PersonQuery = {
    person: async (parent, { id }, { dataSources }) => {
        return await dataSources.movieAPI.getPerson(id);
    },
};
