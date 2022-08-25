import { HTTPCache, RESTDataSource } from 'apollo-datasource-rest';

const API_KEY = '9b04d7aad3c2ae56f965c2c9a5141ada';

export class MovieAPI extends RESTDataSource {
    constructor() {
        super();
        this.httpCache = new HTTPCache();

        this.baseURL = 'https://api.themoviedb.org/3';
    }

    async getMovie(id) {
        return this.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
    }

    async getCasts(id) {
        const data = await this.get(`/movie/${id}/credits?api_key=${API_KEY}`);

        return data.cast;
    }
    async getReviews(id) {
        const data = await this.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`);

        return data.results;
    }
    async getRecommendations(id) {
        const data = await this.get(`/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US`);

        return data.results;
    }
    async getUpcoming() {
        const data = await this.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US`);

        return data.results;
    }
    async getNowPlaying() {
        const data = await this.get(`/movie/now_playing?api_key=${API_KEY}&language=en-US`);

        return data.results;
    }
    async getGenres() {
        const data = await this.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`);

        return data.genres;
    }
    async getDiscoverMovies({ sortBy, genreId, page }) {
        const data = await this.get(
            `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sortBy}&with_genres=${genreId}&page=${page}`
        );

        return data.results;
    }

    async getPerson(id) {
        const data = await this.get(`/person/${id}?api_key=${API_KEY}&language=en-US`);

        return data;
    }

    async getCombinedCredits(personId) {
        const data = await this.get(`/person/${personId}/combined_credits?api_key=${API_KEY}&language=en-US`);

        return data.cast;
    }
}
