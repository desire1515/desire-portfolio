import { ArrowRight, Code2, Cpu, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { contactEmail, contactFallbackMessage } from '../contact';

const expertise = [
  {
    icon: ShieldCheck,
    title: 'Secure Systems',
    description: 'Security-first application design and resilient system thinking.',
  },
  {
    icon: Code2,
    title: 'Product Engineering',
    description: 'Practical, user-centered software built for real-world impact.',
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    description: 'Intelligent systems, anomaly detection and decision-support tooling.',
  },
];

const featuredProjects = projects.filter((project) => project.featured);

function HomePage() {
  return (
    <>
      <section className="hero-section container reveal-card">
        <div className="hero-content">
          <h1 className="hero-greeting">Hi, I'm Desire Chimtsitsi.</h1>
          <h2 className="hero-headline">Building Secure Digital Experiences.</h2>

          <p className="eyebrow">Software Developer | Cybersecurity Enthusiast | Technology Innovator</p>

          <p className="lead">
            I build practical software solutions, secure applications and intelligent digital systems. I enjoy transforming ideas into useful technology through software development, cybersecurity and problem-solving.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="button primary">
              Explore My Projects
            </Link>
            <a
              href={contactEmail ? `mailto:${contactEmail}` : undefined}
              className="button secondary"
              role="link"
              aria-disabled={!contactEmail}
              tabIndex={contactEmail ? undefined : 0}
              title={!contactEmail ? contactFallbackMessage : undefined}
              aria-label={!contactEmail ? contactFallbackMessage : undefined}
            >
              Contact Me
            </a>
            <a href="https://github.com/desire1515" target="_blank" rel="noreferrer noopener" className="button tertiary">
              GitHub Profile
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="mesh-panel">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="orb orb-three" />
            <div className="screen-window">
              <div className="window-header">
                <span className="window-circle" />
                <span className="window-circle" />
                <span className="window-circle" />
              </div>
              <div className="window-body">
                <div className="code-line short" />
                <div className="code-line" />
                <div className="code-line medium" />
                <div className="code-line short accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-spacing">
        <div className="section-header reveal-card">
          <span className="kicker">Featured work</span>
          <h2>Selected projects</h2>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="container section-spacing">
        <div className="section-header reveal-card">
          <span className="kicker">Core strengths</span>
          <h2>Technical expertise</h2>
        </div>

        <div className="expertise-grid">
          {expertise.map(({ icon: Icon, title, description }) => (
            <div key={title} className="expertise-card reveal-card">
              <div className="icon-wrap">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container cta-panel reveal-card">
        <div>
          <span className="kicker">Let’s build</span>
          <h2>Need a secure, thoughtful digital product?</h2>
        </div>
        <a
          href={contactEmail ? `mailto:${contactEmail}` : undefined}
          className="button primary"
          role="link"
          aria-disabled={!contactEmail}
          tabIndex={contactEmail ? undefined : 0}
          title={!contactEmail ? contactFallbackMessage : undefined}
          aria-label={!contactEmail ? contactFallbackMessage : undefined}
        >
          Start a conversation <ArrowRight size={18} />
        </a>
      </section>
    </>
  );
}

export default HomePage;
