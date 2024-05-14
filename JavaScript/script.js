const apiKey = '3fc98b634c8b4a178a9d0128d82cb953';
const sortOrder = 'published'
const date = '2024-05-13'
const query = 'tesla'

const fetchNews = () =>
  fetch(`https://newsapi.org/v2/everything?q=${query}&from=${date}&sortBy=${sortOrder}&apiKey=${apiKey}`);

const getNews = async (count) => {
    const deck = await fetchNews();
    const data = await deck.json(); 
    return data;
};

// Get Deck Id
getNews().then(data => {
  console.log(data); 
});
