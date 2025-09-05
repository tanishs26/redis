import { div } from "framer-motion/client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  const tweets = [
   
    {
      username: "nathan.lee",
      userPhoto: "https://randomuser.me/api/portraits/men/54.jpg",
      tweet:
        "Redis is more than just a high-speed cache! We’re using it for pub/sub messaging, leaderboard rankings, quick search indexes—seriously, the versatility is wild. From distributed locks to counters, Redis brings so much value to every layer of our stack.",
    },
    {
      username: "olivia.park",
      userPhoto: "https://randomuser.me/api/portraits/women/37.jpg",
      tweet:
        "Recently, I helped migrate our legacy app’s session management over to Redis. What a relief—no more race conditions or lost data. Now users get a seamless experience even when traffic spikes!",
    },
    {
      username: "rohan.singh",
      userPhoto: "https://randomuser.me/api/portraits/men/29.jpg",
      tweet:
        "Just integrated Redis with Node.js and the improvement in latency is immediately obvious. It’s amazing how something so lightweight can drastically speed up your applications. Impressed!",
    },
    {
      username: "sophia.martin",
      userPhoto: "https://randomuser.me/api/portraits/women/31.jpg",
      tweet:
        "Redis Sentinel saved our backend! Last week our primary server crashed but Redis auto-failover stepped in, keeping everything running with zero downtime. Seriously, everyone running distributed systems should up their game with features like this.",
    },
    {
      username: "david.hernandez",
      userPhoto: "https://randomuser.me/api/portraits/men/41.jpg",
      tweet:
        "Clustering with Redis is stunning. Our API stayed online through huge spikes, and with automatic partitioning, data availability and uptime are easy to maintain. Massive upgrade over traditional DB setups.",
    },
    {
      username: "ella.murphy",
      userPhoto: "https://randomuser.me/api/portraits/women/61.jpg",
      tweet:
        "Redis is awesome for real-time apps, but my favorite part is the community documentation—so many great use cases and solutions. Makes learning a breeze!",
    },

    {
      username: "lucas.roberts",
      userPhoto: "https://randomuser.me/api/portraits/men/48.jpg",
      tweet:
        "50+ milliseconds shaved off response times after switching to Redis for our key-value store. Simple configs, fantastic results!",
    },
    {
      username: "mia.brown",
      userPhoto: "https://randomuser.me/api/portraits/women/27.jpg",
      tweet:
        "If you're still using basic caching, you're missing out. Redis has transformed our e-commerce platform’s performance. With sorted sets and geo-indexes, real-time offers and location-based results are now part of our daily workflow. Upgrading to Redis was the best decision we made this year!",
    },
    {
      username: "jack.carter",
      userPhoto: "https://randomuser.me/api/portraits/men/39.jpg",
      tweet:
        "Redis makes it effortless to keep your app fast and resilient. Whether you’re handling millions of requests or syncing data cross-region, it delivers every time. Highly recommended for mission-critical services!",
    },
    {
      username: "arjun_m",
      userPhoto: "https://randomuser.me/api/portraits/men/34.jpg",
      tweet:
        "Migrated our cache from Amazon ElastiCache to Redis Cloud on GCP. It's been such a smooth ride—performance is on another level! 🚀",
    },
    {
      username: "sarika.verma",
      userPhoto: "https://randomuser.me/api/portraits/women/60.jpg",
      tweet:
        "Redis is more than caching, trust me! We use it for session stores, counters, and ranking leaderboards—super flexible.",
    },
    {
      username: "jason_smith",
      userPhoto: "https://randomuser.me/api/portraits/men/17.jpg",
      tweet:
        "Just integrated Redis into my Spring Boot app, and wow, session management and latency have improved drastically. Saying goodbye to bottlenecks!",
    },
    {
      username: "megan.lee",
      userPhoto: "https://randomuser.me/api/portraits/women/49.jpg",
      tweet:
        "Game changer! Redis makes real-time analytics so much easier. Can't imagine scaling without it.",
    },
    {
      username: "daniel_c",
      userPhoto: "https://randomuser.me/api/portraits/men/28.jpg",
      tweet:
        "Redis in the cloud, on-prem, hybrid—you choose, it works everywhere! Clustering, failover, all in the box!",
    },
  ];

  return (
    <div className="w-full mt-10 overflow-x-hidden  mask-r-from-90%">
      <div className="max-w-[85rem] px-4 mx-auto mask-l-from-90% mask-r-from-90%  ">
        
        <div
          className=" max-w-full gap-0 h-[400px] overflow-hidden   
          "
        >
          <Marquee speed={50}>
            {tweets.map((item) => {
              return (
                <Card
                  key={item.username}
                  tweet={item.tweet}
                  username={item.username}
                  userphoto={item.userPhoto}
                />
              );
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Marque;

const Card = ({
  username,
  userphoto,
  tweet,
}: {
  username?: string;
  userphoto?: string;
  tweet: string;
}) => {
  return (
    <div className="mx-2  bg-[#0d212c] border-2 rounded-lg p-4 w-[300px]  border-[#15313e]">
      <div className="flex gap-2 items-center">
        <div className="relative aspect-square w-[45px] rounded-full overflow-hidden">
          <Image
            width={65}
            height={65}
            loading="lazy"
            className="object-contain grayscale-100  "
            alt="no-user"
            src={`${userphoto}`}
          />
        </div>
        <h1 className="text-md text-neutral-300 font-semibold">@{username}</h1>
      </div>
      <p className="mt-5  text-shadow-2xs text-sm text-neutral-300">{tweet}</p>
    </div>
  );
};
