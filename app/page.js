import Link from "next/link";
import styles from "./rootStyle.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to My Professional Portfolio Application</h1>
        <p>
          Hello! I am a seasoned Application Development Specialist with a
          decade of experience in developing dynamic front-end applications
          using .NET frameworks. For designing this application, I utilized
          React and Next.js. This portfolio showcases my skills, projects, and
          achievements as a full-stack developer. I have deployed this portfolio
          application on Azure App Service, demonstrating my proficiency in
          cloud deployment and management. Explore to know more about my
          expertise and professional journey.
        </p>
      </header>

      <section className={styles.section}>
        <h1>About Me</h1>
        <p>
          I am a dedicated and detail-oriented developer with a passion for
          creating innovative solutions and improving processes. My expertise
          lies in .NET technologies, front-end frameworks, and cloud services. I
          thrive in dynamic environments where I can contribute to the
          development of cutting-edge applications and enhance user experiences.
        </p>
        <h3>Key Skills</h3>
        <ul className={styles["no-bullets"]}>
          <li>
            <strong>Programming Languages:</strong> C#, VB .Net, HTML5, CSS3,
            JavaScript
          </li>
          <li>
            <strong>Frameworks:</strong> .NET Core, ASP.NET MVC, React
          </li>
          <li>
            <strong>Tools:</strong> Azure DevOps, Git, TSF, Visual SourceSafe
          </li>
          <li>
            <strong>Methodologies:</strong> Agile, CI/CD, Test-Driven
            Development (TDD)
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Highlighted Projects</h2>
        <div>
          <h3>IT Transformation Project - CIBC Capital Market Technology</h3>
          <ul className={styles["no-bullets"]}>
            <li>
              Developed the Global Entity Onboarding (GEO) Client platform,
              integrating with Salesforce, Client Data Repository, and Fenergo.
            </li>
            <li>
              Created interactive API documentation using Swagger/OpenAPI.
            </li>
            <li>
              Designed high-performance .Net Core REST APIs with OData
              filtering.
            </li>
          </ul>
        </div>
        <div>
          <h3>Sigma Enrollment Process</h3>
          <ul className={styles["no-bullets"]}>
            <li>
              Developed RESTful APIs for authentication, token generation, and
              final enrollment submission.
            </li>
            <li>
              Implemented Inbound-Outbound Files for HBFS Rewards Points
              Integration using SSIS-SSDT 2017 Packages and SQL Server 2017.
            </li>
          </ul>
        </div>

        <div>
          <h3>Subaru’s Professional Performance Certification Application</h3>
          <ul className={styles["no-bullets"]}>
            <li>
              Lease and Loan Payoff Quotes: Developed functionalities for
              calculating lease and loan payoff quotes tailored for Subaru
              vehicles.
            </li>
            <li>
              Lease Data Extract: Implemented SSRS packages and SQL jobs to
              extract and process lease data, ensuring accurate and timely
              reporting.
            </li>
          </ul>
        </div>
        <div>
          <h3>CorpSync Web Application</h3>
          <ul className={styles["no-bullets"]}>
            <li>
              Created a web-based technology for updating contact information
              across Outlook, BlackBerry, and iPhones.
            </li>
            <li>
              Developed a Windows service to connect to the company's HR
              database or Active Directory, updating the CorpSync database with
              the latest HR data.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Get In Touch</h2>
        <p>
          Interested in learning more about my work or collaborating on a
          project? Feel free to <a href="#contact">contact me</a> or connect
          with me on{" "}
          <a href="https://www.linkedin.com/in/ladan-shahabi/">LinkedIn</a>.
        </p>
      </section>
    </div>
  );
}
