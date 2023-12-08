import post_2 from './modules/post';
import { createStore } from 'vuex'

const store = createStore({
  modules: {
    post:post_2,
  }
});

export default store;
