import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Projects } from "@/components/project";
import { Sandbox } from "@/components/sandbox";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 my-6 sm:my-8 lg:my-10">
      <Header />
      <hr className="my-5 sm:my-10 opacity-0" />
      <Work />
      <hr className="my-5 sm:my-10 opacity-0" />
      <Projects />
      <hr className="my-5 sm:my-10 opacity-0" />
      <Sandbox />
      <hr className="my-5 sm:my-10 opacity-0" />
      <Footer />
    </section>
  );
}
