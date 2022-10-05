function MediaCard(props) {
  return (
    <div className="media-card d-flex">
      <div className="content">
        <small className="text-orange mb-2 d-inline-block">{props.badge}</small>
        <p className="text-muted">29 September 2022</p>
        <h4>{props.text}</h4>
        <ul>
          {props.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="img-container">
        <img src={props.img} alt="" />
      </div>
    </div>
  );
}
export default MediaCard;
