import { burgers } from "./data.js";

const burgersWrapper = document.querySelector(".burgers-card-wrapper");

class App {
  constructor() {
    this._getBurgerData();
  }
  _getBurgerData() {
    burgers.forEach((burger) => this._renderBurger(burger));
  }
  _currencyConvert(amount) {
    // console.log(amount);
    return amount.toLocaleString("bn-BD", {
      style: "currency",
      currency: "BDT",
    });
  }
  _renderBurger(burger) {
    const html = `<div
    class="burger-card rounded-lg shadow-md overflow-hidden w-80 bg-white"
  >
    <div
      class="burger-img h-48 overflow-hidden flex justify-center items-center"
    >
      <img
        src=${burger.img}
        alt=${burger.title}
        class="block w-full"
      />
    </div>
    <div class="burger-texts p-5 flex flex-col items-start gap-2">
      <h2 class="text-2xl font-semibold">${burger.title}</h2>
      <p class="text-xl font-semibold text-orange-500">${this._currencyConvert(
        burger.price
      )}</p>
      <button ${(onclick = this._orderHandler.bind(this))} 
        class=" order bg-orange-500 text-white py-2 px-4 rounded-md uppercase font-semibold mt-2 hover:bg-gray-700 duration-300"
      >
        Order now
      </button>
    </div>
  </div>`;
    burgersWrapper.insertAdjacentHTML("afterbegin", html);
  }

  _orderHandler() {
    console.log("clicked");
  }
}
const myApp = new App();
