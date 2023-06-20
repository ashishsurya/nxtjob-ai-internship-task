import { Navbar } from '@/components/Navbar';
import { store } from '@/redux/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='min-h-screen'>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}
