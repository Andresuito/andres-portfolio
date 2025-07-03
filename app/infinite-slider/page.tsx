import { InfiniteSlider } from "@/components/infinite-slider";
import Link from "next/link";

export default function ScrollCarousel() {
  const images = [
    { src: "/images/image1.jpg", name: "Midnight Gas Station" },
    { src: "/images/image2.jpg", name: "Urban Relaxation" },
    { src: "/images/image3.jpg", name: "Flash Café Lights" },
    { src: "/images/image4.jpg", name: "Neon Istanbul" },
    { src: "/images/image5.jpg", name: "Smoky Reflections" },
    { src: "/images/image6.jpg", name: "Neon Muse" },
    { src: "/images/image7.jpg", name: "Nothing to See Here..." },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <div className="grid grid-cols-3 p-4">
        <Link href="/">
          <span className="border-neutral-300 border rounded-full p-2 px-4">
            Home
          </span>
        </Link>
        <div className="text-center">
          <p>Infinite Slider</p>
        </div>
        <div />
      </div>

      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        <div className="w-full max-w-6xl relative">
          <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#F0F0F0]/80 to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#F0F0F0]/80 to-transparent" />

          <InfiniteSlider gap={24}>
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.name}
                className="object-cover w-[200px] rounded-md"
              />
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </main>
  );
}
