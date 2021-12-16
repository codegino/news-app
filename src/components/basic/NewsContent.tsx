import React from 'react';
import Link from 'next/link';
import {News} from '../../utils/fetch-news';

const NewsContent: React.FC<{news: News[]}> = ({news}) => {
  return (
    <div className="max-w-4xl">
      {news.map(n => (
        <article
          className="border-2 rounded-md shadow-sm p-4 w-full mb-8"
          key={n.title}
        >
          <h2>{n.title}</h2>
          <div className="text-sm italic">{n.pubDate}</div>

          {n.image_url && (
            <div className="flex justify-center">
              <img
                className="rounded-md m-5"
                src={n.image_url}
                alt={n.title}
                height={400}
                width={600}
                loading="eager"
              />
            </div>
          )}

          {n.description && !n.content && (
            <div className="text-justify px-2 mt-4">{n.description}</div>
          )}

          {n.content && !n.full_description && (
            <div className="text-justify px-2 mt-4">{n.content}</div>
          )}

          <div className="text-justify px-2 mt-4">{n.full_description}</div>
          {n.link && (
            <div className="mt-8">
              <Link href={n.link} passHref>
                <a
                  href={n.link}
                  className=" underline-on-hover text-primary-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link to full article
                </a>
              </Link>
            </div>
          )}
        </article>
      ))}
    </div>
  );
};

export default NewsContent;
