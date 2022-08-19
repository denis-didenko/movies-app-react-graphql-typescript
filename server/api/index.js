import { HTTPCache, RESTDataSource } from 'apollo-datasource-rest';

const API_KEY = '9b04d7aad3c2ae56f965c2c9a5141ada';

export class MovieAPI extends RESTDataSource {
    constructor() {
        super();
        this.httpCache = new HTTPCache();

        this.baseURL = 'https://api.themoviedb.org/3';
    }

    async getMovie(id) {
        return this.get(`/movie/${id}?api_key=${API_KEY}`);
    }

    async getCasts(id) {
        return this.get(`/casts/${id}?api_key=${API_KEY}`);
    }
    async getReviews(id) {
        return this.get(`/reviews/${id}?api_key=${API_KEY}`);
    }
    async getRecommendations(id) {
        return this.get(`/recommendations/${id}?api_key=${API_KEY}`);
    }
    async getUpcoming() {
        const data = await this.get(`/movie/upcoming?api_key=${API_KEY}`);

        return data.results;
    }
}

new MovieAPI();
