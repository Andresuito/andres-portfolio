"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ImageItem {
  src: string;
  name: string;
}

interface ScrollRotationSectionProps {
  images: ImageItem[];
  config?: {
    duration?: number;
    arcHeight?: number;
    scrollDistance?: number;
    scrub?: boolean | number;
    ease?: string;
  };
}

export default function ScrollRotationSection({
  images,
  config = {
    duration: 1,
    arcHeight: 500,
    scrollDistance: 3000,
    scrub: 2,
    ease: "none",
  },
}: ScrollRotationSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [centerCardName, setCenterCardName] = useState<string>("");
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const isInitializedRef = useRef(false);

  const extendedImages = [...images, ...images, ...images];

  const findCenterCard = useCallback(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return -1;

    const screenCenter = 0;
    let closestIndex = -1;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
      const currentX = gsap.getProperty(card, "x") as number;
      const cardWidth = card.offsetWidth;
      const cardCenter = currentX + cardWidth / 2;
      const distance = Math.abs(cardCenter - screenCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    return closestIndex;
  }, []);

  const updateCenterCard = useCallback(() => {
    const centerIndex = findCenterCard();
    if (centerIndex >= 0) {
      const imageIndex = centerIndex % images.length;
      const centerCard = images[imageIndex];
      if (centerCard && centerCard.name !== centerCardName) {
        setCenterCardName(centerCard.name);
      }
    }
  }, [findCenterCard, images, centerCardName]);

  useEffect(() => {
    if (isInitializedRef.current || !sectionRef.current || images.length === 0)
      return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

    if (cards.length === 0) return;

    timelineRef.current?.kill();
    timelineRef.current = null;

    const sectionWidth = window.innerWidth;
    const sectionHeight = window.innerHeight;

    const isXSmall = sectionWidth < 480;
    const isMobile = sectionWidth < 640;
    const isTablet = sectionWidth >= 640 && sectionWidth < 1024;
    const isLarge = sectionWidth >= 1280;
    const isXLarge = sectionWidth >= 1536;

    let arcHeight,
      visibleCards,
      spacingMultiplier,
      yOffsetValue,
      scrollDistance,
      xMovementMultiplier;

    if (isXSmall) {
      arcHeight = 150;
      visibleCards = 2.5;
      spacingMultiplier = 1;
      yOffsetValue = 280;
      scrollDistance = images.length * 1600;
      xMovementMultiplier = 2.5;
    } else if (isMobile) {
      arcHeight = 200;
      visibleCards = 3.5;
      spacingMultiplier = 1.5;
      yOffsetValue = 250;
      scrollDistance = images.length * 1400;
      xMovementMultiplier = 2;
    } else if (isTablet) {
      arcHeight = 350;
      visibleCards = 6;
      spacingMultiplier = 1.3;
      yOffsetValue = 150;
      scrollDistance = 3500;
      xMovementMultiplier = 1.5;
    } else if (isXLarge) {
      arcHeight = config.arcHeight! + 100;
      visibleCards = 8;
      spacingMultiplier = 1.2;
      yOffsetValue = 80;
      scrollDistance = config.scrollDistance! + 1000;
      xMovementMultiplier = 1;
    } else if (isLarge) {
      arcHeight = config.arcHeight!;
      visibleCards = 7;
      spacingMultiplier = 1.2;
      yOffsetValue = 100;
      scrollDistance = config.scrollDistance!;
      xMovementMultiplier = 1;
    } else {
      arcHeight = config.arcHeight!;
      visibleCards = 3;
      spacingMultiplier = 0.5;
      yOffsetValue = 100;
      scrollDistance = config.scrollDistance!;
      xMovementMultiplier = 1;
    }

    const totalWidth = sectionWidth * 1.5;
    const stepSize = (totalWidth / visibleCards) * spacingMultiplier;
    const yOffset = sectionHeight / 2 - yOffsetValue;

    cards.forEach((card, index) => {
      const x = index * stepSize - totalWidth / 2;
      const progress = (x + totalWidth / 2) / totalWidth;
      const normalized = progress * 2 - 1;
      const y = normalized * normalized * arcHeight - arcHeight / 2;

      gsap.set(card, {
        x,
        y: y + yOffset,
        rotation: normalized * 10,
        scale: 0.9 + 0.2 * (1 - normalized * normalized),
      });
    });

    setTimeout(updateCenterCard, 100);

    const scrollTl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${scrollDistance}`,
        scrub: config.scrub,
        pin: true,
        onUpdate: () => requestAnimationFrame(updateCenterCard),
        onLeave: () => {
          gsap.to(cards, { opacity: 0, duration: 1.2, ease: "power2.out" });
          gsap.to("#scroll-info", {
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          });
          gsap.to("#scroll-end-message", {
            opacity: 1,
            pointerEvents: "auto",
            duration: 1.5,
            ease: "power3.out",
          });
        },
        onEnterBack: () => {
          gsap.to(cards, { opacity: 1, duration: 0.8 });
          gsap.to("#scroll-end-message", {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.6,
          });
          gsap.to("#scroll-info", { opacity: 1, duration: 0.8 });
        },
      },
    });

    scrollTl.to(cards, {
      x: `-=${totalWidth * xMovementMultiplier}`,
      duration: config.duration,
      ease: config.ease,
      onUpdate: () => {
        cards.forEach((card) => {
          const currentX = gsap.getProperty(card, "x") as number;
          const progress = (currentX + totalWidth / 2) / totalWidth;
          const normalized = progress * 2 - 1;
          const y = normalized * normalized * arcHeight - arcHeight / 2;

          gsap.set(card, {
            y: y + yOffset,
            rotation: normalized * 10,
            scale: 0.9 + 0.2 * (1 - normalized * normalized),
          });
        });
      },
    });

    timelineRef.current = scrollTl;
    isInitializedRef.current = true;

    return () => {
      timelineRef.current?.scrollTrigger?.kill();
      timelineRef.current?.kill();
      isInitializedRef.current = false;
    };
  }, [images]);

  useEffect(() => {
    if (images.length > 0 && !centerCardName && isInitializedRef.current) {
      const middleIndex = Math.floor(extendedImages.length / 2);
      const initialImageIndex = middleIndex % images.length;
      setCenterCardName(images[initialImageIndex].name);
    }
  }, [images, centerCardName, extendedImages.length]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      <div className="absolute w-full h-full flex items-center justify-center perspective-1000">
        {extendedImages.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="absolute rounded-xl overflow-hidden shadow-lg transition-all"
            style={{
              width: "clamp(140px, 22vw, 260px)",
              height: "clamp(200px, 30vh, 340px)",
            }}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src={image.src}
                alt={image.name}
                fill
                sizes="(max-width: 480px) 140px, (max-width: 640px) 160px, (max-width: 768px) 180px, (max-width: 1024px) 200px, (max-width: 1280px) 220px, (max-width: 1536px) 240px, 260px"
                className="object-cover"
                priority={index < 6}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-2 sm:bottom-4 lg:bottom-8 left-0 z-10 w-full text-center px-4">
        <div
          id="scroll-info"
          className="transition-opacity duration-700 opacity-100"
        >
          <p className="text-xs sm:text-sm text-gray-400 font-light">
            Essential forms for intentional spaces.
          </p>
          {centerCardName && (
            <p className="text-sm sm:text-base font-light mt-1 transition-all duration-300">
              {centerCardName}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
