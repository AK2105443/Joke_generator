const btnEl = document.getElementById("btn");
const jokeEl= document.getElementById("joke");

const apikey ="s/WDNWbl1r5rwTJP9XOlgw==SHVjclt4ceOyw9Ff";
const options={
    method: "GET",
    headers:{
        "X-Api-key":apikey,
    },
};
const apiURL= "https://api.api-ninjas.com/v1/dadjokes?limit=1";


async function getJoke(){

    try{
        
    jokeEl.innerText="Updating...";
    btnEl.dispatchEvent=true;
    btnEl.innerText="Loading..";
    const response = await fetch(apiURL,options);
    const data= await response.json();
    console.log(data[0].joke);

    btnEl.dispatchEvent=false;
    btnEl.innerText="Tell me a joke";

    jokeEl.innerText = data[0].joke;
    }
    catch(error){
        jokeEl.innerText = "An error happened,try again later";
        console.log(error);
    }

}

btnEl.addEventListener("click",getJoke);