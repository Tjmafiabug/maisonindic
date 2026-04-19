import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Categories } from "@/components/sections/Categories";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { CatalogCTA } from "@/components/sections/CatalogCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Categories />
      <Process />
      <Stats />
      <CatalogCTA />
    </>
  );
}
