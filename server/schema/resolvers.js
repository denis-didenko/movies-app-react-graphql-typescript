import { MovieQuery, MovieMutation, MovieResolvers } from './movie/index.js';
import { SeriesQuery, SeriesResolvers, SeasonResolvers, EpisodeResolvers } from './series/index.js';
import { PersonQuery, PersonResolvers } from './person/index.js';
import { CreditsResolvers } from './credits/index.js';
import { GenreQuery } from './genre/index.js';
import { SearchQuery, SearchResolvers } from './search/index.js';

export const resolvers = {
    Query: {
        ...MovieQuery,
        ...SeriesQuery,
        ...PersonQuery,
        ...GenreQuery,
        ...SearchQuery,
    },

    Mutation: {
        ...MovieMutation,
    },

    Movie: MovieResolvers,
    Series: SeriesResolvers,
    Season: SeasonResolvers,
    Episode: EpisodeResolvers,
    Cast: CreditsResolvers,
    Person: PersonResolvers,
    SearchResults: SearchResolvers,
};
