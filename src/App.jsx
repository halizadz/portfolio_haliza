import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import './App.css';

// Icons
import { 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin,
  Github, 
  Linkedin, 
  Instagram,
  ExternalLink,
  Calendar,
  Award,
  Sparkles,
  Terminal,
  Cpu,
  Database,
  Palette,
  Send,
  Zap,
  CheckCircle,
  Layout,
  Server,
  Rocket,
  Star,
  Target,
  Users,
  Quote
} from 'lucide-react';

// ========== COMPONENT: MODERN SKILLS SECTION ==========
function ModernSkillsSection() {
  const [activeSkill, setActiveSkill] = useState(null);

  // Skill Data
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout size={28} />,
      color: "#8B5CF6",
      skills: [
        { name: "React", icon: "⚛️", level: "intermediate", projects: 3 },
        { name: "JavaScript", icon: "📘", level: "intermediate", projects: 5 },
        { name: "Tailwind CSS", icon: "🎨", level: "intermediate", projects: 4 },
        { name: "HTML/CSS", icon: "🎯", level: "advanced", projects: 10 },
        { name: "Bootstrap", icon: "🚀", level: "intermediate", projects: 3 }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Server size={28} />,
      color: "#10B981",
      skills: [
        { name: "Laravel", icon: "🪄", level: "intermediate", projects: 3 },
        { name: "PHP", icon: "🐘", level: "intermediate", projects: 4 },
        { name: "MySQL", icon: "🐬", level: "intermediate", projects: 3 },
        { name: "Node.js", icon: "🟢", level: "beginner", projects: 1 },
        { name: "REST API", icon: "🔗", level: "intermediate", projects: 3 }
      ]
    },
    {
      title: "Tools & Others",
      icon: <Terminal size={28} />,
      color: "#3B82F6",
      skills: [
        { name: "Git/GitHub", icon: "🐙", level: "intermediate", projects: 8 },
        { name: "Figma", icon: "🎨", level: "beginner", projects: 2 },
        { name: "VS Code", icon: "💻", level: "advanced", projects: 15 },
        { name: "Linux", icon: "🐧", level: "beginner", projects: 2 }
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case 'expert': return 'level-expert';
      case 'advanced': return 'level-advanced';
      case 'intermediate': return 'level-intermediate';
      default: return 'level-beginner';
    }
  };

  const getLevelText = (level) => {
    switch(level) {
      case 'expert': return 'Expert';
      case 'advanced': return 'Advanced';
      case 'intermediate': return 'Intermediate';
      default: return 'Beginner';
    }
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">
        Teknologi dan tools yang saya kuasai untuk membangun solusi digital
      </p>

      {/* Skill Categories Grid */}
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category-card">
            <div className="skill-category-header">
              <div className="skill-category-icon" style={{ color: category.color }}>
                {category.icon}
              </div>
              <h3 className="skill-category-title">{category.title}</h3>
            </div>
            
            <div className="skill-pills">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className={`skill-pill ${skill.level} skill-tooltip`}
                  data-tooltip={`${getLevelText(skill.level)} • ${skill.projects} proyek`}
                  onMouseEnter={() => setActiveSkill(skill.name)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  <span className="skill-pill-icon">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ========== COMPONENT: TYPING ANIMATION ==========
function TypingAnimation({ text, speed = 100, delay = 500 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isDone) return;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < text.length) {
        // Mengetik
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else if (!isDeleting && currentIndex === text.length) {
        // Tunggu sebentar setelah selesai mengetik
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentIndex > 0) {
        // Menghapus
        setDisplayedText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      } else if (isDeleting && currentIndex === 0) {
        // Mulai lagi
        setIsDeleting(false);
        setIsDone(true);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text, speed, isDone]);

  return (
    <span className="typing-text">
      {displayedText}
      <span className="cursor">|</span>
    </span>
  );
}

// Atau versi sederhana (hanya typing sekali):
function SimpleTypingAnimation({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className="typing-text">
      {displayedText}
      <span className="cursor">|</span>
    </span>
  );
}

// ========== COMPONENT: ORGANIZATION EXPERIENCE ==========
function OrganizationSection({ organizations }) {
  return (
    <section id="organizations" className="section">
      <h2 className="section-title">Pengalaman Organisasi</h2>
      <p className="section-subtitle">
        Kepemimpinan, kolaborasi tim, dan pengembangan soft skills dalam organisasi kampus
      </p>
      
      <div className="organizations-container">
        {organizations.map((org, index) => (
          <div key={index} className="organization-card">
            <div className="org-header">
              <div className="org-icon">
                {org.position.includes("Ketua") ? <Target size={28} /> : <Users size={28} />}
              </div>
              <div>
                <h3 className="org-name">{org.name}</h3>
                <div className="org-meta">
                  <span className="org-position">{org.position}</span>
                  <span className="org-period">
                    <Calendar size={14} /> {org.period}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="org-description">{org.description}</p>
            
            <div className="org-achievements">
              <h4>
                <Award size={18} />
                Pencapaian & Kontribusi
              </h4>
              <ul>
                {org.achievements.map((achievement, i) => (
                  <li key={i}>
                    <CheckCircle size={16} color="#10B981" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="org-skills">
              <h4>
                <Zap size={18} />
                Skills yang Dikembangkan
              </h4>
              <div className="skill-tags">
                {index === 0 ? (
                  <>
                    <span className="skill-tag">Leadership</span>
                    <span className="skill-tag">Communication</span>
                    <span className="skill-tag">Team Management</span>
                    <span className="skill-tag">Networking</span>
                    <span className="skill-tag">Strategic Planning</span>
                  </>
                ) : (
                  <>
                    <span className="skill-tag">Team Collaboration</span>
                    <span className="skill-tag">Communication</span>
                    <span className="skill-tag">Adaptability</span>
                    <span className="skill-tag">Initiative</span>
                    <span className="skill-tag">Problem Solving</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="leadership-quote">
        <Quote size={32} color="var(--primary)" />
        <p className="quote-text">
          "Pengalaman organisasi telah mengajarkan saya keterampilan berharga dalam komunikasi, 
          kepemimpinan, dan kerja sama tim. Saya siap membawa soft skills ini ke lingkungan 
          profesional dan berkontribusi maksimal dalam tim."
        </p>
      </div>
    </section>
  );
}

// ========== MAIN APP COMPONENT ==========
function App() {
    const [portfolio, setPortfolio] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeNav, setActiveNav] = useState('home');

    useEffect(() => {
        // Simulasi loading untuk smooth transition
        setTimeout(() => {
            setPortfolio(portfolioData);
            setLoading(false);
        }, 500);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveNav(sectionId);
        }
    };

    if (loading) {
        return (
            <div className="loading">
                <div className="loader"></div>
                <p>Loading portfolio...</p>
            </div>
        );
    }

    const { profile, projects, organizations, education } = portfolio;

    return (
        <>
            {/* Header */}
            <header className="header">
                <div className="nav-container">
                    <div className="logo">
                        <Code2 className="logo-icon" />
                        <span>Portfolio</span>
                    </div>
                    
                    <nav className="nav-links">
                        <a href="#home" className={`nav-link ${activeNav === 'home' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                            Home
                        </a>
                        <a href="#projects" className={`nav-link ${activeNav === 'projects' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                            Projects
                        </a>
                        <a href="#skills" className={`nav-link ${activeNav === 'skills' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
                            Skills
                        </a>
                        <a href="#organizations" className={`nav-link ${activeNav === 'organizations' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('organizations'); }}>
                            Organizations
                        </a>
                        <a href="#contact" className="cta-button" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                            <Send size={16} style={{ marginRight: '8px' }} />
                            Contact
                        </a>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <span className="badge">
                            <Sparkles size={14} style={{ marginRight: '6px' }} />
                            Mencari Magang
                        </span>
                        
                        <h1 className="hero-title">
                            Hi, I'm{" "}
                            <TypingAnimation 
                                text={profile.name} 
                                />
                        </h1>
                        
                        
                        <p className="hero-description">
                            {profile.about}
                        </p>
                        
                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-number">{projects.length}+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">2</span>
                                <span className="stat-label">Tahun Organisasi</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">{education[0].gpa}</span>
                                <span className="stat-label">IPK</span>
                            </div>
                        </div>
                        
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                            <a href="#contact" className="cta-button" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                                <Mail size={16} style={{ marginRight: '8px' }} />
                                Contact Me
                            </a>
                            <a href="#projects" className="cta-button" style={{ background: 'transparent', border: '2px solid var(--primary)' }} onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                                <ExternalLink size={16} style={{ marginRight: '8px' }} />
                                View Projects
                            </a>
                            <a href={profile.social_links.github} className="cta-button" style={{ background: 'transparent', border: '2px solid var(--dark-border)' }} target="_blank" rel="noopener noreferrer">
                                <Github size={16} style={{ marginRight: '8px' }} />
                                GitHub
                            </a>
                        </div>
                    </div>
                    
                    <div className="hero-image">
                        <div className="profile-image-wrapper">
                            <img 
                                src={profile.photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'} 
                                alt={profile.name}
                                className="profile-image"
                            />
                            <div className="floating-tech tech-1">
                                <Terminal size={24} />
                            </div>
                            <div className="floating-tech tech-2">
                                <Cpu size={24} />
                            </div>
                            <div className="floating-tech tech-3">
                                <Database size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section">
                <h2 className="section-title">Proyek & Portofolio</h2>
                <p className="section-subtitle">
                    Aplikasi web yang dikembangkan selama perkuliahan dan organisasi
                </p>
                
                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img src={project.image || 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.github_url} className="project-link" target="_blank" rel="noopener noreferrer">
                                            <Github size={20} />
                                        </a>
                                        {project.live_url && (
                                            <a href={project.live_url} className="project-link" target="_blank" rel="noopener noreferrer">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                                    <h3 className="project-title">{project.title}</h3>
                                    <span style={{ 
                                        fontSize: '0.8rem', 
                                        background: 'rgba(139, 92, 246, 0.1)', 
                                        color: 'var(--primary)', 
                                        padding: '4px 10px', 
                                        borderRadius: '12px',
                                        border: '1px solid rgba(139, 92, 246, 0.2)'
                                    }}>
                                        {project.role}
                                    </span>
                                </div>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modern Skills Section */}
            <ModernSkillsSection />

            {/* Organization Section */}
            <OrganizationSection organizations={organizations} />

            {/* Education Section */}
            <section id="education" className="section" style={{ background: 'rgba(15, 23, 42, 0.7)' }}>
                <h2 className="section-title">Pendidikan</h2>
                <p className="section-subtitle">
                    Latar belakang akademik dan pencapaian
                </p>
                
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    {education.map((edu, index) => (
                        <div key={index} className="education-card">
                            <div className="edu-header">
                                <div className="edu-icon">
                                    <GraduationCap size={32} />
                                </div>
                                <div>
                                    <h3 className="edu-institution">{edu.institution}</h3>
                                    <p className="edu-degree">{edu.degree}</p>
                                    <div className="edu-meta">
                                        <span className="edu-period">
                                            <Calendar size={14} /> {edu.period}
                                        </span>
                                        {edu.status && (
                                            <span className="edu-status">{edu.status}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="edu-details">
                                {edu.gpa && (
                                    <div className="gpa-badge">
                                        <Award size={18} />
                                        <div>
                                            <div className="gpa-value">{edu.gpa}/4.0</div>
                                            <div className="gpa-label">IPK Kumulatif</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Tentang Saya</h3>
                        <p>
                            Mahasiswa Informatika semester 5 yang passionate dengan pengembangan web modern. 
                            Aktif dalam organisasi kampus dengan pengalaman kepemimpinan dan kolaborasi tim. 
                            Mencari kesempatan magang untuk berkontribusi dan belajar di lingkungan profesional.
                        </p>
                        <div className="social-links">
                            <a href={profile.social_links.github} className="social-link" target="_blank" rel="noopener noreferrer">
                                <Github size={20} />
                            </a>
                            <a href={profile.social_links.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={20} />
                            </a>
                            <a href={profile.social_links.instagram} className="social-link" target="_blank" rel="noopener noreferrer">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                    
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
                            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
                            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
                            <li><a href="#organizations" onClick={(e) => { e.preventDefault(); scrollToSection('organizations'); }}>Organizations</a></li>
                            <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h3>Kontak</h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <Mail size={18} />
                                <span>{profile.email}</span>
                            </div>
                            <div className="contact-item">
                                <Phone size={18} />
                                <span>{profile.phone}</span>
                            </div>
                            <div className="contact-item">
                                <MapPin size={18} />
                                <span>{profile.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </footer>
        </>
    );
}

export default App;