import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedBlogs, getImageUrl } from '../services/home.service';
import blogImg1 from '../assets/images/Vector (3).png';
import blogImg2 from '../assets/images/Vector (4).png';
import blogImg3 from '../assets/images/Vector (5).png';
import AboutFram from "../assets/images/AboutFrame.png"

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
    title: 'Refreshing Blends To Uplift The Spirit Of Ramadan With Sublime House Of Tea',
    slug: 'refreshing-blends-ramadan',
    categories: ['Lifestyle'],
    date: 'May 24, 2025',
    views: 325,
    excerpt:
      'During The Auspicious Month Of Ramadan, Muslims Around The Globe Eagerly Await The Opportunity For Self-Reflection, Spiritual Growth And Communal Gatherings.',
    image: blogImg1,
  },
  {
    id: 2,
    title: 'Tea-Riffic Treats: Discovering The Unique Gift Sets For Tea Enthusiasts',
    slug: 'tea-gift-sets',
    categories: ['Gifting'],
    date: 'April 14, 2025',
    views: 325,
    excerpt:
      'In India, Tea Is Not A Simple Beverage, But An Emotion With Complex Notes Of History, Flavor, Cultural Significance And Heritage. It Is An Emotion That Many In...',
    image: blogImg2,
  },
  {
    id: 3,
    title: 'Corporate Gifting Redefined: A Guide To Meaningful & Memorable Presents',
    slug: 'corporate-gifting',
    categories: ['Business'],
    date: 'June 18, 2025',
    views: 325,
    excerpt:
      'An Average Person Spends Around 90,000 Hours At Work Over A Lifetime. That\'s One-Third Of Your Life, Which Means A Conducive Workplace Environment That Fosters Growth...',
    image: blogImg3,
  },
];

