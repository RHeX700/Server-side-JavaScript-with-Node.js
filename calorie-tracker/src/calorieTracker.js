const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{
   let weightLostInAMonth = 0;
   cycling= parseInt(cycling)
   running= parseInt(running)
   swimming= parseInt(swimming)
   extraCalorieInTake= parseInt(extraCalorieInTake)

   if(cycling <= 0 || running <= 0 || swimming <= 0 || extraCalorieInTake <= 0){
      return -1
   }

   // write logic here 
   let monthlyCalorieLoss= ((cycling * 2) + (running * 2) + (swimming * 2))*4 - extraCalorieInTake * 30
   weightLostInAMonth= monthlyCalorieLoss/1000

   return weightLostInAMonth;
   
}

module.exports = calculateWeightLostInAMonth

