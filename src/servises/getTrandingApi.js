import axios from 'axios';

const config = {
  url: '/trending/movie/week',
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'd25f4bafb23ed52a1b37f720b33b26cb',
  },
};

export const getTrandingApi = async () => {
  const response = await axios(config);
  return response.data.results;
};
