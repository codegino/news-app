export type News = {
  title: string;
  link: string;
  description: string;
  image_url: string;
  content: string;
  pubDate: string;
  full_description: string;
};

export const fetchNews = async (query = '') => {
  const news: News[] = await fetch(
    `https://newsdata.io/api/1/news?apikey=${process.env.NEWS_API_KEY}&country=us${query}`,
  )
    .then(res => res.json())
    .then(res => res.results);

  return news;
};
