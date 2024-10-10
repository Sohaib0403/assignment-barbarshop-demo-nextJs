// components/Carousel.tsx
import { useRef, useState } from "react";
import Card2 from "./Card2"; // Adjust the import path as necessary

const Carousel = () => {
  const cards = [
    { imageSrc: "/images/worker1.png", altText: "image", heading: "DAVID", paragraph: "Hair Cut Specialist" },
    { imageSrc: "/images/worker2.png", altText: "image", heading: "PAUL", paragraph: "Beard & Trimming" },
    { imageSrc: "/images/worker3.png", altText: "image", heading: "CHARLIE", paragraph: "Hair Color Specialist" },
    { imageSrc: "/images/worker1.png", altText: "image", heading: "DAVID", paragraph: "Hair Cut Specialist" },
    { imageSrc: "/images/worker2.png", altText: "image", heading: "PAUL", paragraph: "Beard & Trimming" },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDragging = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;

    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="flex space-x-6 overflow-x-scroll cursor-grab no-scrollbar"
        onMouseDown={startDragging}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onMouseMove={onDragging}
      >
        {cards.map((card, index) => (
          <div key={index} className="min-w-[250px] flex-shrink-0">
            <Card2 {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;