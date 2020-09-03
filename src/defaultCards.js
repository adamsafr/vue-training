import { uuid } from './utils';

export default [
  {
    uuid: uuid(),
    title: 'Card Title',
    description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    createdAt: '2020-09-02T11:55:00.000Z',
    liked: false
  },
  {
    uuid: uuid(),
    title: 'Card Title 2',
    description: `2 Some quick example text to build on the card title and make up the bulk of the card's content.`,
    createdAt: '2020-05-12T10:35:12.000Z',
    liked: false
  }
];
