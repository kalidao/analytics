import Layout from "~/layout";
import { Box } from "@kalidao/reality";
import { DaosVisualiser, DaosInfo } from "~/components/";

export default function Home() {
  return (
    <Layout
      heading="Anlytics"
      content="Analytics for KaliCo product suite - KaliDAOs, Wrappr"
    >
      <Box>
        <DaosVisualiser />
        <DaosInfo />
      </Box>
    </Layout>
  );
}
