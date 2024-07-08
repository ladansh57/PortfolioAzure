import Link from "next/link";
import styles from "../certifications/certifications.module.css";
export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Certifications</h1>
      <section className={styles.section}>
        <ul>
          <li>
            Microsoft Certified: Azure Fundamentals AZ900 (Certified 2023)
          </li>
          <li>Certified ScrumMaster® (CSM®) (Certified 2019)</li>
          <li>MCSD: App Builder (Certified 2017)</li>
          <li> MCSA: Web Applications (Certified 2017)</li>
          <li>
            Exam 486: Developing ASP.NET MVC Web Application Microsoft (2017)
          </li>
          <li>
            Exam 461: Microsoft SQL Server2012/2014 70-461 Microsoft (2017)
          </li>
          <li>Exam 487: Microsoft Azure and Web Services Microsoft (2017)</li>
          <li>
            Exam 480: Programming in HTML5 with JavaScript and CSS3 Microsoft
            (2016)
          </li>
          <li>Microsoft Certified Professional License F755-7810 (2016) </li>
          <li>
            ESL 9073 Advanced Grammar and Composition Skills George Brown
            College (2015)
          </li>
          
        </ul>
      </section>
    </div>
  );
}
