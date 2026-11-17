import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProjectCategories } from '../data/projects';
import ProjectActions from './ProjectActions';
import ProjectImage from './ProjectImage';

function ProjectCard({ project }) {
  const categories = getProjectCategories(project);
  const technologies = Array.isArray(project.technologies) ? project.technologies : [];

  return (
    <article className="project-card reveal-card">
      <ProjectImage project={project} showStatus />

      <div className="project-content">
        <div className="project-meta-row">
          <span className="project-category">
            {categories.length > 0 ? categories.join(' / ') : 'Uncategorized'}
          </span>
          {project.collaborative && (
            <span className="project-collab">
              <Sparkles size={12} /> Collaborative
            </span>
          )}
        </div>

        <h3>
          <Link to={`/projects/${project.id}`}>{project.title}</Link>
        </h3>
        <p>{project.description}</p>

        <div className="tech-stack">
          {technologies.map((technology) => (
            <span key={`${project.id}-${technology}`} className="tech-pill">
              {technology}
            </span>
          ))}
        </div>

        <ProjectActions project={project} />
      </div>
    </article>
  );
}

export default ProjectCard;