const BlogSection: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(FALLBACK_POSTS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getFeaturedBlogs(3);
        if (response?.data && response.data.length > 0) {
          const posts: BlogPost[] = response.data.map((item: any) => {
            // item is expected to be from Strapi's response, so we type as any to avoid TS error
            const attributes = item.attributes || {};
            const imageUrl = attributes.image ? getImageUrl(attributes.image) : '';
            const categories = attributes.categories?.data?.map((cat: any) => cat.attributes?.name || '') || [];
            const publishedDate = attributes.publishedAt
              ? new Date(attributes.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
              : '';

            return {
              id: item.id,
              title: attributes.title || '',
              slug: attributes.slug || '',
              excerpt: attributes.excerpt || '',
              image: imageUrl,
              categories: categories.length > 0 ? categories : ['News'],
              date: publishedDate,
              views: 325, // TODO: Get from Strapi if available
            };
          });

          setBlogPosts(posts);
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        // Use fallback posts on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const displayPosts = blogPosts.length > 0 ? blogPosts : FALLBACK_POSTS;

  return (
    <section   className=" py-10 bg-[#f1e4b0] sm:py-14 lg:py-20 relative ">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16 relative">

       
        {/* Header */}
        <div className="flex   flex-col gap-4 sm:gap-5 md:flex-row md:items-center md:justify-between mb-8 sm:mb-12 px-2">


          <div className="space-y-2  mx-auto sm:space-y-3 text-center md:text-left">
            {/* LATEST UPDATES with Leaf Icon */}
            <div className="flex m  items-center  gap-2 justify-center md:justify-center">
              {/* <svg className="h-3.5 w-3.5 ml-32 sm:h-4 sm:w-4 text-[#B89B49]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg> */}
              <p style={{
                fontFamily: "'gotham', sans-serif",
                fontWeight: 100,

                fontSize: '12px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }} className="text-[10px] text-center w-fit  mx-auto sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.35em] text-black uppercase">
                LATEST UPDATES
              </p>
            </div>
            {/* Latest Blogs Title */}
            <h2 style={{
              fontFamily: "'gotham2', sans-serif",
              fontWeight: 100,

              fontSize: '38px',
              lineHeight: '100%',
              letterSpacing: '4%',
            }} className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#9a7523]">
            Latest  Blogs
            </h2>
          </div>
       
        </div>

        {/* Blog Cards Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className=" rounded-xl shadow-md overflow-hidden animate-pulse">
                <div className="w-full h-48 sm:h-52 bg-gray-200"></div>
                <div className="p-4 sm:p-5 lg:p-6 space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-5 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 relative">
             
          <button
            // onClick={handlePrev}
            // disabled={isAnimating}
            className="absolute -left-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#9a7522] hover:bg-[#9a7522] text-white flex items-center justify-center shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed -ml-2 sm:-ml-5"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path d="M5.50781 16.5198L13.7678 24.7798M5.50781 16.5198L13.7678 8.25978M5.50781 16.5198L19.9628 16.5198M27.5345 16.5198L24.0928 16.5198" stroke="#F6F0E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          <button
            // onClick={handleNext}
            // disabled={isAnimating}
            className="absolute -right-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#9a7522] hover:bg-[#9a7522] text-white flex items-center justify-center shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed -mr-2 sm:-mr-5"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path d="M27.5322 16.5198L19.2722 8.25977M27.5322 16.5198L19.2722 24.7798M27.5322 16.5198L13.0772 16.5198M5.50552 16.5198L8.94719 16.5198" stroke="#F6F0E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
            {displayPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-[#FFF7EA] rounded-xl overflow-hidden transition-all duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <Link
                  to={`/blogs/${post.slug}`}
                  className="block w-full overflow-hidden flex-shrink-0 relative"
                  style={{ height: '255.27px' }}
                >
                  <img
                    src={post.image || blogImg1}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-3 flex-grow">
                  {/* Date and Views */}
                  <div className="flex items-center gap-3 text-[11px] sm:text-xs text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium text-black">{post.date}</span>
                    </div>
                    {post.views !== undefined && (
                      <div className="flex items-center gap-1.5">
                        <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span className="font-medium text-black">{post.views}</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <Link to={`/blogs/${post.slug}`}>
                    <h3 style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '18px',
                  lineHeight: '150%',
                  letterSpacing: '0%',
                }} className="text-base sm:text-lg lg:text-xl font-bold text-[#b89b4a] leading-snug transition-colors line-clamp-2 min-h-[3rem] sm:min-h-[3.5rem]">
                      {post.title}
                    </h3>
                  </Link>

                  {/* Description */}
                  {post.excerpt && (
                    <p style={{
                  fontFamily: "'gotham-book', sans-serif",
                  fontWeight: 100,

                  fontSize: '14px',
                  lineHeight: '150%',
                  letterSpacing: '0%',
                }} className="text-xs sm:text-sm leading-relaxed text-black line-clamp-3 flex-grow min-h-[3rem]">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Read More Link */}
                  <div className="mt-auto pt-3 border-t border-gray-100">
                    <Link
                      to={`/blogs/${post.slug}`}
                      className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#9a7523] hover:text-black transition-colors uppercase"
                    >
                      READ MORE
                    </Link>
                  </div>
                </div>
              </article>
            ))}

          </div>
        )}



         {/* <div className=' block w-full mt-10 mx-auto'>
  
               <Link
            to="/blogs"
            className="flex mx-auto py-2  items-center justify-center bg-[#316763] text-white hover:bg-[#9A7522] transition-all active:scale-95 shadow-md hover:shadow-lg font-karla font-medium text-center"
            // style={{
            //   width: '158px',
            //   height: '35px',
            //   borderRadius: '3px',
            //   opacity: 1,
            //   fontSize: '14px',
            //   lineHeight: '100%',
            //   letterSpacing: '0.04em',
            // }}
            style={{
              fontFamily: "'gotham-book', sans-serif",
              paddingTop:"4px",
               paddingBottom:"4px",
              fontWeight: 100,
              width: '220px',
              height: '40px',
              borderRadius: '3px',
              letterSpacing: '0.04em',
              fontSize: '12px',
              lineHeight: '100%',
              // letterSpacing: '0%',
            }}
          >

            VIEW ALL ARTICLES
          </Link>
 </div> */}
      </div>
    </section>
  );
};

export default BlogSection;
