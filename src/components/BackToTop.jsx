import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    show && (
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="
        fixed
        bottom-8
        right-8
        w-14
        h-14
        rounded-full
        bg-violet-600
        text-white
        shadow-xl
        hover:scale-110
        transition
        z-[999]
        "
      >
        <FaArrowUp className="mx-auto" />
      </button>
    )
  );
}