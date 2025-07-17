import ScrollRotationSection from "@/components/scroll-rotation-section";
import Link from "next/link";

export default function ScrollCarousel() {
  const images = [
    { src: "/images/image1.png", name: "Minimalist Wooden Chair" },
    { src: "/images/image2.png", name: "Modern Artistic Chair" },
    { src: "/images/image3.png", name: "Modern Artistic Furniture" },
    { src: "/images/image4.png", name: "Modern Lounge Chairs" },
    { src: "/images/image5.png", name: "Modern Sculptural Chair" },
    { src: "/images/image6.png", name: "Modern Sculptural Chair" },
    { src: "/images/image7.png", name: "Sculptural Wooden Chair" },
  ];

  return (
    <main className="min-h-screen">
      <div className="h-screen grid p-4 grid-cols-3">
        <Link href="/">
          <span className="border-neutral-300 border rounded-full p-2 px-4">
            Home
          </span>
        </Link>

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
            <p className="mb-8">Scroll up to see the effect</p>
          </div>
        </div>
      </section>
    </main>
  );
}
