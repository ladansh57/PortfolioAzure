
import { Open_Sans } from "@next/font/google";
import Link from "next/link";

// These styles apply to every route in the application
import "./global.css";
import styles from "./rootStyle.module.css";

const inter = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <header>
          <h1>
            <Link className={styles.homeLink} href={"/home"}>
              MyResumePortal
            </Link>
          </h1>
          <h3>
            <Link className={styles.menuBarLinks} href="/areasofexp">
              Areas of Expertise
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLinks} href="/technicalskills">
              Technical Skills
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLinks} href="/experience">
              Experience
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLinks} href="/education">
              Education
            </Link>
          </h3>

          <h3>
            <Link className={styles.menuBarLinks} href="/certifications">
              Certifications
            </Link>
          </h3>

          <h3>
            <Link className={styles.menuBarLinks} href="/Ladan">
              Gallery of My Journey
            </Link>
          </h3>
        </header>
        {children}
      </body>
    </html>
  );
}
