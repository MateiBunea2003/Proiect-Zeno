
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
    // news.forEach(item => {
    //     const div = document.createElement('div');
    //     div.classList.add('news-item');
    //     div.innerHTML = `
    //         <h3>${item.title}</h3>
    //         <p><b>Sursa:</b> ${item.source.name}</p>
    //         <p><b>Autor:</b> ${item.author}</p>
    //         <p><b>Descriere:</b> ${item.description}</p>
    //         <p><b>Conținut:</b> ${item.content}</p>
    //         <p><b>Publicat la:</b> ${item.publishedAt}</p>
    //         <p><b>URL:</b> <a href="${item.url}">Link către știre</a></p>
    //         <img src="${item.urlToImage}" alt="Imagine știre">
    //     `;
    //     container.appendChild(div);
    // });
}}

// Functia pentru a sorta stirile crescator dupa titlu
function sortNewsAsc() {
    document.getElementById('news-container').innerHTML = '';
    let newsData=JSON.parse(localStorage.getItem('stiri'));
    console.log(newsData)

    
    newsData.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    console.log(newsData)

    displayNews(newsData); // Afiseaza stirile dupa sortare
}

// Functia pentru a sorta stirile descrescator dupa titlu
function sortNewsDesc() {
    document.getElementById('news-container').innerHTML = '';
    let newsData=[];
    newsData=JSON.parse(localStorage.getItem('stiri'));

    displayNews(newsData); // Afiseaza stirile dupa sortare
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
