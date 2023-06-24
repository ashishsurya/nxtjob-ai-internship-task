import { Navbar } from '@/components/Navbar';
import { store } from '@/redux/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Inter } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

export const font = Inter({ subsets: ['latin'] , variable:"--font-inter"});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={twMerge(' flex flex-col min-h-screen font-sans', font.variable)}>
      <Provider store={store}>
        <Navbar />
        <div className='flex-1  '>
          <Component {...pageProps} />
        </div>
      </Provider>
    </div>
  );
}
