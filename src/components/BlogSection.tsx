import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getFeaturedBlogs, getImageUrl } from "../services/home.service";
import blogImg1 from "../assets/images/Vector (3).png";
import blogImg2 from "../assets/images/Vector (4).png";
import blogImg3 from "../assets/images/Vector (5).png";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  image?: string;
  categories: string[];
  date: string;
  views?: number;
}

const FALLBACK_POSTS: BlogPost[] = [
  {
    id: 1,
    title:
      "Refreshing Blends To Uplift The Spirit Of Ramadan With Sublime House Of Tea",
    slug: "refreshing-blends-ramadan",
    categories: ["Lifestyle"],
    date: "May 24, 2025",
    views: 325,
    excerpt:
      "During The Auspicious Month Of Ramadan, Muslims Around The Globe Eagerly Await The Opportunity For Self-Reflection...",
    image: blogImg1,
  },
  {
    id: 2,
    title:
      "Tea-Riffic Treats: Discovering The Unique Gift Sets For Tea Enthusiasts",
    slug: "tea-gift-sets",
    categories: ["Gifting"],
    date: "April 14, 2025",
    views: 325,
    excerpt:
      "In India, Tea Is Not A Simple Beverage, But An Emotion With Complex Notes Of History...",
    image: blogImg2,
  },
  {
    id: 3,
    title:
      "Corporate Gifting Redefined: A Guide To Meaningful & Memorable Presents",
    slug: "corporate-gifting",
    categories: ["Business"],
    date: "June 18, 2025",
    views: 325,
    excerpt:
      "An Average Person Spends Around 90,000 Hours At Work Over A Lifetime...",
    image: blogImg3,
  },
];

