// import React, { useEffect, useState } from 'react';
// import { getWhyChooseUsFeatures } from '../services/homepage.service';
// import { getStrapiImageUrl } from '../config/strapi.config';
// import AboutFrame from "../assets/images/AboutFrame.png"
// import mountain from "../assets/images/mountain.png"
// import ladies from "../assets/images/ladies.jpg"
// import grass from "../assets/images/grass.jpg"
// import greenVision from "../assets/images/greenVision.jpg"
// import vision from "../assets/images/vision.jpg"
// interface Feature {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   order: number;
// }

// // Fallback features if Strapi is not available
// const FALLBACK_FEATURES: Feature[] = [
//   {
//     id: 1,
//     title: 'Wellness Enhancing',
//     description: 'A lifestyle designed to elevate your body, mind, and spirit.',
//     image: ladies,
//     order: 1,
//   },
//   {
//     id: 2,
//     title: 'Direct From Growers',
//     description: 'From the hands that harvest to yours — pure, authentic, and direct.',
//     image:grass,
//     order: 2,
//   },
//   {
//     id: 3,
//     title: 'Sourced Fresh in Small Batches',
//     description: 'Crafted in small batches to ensure unmatched freshness and quality.',
//     image: greenVision,
//     order: 3,
//   },
//   {
//     id: 4,
//     title: 'Lead By Visionaries',
//     description: 'Shaped By Leaders who believed in innovation and progress.',
//     image: vision,
//     order: 4,
//   },
// ];

// const WhyChooseUsSection: React.FC = () => {
//   const [features, setFeatures] = useState<Feature[]>(FALLBACK_FEATURES);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchFeatures = async () => {
//       try {
//         const response = await getWhyChooseUsFeatures();
//         if (response?.data && response.data.length > 0) {
//           const featuresData: Feature[] = response.data.map((item: any) => {
//             // Strapi v5 format - handle image (can be object or direct)
//             let imageUrl = '';
//             if (item.image) {
//               if (typeof item.image === 'string') {
//                 imageUrl = getStrapiImageUrl(item.image);
//               } else if (item.image.url) {
//                 imageUrl = getStrapiImageUrl(item.image.url);
//               }
//             }

//             return {
//               id: item.id,
//               title: item.title || '',
//               description: item.description || '',
//               image: imageUrl,
//               order: item.order || 0,
//             };
//           }).sort((a, b) => a.order - b.order);

//           setFeatures(featuresData);
//           console.log('Why Choose Us features loaded:', featuresData);
//         }
//       } catch (error) {
//         console.error('Error fetching why choose us features:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchFeatures();
//   }, []);

//   const displayFeatures = features.length > 0 ? features : FALLBACK_FEATURES;

//   // Background image style
//   const bgStyle = {
//     backgroundImage: `url(${AboutFrame})`,
//     backgroundColor: '#f6f2e3',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat'
//   };

//   return (
//    <section
//   className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden"
//   style={bgStyle}
// >
//   {/* Background image layer */}
//   <div
//     style={{ backgroundImage: `url(${mountain})` }}
//     className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
//   />

//   {/* Optional dark/light overlay tint (remove if not needed) */}
//   {/* <div className="absolute inset-0 bg-black/20 z-0" /> */}

//   {/* Content Wrapper */}
//   <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">

//     {/* Section Header */}
//     <div className="text-center mb-8 sm:mb-10 lg:mb-12">
//       <p
//         style={{
//           fontFamily: "'gotham2', sans-serif",
//           fontWeight: 100,
//           fontSize: '18px',
//           lineHeight: '100%',
//           letterSpacing: '0%',
//         }}
//         className="text-black text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 font-karla font-semibold"
//       >
//         AWESOME PRODUCTS
//       </p>

