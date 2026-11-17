import { ArrowRight, BookOpen, Code2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

function getExternalUrl(value) {
  if (typeof value !== 'string' || !value.trim()) {
    return null;
  }

  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol) && url.hostname ? url.href : null;
  } catch (error) {
    if (error instanceof TypeError) {
      return null;
    }

    throw error;
  }
}

function ProjectActions({ project, showDetails = true, className = '' }) {
  const github = getExternalUrl(project.github);
  const demo = getExternalUrl(project.demo);
  const docs = getExternalUrl(project.docs);

  if (!showDetails && !github && !demo && !docs) {
    return null;
  }

  return (
    <div className={`project-actions ${className}`}>
      {showDetails && (
        <Link to={`/projects/${project.id}`} className="project-details-link">
          Project details <ArrowRight size={16} />
        </Link>
      )}
      {github && (
        <a href={github} target="_blank" rel="noreferrer noopener" aria-label={`View GitHub repository for ${project.title}`}>
          <Code2 size={16} />
          GitHub
        </a>
      )}
      {demo && (
        <a href={demo} target="_blank" rel="noreferrer noopener" aria-label={`View live demo for ${project.title}`}>
          <Globe size={16} />
          Live demo
        </a>
      )}
      {docs && (
        <a href={docs} target="_blank" rel="noreferrer noopener" aria-label={`View documentation for ${project.title}`}>
          <BookOpen size={16} />
          Docs
        </a>
      )}
    </div>
  );
}

export default ProjectActions;
