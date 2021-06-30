let textElem,author,tweetBtn,newBtn;

function getRandomQuote(){
    return fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      textElem.innerHTML = `"${data.content}"`;
      author.innerHTML = `-${data.author}`;
      tweetBtn.href = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + data.content + '" ' + data.author);
    })
    .catch(err => console.log(err));
} 

function declare(){
  textElem = document.getElementById("text");
  author = document.getElementById("author");
  newBtn = document.getElementById("new-quote");
  newBtn.addEventListener("click",getRandomQuote);
  tweetBtn = document.getElementById("tweet-quote");
  getRandomQuote();
}



