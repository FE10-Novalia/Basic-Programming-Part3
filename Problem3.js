function removeDuplicates(array) {
    // your code here
    //Menggunakan set
    // let uniqueArr = [...new Set(array)]
    // return uniqueArr.length

    //Menggunakan for of
    let newArr = []
    for(const val of array){
        !newArr.includes(val) && newArr.push(val)
    }
    return newArr.length
  }


//   test case
  console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])) // 4
  console.log(removeDuplicates([2, 3, 4, 5, 6, 9, 9])) // 6
  console.log(removeDuplicates([2, 2, 2, 11]))         // 2
  console.log(removeDuplicates([2, 2, 2, 11]))         // 2
  console.log(removeDuplicates([1, 2, 3, 11, 11]))     // 4
  
  