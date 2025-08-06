import ScrollRotationSection from "@/components/scroll-rotation-section";
import { Navigation } from "@/components/navigation";

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
      <Navigation />
      
      <div className="h-screen grid p-4 grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 pt-20">
        <div className="flex justify-center sm:justify-start items-start">
        </div>

        <div className="text-center">
          <p className="text-sm sm:text-base">Scroll down to see the effect</p>
        </div>
        
        <div className="hidden sm:block"></div>
      </div>

      <ScrollRotationSection images={images} />

      <section className="h-screen p-4 relative flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold mb-4">
            Arc scroll carousel
          </h1>
          <div className="absolute top-5 left-1/2 -translate-x-1/2">
            <p className="mb-8 text-sm sm:text-base">Scroll up to see the effect</p>
          </div>
        </div>
      </section>
    </main>
  );
}
