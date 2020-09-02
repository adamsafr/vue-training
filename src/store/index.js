import Vue from 'vue';
import Vuex from 'vuex';
import { uuid } from '../utils';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [
      {
        uuid: uuid(),
        title: 'Card Title',
        description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        createdAt: new Date(),
        liked: false
      },
      {
        uuid: uuid(),
        title: 'Card Title 2',
        description: `2 Some quick example text to build on the card title and make up the bulk of the card's content.`,
        createdAt: new Date(),
        liked: false
      }
    ]
  },
  mutations: {
    ADD_CARD(state, { title, description }) {
      state.cards.push({
        uuid: uuid(),
        title,
        description,
        createdAt: new Date(),
        liked: false
      });
    },
    UPDATE_CARD(state, { uuid, title, description }) {
      const index = state.cards.findIndex(card => card.uuid === uuid);

      if (index !== -1) {
        state.cards[index].title = title;
        state.cards[index].description = description;
      }
    },
    TOGGLE_CARD_LIKE(state, { uuid }) {
      for (const card of state.cards) {
        if (card.uuid === uuid) {
          card.liked = !card.liked;
        }
      }
    },
    DELETE_CARD(state, { uuid }) {
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
