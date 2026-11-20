import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useReducedMotion } from "framer-motion";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({ project }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.02 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="flex flex-col bg-card border border-card-border rounded-card p-6 text-left"
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={project.img}
          alt={project.title}
          className="w-full aspect-video object-cover object-top rounded-xl motion-safe:hover:scale-105 transition-transform duration-200"
        />
      </div>
      <h3 className="mt-6 text-3xl font-bold">{project.title}</h3>
      <p className="mt-6 text-secondary-text">{project.description}</p>

      <div className="mt-auto">
        <ul className="flex flex-wrap gap-2 pt-6">
          
          {project.technologies.map((tek) => (
            <li
              key={tek}
              className="text-sm text-accent-light bg-iconBg px-3 py-2 rounded-xl motion-safe:hover:-translate-y-1 transition-transform duration-200"
            >
              <p>{tek}</p>
            </li>
          ))}
        </ul>
        
        <div className="mt-6 min-h-10">
        {project.link && (
          <a
            href={project.link}
            aria-label={`se nettsiden ${project.title}`}
            className="inline-flex self-start items-center gap-2 rounded-xl bg-iconBg px-4 py-2 text-primary-text hover:bg-hover-Icon transition-colors duration-200"
          >
            <span>Se Live</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        )}
        </div>
      </div>
    </motion.article>
  );
}
