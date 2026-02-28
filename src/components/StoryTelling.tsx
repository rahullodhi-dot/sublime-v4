import React, { useEffect, useRef, useState } from "react";
// import storyVideo from "../assets/video/storyVideo.mp4";
import logo from "../assets/images/goldLogo.png"
import newStory from "../assets/images/newStory.png"
import insta2 from "../assets/images/insta (2).png"
import youtube from "../assets/images/youtube.png"
import linkedin from "../assets/images/linkedin.png"
import fb from "../assets/images/fb.png"
// import music from "../assets/video/music.mp3"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackToTop from "./ui/BackToTop";

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
  // const videoRef = useRef<HTMLVideoElement>(null);
  // const [isMuted, setIsMuted] = useState(true);


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

  // const toggleSound = async () => {
  //   const video = videoRef.current;
  //   if (!video) return;

  //   try {
  //     if (video.muted) {
  //       video.muted = false;
  //       video.volume = 1;

  //       // important trick
  //       video.currentTime = video.currentTime;
  //       await video.play();

  //       setIsMuted(false);
  //     } else {
  //       video.muted = true;
  //       setIsMuted(true);
  //     }
  //   } catch (err) {
  //     console.log("Playback error:", err);
  //   }
  // };




  return (
    <section className="w-full min-h-screen relative text-white overflow-hidden">
      <BackToTop />

      {/* Image First */}
      <img
        src={newStory}
        alt="story"
        className=" h-[100%] w-full object-contain  block"
      />

      {/* Content Section */}
      <div className="absolute inset-0   ">
        <div className="container flex flex-col  border h-full max-w-[1400px] mx-auto px-6">

          {/* Top Content */}
          <div className="text-center px-6   max-w-3xl flex flex-col justify-center items-center  ml-auto">
            <img src={logo} alt="" className="max-w-[280px]" />
            <div className="max-w-lg ">
              <h2 style={{ fontFamily: "gotham2",lineHeight:"100%" }} className="text-2xl tracking-wider text-black font-bold mb-4">
                A JOURNEY OF FLAVOURS
              </h2>
               <div className={`h-[2px] w-12 bg-[#9a7523] mx-auto` }></div>
              <p style={{ fontFamily: "gotham-book" }} className="text-black text-lg tracking-wider">
                Embark on a sensory voyage through ancient tea gardens, exotic spice routes, golden apiaries, and sun-kissed orchards. Every sip and bite tells a story of heritage and craft.
              </p>
            </div>
          </div>

          {/* Story Cards */}
          <div className="flex flex-col flex-1 gap-0 px-6 pt-20  text-black justify-end">

            {storyData.map((item, index) => {
              const isLast = index === storyData.length - 1;

              return (
                <div
                  key={index}
                  className={`
          flex flex-1  pt-12    mt-3  
          ${isLast
                      ? "justify-center items-end py-6"
                      : index % 2
                        ? "justify-end items-end "
                        : "justify-start items-end"
                    }
        `}
                >
                  <div className={`px-6 rounded-2xl ${isLast ? "text-center mt-3" : " text-start "}  max-w-xl`}>
                    <div className="">
                      <h4 style={{ fontFamily: "gotham-light" }} className="text-xs">{item.sub}</h4>
                      <h3 style={{lineHeight:"100%"}} className="text-2xl  uppercase">{item.title} </h3>
                      <div className={`h-[2px] w-12 bg-[#9a7523] ${isLast  && "mx-auto"}` }></div>
                    </div>
                    <p style={{ fontFamily: "gotham-book" }} className="tracking-[0.03rem] text-lg">{item.text}</p>
                  </div>
                </div>
              );
            })}

            <div className="flex  backdrop: mt-0   py-3 gap-2">
              <div className="flex gap-2 px-4">
                <img src={fb} alt="" />
                <img src={insta2} alt="" />
                <img src={linkedin} alt="" />
                <img src={youtube} alt="" />
              </div>
              <p style={{ fontFamily: "gotham-book" }} className="flex-1  text-lg text-black text-center">© 2026 Sublime House of Tea | All rights reserved </p>
            </div>

          </div>

          {/* social icons and copyrights */}



        </div>
      </div>

    </section>
  );
};

export default StoryTelling;
