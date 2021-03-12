import axios from 'axios';

const key = '19732085-0a6dcdc0e90ef399881a67a68';
export default function getApp(search, page) {
  return axios
    .get(
      `https://pixabay.com/api/?q=${search}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data);
}
