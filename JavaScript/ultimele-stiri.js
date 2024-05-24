
function displayNews(news) {
    document.getElementById('news-container').innerHTML = '';
    let length = news.length;

    for (let i = 0; i < length; i++) {
        let newsIndex = news[i];
        // Crearea elementelor HTML pentru a afișa știrile
        let div = document.createElement('div');
       
        div.innerHTML =
            '<h3>' + newsIndex.title + '</h3>' +
            '<p><b>Sursa:</b> ' + newsIndex.source.name + '</p>' +
            '<p><b>Autor:</b> ' + newsIndex.author + '</p>' +
            '<p><b>Descriere:</b> ' + newsIndex.description + '</p>' +
            '<p><b>Conținut:</b> ' + newsIndex.content + '</p>' +
            '<p><b>Publicat la:</b> ' + newsIndex.publishedAt + '</p>' +
            '<p><b>URL:</b> <a href="' + newsIndex.url + '">Link către știre</a></p>' +
            '<img src="' + newsIndex.urlToImage + '" alt="Imagine știre">';

        // Adăugarea elementelor în pagina HTML
    document.getElementById('news-container').appendChild(div);
         console.log("debbuging")       
    
}}

function sortNewsAsc() {
    document.getElementById('news-container').innerHTML = '';
    let newsData = JSON.parse(localStorage.getItem('stiri'));
    console.log(newsData);

    // Sortăm știrile crescător după titlu
    newsData.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    });

    console.log(newsData);

    displayNews(newsData); // Afișează știrile după sortare
}


// Functia pentru a sorta stirile crescator dupa titlu
/*function sortNewsAsc() {
    document.getElementById('news-container').innerHTML = '';
    let newsData=JSON.parse(localStorage.getItem('stiri'));
    console.log(newsData)

    
    newsData.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    console.log(newsData)

    displayNews(newsData); // Afiseaza stirile dupa sortare
}*/

// Functia pentru a sorta stirile descrescator dupa titlu
function sortNewsDesc() {
    document.getElementById('news-container').innerHTML = '';
    let newsData = JSON.parse(localStorage.getItem('stiri'));
    console.log(newsData);

    // Sortăm știrile descrescător după titlu
    newsData.sort((a, b) => {
        if (a.title < b.title) return 1;
        if (a.title > b.title) return -1;
        return 0;
    });

    console.log(newsData);

    displayNews(newsData); // Afișează știrile după sortare
}


// Evenimentele de click pentru butoanele de sortare
document.getElementById('sortAsc').addEventListener('click', (event) => {
    event.preventDefault();
    sortNewsAsc();
});

document.getElementById('sortDesc').addEventListener('click', (event) => {
    event.preventDefault();
    sortNewsDesc();
});
