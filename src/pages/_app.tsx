import type {AppProps} from 'next/app';
import Link from 'next/link';
import '../../styles/tailwind.css';
import '../styles/_globals.css';
import '../styles/animations.css';

const links = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Sports',
    href: '/sports',
  },
  {
    label: 'Entertainment',
    href: '/entertainment',
  },
];

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <header>
        <nav className="justify-between flex-wrap bg-primary-800 p-6">
          <ul className="flex flex-row items-center">
            {links.map(({label, href}) => (
              <li key={label} className="mr-4">
                <Link href={href} passHref>
                  <a href={href} className="text-white">
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
