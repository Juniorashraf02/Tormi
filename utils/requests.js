const API_KEY = process.env.API_KEY

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        title: 'TopRated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchActionMovies: {
        title: 'ActionMovies',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    fetchComedyMovies: {
        title: 'ComedyMovies',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    fetchHorrorMovie:{
        title: 'HorrorMovie',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=50`,
    },
    fetchMystery: {
        title: 'mystery',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchScience: {
        title: 'science',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=98`,
    },
}