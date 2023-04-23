
const PerformanceCalculator=(runs,balls)=>{
      // Write the Logic here
      if(runs >100 && balls < 50){
            return (runs/balls) *1.2
      }else if(runs > 50 && balls < 20){
            return (runs/balls) * 1.1
      }else if(runs > 30 && balls < 15){
            return (runs/balls) * 1.01
      }else{
            return runs/balls
      }
}

module.exports={PerformanceCalculator}
