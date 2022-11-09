function meanMedian(arrayInput) {
    // your code here

    //Mencari mean
    let sumAll = 0
    for(const num of arrayInput){
        sumAll += num
    }
    let mean = sumAll / arrayInput.length

    //Mencari median / nilai tengah
    let median = 0
    if(arrayInput.length % 2 === 1){
        median = arrayInput[Math.floor(arrayInput.length / 2)]
    }else{
        let index =  Math.floor(arrayInput.length / 2)
        median = (arrayInput[index] + arrayInput[index -1]) /2
    }
    return [mean, median]
  }
  console.log(meanMedian([1, 2, 3, 4]))          // 2.5 2.5
  console.log(meanMedian([1, 2, 3, 4, 5]))       // 3 3
  console.log(meanMedian([7, 8, 9, 13, 15]))     // 10.4 9
  console.log(meanMedian([10, 20, 30, 40, 50]))  // 30 30
  console.log(meanMedian([15, 20, 30, 60, 120])) // 49 30
  
  