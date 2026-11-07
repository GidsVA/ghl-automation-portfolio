import './style.css'
import portraitImage from './assets/gideon-magno.png'

const projects = [
  {
    number: '01',
    type: 'PERSONAL AUTOMATION PROJECT',
    title: 'Slack-to-Google Calendar scheduling',
    description:
      'Turns natural-language meeting requests into a reviewed, availability-aware scheduling workflow.',
    tools: ['Zapier', 'AI by Zapier', 'Slack', 'Google Calendar'],
    steps: [
      'Slack request',
      'AI extracts details',
      'Check availability',
      'Admin approval',
      'Create or notify',
    ],
    details: [
      'Built a 14-step Zap to extract Slack requests, check Google Calendar availability, and route open or busy schedules.',
      'Added an AI-proposed meeting time and administrator approval before event creation, with separate approved, declined, and conflict notifications.',
      'Validated approved, declined, and conflicting requests in three documented trials.',
    ],
    proof: '14 steps · 3 test scenarios',
    pdf: 'slack-calendar-scheduling.pdf',
  },
  {
    number: '02',
    type: 'PERSONAL AUTOMATION PROJECT',
    title: 'AI-powered lead intake & qualification',
    description:
      'Collects service inquiries, creates an organized record, and routes a concise priority summary to Slack.',
    tools: ['Zapier', 'Google Forms', 'Google Sheets', 'AI by Zapier', 'Slack'],
    steps: [
      'Form submission',
      'Log in Sheets',
      'AI evaluates lead',
      'Assign priority',
      'Notify in Slack',
    ],
    details: [
      'Captured inquiries in Google Forms and Sheets, then used AI to summarize the full request, assess urgency, and recommend a next action.',
      'Routed Slack notifications through High, Medium, and Low priority paths.',
      'Tested five mock-client scenarios, including two where AI priority differed from the submitted urgency.',
    ],
    proof: '3 priority paths · 5 test scenarios',
    pdf: 'ai-lead-intake-qualification.pdf',
  },
]

const experience = [
  {
    dates: 'FEB 2026 — PRESENT',
    role: 'Administrative Aide I',
    team: 'CCTV & Public Address Operator · Balayong People’s Park Management',
    points: [
      'Monitor 12 CCTV cameras across 9-hour shifts and document security and operational incidents for follow-up.',
      'Operate a public address system serving 150+ daily visitors across 21 speakers.',
      'Coordinate with security, maintenance, and administrative teams; support 1–2 park events each month.',
    ],
  },
  {
    dates: 'SEP 2025 — NOV 2025',
    role: 'Student Aide',
    team: 'University Admissions · Palawan State University',
    points: [
      'Processed and verified data from 6,000+ admissions applications.',
      'Organized 200+ applications per day in Google Forms and Sheets and prepared records for review.',
      'Maintained digital and physical files in line with data privacy requirements.',
    ],
  },
  {
    dates: 'JAN 2025 — MAY 2025',
    role: 'Technical Support Intern',
    team: 'Palawan International Technology Business Incubator',
    points: [
      'Maintained 6 PCs, 4 printers, and 2 routers/modems supporting 20+ users.',
      'Diagnosed hardware and connectivity issues and documented recurring problems for follow-up.',
    ],
  },
]

const capabilities = [
  'Multi-step workflows',
  'Conditional Paths',
  'AI-assisted data extraction',
  'Lead intake & qualification',
  'Approval workflows',
  'Google Forms & Sheets',
  'Slack notifications',
  'Testing & documentation',
  'Technical troubleshooting',
  'GoHighLevel automation',
]

const projectMarkup = projects
  .map(
    (project) => `
      <article class="project-card">
        <div class="project-topline">
          <span class="project-type">${project.type}</span>
          <span class="project-number">${project.number}</span>
        </div>
        <h3>${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="workflow" aria-label="Workflow steps">
          ${project.steps
            .map(
              (step, index) => `
                <span class="workflow-step">${step}</span>
                ${index < project.steps.length - 1 ? '<span class="workflow-arrow" aria-hidden="true">&rarr;</span>' : ''}
              `,
            )
            .join('')}
        </div>
        <ul class="project-details">
          ${project.details.map((detail) => `<li>${detail}</li>`).join('')}
        </ul>
        <div class="project-footer">
          <div class="tag-list">${project.tools.map((tool) => `<span class="tag">${tool}</span>`).join('')}</div>
          <span class="project-proof">${project.proof}</span>
        </div>
        <div class="project-actions">
          <button
            class="read-case-study"
            type="button"
            data-pdf-src="${import.meta.env.BASE_URL}case-studies/${project.pdf}"
            data-pdf-title="${project.title}"
          >
            Read case study <span aria-hidden="true">&rarr;</span>
          </button>
          <a
            class="open-case-study"
            href="${import.meta.env.BASE_URL}case-studies/${project.pdf}"
            target="_blank"
            rel="noreferrer"
          >
            Open PDF <span aria-hidden="true">&nearr;</span>
          </a>
        </div>
      </article>
    `,
  )
  .join('')