//       <h2
//         style={{
//           fontFamily: "'gotham', sans-serif",
//           fontWeight: 100,
//           fontSize: '38px',
//           lineHeight: '100%',
//           letterSpacing: '0%',
//         }}
//         className="text-[#B89B49] text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-lora font-medium leading-tight mb-4 sm:mb-6"
//       >
//         Why Choose Us
//       </h2>

//       <p
//         style={{
//           fontFamily: "'gotham2', sans-serif",
//           fontWeight: 100,
//           fontSize: '18px',
//           lineHeight: '100%',
//           letterSpacing: '0%',
//         }}
//         className="text-[#1A302A] text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-4"
//       >
//         Sublime House of Tea was born with a vision to redefine tea drinking into an elevated sublime tea experience. Through meticulous sourcing, blending, and crafting.
//       </p>
//     </div>

//     {/* Timeline + Features */}
//     {isLoading ? (
//       <div className="flex justify-center items-center py-12">
//         <div className="w-16 h-16 border-4 border-[#316763] border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     ) : (
//       <>
//         {/* Timeline */}
//         <div className="hidden lg:block relative">
//           <div className="absolute top-[10px] left-0 right-0 h-[2px] bg-[#B99F66] z-0"></div>

//           <div className="absolute top-[10px] -left-0 -translate-y-1/2 z-10">
//             <div className="w-5 h-5 rounded-full border-[3px] bg-[#B99F66] border-[#B99F66] shadow-md"></div>
//           </div>

//           <div className="absolute top-[10px] right-0 -translate-y-1/2 z-10">
//             <div className="w-5 h-5 rounded-full border-[3px] bg-[#B99F66] border-[#B99F66] shadow-md"></div>
//           </div>

//           <div className="relative grid grid-cols-4 gap-6 lg:gap-8 mb-0">
//             {displayFeatures.map((feature, index) => (
//               <div key={`dot-${feature.id}`} className="relative flex flex-col items-center z-10">
//                 <div
//                   className={`w-6 h-6 rounded-full border-[3px] transition-all duration-300 ${
//                     index === displayFeatures.length - 1
//                       ? 'bg-[#B99F66] border-[#B99F66] shadow-lg shadow-[#B99F66]/30'
//                       : 'bg-[#B99F66] border-[#B99F66] shadow-md'
//                   }`}
//                 ></div>
//                 <div
//                   className={`w-[2px] ${
//                     index === displayFeatures.length - 1
//                       ? 'bg-[#B99F66]'
//                       : 'bg-[#B99F66]'
//                   }`}
//                   style={{ height: '48px' }}
//                 ></div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//           {displayFeatures.map((feature) => (
//             <div
//               key={feature.id}
//               className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
//             >
//               <div className="w-full h-32 sm:h-36 lg:h-40 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
//                 <img
//                   src={feature.image}
//                   alt={feature.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   loading="lazy"
//                   onError={(e) => {
//                     const target = e.target;
//                     target.src =
//                       'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80';
//                   }}
//                 />
//               </div>

//               <div className="p-5 sm:p-6 text-center">
//                 <h3
//                   style={{
//                     fontFamily: "'gotham', sans-serif",
//                     fontWeight: 100,
//                     fontSize: '18px',
//                     lineHeight: '100%',
//                     letterSpacing: '0%',
//                   }}
//                   className="text-[#B99F66] text-lg sm:text-xl font-lora font-semibold mb-3 leading-tight"
//                 >
//                   {feature.title}
//                 </h3>

//                 <p
//                   style={{
//                     fontFamily: "'gotham2', sans-serif",
//                     fontWeight: 100,
//                     fontSize: '18px',
//                     lineHeight: '100%',
//                     letterSpacing: '0%',
//                   }}
//                   className="text-gray-600 text-sm sm:text-base font-karla leading-relaxed"
//                 >
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </>
//     )}
//   </div>
// </section>

//   );
// };

// export default WhyChooseUsSection;






// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { Sprout, Filter, Package, Coffee } from 'lucide-react';
// import hanging from "../assest/hanging.png";

