import Head from 'next/head';
import { useEffect, useState } from 'react';
import ServicesSection, { ServiceCardData } from '../components/ServicesSection';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // 服务卡片数据
  const serviceCards: ServiceCardData[] = [
    {
      title: '1',
      img_preview:
        'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'New York Pizza New York Pizza New York Pizza New York Pizza',
      avatar: 'N',
      price: '100',
      currency: '$',
      country: 'Japan',
      date: '13:23',
    },
    {
      title: '2',
      img_preview:
        'https://images.unsplash.com/photo-1611963169787-ac9e3a65b27b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'New York Pizza New York Pizza New York Pizza New York Pizza',
      avatar: 'N',
      price: '1000.23',
      currency: '¥',
      country: 'United States',
    },
    {
      title: '3',
      img_preview:
        'https://plus.unsplash.com/premium_photo-1686262005190-02d67132127b?q=80&w=3026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'New York Pizza New York Pizza New York Pizza New York Pizza',
      avatar: 'N',
      price: '100',
      currency: '¥',
      country: 'United Kingdom',
      date: '13:23',
    },
    {
      title: '4',
      img_preview:
        'https://images.unsplash.com/photo-1486663845017-3eedaa78617f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'New York Pizza New York Pizza New York Pizza New York Pizza',
      avatar: 'N',
      price: '100',
      currency: '$',
      country: 'United Stated',
      date: '13:23',
    },
    {
      title: '5',
      img_preview:
        'https://images.unsplash.com/photo-1429087969512-1e85aab2683d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'New York Pizza New York Pizza New York Pizza New York Pizza',
      avatar: 'N',
      price: '100',
      currency: '¥',
      country: 'Japan',
      date: '13:23',
    },
  ];

  return (
    <>
      <Head>
        <title>Modern UI with Animations</title>
        <meta name="description" content="Modern UI with Tailwind CSS and animations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="mb-6 mt-12 text-center text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <div className="uppercase">Make your spend, well-spent</div>
            </h1>
            <p className="mb-8 max-w-3xl text-center text-lg text-gray-600 md:text-xl">
              Updating your wardrobe? Get cashback. When in Japan? Spend in Yen. Big life goals?
              Reach them faster. However you spend — Revolut is all you need.
            </p>
            <div className="flex flex-wrap justify-center">
              <button className="transform rounded-full bg-black px-6 py-2 font-medium text-white transition-opacity duration-300 hover:opacity-80">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div
          className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <ServicesSection services={serviceCards} />
        </div>
      </main>
    </>
  );
}
