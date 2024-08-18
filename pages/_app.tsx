import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';

import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

function App({ Component, pageProps }: AppProps<{}>) {
  const queryClient = new QueryClient();

  return (
    <GoogleOAuthProvider clientId="313398112272-o2kv50rvmq6okhbpqmq1ces50ek2vcmd.apps.googleusercontent.com">
      <div className={inter.className}>
        <Toaster />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </div>
    </GoogleOAuthProvider>
  );
}

export default appWithTranslation(App);