const experienceMarkup = experience
  .map(
    (item) => `
      <article class="experience-item">
        <div class="experience-date">${item.dates}</div>
        <div class="experience-content">
          <h3>${item.role}</h3>
          <p class="experience-team">${item.team}</p>
          <ul>${item.points.map((point) => `<li>${point}</li>`).join('')}</ul>
        </div>
      </article>
    `,
  )
  .join('')

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('Portfolio app root element (#app) was not found.')
}

app.innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#home" aria-label="Gideon Magno, home">
      <img class="wordmark-photo" src="${portraitImage}" alt="" />
      <span>GIDEON MAGNO<span class="wordmark-role">GOHIGHLEVEL AUTOMATION SPECIALIST</span></span>
    </a>
    <nav class="site-nav" aria-label="Main navigation">
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a class="nav-cta" href="#contact">Let’s talk <span aria-hidden="true">&nearr;</span></a>
    </nav>
  </header>

  <main>
    <section class="hero section-shell" id="home">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot"></span> IT GRADUATE · AUTOMATION VA</p>
        <h1>Less manual work.<br /><span>More room to grow.</span></h1>
        <p class="hero-intro">
          I design practical, AI-assisted workflows that help teams capture leads,
          coordinate requests, and keep important details moving.
        </p>
        <p class="platform-note">
          My documented automation builds are in Zapier. I’m now bringing that
          workflow-first approach to GoHighLevel.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="#work">Explore my work <span aria-hidden="true">&darr;</span></a>
          <a class="text-link" href="mailto:magnogideont.va@gmail.com">Get in touch <span aria-hidden="true">&nearr;</span></a>
        </div>
        <div class="hero-tools">
          <span>WORKING WITH</span>
          <div class="hero-tool-list">
            <span>Zapier</span><span>Google Workspace</span><span>Slack</span><span>AI tools</span>
          </div>
        </div>
      </div>
      <div class="hero-visual" aria-label="Example of a connected automation workflow">
        <div class="visual-window">
          <div class="window-bar">
            <span></span>
            <span></span>
            <span></span>
            <b>WORKFLOW OVERVIEW</b>
          </div>
          <div class="flow-node flow-trigger">
            <span class="node-icon">01</span>
            <span><small>TRIGGER</small><strong>New request</strong></span>
            <i>IN</i>
          </div>
          <div class="flow-connector">
            <span></span>
          </div>
          <div class="flow-node flow-ai">
            <span class="node-icon">02</span>
            <span><small>PROCESS</small><strong>Understand & qualify</strong></span>
            <i>AI</i>
          </div>
          <div class="flow-connector">
            <span></span>
          </div>
          <div class="flow-node flow-path">
            <span class="node-icon">03</span>
            <span><small>ROUTE</small><strong>Choose next step</strong></span>
            <i>IF</i>
          </div>
          <div class="flow-branches">
            <span></span>
            <span></span>
          </div>
          <div class="flow-outcomes">
            <span>READY TO ACT</span><span>NEEDS REVIEW</span>
          </div>
          <div class="visual-caption"><span class="status-dot"></span> Thoughtful logic. Clear handoffs.</div>
        </div>
        <div class="visual-stamp">
          <span>BUILT WITH</span><strong>CARE<br />& CLARITY</strong>
        </div>
      </div>
    </section>

    <section class="proof-strip" aria-label="Experience highlights">
      <div><strong>14</strong><span>steps in a scheduling build</span></div>
      <div><strong>5</strong><span>lead workflow test scenarios</span></div>
      <div><strong>6,000+</strong><span>admissions records processed</span></div>
      <div><strong>IT</strong><span>Bachelor of Science graduate</span></div>
    </section>

    <section class="section-shell work-section" id="work">
      <div class="section-heading">
        <div>
          <p class="eyebrow">SELECTED AUTOMATIONS</p>
          <h2>Workflows built<br />to do the follow-through.</h2>
        </div>
        <p class="section-intro">Personal Zapier projects, designed with clear logic, useful notifications, and testable outcomes.</p>
      </div>
      <div class="project-grid">${projectMarkup}</div>
      <p class="honesty-note"><span aria-hidden="true">i</span> These are personal Zapier automation projects—not GoHighLevel client builds.</p>
    </section>

    <dialog class="pdf-reader" id="pdf-reader" aria-labelledby="pdf-reader-title">
      <div class="pdf-reader-header">
        <div class="pdf-reader-heading">
          <p class="eyebrow">PROJECT CASE STUDY</p>
          <h2 id="pdf-reader-title">Case study</h2>
        </div>
        <div class="pdf-reader-actions">
          <a class="pdf-open-new" href="#" target="_blank" rel="noreferrer">Open in new tab <span aria-hidden="true">&nearr;</span></a>
          <a class="pdf-download" href="#" download>Download PDF <span aria-hidden="true">&darr;</span></a>
          <button class="pdf-close" type="button" aria-label="Close case study reader">&times;</button>
        </div>
      </div>
      <iframe class="pdf-frame" title="Project case study PDF reader"></iframe>
    </dialog>

    <section class="about-section" id="about">
      <div class="section-shell about-layout">
        <div>
          <p class="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Technical by training.<br /><span>Process-minded by nature.</span></h2>
          <figure class="about-portrait">
            <img src="${portraitImage}" alt="Portrait of Gideon Magno" />
            <figcaption><strong>Gideon Magno</strong><span>Puerto Princesa City, Philippines</span></figcaption>
          </figure>
        </div>
        <div class="about-copy">
          <p>
            I’m Gideon, an Information Technology graduate from Palawan State
            University. My experience spans automation projects, admissions
            administration, and hands-on technical support.
          </p>
          <p>
            I care about what happens around the automation too: accurate data,
            sensible edge cases, useful documentation, and clear handoffs to the
            people who rely on the workflow.
          </p>
          <div class="capability-list">${capabilities.map((skill) => `<span>${skill}</span>`).join('')}</div>
          <p class="education-line"><strong>EDUCATION</strong> B.S. Information Technology <span>Palawan State University · 2026</span></p>
          <p class="training-line"><strong>RECENT TRAINING</strong> Zapier Academy: Jumpstart · Building Basic Zaps · Building Intermediate Zaps · What is Zapier MCP? <span>2026</span></p>
        </div>
      </div>
    </section>

    <section class="section-shell experience-section" id="experience">
      <div class="section-heading">
        <div>
          <p class="eyebrow">BEYOND THE WORKFLOWS</p>
          <h2>Operations experience<br />you can build on.</h2>
        </div>
        <p class="section-intro">Reliable systems start with understanding the people, details, and day-to-day work behind them.</p>
      </div>
      <div class="experience-list">${experienceMarkup}</div>
    </section>

    <section class="contact-section" id="contact">
      <div class="section-shell contact-layout">
        <div>
          <p class="eyebrow">HAVE A PROCESS IN MIND?</p>
          <h2>Let’s make the<br />busywork lighter.</h2>
          <p>Tell me what’s slowing your team down. I’d love to talk through a practical next step.</p>
          <p class="availability">Flexible schedule · Available for US, UK, and AU time zones</p>
        </div>
        <div class="contact-links">
          <a class="contact-email" href="mailto:magnogideont.va@gmail.com">magnogideont.va@gmail.com <span aria-hidden="true">&nearr;</span></a>
          <a href="https://www.linkedin.com/in/gideonmagno" target="_blank" rel="noreferrer">Connect on LinkedIn <span aria-hidden="true">&nearr;</span></a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer section-shell">
    <span>© ${new Date().getFullYear()} Gideon Magno</span>
    <span>Built around clear processes and thoughtful automation.</span>
    <a href="#home">Back to top &uarr;</a>
  </footer>
