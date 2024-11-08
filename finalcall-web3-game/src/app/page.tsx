"use client";

import Head from 'next/head';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <Head>
        <title>FinalCall - A Thrilling Adventure Awaits</title>
        <meta name="description" content="Get ready for an epic journey where your decisions shape the outcome. Final Call is an immersive game that puts you in control of critical choices that will determine the fate of many." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start animate-fadeIn">
        <h1 className="text-4xl font-bold animate-bounce">FinalCall</h1>
        <h2 className="text-2xl">A Thrilling Adventure Awaits</h2>
        <h3 className="text-xl">Coming Soon!</h3>
        <p className="text-center sm:text-left">Get ready for an epic journey where your decisions shape the outcome. Final Call is an immersive game that puts you in control of critical choices that will determine the fate of many.</p>
        <h4 className="text-lg font-semibold">Features:</h4>
        <ul className="list-disc list-inside text-center sm:text-left">
          <li>Dynamic storytelling</li>
          <li>Multiple endings</li>
          <li>Strategic decision-making</li>
          <li>Stunning visuals</li>
          <li>Atmospheric soundscape</li>
        </ul>
        <p className="text-center sm:text-left">Stay tuned for the launch! Join our waiting list to be among the first to experience this groundbreaking adventure.</p>
        <a href="#" className="inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300 ease-in-out transform hover:scale-105">Sign Up for Updates</a>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 2s ease-in-out;
        }
      `}</style>
    </div>
  );
}