const BlogSection: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(FALLBACK_POSTS);
  const [isLoading, setIsLoading] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getFeaturedBlogs(3);
        if (response?.data?.length) {
          const posts = response.data.map((item: any) => {
            const attr = item.attributes || {};
            return {
              id: item.id,
              title: attr.title || "",
              slug: attr.slug || "",
              excerpt: attr.excerpt || "",
              image: attr.image ? getImageUrl(attr.image) : "",
              categories: ["News"],
              date: attr.publishedAt
                ? new Date(attr.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "",
              views: 325,
            };
          });
          setBlogPosts(posts);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 5
    );
  };

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = el.clientWidth;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const displayPosts = blogPosts.length ? blogPosts : FALLBACK_POSTS;

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#f1e4b0]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative">

        {/* Header */}
        <div className="text-center mb-10">
          <p style={{
          fontFamily: "'gotham', sans-serif",
          fontWeight: 100,

          fontSize: '12px',
          lineHeight: '100%',
          letterSpacing: '0%',
        }} className="text-xs tracking-[0.3em] uppercase text-black">
            LATEST UPDATES
          </p>
          <h2 style={{fontFamily:"gotham-book"}} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#9a7523] mt-2">
            Latest Blogs
          </h2>
        </div>

        {/* Arrows */}
        <div className="relative">

        
            <button
              onClick={() => scroll("left")}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-30
                         w-10 h-10 sm:w-12 sm:h-12
                         bg-[#9a7522] rounded-full
                         flex items-center justify-center shadow-lg"
            >
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path
                  d="M5.50781 16.5198L13.7678 24.7798M5.50781 16.5198L13.7678 8.25978M5.50781 16.5198L19.9628 16.5198M27.5345 16.5198L24.0928 16.5198"
                  stroke="#F6F0E8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
    


            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30
                         w-10 h-10 sm:w-12 sm:h-12
                         bg-[#9a7522] rounded-full
                         flex items-center justify-center shadow-lg"
            >
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path
                  d="M27.5322 16.5198L19.2722 8.25977M27.5322 16.5198L19.2722 24.7798M27.5322 16.5198L13.0772 16.5198M5.50552 16.5198L8.94719 16.5198"
                  stroke="#F6F0E8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
  

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-2"
          >
            {displayPosts.map((post) => (
              <article
                key={post.id}
                className="snap-start flex-shrink-0
                           w-full sm:w-1/2 lg:w-[450px]
                           bg-[#FFF7EA] rounded-xl
                           overflow-hidden flex flex-col"
              >
                <Link
                  to={`/blogs/${post.slug}`}
                  className="block w-full relative"
                  style={{ height: "255.27px", aspectRatio: 3 / 4 }}
                >
                  <img
                    src={post.image || blogImg1}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </Link>

                <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-3 flex-grow">
                  <div className="text-xs flex justify-between items-center text-gray-600">
                    {post.date} <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="57" height="21" viewBox="0 0 57 21" fill="none">
<path d="M53.532 0.358398H2.84673C1.47301 0.358398 0.359375 1.47596 0.359375 2.85455V17.9257C0.359375 19.3043 1.47301 20.4219 2.84673 20.4219H53.532C54.9057 20.4219 56.0193 19.3043 56.0193 17.9257V2.85455C56.0193 1.47596 54.9057 0.358398 53.532 0.358398Z" fill="#F6F1E8" stroke="#9A7522" stroke-width="0.7"/>
<path d="M2.84654 0.5H22.0882V20.2809H2.84654C1.55031 20.2809 0.5 19.2269 0.5 17.926V2.85487C0.5 1.55404 1.55031 0.5 2.84654 0.5Z" fill="#9A7522" stroke="#9A7522"/>
<path d="M11.2891 6.62207C15.7841 6.62207 17.8594 10.7864 17.8594 10.7864C17.8594 10.7864 15.7841 14.9508 11.2891 14.9508C6.79403 14.9508 4.71875 10.7864 4.71875 10.7864C4.71875 10.7864 6.79403 6.62207 11.2891 6.62207Z" stroke="white" stroke-width="0.929" stroke-linejoin="round"/>
<path d="M13.254 10.7868C13.2596 11.0571 13.2117 11.3256 13.1132 11.5771C13.0146 11.8286 12.8663 12.0575 12.6777 12.2506C12.49 12.4437 12.2647 12.5972 12.0169 12.7018C11.7681 12.8073 11.5016 12.8609 11.2332 12.8609C10.9638 12.8609 10.6972 12.8073 10.4485 12.7018C10.2007 12.5972 9.97537 12.4437 9.78765 12.2506C9.59899 12.0575 9.4507 11.8286 9.35214 11.5771C9.25359 11.3256 9.20575 11.0571 9.21138 10.7868C9.21138 10.2489 9.42443 9.73274 9.80363 9.35219C10.1828 8.97165 10.6972 8.75781 11.2332 8.75781C11.7691 8.75781 12.2835 8.97165 12.6627 9.35219C13.0419 9.73274 13.254 10.2489 13.254 10.7868Z" stroke="white" stroke-width="0.929" stroke-linejoin="round"/>
<path d="M31.5296 14.2941C31.1766 14.2941 30.8349 14.2451 30.5045 14.1471C30.1779 14.0454 29.8832 13.8984 29.6204 13.7063C29.3614 13.5103 29.1567 13.2692 29.0065 12.9829C28.8563 12.6965 28.7812 12.3649 28.7812 11.9882H29.6823C29.6899 12.3122 29.7762 12.5854 29.9414 12.8077C30.1066 13.03 30.3262 13.1976 30.6003 13.3107C30.8781 13.4237 31.1879 13.4802 31.5296 13.4802C32.0552 13.4802 32.4625 13.3521 32.7516 13.0959C33.0407 12.8397 33.1852 12.5194 33.1852 12.1351C33.1852 11.8902 33.1252 11.6735 33.005 11.4851C32.8849 11.2968 32.6934 11.1498 32.4306 11.0443C32.1715 10.9351 31.8299 10.8804 31.4056 10.8804H30.6059V10.1796H31.1466C31.6947 10.1796 32.1265 10.0704 32.4419 9.85182C32.7572 9.63329 32.9149 9.33185 32.9149 8.94753C32.9149 8.60843 32.7873 8.32209 32.532 8.08849C32.2767 7.85489 31.9125 7.73808 31.4394 7.73808C31.0753 7.73808 30.7505 7.81345 30.4651 7.96416C30.1798 8.11111 29.9865 8.38237 29.8851 8.77799H28.984C29.0441 8.33716 29.1867 7.9811 29.412 7.70982C29.6373 7.43854 29.9226 7.24262 30.268 7.12205C30.6134 6.99771 30.9964 6.93555 31.4169 6.93555C31.8862 6.93555 32.3048 7.01845 32.6727 7.18423C33.0407 7.35001 33.3298 7.57795 33.54 7.86807C33.754 8.15819 33.861 8.49165 33.861 8.86843C33.861 9.24144 33.754 9.56169 33.54 9.8292C33.3298 10.0929 33.0238 10.2964 32.6221 10.4396C33.0689 10.5677 33.4331 10.7787 33.7147 11.0726C34 11.3665 34.1427 11.7433 34.1427 12.2029C34.1427 12.6098 34.0356 12.9715 33.8216 13.288C33.6114 13.6008 33.311 13.8476 32.9206 14.0284C32.5301 14.2055 32.0664 14.2941 31.5296 14.2941ZM35.5599 14.1584V13.1072C35.5599 12.6965 35.6256 12.3536 35.757 12.0786C35.8922 11.8035 36.08 11.5756 36.3202 11.3947C36.5643 11.2139 36.8515 11.0575 37.1819 10.9256L38.5785 10.3718C38.9389 10.2248 39.2093 10.0364 39.3895 9.80661C39.5697 9.57677 39.6598 9.2904 39.6598 8.94753C39.6598 8.58583 39.534 8.29007 39.2825 8.06023C39.0347 7.8304 38.6874 7.71548 38.2406 7.71548C37.7976 7.71548 37.4334 7.81156 37.1481 8.00372C36.8665 8.19211 36.705 8.47658 36.6638 8.85713H35.6838C35.7101 8.44644 35.8303 8.0979 36.0443 7.81155C36.262 7.5252 36.5567 7.30855 36.9284 7.16161C37.3001 7.01089 37.7338 6.93555 38.2294 6.93555C38.6837 6.93555 39.091 7.0241 39.4515 7.20119C39.8119 7.37827 40.0953 7.62318 40.3018 7.93591C40.5121 8.24486 40.6172 8.60092 40.6172 9.00408C40.6172 9.36955 40.5496 9.68791 40.4145 9.95919C40.2793 10.2305 40.0859 10.4641 39.8344 10.66C39.5866 10.8559 39.2918 11.0236 38.9502 11.163L37.5198 11.7395C37.1593 11.8789 36.889 12.0466 36.7088 12.2425C36.5286 12.4384 36.4385 12.6927 36.4385 13.0055V13.3445H40.5496V14.1584H35.5599ZM44.5378 14.2941C44.091 14.2941 43.6836 14.213 43.3157 14.051C42.9478 13.889 42.6531 13.6516 42.4316 13.3389C42.21 13.0224 42.0974 12.6362 42.0936 12.1803H42.9722C42.9722 12.6098 43.1224 12.9339 43.4227 13.1524C43.7268 13.3709 44.0985 13.4802 44.5378 13.4802C45.0446 13.4802 45.4426 13.3257 45.7317 13.0168C46.0246 12.704 46.171 12.3197 46.171 11.8638C46.171 10.952 45.5853 10.4961 44.4139 10.4961H42.5217L42.8258 7.05987H46.7454V7.86243H43.5353L43.7156 7.55724L43.479 10.0327L43.3664 9.93093C43.5466 9.88949 43.7512 9.86123 43.9802 9.84616C44.2093 9.82732 44.4139 9.8179 44.5941 9.8179C45.36 9.8179 45.9664 9.98933 46.4132 10.3322C46.8599 10.6751 47.0833 11.1856 47.0833 11.8638C47.0833 12.3235 46.9801 12.7379 46.7736 13.1072C46.5671 13.4727 46.2723 13.7628 45.8894 13.9776C45.5102 14.1886 45.0596 14.2941 44.5378 14.2941Z" fill="#9A7522"/>
</svg>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#b89b4a] line-clamp-2">
                    {post.title}
                  </h3>

                  {post.excerpt && (
                    <p className="text-sm text-black line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                  )}

                  <Link
                    to={`/blogs/${post.slug}`}
                    className="mt-auto text-sm font-semibold text-[#9a7523] uppercase"
                  >
                    READ MORE
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
