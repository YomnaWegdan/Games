import { Details } from "./details.js";
import { Games  } from "./games.js";
 
let game = new Games()
let detail = new Details()

let links = document.querySelectorAll('.nav-link');
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function (e) {
    let items = e.target.innerHTML;
    console.log(e.target.innerHTML);
    game.getGames(items);
  });
}

game.getGames('mmorpg');
detail.getDetails(452);



game.Scroll();

detail.Close()


let navLinks = document.querySelectorAll('.nav-link');

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function (e) {
        for (let j = 0; j < navLinks.length; j++) {
            navLinks[j].classList.remove('active');
        }
        e.target.classList.add('active');
    });
}















