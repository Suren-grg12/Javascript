// let name = "surendra gurung "
// name = 1
// console.log(name)

// const names = ['name ','you','me']
// names[3] = "always"
// console.log(names)            //array ma chai const ma assagian garn amilcha


// // array ma add garna ko lagi using push 
//  const names = ['sunday', 'nomday']
//  names.push('tuesday')
//  console.log(names)

//  //pop -- le delete garcha like // pop le last tera ko matra array hercha 
//  const days =['sunday', 'monday','tuesday']
//  days.pop('tuesday')
//  console.log(days)

// //unshift 
// days.unshift("saturday")
// console.log(days)

// days.unshift('monday')
// console.log(days)

// days.shift()
// console.log(days)

// days.shift()
// console.log(days)             //shift --- shift le agadi ko array delete garcha vane pop le pichadi ko matra delete garcha 

// days.pop()
// console.log(days)

// days.push('saturday')
// console.log(days)

// days.unshift('hello')
// console.log(days)

// console.log(days.length)
// console.log(days)

// const array = [1,2,3,4,5]
// const newslicearray= array.slice(1,4)
// console.log(array)
// console.log(newslicearray)                      //slice 


// const number = [1,2,3,4,5,6]
// const splicenumber = number.splice(2,2,12,11)        //splace    // splice (katne starting number ,delete count ,item to be added)
// console.log(number)                                   // modified garcha aghadi ko -number- ma pani 
// console.log(splicenumber)


// const sentence = 'i love you'
// const newarray = sentence.split(" ")
// console.log(newarray)

// const person = {
//     name :  "surendra ",
//     adress : "gorkha"
// }
// person.age = 15 
// Object.freeze(person)                                    // Object.freeze le modify garna paudaina 
// person.name = "ankit"                                   // modify pani garna milcha 

// console.log(Object.keys(person))
// console.log(Object.values(person))








///condition ----------------------

// const ifranning = false
// if(ifranning){
//     console.log("carry umbrella"); 
// }
// else 
// {
//     console.log("dont carry umbrealla")
// }

// const temp = 30 
// if (temp > 30 ){
//     console.log("it is hot outside ")
// }
// else if (temp < 30 ){
//     console.log("it is cold  outside ")
// }
// else {
//     console.log("it is moderate")
// }


//---------------ternary operator------------

// const raining = true
// const result = raining ? "carry umbrella " : "dont carry umbrealla"
// console.log(result)




//-------short evaluation-------

// const israining = false
// const result = israining && "carry umbrealla " || "don't carry ukmbrella "
// console.log(result)



//nullish coelescing operator--------------

let age = undefined
let result = age ?? "no age "
console.log(result)