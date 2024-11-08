"use client";

import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [isRoadmapOpen, setIsRoadmapOpen] = useState(false);

  const toggleRoadmap = () => {
    setIsRoadmapOpen(!isRoadmapOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col items-center justify-center p-8 sm:p-20">
      <Head>
        <title>FinalCall - A Thrilling Adventure Awaits</title>
        <meta name="description" content="Get ready for an epic journey where your decisions shape the outcome. Final Call is an immersive game that puts you in control of critical choices that will determine the fate of many." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center text-center gap-8 animate-fadeIn">
        <h1 className="text-5xl font-bold animate-bounce">FinalCall</h1>
        <h2 className="text-3xl">A Thrilling Adventure Awaits</h2>
        <h3 className="text-2xl">Coming Soon!</h3>
        <p className="max-w-2xl">Get ready for an epic journey where your decisions shape the outcome. Final Call is an immersive game that puts you in control of critical choices that will determine the fate of many.</p>
        <h4 className="text-xl font-semibold">Features:</h4>
        <ul className="list-disc list-inside max-w-2xl text-left">
          <li>Dynamic Prize Pool</li>
          <li>Countdown Visuals & Alerts</li>
          <li>Leaderboards and Player Profiles</li>
          <li>Special Power-ups and Bonuses</li>
          <li>Community and Social Features</li>
          <li>Exclusive and Limited-Edition NFTs</li>
          <li>Variable Betting Challenges</li>
        </ul>
        <p className="max-w-2xl">Stay tuned for the launch! Join our waiting list to be among the first to experience this groundbreaking adventure.</p>
        <a href="#" className="inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300 ease-in-out transform hover:scale-105">Sign Up for Updates</a>
      </main>

      <button
        onClick={toggleRoadmap}
        className="mt-8 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300 ease-in-out transform hover:scale-105"
      >
        {isRoadmapOpen ? 'Hide Roadmap' : 'Show Roadmap'}
      </button>

      {isRoadmapOpen && (
        <section className="mt-8 p-8 bg-white text-black rounded-lg shadow-lg max-w-4xl animate-fadeIn">
          <h2 className="text-3xl font-bold mb-4 text-center">Roadmap</h2>
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">1. Dynamic Prize Pool</h3>
              <p>Progressive Rewards: Build a prize pool that grows dynamically with each new bet. The more bets are placed, the bigger the prize, which can make it exciting to stay in the game longer.</p>
              <p>Winner Takes All vs. Split Rewards: Instead of just one winner, create tiers of rewards—e.g., a grand prize for the last person, but smaller rewards for participants who stayed in the longest. This could entice more users to stay involved.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">2. Countdown Visuals & Alerts</h3>
              <p>Visual Countdown Timer: A prominently displayed countdown timer that shows when the one-minute limit is about to expire can create suspense.</p>
              <p>Real-time Notifications: Give users the option to receive real-time push notifications if the timer is nearing the end, prompting them to place a bet.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">3. Leaderboards and Player Profiles</h3>
              <p>Leaderboard with Rank and Stats: Track players based on their wins, time in-game, and biggest bets, and display their ranks. High scores or leaderboards add an element of status and encourage repeat play.</p>
              <p>Profile Customization & NFT Avatars: Allow players to use customizable avatars or NFT assets as their in-game persona, boosting their attachment to the game.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">4. Special Power-ups and Bonuses</h3>
              <p>Shield or Block Options: Offer items that can freeze the timer briefly or prevent others from betting for a short period. Players could use these strategically, making the game more competitive.</p>
              <p>Bonus Bets or Double-Or-Nothing Rounds: Let players use boosts to double their winnings or gain an advantage in the bidding rounds, adding layers of strategy.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">5. Community and Social Features</h3>
              <p>Team Play Mode: Have an option where players can form alliances or teams, with team-based rewards. Teams could plan strategies to hold off other teams.</p>
              <p>Chat and Emotes: A chat feature with emotes or reactions could make the game social and fun. Reactions like “🔥” for big bets or “⏳” when the timer is near zero could enhance engagement.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">6. Exclusive and Limited-Edition NFTs</h3>
              <p>Reward NFTs for Winners: Offer unique NFTs that can only be won by being the last bettor in a particular season. These NFTs could confer bragging rights or in-game benefits in future rounds.</p>
              <p>In-Game NFT Drops: Occasionally drop NFTs with in-game perks, like a small shield or timer booster, only available for those actively participating.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">7. Variable Betting Challenges</h3>
              <p>Timed Events with High Stakes: Introduce special rounds where the game is faster-paced, or the required waiting time is reduced to 30 seconds. These rounds could have a higher prize pool.</p>
              <p>Limited-Time Themes: Change the theme or betting conditions every week, like a themed tournament with bonus perks or multipliers for certain kinds of bets.</p>
            </div>
          </div>
        </section>
      )}

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