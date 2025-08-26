import restaurantImg from "./images/pexels-reneterp-1581384.jpg";

export function renderHomePage(container) {
    container.innerHTML = `<h1>Home</h1>
    <h2>My restaurant</h2>
    <p>Welcome to my restaurant website! Come give us a try any time, any day!</p>
    <div class="restaurant-img">
    <img src="${restaurantImg}" alt="Cozy restaurant" />
    </div>
    <p>Come enjoy our cozy atmosphere and tasty food!
    <div class="photo-credits">
      <h2>Photo Credits</h2>
      <ul>
      <li>Rene Terp - <a href="https://www.pexels.com/photo/restaurant-table-and-chairs-1581384/" target="_blank">Restaurant</a></li>
      </ul>
    </div>`
}