import { Header } from "@/components/header";
import { Work } from "@/components/work";
import { Projects } from "@/components/project";
import { Sandbox } from "@/components/sandbox";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <section className="max-w-2xl mx-auto px-2 md:px-8 my-8 lg:my-10">
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
