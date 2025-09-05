import React from "react";
import {
  FaFacebookF,
  FaGithubAlt,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import LanguageSelect from "./Language";

const Footer = () => {
  const menuData = [
    {
      title: "Use Cases",
      items: [
        { name: "Vector database" },
        { name: "Feature stores" },
        { name: "Semantic cache" },
        { name: "Caching" },
        { name: "NoSQL database" },
        { name: "Leaderboards" },
        { name: "Data deduplication" },
        { name: "Messaging" },
        { name: "Authentication token storage" },
        { name: "Fast data ingest" },
        { name: "Query caching" },
        { name: "All solutions" },
      ],
    },
    {
      title: "Industries",
      items: [
        { name: "Financial Services" },
        { name: "Gaming" },
        { name: "Healthcare" },
        { name: "Retail" },
        { name: "All industries" },
      ],
    },
    {
      title: "Compare",
      items: [
        { name: "Redis vs. ElastiCache" },
        { name: "Redis vs. Memcached" },
        { name: "Redis vs. Memorystore" },
        { name: "Redis vs. Redis Open Source" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "Mission & values" },
        { name: "Careers" },
        { name: "News" },
      ],
    },
    {
      title: "Connect",
      items: [
        { name: "Community" },
        { name: "Events & Webinars" },
        { name: "Partners" },
        { name: "Amazon Web Services" },
        { name: "Google Cloud" },
        { name: "Azure" },
        { name: "All partners" },
      ],
    },
    {
      title: "Partners",
      items: [
        { name: "Amazon Web Services" },
        { name: "Google Cloud" },
        { name: "Azure" },
        { name: "All partners" },
      ],
    },
    {
      title: "Support",
      items: [{ name: "Professional Services" }, { name: "Support" }],
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-[#173341] to-[#030e14]">
      <div className="max-w-[85rem] px-4 pb-10   mx-auto ">
        <div className=" pt-30  w-full text-center justify-center flex flex-col ">
          <h1 className="text-3xl tracking-tight text-neutral-50 font-bold">
            Get Started
          </h1>
          <p className="text-neutral-50 mt-6">
            Speak to a Redis expert and learn more about enterprise-grade Redis
            today.
          </p>
          <div className="flex  w-full justify-center gap-4">
            <button className="  w-full lg:w-[10%]  text-center py-2 bg-[#3a2327] hover:bg-[#ff4428]/80 transition-all duration-200 border-1 border-[#ff4428] mt-6 hover:border-white/30 rounded-sm cursor-pointer text-sm text-white font-semibold">
              Try Redis{" "}
            </button>
            <button className="  w-full lg:w-[10%]  text-center py-2 bg-white/5 hover:bg-white/20 transition-all duration-200 border-1 border-white/20 mt-6 hover:border-white/30 rounded-sm cursor-pointer text-sm text-white font-semibold">
              Talk to sales{" "}
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-x-45 ">
          <div>
            <div className="flex items-center mt-15 p-0 w-22 h-15">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 85 27"
              >
                <path
                  fill="#FF4438"
                  fillRule="evenodd"
                  d="M75.29 13.813c0-2.968 2.2-4.69 4.947-4.69 2.052 0 3.884.99 4.763 3.444-.257 1.245-1.795 2.638-2.455 2.858-.55-1.173-1.172-1.869-1.758-1.869-.733 0-.77.513-.77 1.172 0 .467.134 1.155.295 1.983.243 1.25.548 2.82.548 4.43 0 2.93-2.052 5.092-5.203 5.092-2.885 0-4.48-1.892-5.19-4.913-1.885 3.377-4.641 4.913-6.754 4.913-3.302 0-4.08-2.441-4-4.917-1.328 2.345-3.882 4.917-6.331 4.917-2.501 0-3.384-2.177-3.182-4.712-1.498 2.791-4.208 4.712-6.82 4.712-2.836 0-4.239-2.252-3.785-5.044-1.907 2.344-5.458 5.044-9.149 5.044-4.209 0-6.04-2.27-6.258-5.114-2.031 3.256-4.77 5.224-8.03 5.224-4.709 0-6.393-4.187-6.638-7.611a111 111 0 0 1-6.113 7.464c-.256.257-.476.403-.732.403C1.832 26.6.11 22.862 0 21.47c.723-1.121 5.281-6.13 8.95-10.161 1.29-1.417 2.471-2.714 3.336-3.679-2.247.678-4.564 2.03-7.486 4.132-.513.366-1.942-2.968-1.906-5.533 3.371-2.49 8.5-4.066 12.64-4.066 5.79 0 9.123 3.224 9.123 7.694 0 3.737-3.114 7.84-7.657 7.987-2.362.061-3.876-1.265-4.65-2.902.092 2.532 1.409 5.65 4.943 5.65 3.853 0 5.704-2.326 8.463-5.795q.269-.339.55-.69c2.345-2.895 5.056-5.46 9.013-5.46 2.418 0 4.067 1.503 4.067 3.774 0 2.748-3.224 6.558-7.73 6.558-.77 0-1.472-.101-2.064-.301q-.024.173-.025.338c0 1.282.476 2.052 2.565 2.052 3.077 0 5.971-1.832 9.489-6.119 3.444-4.213 6.045-6.045 8.793-6.045 1.855 0 3.262 1.005 3.883 2.698C57.98 6.283 61.104 2.514 63.75 0c2.601 1.1 4.47 3.26 3.957 3.7-1.942 1.76-8.427 8.83-10.991 13.044-.66 1.099-1.283 2.308-1.283 2.894 0 .55.33.733.696.733 1.76 0 5.289-4.156 8.336-7.746 1.138-1.34 2.209-2.602 3.095-3.539 2.052.843 4.14 2.638 3.627 3.261-2.71 3.224-4.762 5.862-4.762 7.364 0 .403.146.66.696.66 1.026 0 1.978-.916 3.554-2.858.33-.403.732-.403.989.22.696 1.685 1.722 2.601 2.528 2.601.952 0 1.429-.843 1.429-2.125 0-.876-.107-1.895-.2-2.772-.069-.664-.13-1.246-.13-1.624m-59.096-.477c1.942 0 4.067-1.062 4.067-3.224 0-1.312-.814-2.521-2.99-2.89l-.342.535c-1.106 1.729-2.149 3.359-3.2 4.953.63.354 1.427.626 2.465.626m19.638.66c0-.587-.367-.99-.953-.99-1.47 0-3.687 2.063-4.73 4.055.385.15.837.232 1.323.232 2.601 0 4.36-1.978 4.36-3.297m9.636 5.312c0 .66.366 1.1 1.135 1.1 2.382 0 5.35-4.324 5.35-6.083 0-.732-.403-1.172-1.063-1.172-2.162 0-5.422 4.103-5.422 6.155M76.06 6.082c-.843 1.392-2.125 2.968-2.601 3.444-2.199-.916-4.25-2.748-3.957-3.26.806-1.43 2.125-2.968 2.601-3.445 2.198.916 4.25 2.785 3.957 3.261"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="text-neutral-300 flex gap-2 mt-2 ">
              <div className="w-[29px] h-[29px] rounded-full bg-white/10 flex justify-center items-center">
                <FaGithubAlt />
              </div>
              <div className="w-[29px] h-[29px] rounded-full bg-white/10 flex justify-center items-center">
                <FaFacebookF />
              </div>
              <div className="w-[29px] h-[29px] rounded-full bg-white/10 flex justify-center items-center">
                <FaYoutube />
              </div>
              <div className="w-[29px] h-[29px] rounded-full bg-white/10 flex justify-center items-center">
                <FaLinkedinIn />
              </div>
              <div className="w-[29px] h-[29px] rounded-full bg-white/10 flex justify-center items-center">
                <FaInstagram />
              </div>
              <div className="w-[29px] h-[29px] rounded-full bg-white/10 flex justify-center items-center">
                <FaXTwitter />
              </div>
            </div>
            <div className="mt-6">
              <p className="text-neutral-400 text-xs text-shadow-lg mb-4">
                Trust
              </p>
              <p className="text-neutral-400 text-xs text-shadow-lg mb-4">
                Privacy
              </p>
              <p className="text-neutral-400 text-xs text-shadow-lg mb-4">
                Terms of use
              </p>
              <p className="text-neutral-400 text-xs text-shadow-lg mb-4">
                Legal Notice
              </p>
            </div>
            <LanguageSelect />
          </div>
          {/* For links */}
          <div className="flex flex-col lg:flex-row w-full justify-between gap-x-15">
            <div className="flex flex-col mt-20 gap-4">
              <h1 className="text-neutral-50 text-lg font-semibold">
                Use Cases
              </h1>
              {menuData[0].items.map((item, idx) => (
                <span key={idx} className="text-xs text-neutral-400 ">
                  {item.name}
                </span>
              ))}
            </div>
            <div className="flex flex-col ">
              <div className="flex flex-col mt-20 gap-4">
                <h1 className="text-neutral-50 text-lg font-semibold">
                  Industries
                </h1>
                {menuData[1].items.map((item, idx) => (
                  <span key={idx} className="text-xs text-neutral-400 ">
                    {item.name}
                  </span>
                ))}
              </div>
              <div className="flex flex-col mt-10  gap-4">
                <h1 className="text-neutral-50 text-lg font-semibold">
                  Compare
                </h1>
                {menuData[2].items.map((item, idx) => (
                  <span key={idx} className="text-xs text-neutral-400 ">
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:flex flex-col  ">
              <div className="flex flex-col mt-20 gap-4">
                <h1 className="text-neutral-50 text-lg font-semibold">
                  Company
                </h1>
                {menuData[3].items.map((item, idx) => (
                  <span key={idx} className="text-xs text-neutral-400 ">
                    {item.name}
                  </span>
                ))}
              </div>
              <div className="flex flex-col mt-10 gap-4">
                <h1 className="text-neutral-50 text-lg font-semibold">
                  Connect
                </h1>
                {menuData[4].items.map((item, idx) => (
                  <span key={idx} className="text-xs text-neutral-400 ">
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:flex lg:flex-col ">
              <div className="flex flex-col mt-20 gap-4">
                <h1 className="text-neutral-50 text-lg font-semibold">
                  Partners
                </h1>
                {menuData[5].items.map((item, idx) => (
                  <span key={idx} className="text-xs text-neutral-400 ">
                    {item.name}
                  </span>
                ))}
              </div>
              <div className="flex flex-col mt-20 gap-4">
                <h1 className="text-neutral-50 text-lg font-semibold">
                  Support
                </h1>
                {menuData[6].items.map((item, idx) => (
                  <span key={idx} className="text-xs text-neutral-400 ">
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
