import ScrollRotationSection from "@/app/components/scroll-rotation-section";
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
    <main className="min-h-screen">
      <div className="h-screen grid p-4 grid-cols-3">
        <div>
          <Link href="/">Home</Link>
        </div>
        <div className="text-center">
          <p>Scroll down to see the effect</p>
        </div>
      </div>

      <ScrollRotationSection images={images} />

      <section className="h-screen p-4 relative flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl  font-semibold mb-4">
            Arc scroll carousel
          </h1>
          <div className="absolute top-5 left-1/2 -translate-x-1/2">
            <p className="mb-8 /70">Scroll up to see the effect</p>
          </div>
        </div>
      </section>
    </main>
  );
}
