"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

interface ImageItem {
  src: string;
  name: string;
}

interface ScrollRotationSectionProps {
  images: ImageItem[];
}

export default function ScrollRotationSection({ images }: ScrollRotationSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [centerCardName, setCenterCardName] = useState<string>("");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const extendedImages = [...images, ...images, ...images];

  useEffect(() => {
    if (images.length > 0) {
      setCenterCardName(images[Math.floor(images.length / 2)].name);
    }
  }, [images]);

  const CarouselCard = ({ image, index }: { image: ImageItem; index: number }) => {
    const totalCards = extendedImages.length;
    const cardSpacing = 300;
    const arcHeight = 300;
    const totalMovement = 2500;
    
    const x = useTransform(
      scrollYProgress,
      [0, 1],
      [
        (index - totalCards / 2) * cardSpacing,
        (index - totalCards / 2) * cardSpacing - totalMovement
      ]
    );
    
    const y = useTransform(x, (value) => {
      const normalizedX = value / 800;
      return normalizedX * normalizedX * arcHeight;
    });
    
    const scale = useTransform(x, (value) => {
      const distance = Math.abs(value) / 400;
      return Math.max(0.7, 1 - distance * 0.3);
    });

    useEffect(() => {
      return x.on("change", (value) => {
        if (Math.abs(value) < 100) {
          const imageIndex = index % images.length;
          const currentImage = images[imageIndex];
          if (currentImage && currentImage.name !== centerCardName) {
            setCenterCardName(currentImage.name);
          }
        }
      });
    }, [x, index]);

    return (
      <motion.div
        className="absolute rounded-xl overflow-hidden shadow-lg"
        style={{
          x,
          y,
          scale,
          width: "clamp(140px, 22vw, 260px)",
          height: "clamp(200px, 30vh, 340px)",
        }}
      >
        <Image
          src={image.src}
          alt={image.name}
          fill
          sizes="260px"
          className="object-cover rounded-xl"
        />
      </motion.div>
    );
  };

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute w-full h-full flex items-center justify-center">
          {extendedImages.map((image, index) => (
            <CarouselCard key={`${image.src}-${index}`} image={image} index={index} />
          ))}
        </div>

        <div className="absolute bottom-8 left-0 w-full text-center px-4">
          <p className="text-sm text-gray-400 font-light">
            Essential forms for intentional spaces.
          </p>
          {centerCardName && (
            <p className="text-base font-light mt-1">
              {centerCardName}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
