import { useEffect, useState } from 'react';
import './App.css';
import TicTacToe from './TicTacToe';
import RockPaperScissors from './RockPaperScissors';

const GITHUB_USERNAME = 'Saurabhdas00';
const PROFILE_IMAGE = 'https://avatars.githubusercontent.com/u/104390747?v=4';

function App() {
  const [repos, setRepos] = useState([]);
  const [currentSection, setCurrentSection] = useState('about');
  const [showProjectDetails, setShowProjectDetails] = useState({});
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data);
          if (data.length > 0) {
            console.log('Fetched repos:', data.map(r => r.name));
          }
        }
      });
  }, []);

  const sections = [
    { id: 'about', icon: '👨‍💻', title: 'About', character: '🧙‍♂️' },
    { id: 'projects', icon: '🕹️', title: 'Projects', character: '⚔️' },
    { id: 'skills', icon: '💾', title: 'Skills', character: '🛡️' },
    { id: 'achievements', icon: '🏆', title: 'Achievements', character: '👑' },
    { id: 'resume', icon: '📄', title: 'Resume', character: '📚' },
    { id: 'contact', icon: '📞', title: 'Contact', character: '🤝' },
    { id: 'game', icon: '🎮', title: 'Game', character: '🐉' },
  ];

  const currentIndex = sections.findIndex(s => s.id === currentSection);

  const moveForward = () => {
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1].id);
    }
  };

  const moveBackward = () => {
    if (currentIndex > 0) {
      setCurrentSection(sections[currentIndex - 1].id);
    }
  };

  const toggleProjectDetails = (projectId) => {
    setShowProjectDetails(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const mainQuestProjects = [
    'terratech',
    'word2pdf',
    'bike-prediction-kaggle',
    'solartracker',
    'stratosphere',
    'project',
    'portfolio',
    'leaflink',
    'data-analytics-dashboard',
    'bike-demand-forecasting'
  ];

  return (
    <div className="portfolio-root">
      <header className="portfolio-header fade-in">
        <div className="character-sprite main-character">🧙‍♂️</div>
        <h1>
          <span className="arcade-icon">🎮</span>
          Saurabh Das
          <span className="arcade-icon">🎮</span>
        </h1>
        <div className="game-ui">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentIndex + 1) / sections.length) * 100}%` }}
            ></div>
          </div>
          <div className="level-indicator">Level {currentIndex + 1} / {sections.length}</div>
        </div>
        <nav>
          {sections.map((section, index) => (
            <a 
              key={section.id}
              href={`#${section.id}`}
              className={currentSection === section.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                setCurrentSection(section.id);
              }}
            >
              <span className="nav-icon">{section.icon}</span>
              {section.title}
            </a>
          ))}
        </nav>
      </header>

      <main className="game-world">
        <div className="road-container">
          <div className="road-line"></div>
          
          <div className="navigation-controls">
            <button 
              className="game-btn backward-btn" 
              onClick={moveBackward}
              disabled={currentIndex === 0}
            >
              ⬅️ Back
            </button>
            <button 
              className="game-btn forward-btn" 
              onClick={moveForward}
              disabled={currentIndex === sections.length - 1}
            >
              Forward ➡️
            </button>
          </div>

          <div className="current-section-display">
            <div className="section-character">{sections[currentIndex].character}</div>
            <h2 className="section-title">{sections[currentIndex].title}</h2>
          </div>

          <div className="section-content">
            {currentSection === 'about' && (
              <section className="portfolio-section fade-in">
                <h2>👨‍💻 Hero's Journey - About the Legend</h2>
                
                <div className="hero-intro">
                  <p>Electrical and Computer Engineering student with a passion for data science and software development. A true hybrid warrior combining the power of electrical engineering with the magic of programming!</p>
                </div>

                <div className="character-stats">
                  <div className="stat-category">
                    <h3>🎓 Academic Stats</h3>
                    <div className="stats-grid">
                      <div className="stat">
                        <span className="stat-label">Level</span>
                        <span className="stat-value">B.Tech Student</span>
                      </div>
                      <div className="stat">
                        <span className="stat-label">School</span>
                        <span className="stat-value">ABES Engineering College</span>
                      </div>
                      <div className="stat">
                        <span className="stat-label">Specialization</span>
                        <span className="stat-value">Data Science Minor</span>
                      </div>
                      <div className="stat">
                        <span className="stat-label">GPA</span>
                        <span className="stat-value">75%</span>
                      </div>
                    </div>
                  </div>

                  <div className="stat-category">
                    <h3>⚡ Core Electrical Subjects</h3>
                    <div className="skill-badges">
                      <span className="skill-badge">Electrical Machines I & II</span>
                      <span className="skill-badge">Power System I</span>
                      <span className="skill-badge">Microprocessor</span>
                      <span className="skill-badge">Control Systems</span>
                    </div>
                  </div>

                  <div className="stat-category">
                    <h3>💻 Programming Languages</h3>
                    <div className="skill-badges">
                      <span className="skill-badge">Python</span>
                      <span className="skill-badge">C</span>
                      <span className="skill-badge">C++</span>
                      <span className="skill-badge">R</span>
                    </div>
                  </div>

                  <div className="stat-category">
                    <h3>🔬 Simulation Tools</h3>
                    <div className="skill-badges">
                      <span className="skill-badge">MATLAB</span>
                      <span className="skill-badge">Simulink</span>
                    </div>
                  </div>

                  <div className="stat-category">
                    <h3>📊 Data Tools</h3>
                    <div className="skill-badges">
                      <span className="skill-badge">Pandas</span>
                      <span className="skill-badge">NumPy</span>
                      <span className="skill-badge">Scikit-learn</span>
                      <span className="skill-badge">Seaborn</span>
                      <span className="skill-badge">Matplotlib</span>
                    </div>
                  </div>

                  <div className="stat-category">
                    <h3>🛠️ Development Tools</h3>
                    <div className="skill-badges">
                      <span className="skill-badge">Power BI</span>
                      <span className="skill-badge">Excel</span>
                      <span className="skill-badge">XAMPP</span>
                      <span className="skill-badge">HTML</span>
                      <span className="skill-badge">CSS</span>
                      <span className="skill-badge">JavaScript</span>
                      <span className="skill-badge">React (Basic)</span>
                    </div>
                  </div>

                  <div className="stat-category">
                    <h3>🗄️ Databases</h3>
                    <div className="skill-badges">
                      <span className="skill-badge">MySQL</span>
                      <span className="skill-badge">Firebase</span>
                    </div>
                  </div>

                  <div className="stat-category">
                    <h3>🤝 Soft Skills</h3>
                    <div className="skill-badges">
                      <span className="skill-badge">Problem Solving</span>
                      <span className="skill-badge">Teamwork</span>
                      <span className="skill-badge">Communication</span>
                      <span className="skill-badge">Time Management</span>
                    </div>
                  </div>
                </div>

                <div className="hero-attributes">
                  <h3>🎯 Character Attributes</h3>
                  <div className="attributes-grid">
                    <div className="attribute">
                      <div className="attribute-header">
                        <span className="attribute-name">Technical Power</span>
                        <span className="attribute-value">85/100</span>
                      </div>
                      <div className="attribute-bar">
                        <div className="attribute-fill" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div className="attribute">
                      <div className="attribute-header">
                        <span className="attribute-name">Problem Solving</span>
                        <span className="attribute-value">90/100</span>
                      </div>
                      <div className="attribute-bar">
                        <div className="attribute-fill" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <div className="attribute">
                      <div className="attribute-header">
                        <span className="attribute-name">Team Collaboration</span>
                        <span className="attribute-value">80/100</span>
                      </div>
                      <div className="attribute-bar">
                        <div className="attribute-fill" style={{width: '80%'}}></div>
                      </div>
                    </div>
                    <div className="attribute">
                      <div className="attribute-header">
                        <span className="attribute-name">Innovation</span>
                        <span className="attribute-value">88/100</span>
                      </div>
                      <div className="attribute-bar">
                        <div className="attribute-fill" style={{width: '88%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hero-quests">
                  <h3>🕹️ Major Quests Completed</h3>
                  <div className="quest-list">
                    <div className="quest-item">
                      <div className="quest-icon">🏆</div>
                      <div className="quest-content">
                        <h4>Global Top 100 - Google Solution Challenge 2024</h4>
                        <p>Led team to create LeafLink AI-powered waste management app</p>
                        <span className="quest-reward">LEGENDARY ACHIEVEMENT</span>
                      </div>
                    </div>
                    <div className="quest-item">
                      <div className="quest-icon">⚡</div>
                      <div className="quest-content">
                        <h4>Top 3 - TerraTech Hackathon at IIM Lucknow</h4>
                        <p>Developed sustainable energy solutions</p>
                        <span className="quest-reward">EPIC ACHIEVEMENT</span>
                      </div>
                    </div>
                    <div className="quest-item">
                      <div className="quest-icon">📊</div>
                      <div className="quest-content">
                        <h4>Data Analytics Dashboard Project</h4>
                        <p>Created interactive BI dashboard with 70% query resolution rate</p>
                        <span className="quest-reward">RARE ACHIEVEMENT</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hero-mission">
                  <h3>🎯 Mission Statement</h3>
                  <p>"To bridge the gap between electrical engineering and modern software development, creating innovative solutions that combine the power of both worlds. Seeking to become a master of both hardware and software realms!"</p>
                </div>
              </section>
            )}

            {currentSection === 'projects' && (
              <section className="portfolio-section fade-in">
                <h2>🕹️ Quest Log - Projects</h2>
                
                {/* Main Quests - Projects with descriptions */}
                <div className="quest-section">
                  <h3>🏆 Main Quests</h3>
                  <div className="project-cards">
                    {repos.length === 0 ? (
                      <div className="loading-card">Loading main quests...</div>
                    ) : (
                      repos.filter(repo => {
                        const hasDescription = repo.description && repo.description.trim() !== '';
                        return hasDescription || mainQuestProjects.includes(repo.name.toLowerCase());
                      }).map((repo, index) => (
                        <div key={repo.id} className="project-card main-quest">
                          <div className="card-header">
                            <span className="project-icon">📁</span>
                            <h3 title={repo.name}>{repo.name}</h3>
                            <button 
                              className="expand-btn"
                              onClick={() => toggleProjectDetails(repo.id)}
                            >
                              {showProjectDetails[repo.id] ? '🔽' : '🔼'}
                            </button>
                          </div>
                          {showProjectDetails[repo.id] && (
                            <div className="card-details">
                              <p>{repo.description || 'A main quest project with detailed implementation and features.'}</p>
                              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="game-btn">
                                🚀 Launch Project
                              </a>
                            </div>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Side Quests - Projects without descriptions */}
                <div className="quest-section">
                  <h3>⚔️ Side Quests</h3>
                  <div className="project-cards">
                    {repos.length === 0 ? (
                      <div className="loading-card">Loading side quests...</div>
                    ) : repos.filter(repo => {
                      const hasDescription = repo.description && repo.description.trim() !== '';
                      return !hasDescription && !mainQuestProjects.includes(repo.name.toLowerCase());
                    }).length === 0 ? (
                      <div className="no-side-quests">All quests have been promoted to main quests! 🎉</div>
                    ) : (
                      repos.filter(repo => {
                        const hasDescription = repo.description && repo.description.trim() !== '';
                        return !hasDescription && !mainQuestProjects.includes(repo.name.toLowerCase());
                      }).map((repo, index) => (
                        <div key={repo.id} className="project-card side-quest">
                          <div className="card-header">
                            <span className="project-icon">⚔️</span>
                            <h3 title={repo.name}>{repo.name}</h3>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="game-btn small-btn">
                              🔗 View
                            </a>
                          </div>
                          <div className="side-quest-info">
                            <p>This quest awaits a proper description...</p>
                            <span className="quest-type">SIDE QUEST</span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div className="quest-summary">
                  <div className="summary-item">
                    <span className="summary-icon">🏆</span>
                    <span className="summary-text">Main Quests: {repos.filter(repo => {
                      const hasDescription = repo.description && repo.description.trim() !== '';
                      return hasDescription || mainQuestProjects.includes(repo.name.toLowerCase());
                    }).length}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-icon">⚔️</span>
                    <span className="summary-text">Side Quests: {repos.filter(repo => {
                      const hasDescription = repo.description && repo.description.trim() !== '';
                      return !hasDescription && !mainQuestProjects.includes(repo.name.toLowerCase());
                    }).length}</span>
                  </div>
                </div>
              </section>
            )}

            {currentSection === 'skills' && (
              <section className="portfolio-section fade-in">
                <h2>💾 Skill Tree</h2>
                <div className="skill-grid">
                  <div className="skill-category">
                    <h3>⚔️ Programming Languages</h3>
                    <div className="skill-items">
                      <span className="skill-item">Python</span>
                      <span className="skill-item">C</span>
                      <span className="skill-item">C++</span>
                      <span className="skill-item">R</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <h3>🛡️ Frameworks & Tools</h3>
                    <div className="skill-items">
                      <span className="skill-item">React</span>
                      <span className="skill-item">HTML/CSS/JS</span>
                      <span className="skill-item">Power BI</span>
                      <span className="skill-item">Excel</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <h3>🏰 Databases</h3>
                    <div className="skill-items">
                      <span className="skill-item">MySQL</span>
                      <span className="skill-item">Firebase</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <h3>🔮 Data Analytics</h3>
                    <div className="skill-items">
                      <span className="skill-item">Numpy</span>
                      <span className="skill-item">Pandas</span>
                      <span className="skill-item">Scikit-learn</span>
                      <span className="skill-item">Seaborn</span>
                      <span className="skill-item">Matplotlib</span>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {currentSection === 'achievements' && (
              <section className="portfolio-section fade-in">
                <h2>🏆 Achievement Hall</h2>
                <div className="achievement-cards">
                  <div className="achievement-card legendary">
                    <div className="achievement-icon">👑</div>
                    <h3>Global Top 100</h3>
                    <p>Google Solution Challenge 2024 (LeafLink App)</p>
                    <div className="achievement-rarity">LEGENDARY</div>
                  </div>
                  <div className="achievement-card epic">
                    <div className="achievement-icon">⚡</div>
                    <h3>Top 3 - TerraTech Hackathon</h3>
                    <p>IIM Lucknow for sustainable energy solutions</p>
                    <div className="achievement-rarity">EPIC</div>
                  </div>
                </div>
              </section>
            )}

            {currentSection === 'resume' && (
              <section className="portfolio-section fade-in">
                <h2>📄 Hero's Scroll - Complete Resume</h2>
                
                <div className="resume-content">
                  {/* Personal Info */}
                  <div className="resume-section">
                    <h3>👤 Personal Information</h3>
                    <div className="info-grid">
                      <div className="info-item">
                        <span className="info-label">Name:</span>
                        <span className="info-value">Saurabh Das</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Phone:</span>
                        <span className="info-value">+91-8595980491</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Email:</span>
                        <span className="info-value">saurabhdas2408@gmail.com</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Location:</span>
                        <span className="info-value">Bhavishya Apartment, Najafgarh, Delhi– 110043, India</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">LinkedIn:</span>
                        <span className="info-value">
                          <a href="https://linkedin.com/in/saurabh-data00" target="_blank" rel="noopener noreferrer">
                            linkedin.com/in/saurabh-data00
                          </a>
                        </span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">GitHub:</span>
                        <span className="info-value">
                          <a href="https://github.com/Saurabhdas00" target="_blank" rel="noopener noreferrer">
                            github.com/Saurabhdas00
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="resume-section">
                    <h3>🎓 Education</h3>
                    <div className="education-item">
                      <div className="education-header">
                        <h4>ABES Engineering College, Ghaziabad</h4>
                        <span className="education-year">2022– Present</span>
                      </div>
                      <p>Bachelor of Technology in Electrical and Computer Engineering</p>
                      <p>Percentage: 75%</p>
                    </div>
                    <div className="education-item">
                      <div className="education-header">
                        <h4>Minor in Data Science, ABES EC</h4>
                        <span className="education-year">2022– Present</span>
                      </div>
                      <p>Percentage: 60.6%</p>
                    </div>
                    <div className="education-item">
                      <div className="education-header">
                        <h4>CBSE Board, India</h4>
                        <span className="education-year">2019– 2020</span>
                      </div>
                      <p>Senior Secondary (Class XII): 83%</p>
                      <p>Secondary (Class X): 77%</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="resume-section">
                    <h3>⚔️ Skills</h3>
                    <div className="skills-category">
                      <h4>Programming Languages</h4>
                      <div className="skill-tags">
                        <span className="skill-tag">Python</span>
                        <span className="skill-tag">C</span>
                        <span className="skill-tag">C++</span>
                        <span className="skill-tag">R</span>
                      </div>
                    </div>
                    <div className="skills-category">
                      <h4>Frameworks & Tools</h4>
                      <div className="skill-tags">
                        <span className="skill-tag">XAMPP</span>
                        <span className="skill-tag">Power BI</span>
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">Excel</span>
                        <span className="skill-tag">HTML</span>
                        <span className="skill-tag">CSS</span>
                        <span className="skill-tag">JavaScript</span>
                      </div>
                    </div>
                    <div className="skills-category">
                      <h4>Databases</h4>
                      <div className="skill-tags">
                        <span className="skill-tag">MySQL</span>
                        <span className="skill-tag">Firebase</span>
                      </div>
                    </div>
                    <div className="skills-category">
                      <h4>Data Analytics</h4>
                      <div className="skill-tags">
                        <span className="skill-tag">Numpy</span>
                        <span className="skill-tag">Pandas</span>
                        <span className="skill-tag">Scikit-learn</span>
                        <span className="skill-tag">Seaborn</span>
                        <span className="skill-tag">Matplotlib</span>
                      </div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="resume-section">
                    <h3>🕹️ Projects</h3>
                    <div className="project-item">
                      <div className="project-header">
                        <h4>LeafLink – AI-Powered Waste Management App</h4>
                        <span className="project-tech">Flutter, Firebase Firestore, Firebase Storage, Google Cloud Platform</span>
                        <span className="project-year">Jan 2024– May 2024</span>
                      </div>
                      <ul className="project-details">
                        <li>Developed an AI-powered app for waste classification into recyclable, reusable, and hazardous categories using image recognition, improving segregation efficiency by 40%.</li>
                        <li>Implemented real-time updates for posts, comments, and leaderboard via Firebase Firestore for seamless user experience.</li>
                        <li>Optimized media handling with Firebase Storage, reducing load times by 40% for smoother uploads and downloads.</li>
                        <li>Enhanced user engagement by adding notification systems for events, comments, and achievements, resulting in 30% increase in daily active users.</li>
                      </ul>
                    </div>
                    <div className="project-item">
                      <div className="project-header">
                        <h4>Data Analytics Dashboard for Business Intelligence</h4>
                        <span className="project-tech">Power BI, SQL, Excel, Botpress</span>
                        <span className="project-year">Aug 2023– Nov 2023</span>
                      </div>
                      <ul className="project-details">
                        <li>Created an interactive dashboard visualizing sales trends, customer segmentation, and regional performance metrics.</li>
                        <li>Automated live data connections via SQL and Excel, ensuring up-to-date visualizations for business decisions.</li>
                        <li>Built a chatbot using Botpress to answer FAQs and deliver data insights, achieving a 70% query resolution rate.</li>
                        <li>Reduced manual reporting time by 50% through dashboard automation and custom drill-through reports.</li>
                      </ul>
                    </div>
                    <div className="project-item">
                      <div className="project-header">
                        <h4>Bike Demand Forecasting Model</h4>
                        <span className="project-tech">Python, Pandas, Scikit-learn, Seaborn, Matplotlib</span>
                        <span className="project-year">Feb 2023– Apr 2023</span>
                      </div>
                      <ul className="project-details">
                        <li>Designed a predictive model for bike rental demand forecasting, reaching 85% accuracy.</li>
                        <li>Processed and analyzed over 50,000 records using feature engineering, scaling, and outlier handling.</li>
                        <li>Conducted exploratory data analysis (EDA) to identify key demand factors like weather, seasonality, and holidays.</li>
                        <li>Implemented regression models (Linear Regression, Random Forest) and improved forecasting accuracy by 25%.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="resume-section">
                    <h3>🏆 Achievements</h3>
                    <div className="achievement-item">
                      <span className="achievement-icon">👑</span>
                      <div className="achievement-content">
                        <h4>Global Top 100</h4>
                        <p>Google Solution Challenge 2024 (LeafLink App)</p>
                      </div>
                    </div>
                    <div className="achievement-item">
                      <span className="achievement-icon">⚡</span>
                      <div className="achievement-content">
                        <h4>Top 3 – TerraTech Hackathon</h4>
                        <p>IIM Lucknow for sustainable energy solutions</p>
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="resume-section">
                    <h3>📜 Certifications</h3>
                    <div className="certification-list">
                      <div className="certification-item">
                        <span className="cert-icon">📚</span>
                        <span>Introduction to SQL – Sololearn</span>
                      </div>
                      <div className="certification-item">
                        <span className="cert-icon">📊</span>
                        <span>Introduction to Data Analytics – Simplilearn</span>
                      </div>
                      <div className="certification-item">
                        <span className="cert-icon">🎯</span>
                        <span>Data Analytics and Visualization Job Simulation – Forage</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="download-section">
                  <p>Download the complete hero's journey and stats!</p>
                  <a href="#" download className="game-btn">
                    📥 Download Resume (PDF)
                  </a>
                </div>
              </section>
            )}

            {currentSection === 'contact' && (
              <section className="portfolio-section fade-in">
                <h2>📞 Contact the Hero</h2>
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-icon">📧</span>
                    <span>saurabhdas2408@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">💼</span>
                    <a href="https://linkedin.com/in/saurabh-data00" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/saurabh-data00
                    </a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">🐙</span>
                    <a href="https://github.com/Saurabhdas00" target="_blank" rel="noopener noreferrer">
                      github.com/Saurabhdas00
                    </a>
                  </div>
                </div>
              </section>
            )}

            {currentSection === 'game' && (
              <section className="portfolio-section fade-in">
                <h2>🎮 Arcade Zone</h2>
                <p>Choose a game to play:</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '2rem 0' }}>
                  <button
                    onClick={() => setSelectedGame('tictactoe')}
                    style={{
                      fontFamily: 'Press Start 2P, monospace',
                      fontSize: '1rem',
                      background: '#00ff00',
                      color: '#181c2b',
                      border: '3px solid #ffd700',
                      borderRadius: '8px',
                      padding: '1rem 2.5rem',
                      boxShadow: '0 0 10px #00ff00',
                      cursor: 'pointer',
                    }}
                  >
                    Tic Tac Toe
                  </button>
                  <button
                    onClick={() => setSelectedGame('rps')}
                    style={{
                      fontFamily: 'Press Start 2P, monospace',
                      fontSize: '1rem',
                      background: '#00eaff',
                      color: '#181c2b',
                      border: '3px solid #ffd700',
                      borderRadius: '8px',
                      padding: '1rem 2.5rem',
                      boxShadow: '0 0 10px #00eaff',
                      cursor: 'pointer',
                    }}
                  >
                    Rock Paper Scissors
                  </button>
                </div>
                {selectedGame === 'tictactoe' && <TicTacToe />}
                {selectedGame === 'rps' && <RockPaperScissors />}
                {!selectedGame && <div style={{ color: '#fff', fontFamily: 'monospace', marginTop: '2rem' }}>Pick a game above to start playing!</div>}
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
