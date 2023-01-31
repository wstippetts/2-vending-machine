import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Treat } from "./Models/Treat.js";
import { loadState } from "./Utils/Store.js";

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Treat').Treat[]} */

  treats = [

    new Treat({
      type: 'powder',
      quantity: 100,
      price: 225.00,
      pic: 'https://woodlandfoods.com/img/WF_Images/H405-confectioner-powdered-sugar-powder-main.jpg'
    }),
    new Treat(
      {
        type: 'coke',
        quantity: 50,
        price: 25.90,
        pic: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.nestleprofessional.co.uk%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fnp_article_big%2Fpublic%2F2022-08%2Fwhat%2520is%2520sugar.jpg%3Fh%3D2d44e782%26itok%3DSEul79is&imgrefurl=https%3A%2F%2Fwww.nestleprofessional.co.uk%2Fnews%2Fnutrition%2Fwhat-is-sugar&tbnid=BgCxMBRQISODQM&vet=12ahUKEwjXt_Os8vL8AhUtATQIHSBTCB4QMyhOegUIARC5Ag..i&docid=qBLMOZIOdlKBdM&w=1440&h=810&q=sugar&ved=2ahUKEwjXt_Os8vL8AhUtATQIHSBTCB4QMyhOegUIARC5Ag'
      }
    ),
    new Treat(
      {
        type: 'acid',
        quantity: 75,
        price: 75,
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqc4BsfXqvOsNL_vlL84NUbHLYJt2bEYz1Nw&usqp=CAU'
      }
    )

  ]

  /** @type {import('./Models/Treat').Treat[]} */
  myTreats = loadState('myTreat', [Treat])


  money = 0


}



export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