// const STEPS = [
//   {
//     icon: Sprout,
//     title: "Wellness Enhancing",
//     desc: "A lifestyle designed to elevate your body, mind, and spirit."
//   },
//   {
//     icon: Filter,
//     title: "Direct from Growers",
//     desc: "From the hands that harvest to yours-pure, authentic, and direct."
//   },
//   {
//     icon: Package,
//     title: "Sourced Fresh in Small Batches",
//     desc: "Crafted in small batches to ensure unmatched freshness and quality."
//   },
//   {
//     icon: Coffee,
//     title: "Proudly Women Led",
//     desc: "Proudly a women-led brand, built on passion, purpose, and perseverance."
//   },
// ];

// const renderLetters = (text: string, className: string = "") =>
//   text.split('').map((char, index) => (
//     <span key={index} className={`inline-block ${className}`}>
//       {char === ' ' ? '\u00A0' : char}
//     </span>
//   ));

// const StepCard: React.FC<{ step: typeof STEPS[0]; index: number }> = ({ step, index }) => {
//   return (
//     <div 

//     style={{top:index == 0 ? "-100px" : index === 1 ? "-120px" : index === 2 ? "-40px" : "-80px"}}

//     className="step-card group cursor-pointer transition-all duration-500 flex flex-col items-center text-center px-4 py-8 relative z-10 opacity-0 hover:scale-[1.05] ">
//       <div className="w-full flex flex-col items-center mb-10" style={{ transform: 'translateZ(10px)' }}>
//         <span className="font-serif text-gold text-xl tracking-widest italic opacity-0 step-numeral"></span>
//       </div>

//       <div className="relative mb-10 hover:shadow-[0_0_20px_rgba(200,169,126,0.5),0_0_40px_rgba(200,169,126,0.5),0_0_60px_rgba(200,169,126,0.5)] rounded-full hover:scale-110 transition-all duration-500 ">
//         <div className="step-icon-wrapper w-32 h-32 rounded-full border border-stone/60 flex items-center justify-center relative z-[50] bg-[#FDFCF8] shadow-sm transition-all duration-500 origin-center">
//           <span className="absolute z-[-1] inset-0 rounded-full bg-white opacity-20 scale-75 group-hover:scale-110 group-hover:opacity-0 transition-all duration-[900ms] ease-out" />
//           <step.icon className="step-icon w-16 h-16 text-gold hover-bg-red-600" strokeWidth={1.2} />
//         </div>

//         <div className="absolute inset-0 -m-3 border border-dotted border-gold/40 rounded-full opacity-0 step-bloom"></div>
//       </div>

//       <div className="step-text-content opacity-0">
//         <h3 className="font-gotham text-xl  text-forest mb-4 group-hover:text-gold-dim transition-colors duration-500">{step.title}</h3>
//         <p className="text-earth/70 text-xs leading-relaxed font-gotham max-w-[240px] mx-auto text-balance">
//           {step.desc}
//         </p>
//       </div>
//     </div>
//   );
// };

// export const ProcessSection: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const pathRef = useRef<SVGPathElement>(null);
//   const headerRef = useRef<HTMLDivElement>(null);
//   const labelRef = useRef<HTMLSpanElement>(null);
//   const svgWrapperRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {

//       const cards = gsap.utils.toArray<HTMLElement>(".step-card");

//       gsap.set(cards, { opacity: 0, y: 80 });
//       gsap.set(".step-icon-wrapper", { opacity: 0 });
//       gsap.set(".step-text-content, .step-numeral", { opacity: 0, y: 14 });

//       if (pathRef.current) {
//         const len = pathRef.current.getTotalLength();
//         gsap.set(pathRef.current, {
//           strokeDasharray: "6,6",
//           strokeDashoffset: len,
//           opacity: 0.6,
//         });
//       }

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 70%",
//           end: "+=65%",
//           scrub: 0.6,
//         }
//       });

//       tl.fromTo(labelRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 });
//       tl.fromTo(".process-char", { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.04, duration: 1 }, "-=0.3");

