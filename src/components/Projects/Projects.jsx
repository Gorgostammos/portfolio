import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "./ProjectCard";
import project from "./projectData.js";
import { useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";



const featuredProjects = project.filter((item) => item.Featured);
export default function Projects() {
  // Indeks 0 viser det første utvalgte prosjektet.
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = featuredProjects[activeIndex];
  const total = featuredProjects.length;

  // Skjul seksjonen hvis det ikke finnes et utvalgt prosjekt å vise.
  if (!activeProject) return null;

  function changeProject(step) {
    // Neste bruker 1, og Forrige bruker -1.
    // Regnestykket lar oss bla fra siste til første prosjekt og omvendt.
    setActiveIndex((current) => (current + step + total) % total);
  }

  return (
    <section id="prosjekter" className="text-left">
      <h2 className="mb-8 text-4xl font-bold text-heading">
        Utvalgte prosjekter
      </h2>

      <p className="mb-8 text-[16px] text-secondary-text">
        Et utvalg av nettsider og applikasjoner jeg har utviklet gjennom jobb,
        studier og egne prosjekter.
      </p>

      {/* Én kolonne holder knappene under kortet på både mobil og PC. */}
      <div className="grid grid-cols-1 gap-6">
        <ProjectCard key={activeProject.title} project={activeProject} />

        {/* Vis knappene når brukeren har flere prosjekter å bla mellom. */}
        {total > 1 && (
          <div className="flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => changeProject(-1)}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-iconBg px-4 text-primary-text hover:bg-hover-Icon"
            >
              <FontAwesomeIcon icon={faChevronLeft} aria-hidden="true" />
              Forrige
            </button>

            {/* Legg til 1 fordi indeksen starter på 0. */}
            <span aria-live="polite" className="text-sm text-secondary-text">
              <span className="sr-only">{activeProject.title}, prosjekt </span>
              {activeIndex + 1} av {total}
            </span>

            <button
              type="button"
              onClick={() => changeProject(1)}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-iconBg px-4 text-primary-text hover:bg-hover-Icon"
            >
              Neste
              <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}