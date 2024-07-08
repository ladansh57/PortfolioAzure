import Link from "next/link";
import styles from "../technicalskills/technicalskills.module.css";
export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Technical Skills</h1>
      <section className={styles.section}>
        <ul>
          <li>Languages: C#, VB .Net, HTML5, CSS3, JavaScript, jQuery, JSON</li>
          <li>.NET Technologies: .NET Core, ASP.NET Web API, ASP.NET MVC</li>
          <li>Front-end Frameworks: React, Bootstrap</li>
          <li>
            Interfaces Developing Tools: Telerik (Rad Controls) web components,
            Dev Express web components, Syncfusion web components.
          </li>
          <li>Unit-testing frameworks: XUnit, NUnit, MSTest, Moq</li>
          <li>Database: MS SQL Server, Oracle 10g</li>
          <li>Version Control: Git, TSF, Visual SourceSafe</li>
          <li>Cloud Services: Azure/DevOps</li>
          
        </ul>
      </section>
    </div>
  );
}
