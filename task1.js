///////////////Day 1 Task///////////////

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight =1.95;
// const BMIMark = markMass/markHeight**2
// const BMIJohn = johnMass/(johnHeight*johnHeight)
// const markHigherBmi = BMIMark>=BMIJohn
// console.log(BMIMark,BMIJohn,markHigherBmi)


// const markMass1 = 95;
// const markHeight1 = 1.88;
// const johnMass1 = 85;
// const johnHeight1 =1.76;
// const BMIMark1 = markMass1/markHeight1**2
// const BMIJohn1 = johnMass1/(johnHeight1*johnHeight1)
// const markHigherBmi1 = BMIMark1>=BMIJohn1
// console.log(BMIMark1,BMIJohn1,markHigherBmi1)



// // ////////////////Day 2 Task/////////////

// if (BMIMark>=BMIJohn) {
//     console.log(`Mark's BMI is higher than john's BMI`)
// } else {
//     console.log(`john's BMI is higher than mark's BMI`)
    
// }


// if (BMIMark>=BMIJohn) {
//     console.log(`Mark's BMI ${BMIMark} is higher than john's BMI ${BMIJohn}`)
// } else {
//     console.log(`john's BMI is higher than mark's BMI`)
    
// }




// ////////////////Day 3 Task type conversion---correcion---truthy & falsy value---equality operator ---logical operator////////////

// const dolphinScore = (88+91+110+109+95+123+109+95+106)/9 
// console.log(`dolphin avg score : ${dolphinScore}`)

// const koalaScore = (88+91+110+109+95+123+109+95+106)/9
// console.log(`koalas avg score : ${koalaScore}`)

// if(dolphinScore > 100 || koalaScore > 100){
//     if (koalaScore>dolphinScore)
//     {        
//         console.log(`The winner is koalas team`)   
//     } 
//     else if (koalaScore<dolphinScore)
//     {
//         console.log(`The winner is dolphin team`)
//     }
//     else{
//         console.log(`both Teams are equal`)
        
//     }
// }
// else{
//     console.log('no teams scored greater than 100')
// }



// //////////// DAY 4 termary operator & switch key ////////////////

// /////TASK 01//////////

// const day1 = 'monday'
// const day2 = 'tuesday'
// const day3 = 'wednesday'
// const day4 = 'thursday'
// const day5 = 'friday'
// const day6 = 'saturday'
// const day7 = 'sunday'

// let days ='day4'

// if (days === "day1")  
// {
//     console.log(`${day1} ---> plan the course structure`)
//     console.log(`prepare coding challenge`)}
    
//  else if (days === "day2")
// {
//     console.log(`${day2}--->go to coding`)
// }
// else if(days === "day3")
// {
//     console.log(`${day3}--->write code with example`)
    
// }
// else if (days==="day4")
// {
//     console.log(`${day4}--->write code with example`)
// }
// else if (days === "day5")
// {
//     console.log(`${day5}--->need to complete topic`)
// }
// else if (days === "day6")
//     {
//         console.log(`${day6}--->enjoy the weekend`)
//     }
//     else if (days==="day7")
//     {
//         console.log(`${days7}--->enjoy the weekend`)
//     }
// else{
//     console.log(`not a valid days`)
// }
    
/////TASK 02//////

// const bill1 = 275
// const bill2 = 40
// const bill3 = 430
// const tip1 = 15/100
// const tip2 = 20/100

// const billValue1 = bill3
// console.log(`the bill was ${billValue1}`)
// let tip = (bill3>=50 && bill3<=300)? bill3*(tip1) : bill*(tip2)
// console.log(`the tip was ${tip}`)
// let total = billValue1 + tip
// console.log(`the total value is ${total}`)



///////////DAY 5////////////////// sample/////////////

// const dolphinScore = calcAverage(85,54,41)
// const koalaScore = calcAverage(23,34,27)
// console.log = (dolphinScore,koalaScore)

// const checkWinner = function(avgDolphin,avgkoalas)
// {
//     if (avgDolphin >=2*avgKoalas)
//     console.log(`dolphins win ${avgDolphin} vs ${avgkoalas}`)
//     else if(avgkoalas>=2*avgdolphin){
//         console.log(`dolphins win ${avgDolphin} vs ${avgkoalas}`)
//     }else{
//         console.log(`no one wins`)
//     }
// }



// //////////////////////DAY 8///////////////////

const bills = ['22','295','176','440','37','105','10','1100','86','52']
console.log(`Bills`,bills)

const calcTipval=function(bills){
    return bills>=50&&bills<=300?bills*0.15:bills*0.2
}
const tips = []
const total = []
// console.log(total);
for (let i=0;i<bills.length;i++){
    const tipVal = calcTipval(bills[i])
    tips.push(tipVal)
    // total.push(tipVal+bills[i])
}

console.log(bills,tips,total)

const calcAverage=function(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum/arr.length   
}
console.log(calcAverage(tips))

console.log(calcAverage(total))




// const billValue1 = bill3
// console.log(`the bill was ${billValue1}`)
// let tip = (bill3>=50 && bill3<=300)? bill3*(tip1) :bill*(tip2)
// console.log(`the tip was ${tip}`)
// let total = billValue1 + tip
// console.log(`the total value is ${total}`)





