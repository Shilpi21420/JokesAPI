
//If we are getting data in the form of JSON
// const jokes = document.querySelector('#joke');
// const jokeBtn = document.querySelector('#jokeBtn');


// const generateJokes = () =>{

// fetch('https://icanhazdadjoke.com/').then((res) =>{
//     res.json()
//     console.log(res.json());
// }).catch((error) =>{
//     console.log(error);

// })

// }
// jokeBtn.addEventListener('click', generateJokes);
// generateJokes();

//In this api we are geting data in the form of html
//using promises.......................................

// const jokes = document.querySelector('#joke');
// const jokeBtn = document.querySelector('#jokeBtn');


// const generateJokes = () =>{

//     const setHeader = { 
//         headers: {
//             Accept : "application/json"
//         }

//     }

// fetch('https://icanhazdadjoke.com/', setHeader)
//  .then((res) => res.json() 
//  )
// .then( (data) =>{
//     jokes.innerHTML = data.joke;
// }).catch((error) =>{
//     console.log(error);
// })

// }
// jokeBtn.addEventListener('click', generateJokes);
// generateJokes();

//Using Async-await method............................


const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

const generateJokes = async () =>{
try{
    const setHeader = { 
        headers: {
            Accept : "application/json"
        }
    }
const res = await fetch('https://icanhazdadjoke.com/', setHeader);
const data = await res.json();
jokes.innerHTML = data.joke;
}catch(err){
    console.log(err);
}
}


jokeBtn.addEventListener('click', generateJokes);
generateJokes();