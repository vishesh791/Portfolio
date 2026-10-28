'use client';

import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Cpu, Code2, CircuitBoard, Wrench, Github, Linkedin, Mail, Phone, Menu, X, ExternalLink, Lightbulb, GraduationCap, FileText, Play, Radio, Layers3 } from 'lucide-react';

const projects = [
  {
    number: '01', category: 'EMBEDDED SYSTEMS · ARCADE', title: 'Arduino Pac-Man',
    description: 'Built collaboratively by Vishesh Kumar and Dev Kumar: a standalone retro Pac-Man game on Arduino Nano, generating composite video for a TV/monitor through the TV Out library.',
    collaborators: 'Built by Vishesh Kumar & Dev Kumar',
    tags: ['Arduino Nano', 'C/C++', 'TV Out', 'Composite video', 'Circuit assembly'],
    link: 'https://drive.google.com/drive/folders/1DrI1ppT2Rr-FbfwbSJXQ0_0C4YdK_27Q?usp=sharing',
    accent: 'mint', icon: 'pacman',
  },
  {
    number: '02', category: 'INTERACTIVE HARDWARE', title: 'Touchscreen Tic-Tac-Toe',
    description: 'A collaborative Arduino prototype by Vishesh Kumar and Dev Kumar, combining a PenMount touch interface and display with a voltage booster, rechargeable battery, PCB, and physical enclosure.',
    collaborators: 'Built by Vishesh Kumar & Dev Kumar',
    tags: ['Arduino', 'Touch-display integration', 'Rechargeable power', 'PCB', 'Prototyping'],
    link: 'https://drive.google.com/drive/folders/1albv7MlqmkhSRqKd623pYM36d89Bs6yG?usp=sharing',
    accent: 'orange', icon: 'touch',
  },
  {
    number: '03', category: 'DISPLAY · EMBEDDED', title: 'TV Out Tic-Tac-Toe',
    description: 'Built collaboratively by Vishesh Kumar and Dev Kumar: a Tic-Tac-Toe game adapted for a TV or monitor using Arduino and the TV Out library.',
    collaborators: 'Built by Vishesh Kumar & Dev Kumar',
    tags: ['Arduino', 'C/C++', 'TV Out', 'Game logic', 'Testing & debugging'],
    link: 'https://drive.google.com/drive/folders/1S6nC4tekcd0mWr2bPNKg0tK1NsoVwrO2?usp=sharing',
    accent: 'blue', icon: 'grid',
  },
  {
    number: '04', category: 'FULL-STACK WEB DEVELOPMENT', title: 'Shukriya',
    description: 'A creator tipping platform built with a modern web stack, with payment flow handling, validation, and authentication.',
    tags: ['Next.js', 'React', 'MongoDB', 'Razorpay'],
    link: 'https://project-shukriya.vercel.app/', accent: 'purple', icon: 'web',
  },
];

const skills = [
  { title: 'Testing & Validation', icon: CircuitBoard, items: ['Multimeter', 'Oscilloscope', 'DC source / electronic load', 'Input/output checks', 'Hardware debugging', 'Troubleshooting', 'Test plans', 'Technical documentation'] },
  { title: 'Embedded & Hardware', icon: Cpu, items: ['Arduino / Arduino Nano', 'C/C++', 'TV Out library', 'Composite video output', 'Touch-display integration', 'Circuit assembly', 'Soldering / desoldering', 'Component integration'] },
  { title: 'Programming', icon: Code2, items: ['C / C++', 'Python', 'Java', 'JavaScript', 'SQL', 'Game logic', 'Problem solving'] },
  { title: 'Web & Backend', icon: Layers3, items: ['React', 'Next.js', 'Node.js', 'Express.js', 'REST APIs', 'MongoDB'] },
  { title: 'Tools & Engineering Workflow', icon: Wrench, items: ['Arduino IDE', 'Serial Monitor', 'Iterative prototyping', 'Hardware troubleshooting', 'Git / GitHub', 'Postman', 'Test plans & documentation', 'Cross-disciplinary engineering'] },
];

