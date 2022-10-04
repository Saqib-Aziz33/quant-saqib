import Card from '../utils/Card'

function NewsHero() {
  return (
    <section className="news-hero mb-5">
      <div className="container" >
        <div style={{maxWidth: '450px'}}>
          <h2 className="display-4 fw-bold">Explore the future</h2>
          <p className="lead">Much of the financial world’s digital future will be built on blockchain. Here’s why.</p>

          <div className="p-4 mx-2" style={{boxShadow: '1px 1px 20px 1px rgba(0,0,0,0.1)', borderRadius: '0 1rem 0 1rem'}}>
            <p className="fw-bold">Subscribe and be the first to know</p>
            <div>
              <input type="email" className="form-control" placeholder="enter your email" />

              <small className="mx-2 d-inline-block mt-3 opacity-75">By submitting your email address, you agree to receive occasional marketing messages from Quant, from which you can unsubscribe at any time. For more information please see our <a href="#" className="text-orange">privacy policy</a></small>
            </div>
          </div>
        </div>
      </div>
      
      <img className="hero-bg-img" src="assets/about-hero.jpg" alt="" />
      <Card badge='news' tags={['CBSC', 'cityam', 'enterprice']} text='Martin Hargreaves on the benefits of cbdcs for consumers' />
    </section>
  )
}
export default NewsHero