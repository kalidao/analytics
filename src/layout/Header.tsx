import { useRouter } from "next/router";

import { Button, Box } from "@kalidao/reality";
import * as styles from "./styles.css";

export default function Header() {
  return (
    <Box className={styles.header}>
      <Box className={styles.logo}>KALI</Box>
    </Box>
  );
}