function ProjectGlyph({ type }) {
  if (type === 'pacman') return <div className="pacman-art"><span className="pacman-mouth"/><i/><i/><i/><b>READY!</b></div>;
  if (type === 'touch') return <div className="touch-art"><div className="touch-screen"><span>×</span><span>○</span><span>○</span><span>×</span><span>×</span><span>○</span><span>○</span><span>×</span><span>○</span></div><div className="touch-base"/></div>;
  if (type === 'grid') return <div className="grid-art"><div>×</div><div>○</div><div>×</div><div>○</div><div>×</div><div>○</div><div>×</div><div>○</div><div>×</div></div>;
  return <div className="web-art"><div className="web-top"><span/><span/><span/></div><div className="web-line wide"/><div className="web-line"/><div className="web-cards"><span/><span/><span/></div><div className="web-line short"/></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">V<span>.</span></span><span>VISHESH KUMAR</span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#work" onClick={closeMenu}>Projects</a><a href="#about" onClick={closeMenu}>About</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#contact" className="nav-contact" onClick={closeMenu}>Get in touch <ArrowUpRight size={15}/></a>
        </div>
      </nav>

      <section id="home" className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> ECE GRADUATE · ENGINEER · BUILDER</div>
          <h1>I like turning<br/>ideas into <em>real things.</em></h1>
          <p className="hero-lede">I’m Vishesh — an Electronics & Communication Engineering graduate who enjoys building at the intersection of hardware, code, and creative problem-solving.</p>
          <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={17}/></a><a className="text-link" href="https://drive.google.com/file/d/1FDGB7EFKmTMUJzWTW4eDYbYztGSJcyBB/view?usp=sharing" target="_blank" rel="noreferrer">View resume <ArrowUpRight size={16}/></a></div>
          <div className="hero-meta"><span><GraduationCap size={16}/> NSUT · Class of 2026</span><span><Radio size={16}/> Electronics + Software</span></div><div className="collaboration-banner"><span>COLLABORATIVE BUILDS</span><strong>Arduino projects by Vishesh Kumar & Dev Kumar</strong></div>
        </div>
        <div className="hero-visual" aria-label="Abstract illustration of an engineering workbench">
          <div className="visual-topline"><span>BUILD LOG / 001</span><span>28° 36' N</span></div>
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="chip"><Cpu size={64} strokeWidth={1.1}/><span>IDEA → PROTOTYPE</span></div>
          <div className="wire wire-one"/><div className="wire wire-two"/>
          <div className="float-card card-code"><span className="mini-label">CODE</span><Code2 size={20}/><div className="code-lines"><i/><i/><i/></div></div>
          <div className="float-card card-circuit"><span className="mini-label">CIRCUIT</span><CircuitBoard size={24}/><div className="circuit-pins"><i/><i/><i/><i/></div></div>
          <div className="visual-caption"><span>FIG 01.</span> Curiosity, made tangible.</div>
        </div>
        <div className="hero-index"><span>01 / 04</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="marquee" aria-label="Areas of interest"><div className="marquee-track"><span>HARDWARE PROTOTYPING</span><b>✳</b><span>EMBEDDED SYSTEMS</span><b>✳</b><span>FULL-STACK DEVELOPMENT</span><b>✳</b><span>CREATIVE ENGINEERING</span><b>✳</b><span>HARDWARE PROTOTYPING</span><b>✳</b><span>EMBEDDED SYSTEMS</span><b>✳</b></div></section>

      <section id="work" className="section shell">
        <div className="section-heading"><div><div className="eyebrow">01 — SELECTED WORK</div><h2>Things I’ve <em>built.</em></h2></div><p>A mix of physical prototypes and software projects. Each one taught me something about making ideas work outside the screen.</p></div>
        <div className="project-grid">
          {projects.map((p) => <article className={`project-card ${p.accent}`} key={p.number}>
            <a className="project-art" href={p.link || '#contact'} target={p.link ? '_blank' : undefined} rel={p.link ? 'noreferrer' : undefined} aria-label={`Open ${p.title} project details`}><span className="project-number">{p.number} / PROJECT</span><ProjectGlyph type={p.icon}/><span className="art-open"><ArrowUpRight size={18}/></span></a>
            <div className="project-info"><div className="project-category">{p.category}</div><h3>{p.title}</h3><p>{p.description}</p>{p.collaborators && <div className="collaborator-note"><span className="collab-dot"/> {p.collaborators}</div>}<div className="tag-row">{p.tags.map(t => <span key={t}>{t}</span>)}</div><a className="project-link" href={p.link || '#contact'} target={p.link ? '_blank' : undefined} rel={p.link ? 'noreferrer' : undefined}>{p.link ? 'View project folder' : 'Ask me about this project'} <ArrowUpRight size={15}/></a></div>
          </article>)}
        </div>
        <div className="portfolio-note"><Lightbulb size={20}/><div><strong>What I want to build next:  The Living Arcade- A Game You Can Play With Your Whole Body </strong>  <br/>
          <div>If I could build my first project with Builders.mu, I would create The Living Arcade, an interactive, large-scale gaming installation that turns a simple game into a shared physical experience.</div><br/>
        <div>The idea is to build a giant arcade wall where people can play using oversized physical buttons, joysticks, and motion-based interactions. A large display would show the game, while LEDs, sound effects, and physical feedback would make every move feel alive. Instead of one person playing alone, the system could support challenges between individuals or teams, turning the game into something people gather around, compete in, and remember.</div><br/>
        <div>
          I would approach it by first building a small working prototype using Arduino, physical controls, and a display. Once the core interaction works reliably, I would expand it into a larger structure, integrate lighting and sound, and test it with real users. I would work closely with the creative team to refine the experience while keeping the electronics modular, safe, and easy to maintain.
        </div><br/>
        <div>My goal would not simply be to build another game, but to create a physical experience that makes people stop, get curious, participate, and have fun together. My previous Arduino gaming projects gave me a starting point, and I would use this opportunity to push beyond what I have built before.</div>
</div></div>
      </section>

      <section id="about" className="about-section">
        <div className="shell about-layout">
          <div className="about-stamp"><span>CURIOUS BY DESIGN</span><div className="stamp-circle"><Cpu size={48}/><span>ECE<br/>× CODE</span></div><span>LEARN · BUILD · REPEAT</span></div>
          <div className="about-copy"><div className="eyebrow">02 — A LITTLE ABOUT ME</div><h2>Engineer by training.<br/><em>Builder by curiosity.</em></h2><p>I’m an ECE graduate from Netaji Subhas University of Technology (NSUT). I enjoy bringing together electronics, programming, and practical problem-solving — from Arduino-powered games to web applications.</p><p>I’ve worked with Dev Kumar on three Arduino gaming projects, sharing coding, electronics, assembly, testing, and debugging. That collaboration taught us to bring hardware and software together, document the build, and improve through iteration. I’m keen to keep developing my skills through hands-on engineering and thoughtful experimentation.</p><div className="about-facts"><div><span>EDUCATION</span><strong>B.Tech, Electronics & Communication</strong><small>NSUT · 2022–2026</small></div><div><span>INTERESTS</span><strong>Embedded systems · Prototyping · Web</strong><small>Hardware meets software</small></div><div><span>COLLABORATOR</span><strong>Dev Kumar</strong><small>Co-built three Arduino projects</small></div></div><a className="text-link" href="https://drive.google.com/file/d/1FDGB7EFKmTMUJzWTW4eDYbYztGSJcyBB/view?usp=sharing" target="_blank" rel="noreferrer">Read my resume <ArrowUpRight size={16}/></a></div>
        </div>
      </section>

      <section id="skills" className="section shell skills-section">
        <div className="section-heading"><div><div className="eyebrow">03 — TOOLKIT</div><h2>What I work <em>with.</em></h2></div><p>A growing toolkit across electronics, programming, and building useful digital experiences.</p></div>
        <div className="skills-grid">{skills.map(({title, icon: Icon, items}, i) => <div className="skill-card" key={title}><div className="skill-card-top"><span>0{i+1}</span><Icon size={22}/></div><h3>{title}</h3><div className="skill-pills">{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
      </section>

      <section className="experience-section"><div className="shell experience-layout"><div><div className="eyebrow">04 — EXPERIENCE & RESEARCH</div><h2>Learning by<br/><em>doing.</em></h2><p className="experience-intro">A few more pieces of my engineering journey.</p></div><div className="timeline">
        <article className="timeline-item"><div className="timeline-dot"/><div className="timeline-meta"><span>JUN — JUL 2025</span><span>INTERNSHIP</span></div><h3>Drone GPS Antenna & Mobile App</h3><h4>NSUT · Summer Internship</h4><p>Built and optimized machine-learning models to improve GPS accuracy across multiple frequency bands for drone navigation. Designed custom GPS models to improve real-time mapping precision and reduce location error, and supported integration into a mobile app for accurate drone positioning and live tracking under Prof. Rajveer Singh Yaduvanshi.</p></article>
        <article className="timeline-item"><div className="timeline-dot"/><div className="timeline-meta"><span>PUBLICATION</span><span>PUBLICATION STATUS: COMMITTED</span></div><h3>Security Analysis of Wavelength-Dependent Beam Splitter Attack in QKD</h3><h4>Quantum communication research</h4><p>V. Kumar, M. Jaluthria, P. Kumar, D. Kumar, S. Saxena and R. R. Singh, “Security Analysis of Wavelength-Dependent Beam Splitter Attack in QKD,” 6th International Conference on Emerging VLSI and Semiconductor Technology for AI and Computing Applications (EVST 2026), New Delhi, India, 2026. Status: committed.</p></article><article className="timeline-item"><div className="timeline-dot"/><div className="timeline-meta"><span>ACHIEVEMENTS</span><span>CODING</span></div><h3>Problem Solving & DSA</h3><p>Solved 350+ DSA problems across online coding platforms. HackerRank Problem Solving (Intermediate) and SQL certificates.</p></article>
      </div></div></section>

      <section id="contact" className="contact-section"><div className="shell contact-inner"><div className="eyebrow">05 — LET’S CONNECT</div><h2>Have an idea?<br/><em>Let’s make it real.</em></h2><p>I’m open to opportunities in engineering, embedded systems, hardware testing, prototyping, and software development.</p><div className="contact-actions"><a className="button button-light" href="mailto:vishesh.kumar.ug22@nsut.ac.in">Email me <Mail size={17}/></a><a className="contact-line" href="tel:+918882161027"><Phone size={16}/> +91 8882161027</a></div><div className="contact-email">vishesh.kumar.ug22@nsut.ac.in</div></div><div className="contact-orbit orbit-a"/><div className="contact-orbit orbit-b"/></section>

      <footer className="footer shell"><a className="brand" href="#home"><span className="brand-mark">V<span>.</span></span><span>VISHESH KUMAR</span></a><span className="footer-note">BUILT WITH CURIOSITY · 2026</span><a className="back-top" href="#home">BACK TO TOP ↑</a></footer>
    </main>
  );
}
