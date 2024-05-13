// Selectăm secțiunea #news
const newsSection = document.getElementById('news');

// Funcție pentru crearea unui buton pentru fiecare știre
function createNewsButton(article) {
    const button = document.createElement('button');
    button.textContent = article.title;
    button.addEventListener('click', () => {
        window.open(article.url, '_blank');
    });
    return button;
}

// Funcție pentru afișarea butoanelor de știri în secțiunea #news
function displayNewsButtons(articles) {
    articles.forEach(article => {
        const button = createNewsButton(article);
        newsSection.appendChild(button);
    });
}

// Request către API pentru a obține știrile
const apiKey = 'https://newsapi.org/';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=ro&apiKey=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const articles = data.articles;
        displayNewsButtons(articles);
    })
    .catch(error => console.log('Error fetching news:', error));

    // Funcție pentru a deschide link-ul știrii asociate butonului
function openArticle(url) {
    window.open(url, '_blank');
}

// Atașăm evenimente de click butoanelor
document.getElementById('button1').addEventListener('click', function() {
    openArticle(apiKey);
});

document.getElementById('button2').addEventListener('click', function() {
    openArticle('URL_ȘTIRE_2');
});

document.getElementById('button3').addEventListener('click', function() {
    openArticle('URL_ȘTIRE_3');
});