//       if (pathRef.current)
//         tl.to(pathRef.current, { strokeDashoffset: 0, duration: 2 }, "-=0.5");

//       cards.forEach((card, i) => {
//         const iconWrap = card.querySelector(".step-icon-wrapper");
//         const bloom = card.querySelector(".step-bloom");
//         const text = card.querySelector(".step-text-content");
//         const numeral = card.querySelector(".step-numeral");
//         const paths = card.querySelectorAll(".step-icon path, .step-icon circle, .step-icon line, .step-icon polyline");

//         paths.forEach((p: any) => {
//           const len = p.getTotalLength?.();
//           if (len) gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
//         });

//         const stepTl = gsap.timeline();

//         stepTl.to(card, { opacity: 1, y: 0, duration: 0.8 });
//         stepTl.to(iconWrap, { opacity: 1, borderColor: "#C8A97E", duration: 0.7 }, "-=0.4");
//         stepTl.to(bloom, { opacity: 1, scale: 1.1, duration: 1.6 }, "<");
//         stepTl.to(paths, { strokeDashoffset: 0, duration: 1.2, stagger: 0.08 }, "-=1.1");
//         stepTl.to(numeral, { opacity: 1, y: 0, duration: 0.6 }, "-=0.6");
//         stepTl.to(text, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4");

//         tl.add(stepTl, i * 0.35);
//       });

//       /** ⭐ CURVE AUTO ALIGN TO CARD CENTER */
//       setTimeout(() => {
//         const icon = document.querySelector(".step-icon-wrapper") as HTMLElement;
//         if (icon && svgWrapperRef.current) {
//           const centerY = icon.offsetTop + icon.offsetHeight / 2;
//           gsap.set(svgWrapperRef.current, { y: centerY - 100 });
//         }
//       }, 50);

//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={containerRef} className="pt-6 pb-0 bg-[#F5F4F0] relative overflow-hidden border-t border-stone/30">
//       <div className="absolute h-64 left-0 top-0 w-32"><img src={hanging} alt="" className="h-full w-full opacity-40" /></div>
//       <div className="absolute h-64 right-0 top-0 w-32"><img src={hanging} alt="" className="h-full w-full opacity-40" /></div>

//       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-multiply pointer-events-none"></div>

//       <div className="max-w-[1180px] mx-auto px-6 lg:px-12 relative z-10">
//         <div ref={headerRef} className="text-center mb-24">
//           <span ref={labelRef} className="text-gold uppercase tracking-[0.2em] text-sm font-bold font-gotham -mb-3 block">The Process</span>
// <div className="overflow-hidden inline-block">
//   <h2 className="font-serif text-6xl lg:text-8xl text-forest block tracking-tight">
//     {renderLetters("Why Buy From Sublime", "process-char font-gotham text-5xl ")}
//   </h2>
// </div>
//         </div>

//         <div className="relative">
//           <div ref={svgWrapperRef} className="absolute left-0 w-full hidden lg:block -z-10 pointer-events-none">
//           <svg width="100%" height="200" viewBox="0 0 1200 200" fill="none" preserveAspectRatio="none"> <path ref={pathRef} d="M 150 100 C 300 100, 300 50, 450 50 C 600 50, 600 150, 750 150 C 900 150, 900 100, 1050 100" stroke="#D4AF37" strokeWidth="3" strokeDasharray="0"   fill="none" /> </svg>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//             {STEPS.map((step, idx) => <StepCard key={idx} step={step} index={idx} />)}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };



import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedTitle from './ui/AnimatedTitle.tsx';
// import whyChooseUsBg from '../assests/whyChooseUs.jpg';
import GifContainer from './GifContainer.tsx';

