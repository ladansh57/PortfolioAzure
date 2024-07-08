import Link from "next/link";
import styles from "../areasofexp/area.module.css";
export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Areas of Expertise</h1>
      <section className={styles.section}>
        <ul className={styles["no-bullets"]}>
          <li>Software Development Life Cycle</li>
          <li>Test-Driven Development (TDD)</li>
          <li>Continuous Improvement</li>
          <li> Cloud Services </li>
          <li>Agile methodologies and CI/CD</li>
          <li>Object-Oriented Programming (OOP)</li>
          <li>Web development </li>
          <li>
            Adaptability-Quickly adjust to new environments and technologies
          </li>
          <li>Documentation and Maintenance </li>
          <li>
            Rapid Learning-Proven ability to learn and master new skills
            swiftly
          </li>
          <li>Teamwork</li>
        </ul>
      </section>
    </div>
  );
}
