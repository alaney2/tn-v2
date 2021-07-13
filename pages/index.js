import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '../components/Header';

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-custom">
      <Head>
        <title>Tactics Ninja</title>
        <meta name="description" content="" />
        <link rel="icon" href="/icon.svg" />

      </Head>
      
      <Header />

      <main className="text-alice-blue flex justify-center">
        <h1>Welcome to Tactics Ninja!</h1>
      </main>

      <footer >
      </footer>
    </div>
  );
}
