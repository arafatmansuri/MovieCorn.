const apiKey = "a4d1a5f1";
const FormEle = document.querySelector('.frm');
const mName= document.querySelector("#SearchedItem");
const btn= document.querySelector("#btn");
const info = document.querySelector(".info");
btn.addEventListener('click',() => {
    let movieName= mName.value;
  SearchElem(movieName);
});
async function SearchElem(mName) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?t=${mName}&apikey=a4d1a5f1`);
        if(!response.ok){
            throw new Error("Netwok not connected");
        }
        const data = await response.json();
        console.log(data);
        if(data.Title!=undefined){
        document.querySelector(".SrcImg").innerHTML = `<img src="${data.Poster}" alt="">`
        info.innerHTML= `<h1 class="c">${data.Title}</h1>
            <div class="line2">
            <div class="year"><span>Year : </span>${data.Year}</div>
            <div class="rating"><span>Ratings : </span> ${data.Rated}</div> 
            <div class="released"><span>Released : </span> ${data.Released}</div>
            </div>
             <div class="genre"><span>Genre : </span>${data.Genre}</div>
            <div class="writer"><span>Writer : </span>${data.Writer}</div>
            <div class="actors"><span>Actors : </span>${data.Actors}</div>
            <div class="langs"><span class="c">Language : </span>${data.Language}</div>`
        }
        else{
            document.querySelector(".SrcImg").innerHTML = `<h1 class="c">Movie Not Found</h1>`
            info.innerHTML = "";            
        }
    } catch (error) {
        document.querySelector(".SrcImg").innerHTML = error;
    }
}
