
import { Ui } from "./ui.js";
export let arrayList = [];
let ui ;
export class Games{
    async  getGames(item) {
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'd972287d16msh33d194a96dac1a0p17bde3jsnb2ec3ef92de3',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
        };
      
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${item}`, options);
        arrayList = await api.json();
        console.log('arr', arrayList);
      
        ui = ui || new Ui();
        ui.displayGames();
      }
      
      
        Scroll(){
          let nav = document.getElementById('navbar')
      window.onscroll= function(e){if(scrollY > 210){
        nav.classList.add('fixed-top')
        nav.style.cssText = `  
        top: 30px;  
        `
      }
      
      else{
        nav.classList.remove('fixed-top')
        nav.style.cssText = `  
        top: 0;`
        }
      }
      }
}



