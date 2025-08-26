import pancakeImg from "./images/pexels-ash-craig.jpg";
import yogurtImg from "./images/pexels-janetrangdoan.jpg";
import macronImg from "./images/pexels-brigitte-tohm.jpg";
import coffeeImg from "./images/pexels-jayoke.jpg";

export function renderMenuPage(container) {
  container.innerHTML = `<h1>Menu Page</h1>
    <div class="menu-grid">
      <img src="${pancakeImg}" alt="Caramel pancakes" />
      <img src="${yogurtImg}" alt="Waffles" />
      <img src="${macronImg}" alt="Coffee" />
      <img src="${coffeeImg}" alt="Sandwich" />
    </div>
    <div class="photo-credits">
      <h2>Photo Credits</h2>
      <ul>
      <li>Brigitte Tohm — <a href="https://www.pexels.com/photo/french-macarons-in-bowl-239581/" target="_blank">Macarons</a></li>
      <li>Jane T. D. — <a href="https://www.pexels.com/photo/top-view-photo-of-food-dessert-1099680/" target="_blank">Dessert</a></li>
      <li>Ash Craig — <a href="https://www.pexels.com/photo/pancake-with-sliced-strawberry-376464/" target="_blank">Pancakes</a></li>
      <li>Jason Villanueva — <a href="https://www.pexels.com/photo/close-up-photography-of-cup-of-coffee-851555/" target="_blank">Coffee</a></li>
      </ul>
    </div>
  `;
}
