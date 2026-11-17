import { ArrowUpRight, Briefcase, GraduationCap, MapPin, Shield, Sparkles } from 'lucide-react';
import { contactEmail, contactFallbackMessage } from '../contact';

const skills = {
  Programming: ['Python', 'JavaScript', 'Java', 'C'],
  Frontend: ['HTML', 'CSS', 'React'],
  Backend: ['Flask', 'PHP'],
  Database: ['MySQL', 'SQLite', 'Firebase'],
  Cybersecurity: ['Security monitoring', 'Incident response', 'Network security', 'Access control'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Wireshark'],
};

function AboutPage() {
  return (
    <section className="container section-spacing about-page">
      <div className="about-intro reveal-card">
        <div>
          <span className="kicker">About me</span>
          <h1>Developer with a security-first mindset.</h1>
        </div>

        <p>
          I am a software developer focused on building useful digital products with strong attention to security, quality and user value. My interests span software engineering, cybersecurity, secure design and practical problem-solving across web, system and data-driven applications.
        </p>
      </div>

      <div className="about-grid">
        <div className="info-panel reveal-card">
          <div className="info-header">
            <Sparkles size={18} />
            <h2>Software development interests</h2>
          </div>
          <p>
            I enjoy developing dependable products that balance performance, maintainability and elegant user experience. I like working across the stack to turn concepts into reliable digital experiences.
          </p>
        </div>

        <div className="info-panel reveal-card">
          <div className="info-header">
            <Shield size={18} />
            <h2>Cybersecurity interests</h2>
          </div>
          <p>
            My cybersecurity interests include monitoring, incident response, digital forensics support, access control and assessing systems for weaknesses in a controlled environment.
          </p>
        </div>
      </div>

      <div className="skill-section reveal-card">
        <div className="section-header left-aligned">
          <span className="kicker">Capabilities</span>
          <h2>Technical skills</h2>
        </div>

        <div className="skills-groups">
          {Object.entries(skills).map(([group, values]) => (
            <div key={group} className="skills-group">
              <h3>{group}</h3>
              <div className="skill-badges">
                {values.map((value) => (
                  <span key={value} className="skill-badge">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-details reveal-card">
        <div className="detail-item">
          <GraduationCap size={18} />
          <div>
            <span className="detail-label">Education</span>
            <strong>BSc Computer Science</strong>
          </div>
        </div>

        <div className="detail-item">
          <MapPin size={18} />
          <div>
            <span className="detail-label">Location</span>
            <strong>Malawi</strong>
          </div>
        </div>

        <div className="detail-item">
          <Briefcase size={18} />
          <div>
            <span className="detail-label">GitHub</span>
            <a href="https://github.com/" target="_blank" rel="noreferrer noopener">
              GitHub profile <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="detail-item">
          <Sparkles size={18} />
          <div>
            <span className="detail-label">Email</span>
            <a
              href={contactEmail ? `mailto:${contactEmail}` : undefined}
              aria-disabled={!contactEmail}
              title={!contactEmail ? contactFallbackMessage : undefined}
            >
              {contactEmail || contactFallbackMessage}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
