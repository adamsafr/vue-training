import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faHeart, faEdit, faPlusSquare, faGrinHearts } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTrashAlt, faHeart, faEdit, faPlusSquare, faGrinHearts);

Vue.component('font-awesome-icon', FontAwesomeIcon);
