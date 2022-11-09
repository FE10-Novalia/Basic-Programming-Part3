function joinArrayRemoveDuplicate(arrayA, arrayB) {
    // your code here

    let newArr = []
    for(const val of arrayA){
        !newArr.includes(val) && newArr.push(val)
    }
    for(const val of arrayB){
        !newArr.includes(val) && newArr.push(val)
    }

    return newArr
}



// Test cases
console.log(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]))
// ["apel", "anggur", "lemon", "leci", "nanas"]

console.log(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]))
// ["samsung", "apple", "sony", "xiaomi"]

console.log(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]))
// [“football”, “basketball”]
  
  