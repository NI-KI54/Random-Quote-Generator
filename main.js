const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "http://api.quotable.io/random";

async function getquote(){

    try {
    btnEl.innerText = "loading...";
    btnEl.disabled = true;
    quoteEl.innerText = "updating";
    authorEl.innerText = "updating";
    const response = await fetch(apiURL);
    const data = await response.json();
    const quotecontent = data.content;
    const quoteauthor = data.author;
    quoteEl.innerText = quotecontent;
    authorEl.innerText = "~" + quoteauthor;
    btnEl.innerText = "get quote";
    btnEl.disabled = false;
    console.log(data);
        
    } catch (error) {
        console.log(error);
        quoteEl.innerText = "An error happened, Try again later!";
        authorEl.innerText = "An error happened";
        btnEl.innerText = "get quote";
        btnEl.disabled = false;
    }

}




btnEl.addEventListener("click", getquote);