// layout
import Header from "./Header";
import Footer from "./Footer";
import BgImageSection from '../elements/BgImageSection'

const Base = (props) => {
  return (
    <div
      className="d-flex flex-column justify-content-between"
      style={{ minHeight: "100vh" }}
    >
      <Header />
      <main role="main">
        {props.children}
      </main>
      <BgImageSection btnText='Get Started' heading='The future of finance. Today.'></BgImageSection>
      <Footer />
    </div>
  );
};
export default Base;
