import { HTTPCache, RESTDataSource } from 'apollo-datasource-rest';
import { config } from 'dotenv';
config();

const API_KEY = process.env.API_KEY;

export class MovieAPI extends RESTDataSource {
    constructor() {
        super();
        this.httpCache = new HTTPCache();

        this.baseURL = process.env.API_BASE_URL;
    }

    async getCredits(id) {
        return this.get(`/movie/${id}/credits?api_key=${API_KEY}&language=uk-UA`);
    }

    async getCreditsTv(id) {
        return this.get(`/tv/${id}/aggregate_credits?api_key=${API_KEY}&language=uk-UA`);
    }

    async getDiscoverMovies({ sortBy, genreId, year, language, company, provider, page }) {
        return await this.get(
            `/discover/movie?api_key=${API_KEY}&sort_by=${sortBy}&with_genres=${genreId}&page=${page}&primary_release_year=${year}&with_companies=${company}&with_watch_providers=${provider}&watch_region=US&with_original_language=${language}&language=uk-UA`
        );
    }

    async getDiscoverSeries({ sortBy, genreId, year, language, network, page }) {
        return await this.get(
            `/discover/tv?api_key=${API_KEY}&sort_by=${sortBy}&with_genres=${genreId}&page=${page}&first_air_date_year=${year}&with_networks=${network}&with_original_language=${language}&language=uk-UA`
        );
    }

    async getEpisodes(id, season) {
        const data = await this.get(`/tv/${id}/season/${season}?api_key=${API_KEY}&language=uk-UA`);

        return data.episodes;
    }

    async getEpisodeVideos(id, season, episode) {
        const data = await this.get(`/tv/${id}/season/${season}/episode/${episode}/videos?api_key=${API_KEY}`);

        return data.results;
    }

    async getGenres() {
        const data = await this.get(`/genre/movie/list?api_key=${API_KEY}&language=uk-UA`);

        return data.genres;
    }

    async getGenresTv() {
        const data = await this.get(`/genre/tv/list?api_key=${API_KEY}&language=uk-UA`);

        return data.genres;
    }

    async getMovie(id) {
        return this.get(`/movie/${id}?api_key=${API_KEY}&language=uk-UA`);
    }

    async getUpcoming(page) {
        return await this.get(`/movie/upcoming?api_key=${API_KEY}&page=${page}&language=uk-UA`);
    }

    async getNowPlaying(page) {
        return await this.get(`/movie/now_playing?api_key=${API_KEY}&page=${page}&language=uk-UA`);
    }

    async getPerson(id) {
        const data = await this.get(`/person/${id}?api_key=${API_KEY}&language=uk-UA`);

        return data;
    }

    async getPersonCombinedCredits(personId) {
        const data = await this.get(`/person/${personId}/combined_credits?api_key=${API_KEY}&language=uk-UA`);

        return data.cast;
    }

    async getRecommendations(id) {
        const data = await this.get(`/movie/${id}/recommendations?api_key=${API_KEY}&language=uk-UA`);

        return data.results;
    }

    async getRecommendationsTv(id) {
        const data = await this.get(`/tv/${id}/recommendations?api_key=${API_KEY}&language=uk-UA`);

        return data.results;
    }

    async getReviews(id) {
        const data = await this.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=uk-UA`);

        return data.results;
    }

    async getReviewsTv(id) {
        const data = await this.get(`/tv/${id}/reviews?api_key=${API_KEY}&language=uk-UA`);

        return data.results;
    }

    async getSeries(id) {
        return this.get(`/tv/${id}?api_key=${API_KEY}&language=uk-UA`);
    }

    async getSeasons(id) {
        const data = await this.get(`/tv/${id}?api_key=${API_KEY}&language=uk-UA`);

        return data.seasons;
    }

    async searchMovies(query, page) {
        return await this.get(`/search/movie?api_key=${API_KEY}&query=${query}&page=${page}&language=uk-UA`);
    }

    async searchSeries(query, page) {
        return await this.get(`/search/tv?api_key=${API_KEY}&query=${query}&page=${page}&language=uk-UA`);
    }

    async searchPerson(query, page) {
        return await this.get(`/search/person?api_key=${API_KEY}&query=${query}&page=${page}&language=uk-UA`);
    }

    async searchMulti(query, page) {
        const data = await this.get(`/search/multi?api_key=${API_KEY}&query=${query}&page=${page}&language=uk-UA`);

        return data;
    }

    async getVideos(id) {
        const data = await this.get(`/movie/${id}/videos?api_key=${API_KEY}&language=uk-UA`);
        const dataUS = await this.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);

        return data.results.length > 0 ? data.results : dataUS.results;
    }

    async getVideosTv(id) {
        const data = await this.get(`/tv/${id}/videos?api_key=${API_KEY}&language=uk-UA`);
        const dataUS = await this.get(`/tv/${id}/videos?api_key=${API_KEY}&language=en-US`);

        return data.results.length > 0 ? data.results : dataUS.results;
    }
}
