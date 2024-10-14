const API_KEY = "5bf3df5fee5f48a898e623a3f6de5086";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("Technology"));

async function fetchNews(query) {
  const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
  const data = await res.json();
  console.log(data);
  bindData(data.articles);
}

function bindData(articles) {
  const cardsContainer = document.getElementById("container");
  const newsCardTemplate = document.getElementById("template-news-card");

  cardsContainer.innerHTML = "";

  articles.forEach((article) => {
    if (!article.urlToImage) return;
    const cardClone = newsCardTemplate.content.cloneNode(true);
    
    cardClone.querySelector("#news-img").src = article.urlToImage;
    cardClone.querySelector("#news-title").innerText = article.title;
    cardClone.querySelector("#news-source").innerText = `${article.source.name} / ${new Date(article.publishedAt).toLocaleDateString()}`;
    cardClone.querySelector("#news-desc").innerText = article.description;

    cardsContainer.appendChild(cardClone);
  });

  
}
