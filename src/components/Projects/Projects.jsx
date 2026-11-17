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
    techologies: ["REACT", "CSS", "Supabase"],
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
    techologies: ["REACT", "JAVASCRIPT", "CSS"],

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
    techologies: ["REACT", "JAVASCRIPT", "CSS", "PYTHON"],
    link: "https://matte-ving.vercel.app/",
  },
];


export default function Projects(){
    return (
      <section className="text-left">
        <h2 className="mb-8 text-4xl font-bold text-heading ">Prosjekter</h2>
        <p className="mb-8 text-[16px] text-secondary-text">
          Utvalg av det jeg har jobbet med, nettsider og prosjekter fra jobb,
          skole og egne ideer
        </p>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {project.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    );
}