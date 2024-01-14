import { Ui } from "./ui.js";
export let response = {};


let mainPage = document.getElementById('main') 
let detailSec = document.getElementById('detailSec') 
let closeBtn = document.getElementById('btn') 

let ui ;


export class Details{
    async  getDetails(gameId) {
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'd972287d16msh33d194a96dac1a0p17bde3jsnb2ec3ef92de3',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
        };
      
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
        response = await api.json();
        console.log(response);

        ui = ui || new Ui();

        ui.displayDetails(response);
      }

        Close(){
        closeBtn.addEventListener('click' , function(){
          mainPage.classList.replace('d-none','d-block')
          detailSec.classList.add( 'd-none')
        
        })
        }
         async  goToDetailsPage(gameId) {
          await this.getDetails(gameId);
        
          mainPage.classList.add('d-none')
          detailSec.classList.remove('d-none')
        
        }
}





