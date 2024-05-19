import Layout from "../layout";
import Banner from "../common/banner";
import AreaSection from './areaSection';
import AnimatedText from "./animate";

export default function Home() {
  return (
    <>
      <Layout>
        <AnimatedText />
        <AreaSection />
        <Banner />
      </Layout>
    </>
  );
}
