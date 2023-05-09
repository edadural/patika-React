// // verilen parametredeki sure tamamlaninca 1 kere calisir
// setTimeout( () => {
//     console.log("selam");
// }, 5000); // 5 sn sonra 


// setInterval( () => {
//     console.log("selam ben her saniye caliscam");
// }, 1000);


// const sayHi = () => {
//     console.log("Merhaba");
// };

// sayHi();

//----------------------------------- 1
// // herhangi bi veri kaynagina baglanip, veriyi alip bize gosterir
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((users) => {

//     console.log("Users yuklnedi", users)

//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((data) => data.json())
//     .then((post) => {
//         console.log("Post 1 yuklendi", post)

//         fetch('https://jsonplaceholder.typicode.com/posts/2')
//         .then((data) => data.json())
//         .then((data) => console.log("Post 2 yuklendi", data))

//     });
// });

// // async-await okunabilir ------------------ 2

// async function getData(){
//     const users = await (
//         await fetch("https://jsonplaceholder.typicode.com/users")
//         ).json();
    
//     const post1 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         ).json();

//     const post2 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")
//         ).json();
    
//     console.log("Users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// }
// getData();

//-----------------------------------
(async ()=>{
    const users = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
        ).json();
            
    const post1 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
        ).json();
        
    const post2 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/2")
        ).json();
            
    console.log("Users", users);
    console.log("post1", post1);
    console.log("post2", post2);
})();

//----------------------------------- 3
//  import axios from "axios";

// (async ()=>{
//     const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");
            
//     const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");
        
//     const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");
            
//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// })();

//----------------------------------- 4
// const getUsers = (number) => {
//     return new Promise(async (resolve, reject)=>{
//         const { data } = await axios("https://jsonplaceholder.typicode.com/users");

//         resolve(data);
//         // reject('Bir sorun olustu');
//     });
// };

// const getPost = (post_id) => {
//     return new Promise(async (resolve, reject)=>{
//         const { data } = await axios(
//             "https://jsonplaceholder.typicode.com/posts/" + post_id
//             );

//         resolve(data);
//         // reject('Bir sorun daha olustu');
//     });
// };

// (async () => {
//     try {
//         const users = await getUsers();
//         const post = await getPost(1);

//         console.log(users);
//         console.log(post);
//     } catch (e) {
//         console.log(e);
//     }
// })();

// Promise.all([getUsers(), getPost(1)])
//     .then(console.log)
//     .catch(console.log);