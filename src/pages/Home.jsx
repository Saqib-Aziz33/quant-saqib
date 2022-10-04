// componenets
import Hero from "../components/elements/Hero";
import GridCol2 from "../components/elements/GridCol2";
import BgImageSection from "../components/elements/BgImageSection";
import ExploreSection from "../components/elements/ExploreSection"
import CreateValueSec from "../components/elements/CreateValueSec";
import sectionData from '../components/utils/data.json'

function Home() {
  return (
    <>
      <Hero />
      <div className="my-5 py-5"></div>
      <GridCol2
        img="assets/boxes.svg"
        heading="Unlocking the power of blockchain for everyone"
        text="We deliver interoperable ecosystems and real-world solutions that lower costs, enable new business, and mitigate risk."
      />
      <BgImageSection
        btnText="Let's talk"
        heading="An empowered, interconnected world"
      >
        We serve banks, asset managers and other financial institutions;
        enterprises; and the technology partners and fintech developers who
        support them.
      </BgImageSection>
      <CreateValueSec />
      <ExploreSection />

      {
        sectionData.map((data, index) => (
          <GridCol2 heading={data.heading} text={data.text} img={data.img} key={index} index={index}></GridCol2>
        ))
      }

      <BgImageSection btnText='Get Started' heading='The future of finance. Today.'></BgImageSection>

    </>
  );
}
export default Home;
