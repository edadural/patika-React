const users = [{
    name: 'Mehmet',
    age: 18,
},{
    name: 'Mehmet',
    age: 29,
},{
    name: 'Murat',
    age: 40,
}];

/*
    push        --  array sonuna eleman eklemek
    map         --  array icinde elemanlari tek tek donuyo
    find        --  array icinde verilen kosulla arama islemi, buldugu ilk eleman
    filter      --  
    some        --  kosula uygunsa true doner, degilse false
    every       --  tum elemanlarin sarta uyması T-F
    includes    --  
*/


// // push
// const users = ["Mehmet", "Ahmet", "Murat"];
// users.push("Ayse");
// users.push("Eda");

// console.log(users);


// //map
// users.map((item) => {
//     console.log(item.name);
// })


// //find 
// const result = users.find((item) => item.name === 'Mehmet' && item.age > 20);
// console.log(result);


// //filter
// const filtered = users.filter((item) => item.name === 'Mehmet' && item.age < 20)
// console.log(filtered);


// // some
// const some = users.some(item => item.age === 18);
// console.log(some);


// // every
// const every = users.every(item => item.age > 20)
// console.log(every);


// include
const meyveler = ['elma', 'armut', 'muz'];

const isInclude = meyveler.includes('muz');
console.log(isInclude);