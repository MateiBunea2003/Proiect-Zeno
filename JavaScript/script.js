// Cheia API pentru News API
const apiKey = '3fc98b634c8b4a178a9d0128d82cb953';
// Ordinea de sortare a articolelor
const sortOrder = 'published';
// Interogarea pentru căutarea articolelor
const query = 'tesla';
// Data de la care să fie preluate articolele
const date = '2024-05-14';

// Crearea unui obiect nou Date care va conține data și ora curentă
var dataCurenta = new Date();

// Extrageți anul, luna și ziua
const an = dataCurenta.getFullYear();
const luna = String(dataCurenta.getMonth() + 1).padStart(2, '0'); // Luna începe de la 0 în JavaScript, deci adăugăm 1
const zi = String(dataCurenta.getDate()).padStart(2, '0');

// Formatați data în formatul an-lună-zi
const dataFormatata = `${an}-${luna}-${zi}`;

console.log(dataCurenta);
console.log(dataFormatata); // Afișează data în consolă

// Selectăm elementul de intrare și butonul
var inputElement = document.querySelector('input');
var okButton = document.querySelector('button#ok');

// Adăugăm un ascultător de evenimente pentru butonul OK
okButton.addEventListener('click', function() {
    // Luăm valoarea din elementul de intrare
    var myVariable = inputElement.value;
    // Afișăm valoarea în consolă
    console.log(myVariable);
    dataCurenta = myVariable;

    // Golește containerul de știri înainte de a afișa știrile noi
    document.getElementById('news-container').innerHTML = '';

    // Reapelăm API-ul cu noua valoare
    getNews().then(data => {
        console.log(data);
        if (data && data.articles) {
            // Parcurgem articolele și le afișăm
            for (var i = 0; i < data.articles.length; i++) {
                var news = data.articles[i];
                // Crearea elementelor HTML pentru a afișa știrile
                var div = document.createElement('div');
                div.innerHTML =
                    '<h3>' + news.title + '</h3>' +
                    '<p><b>Sursa:</b> ' + news.source.name + '</p>' +
                    '<p><b>Autor:</b> ' + news.author + '</p>' +
                    '<p><b>Descriere:</b> ' + news.description + '</p>' +
                    '<p><b>Conținut:</b> ' + news.content + '</p>' +
                    '<p><b>Publicat la:</b> ' + news.publishedAt + '</p>' +
                    '<p><b>URL:</b> <a href="' + news.url + '">Link către știre</a></p>' +
                    '<img src="' + news.urlToImage + '" alt="Imagine știre">';

                // Adăugarea elementelor în pagina HTML
                document.getElementById('news-container').appendChild(div);
            }
        } else {
            console.error('No articles found');
        }
    });
});

// Funcția pentru a face fetch de știri de la API
const fetchNews = () =>
    fetch(`https://newsapi.org/v2/everything?q=${query}&from=${dataCurenta}&sortBy=${sortOrder}&apiKey=${apiKey}`);

// Funcția asincronă pentru a obține știri
const getNews = async () => {
    try {
        const response = await fetchNews();
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching news:', error);
    }
};

// Apelăm funcția getNews și afișăm rezultatele în consolă
getNews().then(data => {
    console.log(data);
});

// Apelăm din nou funcția getNews și afișăm articolele în HTML
getNews().then(data => {
    if (data && data.articles) {
        for (var i = 0; i < data.articles.length; i++) {
            var news = data.articles[i];

            // Crearea elementelor HTML pentru a afișa știrile
            var div = document.createElement('div');
            div.innerHTML =
                '<h3>' + news.title + '</h3>' +
                '<p><b>Sursa:</b> ' + news.source.name + '</p>' +
                '<p><b>Autor:</b> ' + news.author + '</p>' +
                '<p><b>Descriere:</b> ' + news.description + '</p>' +
                '<p><b>Conținut:</b> ' + news.content + '</p>' +
                '<p><b>Publicat la:</b> ' + news.publishedAt + '</p>' +
                '<p><b>URL:</b> <a href="' + news.url + '">Link către știre</a></p>' +
                '<img src="' + news.urlToImage + '" alt="Imagine știre">';

            // Adăugarea elementelor în pagina HTML
            document.getElementById('news-container').appendChild(div);
        }
    } else {
        console.error('No articles found');
    }
});
