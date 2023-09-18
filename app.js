import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';

// link web component
import { MenuPage } from './components/MenuPage.js';
import { DetailsPage } from './components/DetailsPage.js';
import { OrderPage } from './components/OrderPage.js';
import ProductItem from './components/ProductItem.js';
import CartItem from './components/CartItem.js';

window.app = {};
app.store = Store;
app.router = Router;

customElements.define('order-page', OrderPage);
customElements.define('cart-item', CartItem);
customElements.define('details-page', DetailsPage);
customElements.define('menu-page', MenuPage);
customElements.define('product-item', ProductItem);

window.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM is ready');
  loadData();
  app.router.init();
}); // DOMContentLoaded is an event that fires when the DOM is ready

window.addEventListener('appcartchanges', (event) => {
  const badge = document.getElementById('badge');
  const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
  badge.textContent = qty;
  badge.hidden = qty == 0;
});

const $ = function (args) {
  return document.querySelector(args);
}; // $ is a function that returns the first element that matches the selector(s) passed in
const $$ = function (args) {
  return document.querySelectorAll(args);
}; // $$ is a function that returns all elements that match the selector(s) passed in

HTMLElement.prototype.on = function (a, b, c) {
  return this.addEventListener(a, b, c);
}; // on is a function that adds an event listener to the element
HTMLElement.prototype.off = function (a, b) {
  return this.removeEventListener(a, b);
}; // off is a function that removes an event listener from the element
HTMLElement.prototype.$ = function (s) {
  return this.querySelector(s);
}; // $ is a function that returns the first element that matches the selector(s) passed in
HTMLElement.prototype.$$ = function (s) {
  return this.querySelectorAll(s);
}; // $$ is a function that returns all elements that match the selector(s) passed in
