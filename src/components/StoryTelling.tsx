import React, { useEffect, useRef, useState } from "react";
import storyVideo from "../assets/video/storyVideo.mp4";
import logo from "../assets/images/white-logo.png";
import music from "../assets/video/music.mp3"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const storyData = [
  {
    sub: "Sublime House of Tea",
    title: "flavorful TEA",
    text: "Experience the calming essence of Sublime Green Tea — a gentle blend that refreshes the senses and nurtures well-being. it offers a smooth, natural taste with delicate aromas. Perfect for moments of relaxation, delivering pure, soothing flavour in every sip."
  },
  {
    sub: "Tales of Spice",
    title: "THE SPICE ROUTE",
    text: "Journey along the ancient spice routes where caravans carried treasures more precious than gold. Our curated selection of cinnamon, saffron, and other spices brings whispers of centuries-old traditions from the dunes of Rajasthan to the valleys of Kashmir."
  },
  {
    sub: " Golden Honey",
    title: "NATURES NECTAR",
    text: "Deep within untouched forests, where wildflowers bloom in abundance, our artisan beekeepers harvest liquid gold. Each jar of our raw, unprocessed honey captures the essence of pristine meadows and the dedication of countless bees."
  },
  {
    sub: "Dried Delights",
    title: "MOUNTAIN TREASURES",
    text: "From the sun-drenched orchards of Kashmir to the fertile valleys of Afghanistan, we source the finest almonds, walnuts, and dried fruits. Hand-picked and naturally dried, each morsel carries the warmth of mountain sunshine."
  }
];

const StoryTelling = () => {
  const logoRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const subHeadingRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
const [isMuted, setIsMuted] = useState(true);


  useEffect(() => {

    // Logo Animation (Top to Down)
    gsap.fromTo(
      logoRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
      }
    );

    // Heading + Subheading Stagger
    const tl = gsap.timeline();

    tl.fromTo(
      headingRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }
    ).fromTo(
      subHeadingRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      },
      "-=0.6" // overlap thoda sa
    );

    // Cards animation same rahegi
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          x: index % 2 === 0 ? 200 : -200,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });

  }, []);

const toggleSound = async () => {
  const video = videoRef.current;
  if (!video) return;

  try {
    if (video.muted) {
      video.muted = false;
      video.volume = 1;
      
      // important trick
      video.currentTime = video.currentTime;
      await video.play();

      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  } catch (err) {
    console.log("Playback error:", err);
  }
};




  return (
    <section className="relative w-full min-h-screen text-white">

      {/* Background Video */}
     <video

  autoPlay
  loop
  muted
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover"
>
  <source src={storyVideo} type="video/mp4" />

</video>
<audio   className="hidden" ref={videoRef} src={music} autoPlay loop muted={false} controls playsInline></audio>


      {/* <div className="absolute inset-0 bg-[#151d2151]"></div> */}

      <div className="relative container mx-auto px-6 pb-20  z-10">

        {/* Top Section */}  <div onClick={toggleSound} className="border h-fit  absolute top-12 left-10 w-fit p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8.625 17.65C8.625 19.224 7.365 20.5 5.813 20.5C4.259 20.5 3 19.224 3 17.65C3 16.077 4.26 14.801 5.813 14.801C7.366 14.801 8.625 16.076 8.625 17.65ZM8.625 17.65V5.462C8.625 4.942 9.019 4.508 9.534 4.461L19.909 3.505C20.0479 3.49232 20.1878 3.5088 20.3199 3.55341C20.452 3.59801 20.5733 3.66975 20.6761 3.76401C20.7788 3.85827 20.8607 3.97298 20.9165 4.10076C20.9723 4.22854 21.0007 4.36658 21 4.506V16.51C21 18.083 19.74 19.36 18.188 19.36C16.634 19.36 15.375 18.083 15.375 16.51C15.375 14.937 16.635 13.66 18.188 13.66C19.741 13.66 21 14.938 21 16.512" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className="text-center mb-40">
          <img
            ref={logoRef}
            src={logo}
            alt="Logo"
            className="mx-auto mb-6 w-64"
          />


          <div >


            <h2
              ref={headingRef}
              style={{ fontFamily: "gotham-book" }}
              className="text-4xl md:text-3xl font-bold mb-4"
            >
              A JOURNEY OF FLAVOURS
            </h2>

            <p
              ref={subHeadingRef}
              style={{ fontFamily: "gotham-light" }}
              className="max-w-xl mx-auto text-[16px] text-gray-200"
            >
              Embark on a sensory voyage through ancient tea gardens, exotic spice routes, golden apiaries, and sun-kissed orchards. Every sip and bite tells a story of heritage and craft.
            </p>
          </div>
        </div>

        {/* Story Cards */}
        <div className="space-y-16">
          {storyData.map((item, index) => (
            <div
              key={index}
              className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"
                }`}
            >
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                className="backdrop-blur flex-col flex justify-center items-center px-5 bg-black/10 py-4 rounded-2xl max-w-xl"
              >
                <h4 className="text-sm uppercase tracking-widest text-gray-300 mb-2">
                  {item.sub}
                </h4>

                <h3
                  style={{ fontFamily: "gotham-book" }}
                  className="text-2xl uppercase md:text-2xl font-semibold mb-4"
                >
                  {item.title}
                </h3>

                <p
                  style={{ fontFamily: "gotham-light" }}
                  className="text-gray-200 text-lg text-center leading-relaxed"
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StoryTelling;
