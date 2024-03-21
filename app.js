let apiUrl="https://meme-api.com/gimme";
let meme=document.querySelector(".meme-container img");
let btn=document.querySelector(".nextBtn");
 let loading=document.querySelector(".loading");
async function Generate(){
    let response=await fetch(apiUrl);
    let data=await response.json();
    console.log(data);
    meme.setAttribute("src",data.url);
}
Generate();
