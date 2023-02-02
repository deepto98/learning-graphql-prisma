import '@/styles/globals.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: '/api/graphql'
})

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <SessionProvider session={session} refetchInterval={5 * 60}>
        <Component {...pageProps} />
      </SessionProvider>
    </ApolloProvider>
  )
}