import girl from '../assets/images/whiteGirl.gif';
import door from '../assets/images/whiteBox.gif';
import lotus from '../assets/images/whiteLotus.gif';
import leafgif from '../assets/images/whiteLeaf.gif';
import lotusleaf from "../assets/images/v4leaf.png"
// import CornerLeaf from "../assest/CornerLeaf.png"

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: leafgif, title: 'Wellness Enhancing', desc: "A lifestyle designed to elevate your body, mind, and spirit." },
  { icon: lotus, title: 'Direct from Growers', desc: "From the hands that harvest to yours-pure, authentic, and direct." },
  { icon: door, title: 'Sourced Fresh in Small Batches', desc: "Crafted in small batches to ensure unmatched freshness and quality." },
  { icon: girl, title: 'Led by Visionaries', desc: "Shaped by leaders who believe in innovation and progress." }
];

const WhyChooseUsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const [imgPoints,setImgPoits] = useState<{x:Number,y:Number}[]>([]);

  function getHungPoint(path, progress, index, offset = 80) {
    const total = path.getTotalLength();
    const length = total * progress;

    const p = path.getPointAtLength(length);
    const pPrev = path.getPointAtLength(Math.max(0, length - 1));
    const pNext = path.getPointAtLength(Math.min(total, length + 1));

    const dx = pNext.x - pPrev.x;
    const dy = pNext.y - pPrev.y;

    let nx = -dy;
    let ny = dx;

    const mag = Math.hypot(nx, ny);
    nx /= mag;
    ny /= mag;

    const direction = index % 2 === 0 ? -1 : 1;

    return {
      anchor: p,
      icon: {
        x: p.x + nx * offset * direction,
        y: p.y + ny * offset * direction
      }
    };
  }

  const anchors = [0, 0.33, 0.66, 1];
  const imgAnc = [0.16,0.44,0.84]

  

  useEffect(() => {
    if (!pathRef.current || !svgContainerRef.current) return;

    const path = pathRef.current;
    const svg = path.ownerSVGElement;
    const container = svgContainerRef.current;
    const rect = container.getBoundingClientRect();

    const svgPoint = svg.createSVGPoint();

    const calculated =  (anc)=>{
      return anc.map((t, i) => {
      const data = getHungPoint(path, t, i);

      svgPoint.x = data.icon.x;
      svgPoint.y = data.icon.y;
      const iconScreen = svgPoint.matrixTransform(svg.getScreenCTM());

      svgPoint.x = data.anchor.x;
      svgPoint.y = data.anchor.y;
      const anchorScreen = svgPoint.matrixTransform(svg.getScreenCTM());

      return {
        iconX: iconScreen.x - rect.left,
        iconY: iconScreen.y - rect.top,
        anchorX: anchorScreen.x - rect.left,
        anchorY: anchorScreen.y - rect.top
      };
      
    });

    }

    console.log(calculated(anchors))
    setPoints(calculated(anchors));
    setImgPoits(calculated(imgAnc))
  }, []);



  const splitText = (text: string, cls = "") =>
    text.split("").map((c, i) => (
      <span key={i} className={`  ${cls}`}>
        {c === " " ? "\u00A0" : c}
      </span>
    ));

  /* ================= GSAP (NO STYLE CHANGES) ================= */

  // useLayoutEffect(() => {
  //   if (!pathRef.current || !containerRef.current) return;

  //   const ctx = gsap.context(() => {
  //     const path = pathRef.current!;
  //     const length = path.getTotalLength();

  //     /* KEEP DASH STYLE — JUST OFFSET */
  //     gsap.set(path, {
  //       strokeDasharray: "6 6",
  //       strokeDashoffset: length
  //     });

  //     /* SVG DASHED PROGRESS */
  //     gsap.to(path, {
  //       strokeDashoffset: 0,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: containerRef.current,
  //         start: "top bottom",     //  START ONLY WHEN SECTION ENTERS
  //         end: "bottom top",       //  FULL SECTION SCROLL
  //         scrub: 0.7,
  //         invalidateOnRefresh: true,
  //         // toggleActions: "play none none reverse"
  //       }
  //     });

  //     /* CONNECTORS — APPEAR AFTER SVG REACHES */
  //     // gsap.fromTo(
  //     //   "line, circle",
  //     //   { opacity: 0 },
  //     //   {
  //     //     opacity: 1,
  //     //     stagger: 0.15,
  //     //     scrollTrigger: {
  //     //       trigger: containerRef.current,
  //     //       start: "top 70%",       // AFTER SVG IS VISIBLE
  //     //       toggleActions: "play none none reverse"
  //     //     }
  //     //   }
  //     // );
  //   }, containerRef);

  //   return () => ctx.revert();
  // }, []);


  useEffect(() => {
    if (!pathRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const path = pathRef.current!;
      const length = path.getTotalLength();

      // Smooth dash drawing
      gsap.set(path, {
        strokeDasharray: "6 6",
        strokeDashoffset: length
      });

      /* SVG DASHED PROGRESS */
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",     //  START ONLY WHEN SECTION ENTERS
          end: "bottom top",       //  FULL SECTION SCROLL
          scrub: 1,
          invalidateOnRefresh: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);



  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ================= MASTER ================= */
      const master = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom bottom",
          scrub: 0.7, //  smoother
        },
      });

      /* ================= TITLE ================= */
      master.fromTo(
        ".lux-charh",
        { y: 32, opacity: 0, rotateX: 10 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",  // jab section top viewport me 90% position pe ho
            toggleActions: "play none none none",
          },
        }
      );


      /* ================= CARD BASE ================= */
      gsap.set(".lux-card", {
        opacity: 0,
        clipPath: "inset(0 0 80% 0)",
        y: 40,
        scale: 0.97,
      });

      /* ================= CARD REVEAL ================= */
      master.to(
        ".lux-card",
        {
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          y: 0,
          scale: 1,
          ease: "power3.out",
          stagger: 0.12,
        },
        0.25
      );

      /* ================= INNER CONTENT ================= */
      master.fromTo(
        ".lux-inner",
        {
          y: 24,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          stagger: 0.15,
        },
        0.45
      );



    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-32  min-h-screen  container relative font-Gotham bg-[#F5F4F0] relative overflow-hidden"
    >
      {/* <div className="absolute inset-0 pointer-events-none mix-blend-overlay">
        <img
          src={whyChooseUsBg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div> */}

      {/* <img src={CornerLeaf} alt="" className='absolute top-50 right-0 w-32   opacity-50' />
   <img src={CornerLeaf} alt="" className='absolute top-50 -left-0 w-32 scale-x-[-1] opacity-50' />
     <img src={CornerLeaf} alt="" className='absolute bottom-4 right-0 w-32 scale-y-[-1] scale-x-[1]    opacity-50' />
   <img src={CornerLeaf} alt="" className='absolute bottom-4 -left-0 w-32 scale-y-[-1] scale-x-[-1] opacity-50' /> */}
      {/* <img src={CornerLeaf} alt="" className='absolute bottom-0 -left-[120px] opacity-80 rotate-[35deg]' /> */}
      {/* <img src={CornerLeaf} alt="" className='absolute bottom-0 right-0 -rotate-[35deg] opacity-80' /> */}



      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        {/* <h2 style={{fontFamily:"gotham-book"}} className="text-forest block tracking-tight"> */}
        {/* {splitText("Why Buy From Sublime", "lux-char font-gotham-book ")} */}


        {/* </h2> */}


        <div className="mb-10 flex flex-col text-center items-center  sm:items-center sm:text-center">
          <div className="flex items-center gap-2 mb-3">
            <span style={{
                fontFamily: "'gotham-book', sans-serif",
                fontWeight: 100,

                fontSize: '12px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }} className="text-[10px] text-center w-fit  mx-auto sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.35em] text-black uppercase">
              AWESOME PRODUCTS
            </span>
          </div>
          <h2 style={{
              fontFamily: "'gotham', sans-serif",
              fontWeight: 100,

              fontSize: '38px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }} className="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#C5A059]">
            Why Buy From Sublime
          </h2>
        </div>


        <div
          ref={svgContainerRef}
          className="relative  ml-[20px] container max-w-[1280px] mx-auto  h-[22vw] mt-20   flex  items-center justify-center"
        >
          {features.map((f, i) => (
            <div
              key={i}
              className={`feature-item min-w-[250px] ml-32 px-5 -mr-10  text-center  flex flex-col   ${i % 2 === 0 ? 'mb-[140px]' : 'mt-[140px]'
                }`}
            >
              <h2 className="text-xl text-center font-bold text-#1A261C">
                {/* {f.title} */}

                {/* {splitText(`${f.title}`, "lux-char font-gotham text-lg block ")} */}
                <p style={{fontFamily:"gotham"}}>{f.title}</p>
              </h2>
              <p style={{lineHeight:"130%",fontFamily:"gotham-book"}} className="text-[14px] mt-3  text-[#9a7523] text-center">
                {/* {splitText( `${f.desc}`, "lux-char  whitespace-nowrap text-sm ")} */}
                {f.desc}
              </p>
            </div>
          ))}

          {/* <svg xmlns="http://www.w3.org/2000/svg" width="1181" height="389" viewBox="0 0 1181 389" fill="none">
<path  ref={pathRef} d="M0.0390625 379.264C233.283 388 152.975 2.74693 402.914 2.74693C618.397 2.74693 568.305 388 792.007 388C1048.22 388 944.145 0.999947 1180.04 0.999947" stroke="black" stroke-width="2" stroke-dasharray="6 6"/>
</svg> */}

          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 973 389"
            fill="none"
          >
            <path
              ref={pathRef}
              d="
             M0.0390625 379.264C233.283 388 152.975 2.74693 402.914 2.74693C618.397 2.74693 568.305 388 792.007 388C1048.22 388 944.145 0.999947 1180.04 0.999947
              "
              stroke="#1A261C"
              strokeWidth="3"
              strokeDasharray="8 8 "
              fill="none"
            />
          </svg>

          {
            imgPoints?.length > 0 && imgPoints?.map((i,x)=>(
              <div className='absolute  h-24 w-24 ' style={{left:i.iconX,top:i.iconY}}> 

              <img src={lotusleaf} className='absolute top-0 right-2 h-24   -translate-y-1/2  translate-x-1/2 w-24' alt="" />

              </div>
            ))
          }

          {points.map((p, i) => (
            <div key={i} className="absolute " style={{ left: 0, top: i % 2 === 0 ? "-18px" : "18px" }}>

              <svg
                className="absolute pointer-events-none"
                style={{ left: 0, top: 0 }}
                width="100%"
                height="100%"
              >
                <line
                  x1={p.anchorX}
                  y1={p.anchorY}
                  x2={p.iconX}
                  y2={p.iconY}
                  stroke="#E8B879"
                  strokeWidth="1.5"
                />
                <circle
                  cx={p.anchorX}
                  cy={p.anchorY}
                  r="3"
                  fill="#e88726"
                />
              </svg>







              <div
                className={`absolute flex flex-col -translate-x-1/2 -translate-y-1/2
                 h-[130px] w-[130px] rounded-full border border-sublime-gold
                bg-[#316763] backdrop-blur-md flex items-center justify-center ${i % 2 === 0 ? '' : 'rotate-180'
                  }`}
                style={{
                  left: p.iconX,
                  top: p.iconY
                }}
              >

                <div className="absolute h-2 w-2 rounded-full bg-black -bottom-2">
                  <div className="absolute h-4 w-0.5 -translate-x-1/2 left-[50%] bg-black -bottom-4"></div>
                </div>

                <GifContainer
                  className={`${i % 2 === 0 ? '' : 'rotate-180'} h-[65%] w-[65%]`}
                  gifUrl={features[i].icon}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;


