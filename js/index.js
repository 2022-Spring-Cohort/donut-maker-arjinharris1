class Shop {
  constructor() {
    this.count = 0;
    this.autoClickerCount = 0;
    this.autoClickerPrice = 100;
    this.donutsPerClick = 1;
    this.autoClickHits = 0;
    this.multiplierCount = 0;
    this.multiplierCountPrice = 100;
    this.autoClickerOff = true;
    this.multiplierOff = true;
  }

  makeDonut() {
    this.count += this.donutsPerClick;
  }
  getCount() {
    return Math.round(this.count);
  }
  getAutoClickerCount() {
    return this.autoClickerCount;
  }
  getAutoClickerPrice() {
    return Math.round(this.autoClickerPrice);
  }
  getMultiplierCount() {
    return this.multiplierCount;
  }
  getMultiplierCountPrice() {
    return Math.round(this.multiplierCountPrice);
  }
  getAutoClickHits() {
    return this.autoClickHits;
  }
  getAutoClickerOff() {
    return this.autoClickerOff;
  }
  getMultiplierOff() {
    return this.multiplierOff;
  }
  getDonutsPerClick() {
    return Math.round(this.donutsPerClick);
  }

  buyAutoClicker() {
    this.count -= this.autoClickerPrice;
    this.autoClickHits += 1;
    this.autoClickerPrice *= 1.1;
  }
  buyMultiplier() {
    this.multiplierCount += 1;
    this.count -= this.multiplierCountPrice;
    this.multiplierCountPrice *= 1.1;
    this.donutsPerClick = this.donutsPerClick * 1.2;
  }
  Reset() {
    this.count = 0;
    this.autoClickerCount = 0;
    this.autoClickerPrice = 100;
    this.donutsPerClick = 1;
    this.autoClickHits = 0;
    this.multiplierCount = 0;
    this.multiplierCountPrice = 100;
    this.autoClickerOff = true;
    this.multiplierOff = true;
    update();
  }
  buttonStatus() {
    if (this.autoClickerPrice <= this.count) {
      this.autoClickerOff = false;
    } else {
      this.autoClickerOff = true;
    }
    if (this.multiplierCountPrice <= this.count) {
      this.multiplierOff = false;
    } else {
      this.multiplierOff = true;
    }
  }
}
const DonutCountDisplay = document.getElementById("DonutCountBox");
const DonutMakerInput = document.getElementById("DonutMakerButton");
const AutoClickerCountDisplay = document.getElementById("autoClickerCountBox");
const BuyAutoClickerInput = document.getElementById("buyAutoClickerButton");
const AutoClickerPriceDisplay = document.getElementById("autoClickerPrice");
const MultiplierCountDisplay = document.getElementById("MultiplierCountBox");
const BuyMultiplierInput = document.getElementById("buyMultiplierButton");
const MultiplierPriceDisplay = document.getElementById("multiplierPrice");
const resetInput = document.getElementById("resetButton");

let shop = new Shop();

function update() {
  shop.buttonStatus();
  DonutCountDisplay.value = shop.getCount();
  AutoClickerCountDisplay.value = shop.getAutoClickHits();
  AutoClickerPriceDisplay.value = shop.getAutoClickerPrice();
  MultiplierCountDisplay.value = shop.getMultiplierCount();
  MultiplierPriceDisplay.value = shop.getMultiplierCountPrice();
  BuyMultiplierInput.disabled = shop.getMultiplierOff();
  BuyAutoClickerInput.disabled = shop.getAutoClickerOff();
}
update();

DonutMakerInput.addEventListener("click", function () {
  shop.makeDonut();
  update();
});
function StopAutoClicker() {
  clearInterval(a);
}
BuyAutoClickerInput.addEventListener("click", function () {
  shop.buyAutoClicker();
  let r = shop.getAutoClickHits();
  let seconds = 1000 / r;
  var a = setInterval(makeAutoClickDonut, seconds);
  function makeAutoClickDonut() {
    shop.makeDonut();
    update();
  }
});
BuyMultiplierInput.addEventListener("click", function () {
  shop.buyMultiplier();
  update();
});

resetInput.addEventListener("click", function () {
  location.reload();
});
