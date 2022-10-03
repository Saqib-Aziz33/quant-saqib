function Card(props) {
  return (
    <div className={`custom-card p-4 bg-white ${props.className}`}>
      <small className="text-orange mb-2 d-inline-block">{props.badge}</small>
      <p className="text-muted">29 September 2022</p>
      <h4>{props.text}</h4>
      <ul>
        {props.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  )
}
export default Card