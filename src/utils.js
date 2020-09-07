export function uuid() {
  return Math.random()
    .toString(16)
    .slice(2);
}

export function saveStatePlugin(store) {
  store.subscribe((mutation, state) => {
    localStorage.setItem('stateData', JSON.stringify({ ...state }));
  });
}

export function normalizeStateData(cards) {
  const cardIds = [];
  const cardsById = {};

  cards.forEach(card => {
    cardIds.push(card.uuid);
    cardsById[card.uuid] = card;
  });

  return {
    cardIds,
    cardsById
  };
}
