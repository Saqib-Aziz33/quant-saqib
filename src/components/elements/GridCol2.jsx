import Button from '../utils/Button'

function GridCol2(props) {
  return (
    <section className="container my-5 py-5">
        <div className="row align-items-center">
            <section className={`col-md-6 mb-3 ${props.index%2===0 ? 'order-0 order-md-1' : ''}`}>
                <img className='img-fluid d-block mx-auto' src={props.img} alt="" />
            </section>
            <section className="col-md-6 mb-3 px-4">
                <h1 className='display-3 fw-bold'>{props.heading}</h1>
                <p className='my-4 lead'>{props.text}</p>
                <Button>Find out more</Button>
            </section>
        </div>
    </section>
  )
}
export default GridCol2