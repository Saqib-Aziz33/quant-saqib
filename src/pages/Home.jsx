// componenets
import Hero from "../components/elements/Hero";
import GridCol2 from "../components/elements/GridCol2";
import BgImageSection from "../components/elements/BgImageSection";
import ExploreSection from "../components/elements/ExploreSection"

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
      <ExploreSection />
    </>
  );
}
export default Home;
