import Link from "next/link";
import { Box, Text, Stack, Divider } from "@kalidao/reality";
import * as styles from "./styles.css";

export default function Header() {
  return (
    <Box as="footer" className={styles.footer}>
      <Text color="textSecondary">
        Made with ❤️ by <a href="https://twitter.com/kali__gg">Kali</a>
      </Text>
    </Box>
  );
}
