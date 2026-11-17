import { useMemo, useState } from 'react';
import { getProjectCategories, projectCategories, projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Projects') {
      return projects;
    }

    return projects.filter((project) => getProjectCategories(project).includes(activeCategory));
  }, [activeCategory]);

  return (
    <section className="container section-spacing projects-page">
      <div className="section-header reveal-card">
        <span className="kicker">Portfolio</span>
        <h1>Selected projects</h1>
      </div>

      <div className="filter-bar reveal-card" aria-label="Project categories">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-pill ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid projects-grid--full">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
