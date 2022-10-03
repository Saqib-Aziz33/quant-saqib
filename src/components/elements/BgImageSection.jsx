import Button from "../utils/Button";

function BgImageSection(props) {
  return (
    <section className="bg-image-section my-5">
      <div className="container text-center px-4 px-md-0" style={{ maxWidth: "700px" }}>
        <h1 className="display-3 fw-bold">{props.heading}</h1>
        <p className="lead fw-bold my-4">
          {props.children}
        </p>
        <Button>{props.btnText}</Button>
      </div>
    </section>
  );
}
export default BgImageSection;
