import Link from "next/link";
import styles from "../education/education.module.css";
export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Education</h1>
      <section className={styles.section}>
        <div>
          <h3>Software Engineering .NET Developer Diploma (February 2017)</h3>
          <ul>
            <li>Canadian Business College, Mississauga, ON.</li>
          </ul>
        </div>

        <div>
          <h3>Bachelor of Science (BSc.), Software Engineering</h3>
          <ul>
            <li>Azaad University of Qazvin, Iran, Qazvin</li>
            
          </ul>
        </div>
        
      </section>
    </div>
  );
}
