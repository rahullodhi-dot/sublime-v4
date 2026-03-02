import { gsap } from "gsap";
import { useRef } from "react";

interface ArrowButtonProps {
  direction?: "left" | "right";
  onClick: () => void;
  isDefaultSvg: boolean;

}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction = "left",
  onClick,
  isDefaultSvg = true,
}) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const iconRef = useRef<SVGPathElement | null>(null);

  const svgleft1 = (<svg  xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
    <path ref={iconRef}  d="M5.50586 16.5199L13.7659 24.7799M5.50586 16.5199L13.7659 8.25993M5.50586 16.5199L19.9609 16.5199M27.5325 16.5199L24.0909 16.5199" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>);
  const svgRight1 = (<svg   xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
    <path ref={iconRef} d="M27.5341 16.52L19.2741 8.26001M27.5341 16.52L19.2741 24.78M27.5341 16.52L13.0791 16.52M5.50747 16.52L8.94914 16.52" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>);

  const svgLeft2 = (  <svg  className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path ref={iconRef} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>);

  const svgRight2 = (<svg  className="h-6 w-6 text-white" fill="none" stroke="white" viewBox="0 0 24 24">
    <path ref={iconRef}  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
  </svg>);

  const svgToRender = isDefaultSvg ? (direction === "left" ? svgleft1 : svgRight1) : (direction === "left" ? svgLeft2 : svgRight2);
  const buttonClass = direction === "left" ? {className: `hidden lg:flex absolute bg-[#9A7523] -left-6  ${isDefaultSvg ? "top-1/2" :"top-1/3"}  ${isDefaultSvg ? "-translate-y-1/2" :"-translate-y-1/5"} z-20 h-12 w-12 items-center justify-center rounded-full  shadow-xl transition-all  active:scale-90`} : {className: `hidden lg:flex absolute -right-6  ${isDefaultSvg ? "top-1/2" :"top-1/3"}  ${isDefaultSvg ? "-translate-y-1/2" :"-translate-y-1/5"} z-20 h-12 w-12 items-center justify-center rounded-full bg-[#9A7523] shadow-xl transition-all  active:scale-90`};



  const handleClick = () => {
    const icon = iconRef.current ;
    if (!btnRef.current || !icon) return;

    const moveValue = direction === "right" ? 25 : -25;

    const tl = gsap.timeline({
      onStart: () => {
        btnRef.current?.classList.add("clicked");
      },
      onComplete: () => {
        btnRef.current?.classList.remove("clicked");
     
      },
    });

    tl.to(icon, {
      x: moveValue,
      opacity: 0,
      duration: 0.25,
      ease: "power2.out",
    })
      .set(icon, {
        x: -moveValue,
    
      })
      .to(icon, {
        x: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
      });
          onClick();

   
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      {...buttonClass}

    >

      {svgToRender}

    </button>
  );
};

export default ArrowButton;