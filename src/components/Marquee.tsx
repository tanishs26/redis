import { div } from "framer-motion/client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  const tweets = [
    {
      username: "ella.murphy",
      userPhoto:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?&w=64&h=64&fit=crop",
      tweet:
        "Redis is awesome for real-time apps, but my favorite part is the community documentation—so many great use cases and solutions.",
    },
    {
      username: "lucas.roberts",
      userPhoto:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?&w=64&h=64&fit=crop",
      tweet:
        "50+ milliseconds shaved off response times after switching to Redis for our key-value store. Simple configs, fantastic results!",
    },
    {
      username: "mia.brown",
      userPhoto:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?&w=64&h=64&fit=crop",
      tweet:
        "If you're still using basic caching, you're missing out. Redis has transformed our e-commerce platform’s performance with geo-indexes and sorted sets.",
    },
    {
      username: "jack.carter",
      userPhoto:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?&w=64&h=64&fit=crop",
      tweet:
        "Redis makes it effortless to keep your app fast and resilient. Whether you’re handling millions of requests or syncing data cross-region, it delivers every time.",
    },
    {
      username: "denia_m",
      userPhoto:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?&w=64&h=64&fit=crop",
      tweet:
        "Migrated our cache from Amazon ElastiCache to Redis Cloud on GCP.    It's been such a smooth ride—performance is on another level! 🚀",
    },

    {
      username: "tech_gal",
      userPhoto:
        "https://plus.unsplash.com/premium_photo-1682089894837-e01e5cb8e471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHwyfDB8fHww",
      tweet:
        "Wow, Redis really changed the game for our caching system!                It's incredibly fast, reliable, and scales so easily. Honestly, can’t imagine running real-time apps without it nowadays.",
    },
    {
      username: "dev_dude",
      userPhoto:
        "https://images.unsplash.com/photo-1509399693673-755307bfc4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8MnwwfHx8MA%3D%3D",
      tweet:
        "Just started exploring Redis Streams for message queuing and real-time data pipelines. It’s surprisingly smooth and has made event-driven architectures a lot easier to implement.",
    },
    {
      username: "code_master99",
      userPhoto:
        "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8MnwwfHx8MA%3D%3D",
      tweet:
        "Redis makes session management a breeze. No more lost sessions or annoying bugs with user state. If you haven’t tried it for that purpose, you’re missing out big time!",
    },
    {
      username: "daisyshah23",
      userPhoto:
        "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8MnwwfHx8MA%3D%3D",
      tweet:
        "Migrated all our caching to Redis Enterprise recently. The latency improvements alone blow my mind, but on top of that, the automatic failover features keep us stress-free during outages.",
    },
    {
      username: "abhram_leckam",
      userPhoto:
        "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8MnwwfHx8MA%3D%3D",
      tweet:
        "Redis’ versatility is just crazy. Using it for distributed counters, pub/sub messaging, leaderboard rankings, and more. It’s become the backbone of our backend infrastructure.",
    },
    {
      username: "harry.stephens",
      userPhoto:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHwyfDB8fHww",
      tweet:
        "Redis Pub/Sub completely transformed our chat application. Low latency, easy implementation, and the reliability are top-notch. Definitely recommended if you need real-time features.",
    },
    {
      username: "sam_dev",
      userPhoto:
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHwyfDB8fHww",
      tweet:
        "Sometimes I surprise myself with how powerful Redis’ data structures are. Sorted sets for rankings, hashes for user profiles, bitmaps for analytics—you name it, Redis does it all beautifully!",
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
    <div className="mx-2  bg-[#0d212c] border-2 rounded-lg p-4 w-[300px] h-[300px]  border-[#15313e]">
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
