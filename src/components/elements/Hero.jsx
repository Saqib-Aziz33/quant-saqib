import Button from '../utils/Button'

function Hero() {
  return (
    <section className="hero">
        <div className="container ps-5 ps-md-0">
            <h1 className="display-1 fw-bold mb-4">The future <br /> of finance <br /> <span className="text-grad">Today.</span></h1>
            <Button>Get started</Button>
        </div>
        <video src="assets/hero-video.mp4" autoPlay muted loop />
    </section>
  )
}
export default Hero