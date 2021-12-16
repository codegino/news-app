import type {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import NewsContent from '../components/basic/NewsContent';
import {commonMetaTags} from '../frontend-utils/meta-tags';
import {fetchNews, News} from '../utils/fetch-news';

export default function Home({
  news,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Welcome to my Website | Code Gino | Carlo Gino Catapang</title>
        {commonMetaTags('Home Page')}
      </Head>
      <main className="flex flex-col items-center">
        <h1>Entertainment News</h1>
        <NewsContent news={news} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const news: News[] = await fetchNews('&category=entertainment');

  return {
    props: {news},
  };
};
