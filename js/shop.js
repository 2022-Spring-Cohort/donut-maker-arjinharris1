class donutShop{
    constructor(){
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
  
    makeDonut(){
     
        this.count += this.donutsPerClick;
        
    }
    getCount(){
        return Math.round(this.count);
    }
    getAutoClickerCount(){
        return this.autoClickerCount;
    }
    getAutoClickerPrice(){
        return Math.round(this.autoClickerPrice);
    }
    getMultiplierCount(){
      return this.multiplierCount;
    }
    getMultiplierCountPrice(){
      return Math.round(this.multiplierCountPrice);
    }
    getAutoClickHits(){
      return this.autoClickHits;
    }
    getAutoClickerOff(){
      return this.autoClickerOff;
    }
    getMultiplierOff(){
      return this.multiplierOff;
    }
    getDonutsPerClick(){
      return Math.round(this.donutsPerClick);
    }
   
    buyAutoClicker(){
     
      this.count -= this.autoClickerPrice;
      this.autoClickHits += 1;
      this.autoClickerPrice *= 1.1;
  
    }
    buyMultiplier(){
      this.multiplierCount += 1;
      this.count -= this.multiplierCountPrice;
      this.multiplierCountPrice *= 1.1;
      this.donutsPerClick = this.donutsPerClick*1.2; 
    }