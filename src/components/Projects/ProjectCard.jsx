import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({ project }) {
  return (
    <article className="flex flex-col bg-card border border-card-border rounded-card p-6 text-left">
      <img
        src={project.img}
        alt={project.title}
        className="w-full aspect-video object-cover object-top rounded-xl "
      />
      <h3 className="mt-6 text-3xl font-bold">{project.title}</h3>
      <p className="mt-6 text-secondary-text">{project.description}</p>

      <ul className="mt-auto flex flex-wrap gap-2 pt-6">
        {project.techologies.map((tek) => (
          <li
            key={tek}
            className="text-[10px] text-accent-light bg-iconBg px-3 py-2 rounded-xl hover:-translate-y-1 transition-transform duration-200"
          >
            <p>{tek}</p>
          </li>
        ))}
      </ul>

      {project.link && (
      <a href={project.link} aria-label={project.title} className="mb-6 px-3 py-2 ">
        <FontAwesomeIcon icon={faGlobe} />
      </a>
    )}
    </article>
  );
}
