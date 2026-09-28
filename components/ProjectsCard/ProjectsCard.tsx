import { projects, type Project } from "@/content/projects";
import styles from "./ProjectsCard.module.css";

/** List of projects, meant to be dropped inside a GlassCard. */
export function ProjectsCard() {
  return (
    <>
      <h2 className={styles.heading}>Projects</h2>

      <ul className={styles.list}>
        {projects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </ul>
    </>
  );
}

function ProjectItem({ project }: { project: Project }) {
  const { title, description, href, tags, example } = project;

  return (
    <li className={styles.project}>
      {href ? (
        <a className={styles.title} href={href} target="_blank" rel="noreferrer">
          {title}
        </a>
      ) : (
        <span className={styles.title}>{title}</span>
      )}

      <p className={styles.description}>{description}</p>

      {tags && (
        <ul className={styles.tags}>
          {tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
      )}

      {example && <div className={styles.example}>{example}</div>}
    </li>
  );
}
