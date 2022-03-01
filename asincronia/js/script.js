let planets = [];
let astronauts = [];
// ASYNC GETTERS
async function getPlanetsData(){ // get -> Obtener (Convención)
    //1. Hacer la petición (GET)
    // URL : https://handlers.education.launchcode.org/static/planets.json
    const response = await fetch("https://handlers.education.launchcode.org/static/planets.json")
    //2. Validar la respuesta
    if(!response.ok) throw Error(response.statusText); // Se detiene la ejecución
    //3. Extraer la informacion 
    const data = await response.json();
    //4. Devolver la información
    return data;
}

async function getAstronautsData(){ // get -> Obtener (Convención)
    //1. Hacer la petición (GET)
    // URL : https://handlers.education.launchcode.org/static/planets.json
    const response = await fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    //2. Validar la respuesta
    if(!response.ok) throw Error(response.statusText); // Se detiene la ejecución
    //3. Extraer la informacion 
    const data = await response.json();
    //4. Devolver la información
    return data;
}


// MAIN

// const planets = getPlanetsData(); // -> Promesa  (no la data)

async function main() {
  // obtener informacion de planetas
  planets = await getPlanetsData();
  let flag = true;
  planets.forEach((planet) => {
    const slides = document.querySelector("#carousel > .carousel-inner");
    console.log(slides);
    slides.innerHTML += ` 
        <div class="carousel-item ${flag?'active':'' }">
        <img
          src="${planet.image}"
          class="d-block w-100"
          alt="..."
        />
        </div> `;
    flag=false;
});
  //procesar la información planetas
  console.log(planets);
}

// Llamar funcion principal
main();
































































































// // Utilizando FUNCIONES ASYCN (Asíncromas)

// function timeout(sec) {
//     return new Promise(resolve => setTimeout(resolve, sec * 1000));
// }

// async function getUsersData() {
//     // Traer informacion del servidor
//     await timeout(3); // Simulando el tiempo de latencia
//     const response = await fetch("data/users.json");
//     // Validamos la respuesta
//     if (!response.ok) {
//         // Promesa se rechazo
//         throw Error(response.statusText);
//     }
//     // Extraer la data
//     const data = await response.json();
//     return data;
// }

// // MAIN (Estructrurado -> Síncrono)
// async function main() {

//     const users = await getUsersData().catch((err) => alert(err));;
//     const list = document.querySelector("#list_users");

//     users.forEach((element) => {
//         const p = document.createElement("p");
//         p.textContent = `${element.first_name} ${element.last_name} : ${element.email}`;
//         list.appendChild(p);
//     });

// }

// main();


// fetch("data/users.json")
//     .then((response) => {
//         console.log(response);
//         console.log("Validamos la respuesta de peticion");
//         if (!response.ok) {
//             throw Error(response.statusText);
//         }
//         data = response.json();
//         return data;
//     })
//     .then((data) => {
//         console.log(data);
//         const list = document.querySelector("#list_users");

//         data.forEach((element) => {
//             const p = document.createElement("p");
//             p.textContent = `${element.first_name} ${element.last_name} : ${element.email}`;
//             list.appendChild(p);
//         });

//         // Mostrar en un UL utilizando DOM
//     })
//     .catch((error) => console.warn(error))
//     .finally(() => console.log("La promesa ha finalizado"));
