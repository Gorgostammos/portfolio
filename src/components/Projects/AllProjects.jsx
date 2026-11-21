import project from "./projectData.js";
import ProjectCard from "./ProjectCard.jsx";



export default function AllProjects() {
  return (
 
    <article>
    <h1>alle prosjekter</h1>
   
        {project.map((item) => (
  <ProjectCard key={item.title} project={item} />
))}
    </article>
  )

}

   
    
    
    