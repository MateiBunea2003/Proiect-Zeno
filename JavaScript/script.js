const newsSection = document.getElementById('news');

function createNewsButton(article) {
    const button = document.createElement('button');
    button.textContent = article.title;
    button.addEventListener('click', () => {
        window.open(article.url, '_blank');
    });
    return button;
}

function displayNewsButtons(articles) {
    articles.forEach(article => {
        const button = createNewsButton(article);
        newsSection.appendChild(button);
    });
}

const apiKey = '3fc98b634c8b4a178a9d0128d82cb953';
const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2024-04-13&sortBy=publishedAt&apiKey=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const articles = data.articles;
        displayNewsButtons(articles);
    })
    .catch(error => console.log('Error fetching news:', error));

function openArticle(url) {
    window.open(url, '_blank');
}

// Atașăm evenimente de click butoanelor (poți adapta aceasta parte la nevoile tale)
document.getElementById('button1').addEventListener('click', function() {
    openArticle(apiUrl); // Deschide URL-ul API-ului
});

document.getElementById('button2').addEventListener('click', function() {
    openArticle(apiUrl); // Deschide URL-ul API-ului
});

document.getElementById('button3').addEventListener('click', function() {
    openArticle(apiUrl); // Deschide URL-ul API-ului
});
