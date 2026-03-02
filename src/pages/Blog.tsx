import { useMemo } from "react";
import { useParams } from "react-router-dom";
import blogImg1 from "../assets/images/Vector (3).png";
import blogImg2 from "../assets/images/Vector (4).png";
import blogImg3 from "../assets/images/Vector (5).png";

interface StaticBlogPost {
    slug: string;
    title: string;
    date: string;
    image: string;
    content: string[];
}

const STATIC_BLOGS: StaticBlogPost[] = [
    {
        slug: "refreshing-blends-ramadan",
        title: "Refreshing Blends to Uplift the Spirit of Ramadan with Sublime House of Tea",
        date: "May 24, 2025",
        image: blogImg1,
        content: [
            "During the auspicious month of Ramadan, Muslims around the globe eagerly await the opportunity for self-reflection, spiritual growth and communal gatherings. In addition to the fasting and prayers, people come together to share a tradition of breaking fast, or iftar, with loved ones and friends.",
            "A sacred period, during this time of spiritual introspection, it is important to focus on proper nourishment of the body and mind with rejuvenating refreshments. Celebrating the month of Ramadan, Sublime House of Tea brings you exquisite range of teas that elevate your iftar gatherings, one sip at a time.  ",
            "One sample product text includes Rose in Bloom as requested.",
        ],
    },
    {
        slug: "tea-gift-sets",
        title: "Tea-Riffic Treats: Unique Gift Sets For Tea Enthusiasts",
        date: "April 14, 2025",
        image: blogImg2,
        content: [
            "During the auspicious month of Ramadan, Muslims around the globe eagerly await the opportunity for self-reflection, spiritual growth and communal gatherings. In addition to the fasting and prayers, people come together to share a tradition of breaking fast, or iftar, with loved ones and friends.",
            "A sacred period, during this time of spiritual introspection, it is important to focus on proper nourishment of the body and mind with rejuvenating refreshments. Celebrating the month of Ramadan, Sublime House of Tea brings you exquisite range of teas that elevate your iftar gatherings, one sip at a time.  ",
            "One sample product text includes Rose in Bloom as requested.",
        ],
    },
    {
        slug: "corporate-gifting",
        title: "Corporate Gifting Redefined: Meaningful & Memorable Presents",
        date: "June 18, 2025",
        image: blogImg3,
        content: [
            "During the auspicious month of Ramadan, Muslims around the globe eagerly await the opportunity for self-reflection, spiritual growth and communal gatherings. In addition to the fasting and prayers, people come together to share a tradition of breaking fast, or iftar, with loved ones and friends.",
            "A sacred period, during this time of spiritual introspection, it is important to focus on proper nourishment of the body and mind with rejuvenating refreshments. Celebrating the month of Ramadan, Sublime House of Tea brings you exquisite range of teas that elevate your iftar gatherings, one sip at a time.  ",
            "One sample product text includes Rose in Bloom as requested.",
        ],
    },
];

const PRODUCT_ITEMS = [
    {
        id: 1,
        title: "Rose in Bloom",
        image: blogImg1,
        description: "Imagine the sweet scent of blooming roses surrounding you as you take your first sip of tea after a day of fasting. Sublime's Rose in Bloom tea is just that—a beautiful combination of black tea and the delicate aroma of roses.Amidst the hubbub of Ramadan’s preparations, this revitalizing brew provides a much-needed moment of tranquility. Have it hot or cold with your iftar meals, and be rest assured, the Rose of Bloom will be a definite hit! ",
    },
    {
        id: 2,
        title: "Citrus Morning",
        image: blogImg2,
        description: "Sublime's Mellow Mango tea encapsulates the soul of this popular fruit with its concoction made up of mango chunks and black tea leaves. Whether served hot for comfort sips or cold brewed as a refreshing summer drink, this blend is bound to evoke a sense of nostalgia. And what’s better, this tea comes with low caffeine content, making it an ideal choice for anyone looking for a moment of calm after a long day of fasting.  ",
    },
    {
        id: 3,
        title: "Spiced Evening",
        image: blogImg3,
        description: "Sublime’s Soothing Strawberry tea is your delicious guilty pleasure that is also healthy for you. This caffeine-free mixture contains dried strawberries and black tea leaves that burst with the taste of natural sweetness, as well as vitamins and antioxidants in abundance, making it ideal for supplementing lost energy during Ramadan.",
    },
];

const CATEGORY_BUTTONS = [
    "All Categories",
    "Lifestyle",
    "Gifting",
    "Wellness",
    "Herbal",
    "Tea Guide",
];

const Blog = () => {
    const { slug } = useParams();

    const activeBlog = useMemo(() => {
        if (!slug) return STATIC_BLOGS[0];
        return STATIC_BLOGS.find((post) => post.slug === slug) ?? STATIC_BLOGS[0];
    }, [slug]);

    return (
        <section className="bg-[#f6f1e8]  max-w-[1600px] py-10 sm:py-14 lg:py-16">
            <div className=" max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">
                    <div className="space-y-8">
                        <div className="bg-[#FFF7EA] rounded-xl p-5 sm:p-7 lg:p-8">


                            <p className="text-sm text-gray-600 mb-4">{activeBlog.date}</p>
                            <h1 style={{fontFamily:"gotham-book"}} className="text-2xl sm:text-3xl font-bold text-[#9a7523] mb-5">
                                {activeBlog.title}
                            </h1>

                            <img
                                src={activeBlog.image}
                                alt={activeBlog.title}
                                className="w-full h-[260px] sm:h-[360px] object-cover rounded-xl mb-6"
                            />

                            <div style={{fontFamily:"gotham-book"}} className="space-y-4 text-[#2f2f2f] leading-7 text-sm sm:text-base">
                                {activeBlog.content.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        <div className=" rounded-xl p-5 sm:p-7 lg:p-8">
                            {/* <h3 className="text-2xl font-bold text-[#9a7523] mb-6">Products</h3> */}
                            <div className="">
                                {PRODUCT_ITEMS.map((product) => (
                                    <div key={product.id} className="w-full h-full">

                                        {/* Product Title */}
                                        <h4  style={{fontFamily:"gotham-book"}}className="text-lg font-semibold text-[#9a7523] mb-3">
                                            {product.title}
                                        </h4>

                                        {/* Product Image */}
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-72 h-full object-contain mb-4"
                                        />

                                        {/* Product Description */}
                                        <p  style={{fontFamily:"gotham-book"}} className="text-sm text-gray-600 leading-6">
                                            {product.description}
                                        </p>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <aside className="bg-[#FFF7EA] rounded-xl p-5 sm:p-7 lg:p-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#9a7523] mb-4">
                            All Categories
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {CATEGORY_BUTTONS.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    className="px-4 py-2 rounded-md border bg-gray-50 border-[#9a7523] text-[#9a7523] text-sm font-medium hover:bg-[#9a7523] hover:text-white transition-colors"
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        {/* 
            <div className="mt-7 space-y-4">
              {PRODUCT_ITEMS.map((product) => (
                <div
                  key={`side-${product.id}`}
                  className="flex gap-3 items-center border border-[#ead9b4] rounded-lg p-3 bg-white"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#9a7523]">{product.title}</p>
                    <p className="text-xs text-gray-600">{product.description}</p>
                  </div>
                </div>
              ))}
            </div> */}
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Blog;