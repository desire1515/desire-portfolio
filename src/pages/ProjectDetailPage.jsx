import { Link, useParams } from 'react-router-dom';
import ProjectActions from '../components/ProjectActions';
import ProjectImage from '../components/ProjectImage';
import { getProjectCategories, projects } from '../data/projects';

function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section className="container section-spacing" role="status">
        <h1>Project not found</h1>
        <Link to="/projects" className="button primary">Browse all projects</Link>
      </section>
    );
  }

  const categories = getProjectCategories(project);
  const technologies = Array.isArray(project.technologies) ? project.technologies : [];
  const features = Array.isArray(project.features) ? project.features : [];
  const screenshots = Array.isArray(project.screenshots) ? project.screenshots : [];

  return (
    <section className="container section-spacing project-detail-page">
      <Link to="/projects" className="project-detail-back">← All projects</Link>

      <div className={`project-detail-layout ${screenshots.length > 0 ? 'project-detail-layout--with-gallery' : ''}`}>
        {screenshots.length === 0 && <ProjectImage project={project} className="project-detail-thumb" />}

        <div className="project-detail-summary reveal-card">
          <span className="kicker">{categories.join(' / ') || 'Project'}</span>
          <h1>{project.title}</h1>
          {project.status && <span className="project-detail-status">{project.status}</span>}
          <p>{project.description}</p>
          <ProjectActions project={project} showDetails={false} className="project-detail-actions" />
        </div>
      </div>

      {screenshots.length > 0 && (
        <section className="project-detail-section project-screenshot-gallery">
          <h2>Application Screenshots</h2>
          <div className="project-screenshot-grid">
            {screenshots.map((screenshot) => (
              <figure className="project-screenshot-card" key={screenshot.label}>
                <ProjectImage
                  project={{ ...project, image: screenshot.image }}
                  alt={`${project.title} ${screenshot.label.toLowerCase()} screenshot`}
                  className="project-screenshot-thumb"
                />
                <figcaption>{screenshot.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <div className="project-detail-sections">
        <section className="project-detail-section reveal-card">
          <h2>Problem being solved</h2>
          <p>{project.problem || project.description}</p>
        </section>

        <section className="project-detail-section reveal-card">
          <h2>Project overview</h2>
          <p>{project.description}</p>
        </section>

        {features.length > 0 && (
          <section className="project-detail-section reveal-card">
            <h2>Main features</h2>
            <ul>
              {features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </section>
        )}

        {technologies.length > 0 && (
          <section className="project-detail-section reveal-card">
            <h2>Technologies</h2>
            <div className="tech-stack">
              {technologies.map((technology) => (
                <span key={`${project.id}-${technology}`} className="tech-pill">{technology}</span>
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}

export default ProjectDetailPage;
