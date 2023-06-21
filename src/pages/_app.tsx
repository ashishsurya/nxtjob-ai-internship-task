import { Navbar } from '@/components/Navbar';
import { store } from '@/redux/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className=' flex flex-col min-h-screen'>
      <Provider store={store}>
        <Navbar />
        <div className='flex-1  '>
          <Component {...pageProps} />
        </div>
      </Provider>
    </div>
  );
}
