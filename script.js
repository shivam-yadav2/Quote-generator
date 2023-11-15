const APIurl = "https://api.quotable.io/random";

const getQuote = async () => {
    const response = await fetch(APIurl);
    const data = await response.json();
    console.log(data);

    const quote = document.getElementById("quote");
    quote.innerText = ' "👌 '+ data.content +'😊"';
};

const btn = document.getElementById("btn");

btn.addEventListener("click", getQuote);
