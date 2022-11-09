import axios from 'axios';

export class PixabayAPI {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '31150513-9b7f6125ef75933b7b2520949';
  OPTIONS = '&image_type=photo&orientation=horizontal&safesearch=true';

  constructor(keyword = null) {
    this.page = 1;
    this.keyword = keyword;
    this.per_page = 40;
  }

  fetchPhotos() {
    return axios.get(
      ` ${this.#BASE_URL}?key=${this.#API_KEY}&q=${this.keyword}${this.OPTIONS}&page=${this.page}&per_page=${this.per_page}`,
    );
  }
}