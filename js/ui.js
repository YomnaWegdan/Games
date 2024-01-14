import {Details } from "./details.js";
import { arrayList } from "./games.js";
let detail

let row = document.getElementById('Row');
let rowDetails = document.getElementById('rowDetails');
let boxDetails = '';

export class Ui{
constructor(){
  detail = new Details()
}
  // detail = new Details()

    displayGames() {
        let box = '';
      
        for (let i = 0; i < arrayList.length; i++) {
          const gameId = arrayList[i].id;
      
          box += `  
          <div class="card-items rounded-2 col-xl-3 col-md-6 p-2  ">
                <div class="card  h-100 bg-transparent text-white p-3 rounded-2 " data-game-id="${gameId}">
                  <img src=${arrayList[i].thumbnail} alt="...">
                  <div class="card-body p-0">
                  <div class='d-flex justify-content-between my-3'>
                    <h5 class="card-title">${arrayList[i].title}</h5>
                    <button class='btn bg-main py-0'>Free</button>
                    </div>
                    <p class="card-text text-center">${arrayList[i].short_description}</p>
                  </div>
                  <div class="card-footer d-flex justify-content-between p-0">
                    <span class='px-1 my-2 bg-secondary rounded-2 me-5  '>${arrayList[i].genre}</span>
                    <span class='px-1 my-2 bg-secondary rounded-2'>${arrayList[i].platform}</span>
                  </div>
                </div>
              </div>
          `;
        }
        row.innerHTML = box;
      
        const gameCards = document.querySelectorAll('.card');
        gameCards.forEach((card) => {
          card.addEventListener('click', () => {
            const clickedGameId = card.dataset.gameId;
            detail.goToDetailsPage(clickedGameId);
          });
        });
      }


      /****** */
    displayDetails(response) {
        if (rowDetails) {
          boxDetails = `  
                      <div class="col-lg-4 col-md-12 img ">
                          <img src=${response.thumbnail} alt="img-game" class="w-100  "/>
                      </div>
                      <div class=" col-lg-8 col-md-12 details w-50  ms-auto ">
                          <h3>Title:${response.title} </h3>
                          <h5>Category:       <span class="bg-light text-black-50 px-2 rounded-4 shadow">${response.genre}</span></h5>
                          <h5>Platform: <span class="bg-light text-black-50 px-2 rounded-4 shadow">${response.platform}</span></h5>
                          <h5>Status: <span class="bg-light text-black-50 px-2 rounded-4 shadow">${response.status}</span></h5>
                          <p >${response.description}</p>
                          <button class="btn border border-3"><a class='text-decoration-none text-white '  href=${response.game_url}>Show Game</a> </button>
                      </div>
          `;
          rowDetails.innerHTML = boxDetails;
        } else {
          console.error('Element with ID "rowDetails" not found.');
        }
      }
      

}









