document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');

    function displayNews(news) {
        newsContainer.innerHTML = '';
        news.forEach(newsItem => {
            const div = document.createElement('div');
            div.classList.add('news-item');
            div.innerHTML = `
                <h3>${newsItem.title}</h3>
                <p><b>Sursa:</b> ${newsItem.source.name}</p>
                <p><b>Autor:</b> ${newsItem.author}</p>
                <p><b>Descriere:</b> ${newsItem.description}</p>
                <p><b>Conținut:</b> ${newsItem.content}</p>
                <p><b>Publicat la:</b> ${newsItem.publishedAt}</p>
                <p><b>URL:</b> <a href="${newsItem.url}">Link către știre</a></p>
                <img src="${newsItem.urlToImage}" alt="Imagine știre">
            `;
            newsContainer.appendChild(div);
        });
    }

    function sortNewsAsc() {
        let newsData = JSON.parse(localStorage.getItem('stiri'));
        newsData.sort((a, b) => a.title.localeCompare(b.title));
        displayNews(newsData);
    }

    function sortNewsDesc() {
        let newsData = JSON.parse(localStorage.getItem('stiri'));
        newsData.sort((a, b) => b.title.localeCompare(a.title));
        displayNews(newsData);
    }

    function filterNewsByDate() {
        const inputDate = document.getElementById('date-input').value;
        if (!inputDate) {
            alert('Vă rugăm să introduceți o dată.');
            return;
        }
        let newsData = JSON.parse(localStorage.getItem('stiri'));
        if (!newsData) {
            alert('Nu există date de știri disponibile.');
            return;
        }
        const filteredNews = newsData.filter(news => {
            return new Date(news.publishedAt).toISOString().split('T')[0] === inputDate;
        });
        if (filteredNews.length > 0) {
            displayNews(filteredNews);
        } else {
            newsContainer.innerHTML = '<p>Nu există știri pentru data introdusă.</p>';
        }
    }

    document.getElementById('ok').addEventListener('click', event => {
        event.preventDefault();
        filterNewsByDate();
    });

    document.getElementById('sortAsc').addEventListener('click', event => {
        event.preventDefault();
        sortNewsAsc();
    });

    document.getElementById('sortDesc').addEventListener('click', event => {
        event.preventDefault();
        sortNewsDesc();
    });
});
