import Vue from 'vue';
import Vuex from 'vuex';
import { uuid, saveStatePlugin, normalizeStateData } from '@/utils';
import defaultCards from '@/defaultCards';
import {
  ADD_CARD,
  UPDATE_CARD,
  TOGGLE_CARD_LIKE,
  DELETE_CARD
} from './mutation-types';

Vue.use(Vuex);

const normalized =
  JSON.parse(localStorage.getItem('stateData')) ||
  normalizeStateData(defaultCards);

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    ...normalized
  },
  mutations: {
    [ADD_CARD](state, { title, description }) {
      const card = {
        uuid: uuid(),
        title,
        description,
        createdAt: new Date().toISOString(),
        liked: false
      };

      Vue.set(state.cardsById, card.uuid, card);
      state.cardIds.push(card.uuid);
    },
    [UPDATE_CARD](state, { uuid, title, description }) {
      state.cardsById[uuid].title = title;
      state.cardsById[uuid].description = description;
    },
    [TOGGLE_CARD_LIKE](state, { uuid }) {
      state.cardsById[uuid].liked = !state.cardsById[uuid].liked;
    },
    [DELETE_CARD](state, { uuid }) {
      Vue.delete(state.cardsById, uuid);

      const index = state.cardIds.findIndex(value => value === uuid);

      if (index !== -1) {
        state.cardIds.splice(index, 1);
      }
    }
  },
  actions: {},
  modules: {},
  getters: {
    cards: state => state.cardIds.map(uuid => state.cardsById[uuid]),
    getCard: state => uuid => state.cardsById[uuid]
  }
});
