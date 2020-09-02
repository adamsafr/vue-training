import Vue from 'vue';
import Vuex from 'vuex';
import { uuid } from '../utils';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [
      {
        id: uuid(),
        title: 'Card Title',
        description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        liked: false
      },
      {
        id: uuid(),
        title: 'Card Title 2',
        description: `2 Some quick example text to build on the card title and make up the bulk of the card's content.`,
        liked: false
      }
    ]
  },
  mutations: {
    ADD_CARD(state, { title, description }) {
      state.cards.push({
        id: uuid(),
        title,
        description,
        liked: false
      });
    }
  },
  actions: {},
  modules: {}
});
