
export class Treat {


  constructor(data) {
    this.type = data.type
    this.quantity = data.quantity
    this.price = data.price
    this.pic = data.pic
  }
  get ListTemplate() {
    return `
<div class="col-1 p-1 fs-1 list-gachamon selectable text-center" title="${this.type}" onclick="app.VendingService.dispenseItem('${this.type}')">
<img class = "pic" src="${this.pic}" alt="">
        
    </div>
    `
  }



}
