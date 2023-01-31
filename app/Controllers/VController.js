import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { vendingService } from "../Services/VendingService.js";
import { setHTML } from "../Utils/Writer.js";
import { Treat } from "../Models/Treat.js";


function _drawMoney() {
  let cash = appState.money

  let template = `
  <div class="col-3 fs-1 card text-center">
    You have "${cash.toFixed(2)}" dollars
  </div>
  `
  setHTML('cash', template)
}

function _drawMachine() {
  let Treats = appState.treats
  let template = ''
  Treats.forEach(item => template += item.ListTemplate)
  setHTML('treats', template)
}

function _drawBasket() {
  let myItems = appState.myTreats
  let template = ''
  myItems.forEach(item => template += item.ListTemplate)

}

export class VController {
  constructor() {
    _drawMoney()
    _drawMachine()
    _drawBasket()
    appState.on('money', _drawMoney)
    console.log(appState.money);



  }
  addMoney(amount) {
    vendingService.addDollar(amount)
  }

}
