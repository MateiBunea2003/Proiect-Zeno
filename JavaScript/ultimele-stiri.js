// Funcția pentru afișarea știrilor
function displayNews(news) {
    // Golește containerul de știri
    document.getElementById('news-container').innerHTML = '';
    
    // Obține numărul de știri
    let length = news.length;

    // Iterează prin fiecare știre
    for (let i = 0; i < length; i++) {
        let newsIndex = news[i];
        
        // Crează un element div pentru știrea curentă
        let div = document.createElement('div');
       
        // Setează conținutul HTML pentru elementul div
        div.innerHTML =
            '<h3>' + newsIndex.title + '</h3>' +
            '<p><b>Sursa:</b> ' + newsIndex.source.name + '</p>' +
            '<p><b>Autor:</b> ' + newsIndex.author + '</p>' +
            '<p><b>Descriere:</b> ' + newsIndex.description + '</p>' +
            '<p><b>Conținut:</b> ' + newsIndex.content + '</p>' +
            '<p><b>Publicat la:</b> ' + newsIndex.publishedAt + '</p>' +
            '<p><b>URL:</b> <a href="' + newsIndex.url + '">Link către știre</a></p>' +
            '<img src="' + newsIndex.urlToImage + '" alt="Imagine știre">';

        // Adaugă elementul div în containerul de știri
        document.getElementById('news-container').appendChild(div);
        
        // Mesaj de debug în consolă
        console.log("debugging");
    }
}

// Funcția pentru a sorta știrile în ordine crescătoare după titlu
function sortNewsAsc() {
    // Golește containerul de știri
    document.getElementById('news-container').innerHTML = '';
    
    // Obține datele de știri din localStorage
    let newsData = JSON.parse(localStorage.getItem('stiri'));
    console.log(newsData);

    // Sortează știrile crescător după titlu
    newsData.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    });

    console.log(newsData);

    // Afișează știrile după sortare
    displayNews(newsData);
}

// Funcția pentru a sorta știrile în ordine descrescătoare după titlu
function sortNewsDesc() {
    // Golește containerul de știri
    document.getElementById('news-container').innerHTML = '';
    
    // Obține datele de știri din localStorage
    let newsData = JSON.parse(localStorage.getItem('stiri'));
    console.log(newsData);

    // Sortează știrile descrescător după titlu
    newsData.sort((a, b) => {
        if (a.title < b.title) return 1;
        if (a.title > b.title) return -1;
        return 0;
    });

    console.log(newsData);

    // Afișează știrile după sortare
    displayNews(newsData);
}

// Funcția pentru a filtra știrile după data introdusă
function filterNewsByDate() {
    // Obține data introdusă de utilizator
    const inputDate = document.getElementById('date-input').value;
    
    // Verifică dacă data a fost introdusă
    if (!inputDate) {
        alert('Vă rugăm să introduceți o dată.');
        return;
    }
    
    // Obține datele de știri din localStorage
    let newsData = JSON.parse(localStorage.getItem('stiri'));
    
    // Verifică dacă există date de știri disponibile
    if (!newsData) {
        alert('Nu există date de știri disponibile.');
        return;
    }

    // Filtrează știrile după data introdusă
    const filteredNews = newsData.filter(news => {
        // Obține data știrii în format ISO
        const newsDate = new Date(news.publishedAt).toISOString().split('T')[0];
        return newsDate === inputDate;
    });

    // Afișează știrile filtrate
    if (filteredNews.length > 0) {
        displayNews(filteredNews);
    } else {
        document.getElementById('news-container').innerHTML = '<p>Nu există știri pentru data introdusă.</p>';
    }
}

// Evenimentul de click pentru butonul de filtrare după dată
document.getElementById('ok').addEventListener('click', (event) => {
    event.preventDefault();
    filterNewsByDate();
});

// Evenimentul de click pentru butonul de sortare crescătoare
document.getElementById('sortAsc').addEventListener('click', (event) => {
    event.preventDefault();
    sortNewsAsc();
});

// Evenimentul de click pentru butonul de sortare descrescătoare
document.getElementById('sortDesc').addEventListener('click', (event) => {
    event.preventDefault();
    sortNewsDesc();
});
