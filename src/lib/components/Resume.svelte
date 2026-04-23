<script lang="ts">
  interface Contact {
    email: string;
    website: string;
    phoneUS: string;
    phoneFR: string;
    citizenship: string;
  }

  interface Role {
    title: string;
    dates: string;
    bullets: string[];
  }

  interface Experience {
    company: string;
    description: string;
    roles: Role[];
  }

  interface Education {
    school: string;
    dates: string;
    degrees: string[];
  }

  interface Skills {
    programming: string;
    frameworks: string;
    cloud: string;
    analytics: string;
    databases: string;
    languages: string;
  }

  interface ResumeData {
    name: string;
    title: string;
    contact: Contact;
    summary: string;
    experience: Experience[];
    education: Education;
    skills: Skills;
  }

  interface Props {
    resume: ResumeData;
    skillLabels: {
      programming: string;
      frameworks: string;
      cloud: string;
      analytics: string;
      databases: string;
      languages: string;
    };
    sectionLabels: {
      summary: string;
      experience: string;
      education: string;
      skills: string;
    };
  }

  let { resume, skillLabels, sectionLabels }: Props = $props();

  import Icons from "./Icons.svelte";

  function boldify(text: string): string {
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  }
</script>

<section class="resume">
  <!-- Header -->
  <header class="resume-header">
    <div class="header-left">
      <h1 class="resume-name">{resume.name}</h1>
      <p class="resume-title">{resume.title}</p>
      <p class="resume-citizenship">{resume.contact.citizenship}</p>
    </div>
    <div class="header-right">
      <img src="/michael-lemiale-headshot-thumb.jpeg" alt="{resume.name}" class="headshot" />
    </div>
  </header>

  <!-- Summary -->
  <div class="section">
    <h2 class="section-title">{sectionLabels.summary}</h2>
    <div class="section-divider"></div>
    <p class="summary-text">{resume.summary}</p>
  </div>

  <!-- Experience -->
  <div class="section">
    <h2 class="section-title">{sectionLabels.experience}</h2>
    <div class="section-divider"></div>

    {#each resume.experience as exp}
      <div class="company-block">
        <div class="company-header">
          <h3 class="company-name">{exp.company}</h3>
          <p class="company-desc">{exp.description}</p>
        </div>

        {#each exp.roles as role}
          <div class="role-block">
            <div class="role-header">
              <span class="role-title">{role.title}</span>
              <span class="role-dates">{role.dates}</span>
            </div>
            <ul class="role-bullets">
              {#each role.bullets as bullet}
                <li>{@html boldify(bullet)}</li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    {/each}
  </div>

  <!-- Education -->
  <div class="section">
    <h2 class="section-title">{sectionLabels.education}</h2>
    <div class="section-divider"></div>
    <div class="edu-block">
      <div class="edu-header">
        <span class="edu-school">{resume.education.school}</span>
        <span class="role-dates">{resume.education.dates}</span>
      </div>
      <ul class="edu-degrees">
        {#each resume.education.degrees as degree}
          <li>{degree}</li>
        {/each}
      </ul>
    </div>
  </div>

  <!-- Skills -->
  <div class="section">
    <h2 class="section-title">{sectionLabels.skills}</h2>
    <div class="section-divider"></div>
    <div class="skills-grid">
      <div class="skill-row">
        <span class="skill-label">{skillLabels.programming}</span>
        <span class="skill-value">{resume.skills.programming}</span>
      </div>
      <div class="skill-row">
        <span class="skill-label">{skillLabels.frameworks}</span>
        <span class="skill-value">{resume.skills.frameworks}</span>
      </div>
      <div class="skill-row">
        <span class="skill-label">{skillLabels.cloud}</span>
        <span class="skill-value">{resume.skills.cloud}</span>
      </div>
      <div class="skill-row">
        <span class="skill-label">{skillLabels.analytics}</span>
        <span class="skill-value">{resume.skills.analytics}</span>
      </div>
      <div class="skill-row">
        <span class="skill-label">{skillLabels.databases}</span>
        <span class="skill-value">{resume.skills.databases}</span>
      </div>
      <div class="skill-row">
        <span class="skill-label">{skillLabels.languages}</span>
        <span class="skill-value">{resume.skills.languages}</span>
      </div>
    </div>
  </div>
</section>

<style>
  /* ── Resume container ── */
  .resume {
    max-width: 900px;
  }

  /* ── Header ── */
  .resume-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1.75rem 2rem;
    background-color: var(--rp-surface);
    border: 1px solid var(--rp-highlight-med);
    border-left: 3px solid var(--rp-love);
    border-radius: 12px;
    margin-bottom: 2rem;
  }

  .header-left {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex: 1;
  }

  .resume-name {
    font-size: 1.75rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--rp-text);
    margin: 0;
    line-height: 1.2;
  }

  .resume-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--rp-love);
    margin: 0;
  }

  .resume-citizenship {
    font-size: 0.8125rem;
    color: var(--rp-muted);
    margin: 0;
    margin-top: 0.25rem;
  }

  .header-right {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .headshot {
    width: 120px;
    height: 120px;
    border-radius: 12px;
    object-fit: cover;
    border: 2px solid var(--rp-highlight-med);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  :global(.dark) .headshot {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  /* ── Sections ── */
  .section {
    margin-bottom: 1.75rem;
  }

  .section-title {
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--rp-love);
    margin: 0 0 0.5rem 0;
  }

  .section-divider {
    height: 1px;
    background: linear-gradient(
      90deg,
      var(--rp-love),
      var(--rp-highlight-med) 40%,
      transparent
    );
    margin-bottom: 1rem;
    opacity: 0.5;
  }

  /* ── Summary ── */
  .summary-text {
    font-size: 0.9rem;
    line-height: 1.7;
    color: var(--rp-text);
    margin: 0;
  }

  /* ── Experience ── */
  .company-block {
    margin-bottom: 1.5rem;
  }

  .company-block:last-child {
    margin-bottom: 0;
  }

  .company-header {
    margin-bottom: 0.75rem;
  }

  .company-name {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--rp-text);
    margin: 0;
  }

  .company-desc {
    font-size: 0.875rem;
    color: var(--rp-muted);
    margin: 0.15rem 0 0 0;
    font-style: italic;
  }

  .role-block {
    margin-bottom: 1rem;
    padding-left: 1rem;
    border-left: 2px solid var(--rp-highlight-med);
  }

  .role-block:last-child {
    margin-bottom: 0;
  }

  .role-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .role-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--rp-pine);
  }

  .role-dates {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--rp-muted);
    background-color: var(--rp-overlay);
    padding: 0.15rem 0.5rem;
    border-radius: 9999px;
    white-space: nowrap;
  }

  .role-bullets {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .role-bullets li {
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--rp-text);
    padding-left: 1rem;
    position: relative;
  }

  .role-bullets li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.55em;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: var(--rp-highlight-high);
  }

  .role-bullets li :global(strong) {
    color: var(--rp-pine);
    font-weight: 600;
  }

  /* ── Education ── */
  .edu-block {
    padding-left: 1rem;
    border-left: 2px solid var(--rp-highlight-med);
  }

  .edu-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.35rem;
  }

  .edu-school {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--rp-text);
  }

  .edu-degrees {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .edu-degrees li {
    font-size: 0.8375rem;
    color: var(--rp-subtle);
  }

  /* ── Skills ── */
  .skills-grid {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .skill-row {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .skill-label {
    font-weight: 600;
    color: var(--rp-pine);
  }

  .skill-value {
    color: var(--rp-text);
  }

  /* ── Responsive ── */
  @media (max-width: 640px) {
    .resume-header {
      flex-direction: column;
      padding: 1.25rem 1.25rem;
      align-items: center;
      text-align: center;
    }
    .header-left {
      align-items: center;
    }
    .header-right {
      order: -1;
      margin-bottom: 1rem;
    }
    .headshot {
      width: 100px;
      height: 100px;
    }
    .role-header {
      flex-direction: column;
      gap: 0.25rem;
    }
    .edu-header {
      flex-direction: column;
      gap: 0.25rem;
    }
    .skill-row {
      gap: 0.1rem;
    }
  }

  /* ── Print/PDF specific styles ── */
  @media print {
    .resume {
      max-width: 100%;
      width: 100%;
      margin: 0 !important;
    }

    .section {
      margin-bottom: 1.75rem !important;
    }

    .resume-header {
      margin-bottom: 2rem !important;
    }
  }
</style>
