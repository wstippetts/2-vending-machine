import { appState } from "../AppState.js";
import { VController } from "../Controllers/VController.js";
import { Treat } from "../Models/Treat.js";
import { saveState } from "../Utils/Store.js";


class VendingService {
  dispenseItem(name) {
    let findItem = appState.treats.find(item => name.type == item.type)
    if (appState.money >= findItem.price) {
      appState.money -= findItem.price
      appState.myTreats.push(findItem)

    }
  }

  addDollar(take = 1) {
    appState.money += take

  }

}

export const vendingService = new VendingService();