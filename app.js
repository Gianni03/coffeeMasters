import Store from "./services/Store.js";
import API from "./services/API.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

// link web component
import { MenuPage } from "./components/MenuPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { OrderPage } from "./components/OrderPage.js";



window.app = {}
app.store = Store;
app.router = Router;


window.addEventListener("DOMContentLoaded", async () => {
  console.log("DOM is ready");
  loadData();
  app.router.init();
}); // DOMContentLoaded is an event that fires when the DOM is ready

const $ = function(args){ return document.querySelector(args);} // $ is a function that returns the first element that matches the selector(s) passed in
const $$ = function(args){ return document.querySelectorAll(args);} // $$ is a function that returns all elements that match the selector(s) passed in

HTMLElement.prototype.on = function(a, b, c){ return this.addEventListener(a, b, c); } // on is a function that adds an event listener to the element
HTMLElement.prototype.off = function(a, b){ return this.removeEventListener(a, b); } // off is a function that removes an event listener from the element
HTMLElement.prototype.$ = function(s){ return this.querySelector(s); } // $ is a function that returns the first element that matches the selector(s) passed in
HTMLElement.prototype.$$ = function(s){ return this.querySelectorAll(s); } // $$ is a function that returns all elements that match the selector(s) passed in

