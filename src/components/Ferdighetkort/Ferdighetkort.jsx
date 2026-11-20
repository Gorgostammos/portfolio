import { motion, useReducedMotion} from "framer-motion";

const skillgroups = [
  {
    title: "Frontend",
    description: "Teknologier jeg bruker til å bygge webapplikasjoner.",
    layout: "md:row-span-2",
    skills: [
      ["React", "devicon-react-original"],
      ["Html", "devicon-html5-plain"],
      ["Css", "devicon-css3-plain"],
      ["Tailwind", "devicon-tailwindcss-original"],
      ["JavaScript", "devicon-javascript-plain"],
      ["Vitejs", "devicon-vitejs-plain"],
      ,
    ],
  },
  {
    title: "Backend",
    description: "Språk jeg bruker til å utvikle løsninger.",
    skills: [
      ["Python", "devicon-python-plain"],
      ["C#", "devicon-csharp-line-wordmark"],
      ["Java", "devicon-java-plain-wordmark"],
      ["Kotlin", "devicon-kotlin-plain-wordmark"],
      [".net", "devicon-dot-net-plain"],
    ],
  },
  {
    title: "Databaser og plattformer",
    description: "Verktøy jeg bruker til å lagre og håndtere data.",
    skills: [
      ["Supabase", "devicon-supabase-plain"],
      ["MySQL", "devicon-mysql-original"],
      ["MongoDB", "devicon-mongodb-plain"],
    ],
  },
  {
    title: "Verktøy og IDE-er",
    layout: "md:col-span-2",
    skills: [
      ["Git", "devicon-git-plain"],
      ["GitHub", "devicon-github-original"],
      ["VS Code", "devicon-vscode-plain"],
      ["Android Studio", "devicon-androidstudio-plain"],
      ["PyCharm", "devicon-pycharm-plain"],
      ["IntelliJ IDEA", "devicon-intellij-plain"],
    ],
  },
];
  

function moveSpotlight(event){
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();

 const x = event.clientX - rect.left;
 const y = event.clientY - rect.top;

 card.style.setProperty("--spotlight-x", `${x}px`);
 card.style.setProperty("--spotlight-y", `${y}px`);
}

export default function Ferdighetkort() {
  const reduceMotion = useReducedMotion();
  return (
    <section
      id="ferdigheter"
      aria-labelledby="teknologier-verktøy-tittel"
      className="mx-auto my-24 w-full max-w-6xl"
    >
      <h2
        id="teknologier-verktøy-tittel"
        className="mb-8 text-4xl font-bold text-heading text-left"
      >
        Teknologier og verktøy
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {skillgroups.map((group, index) => (
          <motion.article
            key={group.title}
            onMouseMove={moveSpotlight}
            className={`skill-card flex flex-col bg-card border border-card-border rounded-card p-6 hover:border-accent-light transition-colors duration-200 ${group.layout ?? ""} `}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 0.45,
              delay: reduceMotion ? 0 : index * 0.08,
              ease: "easeOut",
            }}
          >
            <h3 className="text-lg font-semibold text-primary-text">
              {group.title}
            </h3>

            {group.description && (
              <p className="mt-2 text-sm leading-relaxed text-secondary-text">
                {group.description}
              </p>
            )}

            <ul className="mt-auto flex flex-wrap gap-2 pt-6">
              {group.skills.map(([name, icon]) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-2 bg-iconBg px-3 py-2 rounded-xl hover:-translate-y-1 transition-transform duration-200 motion-reduce:transform-none"
                >
                  <i
                    className={`${icon} text-xl text-accent-light`}
                    aria-hidden="true"
                  />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}