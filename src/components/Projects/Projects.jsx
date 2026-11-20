import ProjectCard from "./ProjectCard";

const project = [
  {
    title: "Gyk",
    description:
      "Dette er B2B shopping system utvikler for pra/gyk som jeg har utviklet selv i react, " +
      "jeg hadde ansvar for struktur, design, innhold og publisering. " +
      "nettsiden er et shopping system for bedrifter som ønsker å handle produkter fra GYK, " +
      "med funksjoner som produktkatalog, handlekurv og betalingsløsning.",
    img: "/gyk.png",
    technologies: ["REACT", "CSS", "Supabase"],
  },
  {
    title: "Pra",
    description:
      "Dette er den nye nettsiden til Promotion RA, som jeg utviklet i React. " +
      "Jeg hadde ansvar for struktur, design, innhold og " +
      "publisering. Nettsiden presenterer artister og arrangementer på " +
      "en oversiktlig måte, med egne undersider for hver artist og et " +
      "responsivt design tilpasset ulike enheter.",
    img: "/PRA.png",
    technologies: ["REACT", "JAVASCRIPT", "CSS"],

    link: "https://www.promotionra.no/",
  },

  {
    title: "Matte-ving",
    description:
      "Dette er en matte læringsplattform kalt 'Matte-ving' som jeg har " +
      "utviklet ved hjelp av React for frontend og Python for backend. " +
      "Plattformen tilbyr interaktive matteoppgaver og ressurser for " +
      "elever på ulike nivåer.",
    img: "/matte-ving-preview.png",
    technologies: ["REACT", "JAVASCRIPT", "CSS", "PYTHON"],
    link: "https://matte-ving.vercel.app/",
  },

  {
    title: "Soclub",
    description:
      "Dette en Android applikasjon kalt 'Socclub' som detter var et eksamen " +
      "prosjekt, der teamet og jeg utviklet ved hjelp av Kotlin. Appen er designet " +
      "for å hjelpe brukere med å finne og bli med i sosiale klubber og aktiviteter " +
      "i deres område.",
    img: "/soclub.png",
    technologies: ["KOTLIN", "C#"],
  },

  {
    title: "Calender App",
    description:
      "Dette er en kalenderapplikasjon bygget med React og CSS. " +
      "Den lar brukere legge til, redigere og slette hendelser på en " +
      "brukervennlig måte. Applikasjonen er designet for å være responsiv " +
      "og enkel å bruke på både desktop og mobile enheter.",
    img: "/calender.png",
    technologies: ["REACT", "JAVASCRIPT", "CSS"],
    link: "https://calender-app-mu.vercel.app/",
  },

  {
    title: "Webutviklings eksamen",
    description:
      "Dette var min eksamensoppgave i webutvikling, hvor jeg utviklet " +
      "en nettside ved hjelp av HTML og CSS. Nettsiden presenterer informasjon " +
      "om et valgt tema på en strukturert og visuelt tiltalende måte, og er designet " +
      "for å være brukervennlig og responsiv på ulike enheter",
    img: "/webeksamen.png",
    technologies: ["HTML", "CSS"],
    link: "https://nettsiden.vercel.app/",
  },
];


export default function Projects(){
    return (
      <section id="prosjekter" className="text-left">
        <h2 className="mb-8 text-4xl font-bold text-heading ">Prosjekter</h2>
        <p className="mb-8 text-[16px] text-secondary-text">
          Utvalg av det jeg har jobbet med, nettsider og prosjekter fra jobb,
          skole og egne ideer
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {project.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    );
}