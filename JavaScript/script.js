const apiKey = '3fc98b634c8b4a178a9d0128d82cb953';
const sortOrder = 'published'
const date = '2024-05-14'
const query = 'tesla'

const fetchNews = () =>
  fetch(`https://newsapi.org/v2/everything?q=${query}&from=${date}&sortBy=${sortOrder}&apiKey=${apiKey}`);

const getNews = async (count) => {
  try {
      const response = await fetchNews();
      const data = await response.json(); 
      return data;
  } catch (error) {
      console.error('Error fetching news:', error);
  }
};

getNews().then(data => {
  console.log(data); 
});

getNews().then(data => {
  if (data && data.articles) {
    for (var i = 0; i < 100; i++) {
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
