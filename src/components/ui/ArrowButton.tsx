import { gsap } from "gsap";
import { useRef } from "react";

interface ArrowButtonProps {
  direction?: "left" | "right";
  onClick: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction = "left",
  onClick,
}) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const iconRef = useRef<SVGSVGElement | null>(null);

  const handleClick = () => {
    if (!btnRef.current || !iconRef.current) return;

    const moveValue = direction === "right" ? 25 : -25;

    const tl = gsap.timeline({
      onStart: () => {
        btnRef.current?.classList.add("clicked");
      },
      onComplete: () => {
        btnRef.current?.classList.remove("clicked");
      },
    });

    tl.to(iconRef.current, {
      x: moveValue,
      opacity: 0,
      duration: 0.25,
      ease: "power2.out",
    })
      .set(iconRef.current, {
        x: -moveValue,
      })
      .to(iconRef.current, {
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
      className="nav-arrow-btn hidden lg:flex absolute z-20 h-12 w-12 items-center justify-center rounded-full shadow-xl active:scale-90"
    >
      

        <svg    ref={iconRef} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M5.50586 16.5199L13.7659 24.7799M5.50586 16.5199L13.7659 8.25993M5.50586 16.5199L19.9609 16.5199M27.5325 16.5199L24.0909 16.5199" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              
    </button>
  );
};

export default ArrowButton;