`

const pdfReader = document.querySelector<HTMLDialogElement>('#pdf-reader')
const pdfFrame = document.querySelector<HTMLIFrameElement>('.pdf-frame')
const pdfTitle = document.querySelector<HTMLHeadingElement>('#pdf-reader-title')
const pdfOpenNew = document.querySelector<HTMLAnchorElement>('.pdf-open-new')
const pdfDownload = document.querySelector<HTMLAnchorElement>('.pdf-download')
const pdfClose = document.querySelector<HTMLButtonElement>('.pdf-close')

if (!pdfReader || !pdfFrame || !pdfTitle || !pdfOpenNew || !pdfDownload || !pdfClose) {
  throw new Error('The case study PDF reader could not be initialized.')
}

app.querySelectorAll<HTMLButtonElement>('[data-pdf-src]').forEach((button) => {
  button.addEventListener('click', () => {
    const pdfSource = button.dataset.pdfSrc
    const title = button.dataset.pdfTitle

    if (!pdfSource || !title) {
      throw new Error('A case study is missing its PDF path or title.')
    }

    pdfTitle.textContent = title
    pdfFrame.src = pdfSource
    pdfOpenNew.href = pdfSource
    pdfDownload.href = pdfSource
    pdfReader.showModal()
  })
})

pdfClose.addEventListener('click', () => pdfReader.close())
pdfReader.addEventListener('close', () => {
  pdfFrame.removeAttribute('src')
})
