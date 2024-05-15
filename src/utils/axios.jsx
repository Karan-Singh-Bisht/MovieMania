import axios from 'axios';

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWJjNjA3YjQxNzgzMmE5YzllNjgwYjk2MDY0MDZjNiIsInN1YiI6IjY2NDM0ZjA1YzlhODVhYmZiODE4NGIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.am75WirEWc6YgshO2gr7wPvagG5jDW1ef2KT9CFsFUg'
      }
});

export default instance;