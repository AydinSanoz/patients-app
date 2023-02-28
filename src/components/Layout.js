/* import styles from "@/styles/Layout.module.css";

export default function Layout(props) {
  return <div className={styles.layout}>{props.children}</div>;
}
 */

import ThemeProvider from "react-bootstrap/ThemeProvider";

<ThemeProvider
  breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
  minBreakpoint="xxs"
>
  <div>Your app...</div>
</ThemeProvider>;
