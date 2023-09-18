const Router = {
  init: () => {
    document.querySelectorAll('a.navlink').forEach((a) => {
      a.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('link clicked');
        // const url = a.getAttribute("href"); // var a in this scope is closure for the a in the forEach callback
        const url = event.target.getAttribute('href'); // event.target is the element that was clicked
        Router.go(url);
      });
    });
    // event handler for url changes (back/forward buttons)
    window.addEventListener('popstate', (event) => {
      Router.go(event.state.route, false);
    });

    // check initial route
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`going to: ${route}`);

    if (addToHistory) {
      history.pushState({ route }, '', route);
    }
    let pageElement = null;
    switch (route) {
      case '/':
        pageElement = document.createElement('menu-page');
        break;
      case '/order':
        pageElement = document.createElement('order-page');
        break;
      default:
        if (route.startsWith("/product-")){
          pageElement = document.createElement('details-page');
          const paramId = route.substring(route.lastIndexOf("-")+1);
          pageElement.dataset.productId = paramId;
        }
    }

    if (pageElement) {
      document.querySelector('main').innerHTML = ''; // clear main de forma rapida y "sucia"
      // const cache = document.querySelector('main');
      // cache.innerHTML = '';
      // document.querySelector('main').children[0].remove();
      document.querySelector('main').appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    } else {
      document.querySelector('main').innerHTML = '404';
    }
  },
};
export default Router;
