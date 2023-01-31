import axios from 'axios';

export let page = 1;
export let totalPages = 0;

let limit = 40;
let total = 0;

export async function fetchCards(query) {
  const response = await axios({
    method: 'get',
    url: `https://pixabay.com/api/?key=33173109-7f033f41c702edaff07185b5d&q=${query}&page=1&per_page=${limit}&image_type=photo&orientation=horizontal&safesearch=true`,
  });
  total = response.data.totalHits;
  totalPages = Math.ceil(total / limit);

  return response.data;
}

export async function moreFetchCards(query) {
  const response = await axios({
    method: 'get',
    url: `https://pixabay.com/api/?key=33173109-7f033f41c702edaff07185b5d&q=${query}&page=${page}&per_page=${limit}&image_type=photo&orientation=horizontal&safesearch=true`,
  });
  page += 1;
  return response.data;
}
