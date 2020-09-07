import Vue from 'vue';
import Vuex from 'vuex';
import { uuid, saveStatePlugin } from '../utils';
import defaultCards from '../defaultCards';
import {
  ADD_CARD,
  UPDATE_CARD,
  TOGGLE_CARD_LIKE,
  DELETE_CARD
} from './mutation-types';

Vue.use(Vuex);

const cards = JSON.parse(localStorage.getItem('cards')) || defaultCards;

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    cards
  },
  mutations: {
    [ADD_CARD](state, { title, description }) {
      state.cards.push({
        uuid: uuid(),
        title,
        description,
        createdAt: new Date(),
        liked: false
      });
    },
    [UPDATE_CARD](state, { uuid, title, description }) {
      const index = state.cards.findIndex(card => card.uuid === uuid);

      if (index !== -1) {
        state.cards[index].title = title;
        state.cards[index].description = description;
      }
    },
    [TOGGLE_CARD_LIKE](state, { uuid }) {
      for (const card of state.cards) {
        if (card.uuid === uuid) {
          card.liked = !card.liked;
        }
      }
    },
    [DELETE_CARD](state, { uuid }) {
      const index = state.cards.findIndex(card => card.uuid === uuid);

      if (index !== -1) {
        state.cards.splice(index, 1);
      }
    }
  },
  actions: {},
  modules: {},
  getters: {
    getCard: state => uuid => {
      for (const card of state.cards) {
        if (card.uuid === uuid) {
          return card;
        }
      }

      return null;
    }
  }
});
