import { MotionConfig } from "motion/react";

import { Background } from "@/components/background";
import { NavDock } from "@/components/nav-dock";
import { Career } from "@/components/sections/career";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Hobbies } from "@/components/sections/hobbies";
import { Skills } from "@/components/sections/skills";
import { Works } from "@/components/sections/works";
import { sections } from "@/data/sections";
import { useActiveSection } from "@/hooks/use-active-section";

const sectionIds = sections.map((s) => s.id);

function App() {
  const activeId = useActiveSection(sectionIds);

  return (
    <MotionConfig reducedMotion="user">
      <Background />
      <NavDock sections={sections} activeId={activeId} />
      <main>
        <Hero />
        <Career />
        <Skills />
        <Works />
        <Hobbies />
        <Contact />
      </main>
    </MotionConfig>
  );
}

export default App;
