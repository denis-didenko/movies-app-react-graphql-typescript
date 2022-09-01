export const SearchResolvers = {
    __resolveType(obj, context, info) {
        switch (obj.media_type) {
            case 'movie':
                return info.schema.getType('Movie');
            case 'tv':
                return info.schema.getType('Series');
            case 'person':
                return info.schema.getType('Person');
            default:
                return null;
        }
    },
};
