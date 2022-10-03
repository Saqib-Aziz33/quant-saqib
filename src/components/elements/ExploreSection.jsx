import Card from '../utils/Card'

function ExploreSection() {
  return (
    <section className="explore container my-5 py-5">
        <div className="text-center">
          <h2 className="display-3 fw-bold">Explore the future</h2>
          <p className="lead mx-auto my-4" style={{maxWidth: '400px'}}>Much of the financial world’s digital future will be built on blockchain. Find out why</p>
        </div>
        <div className="bg">
          <Card badge='news' tags={['CBSC', 'cityam', 'enterprice']} text='Martin Hargreaves on the benefits of cbdcs for consumers' />
        </div>

      <section className='row mt-4'>
        <div className="col-md-3 mb-3">
          <Card badge='news' tags={['CBSC', 'cityam', 'enterprice']} text='Martin Hargreaves on the benefits of cbdcs for consumers' />
        </div>
        <div className="col-md-3 mb-3">
          <Card badge='news' tags={['CBSC', 'cityam', 'enterprice']} text='Martin Hargreaves on the benefits of cbdcs for consumers' />
        </div>
        <div className="col-md-3 mb-3">
          <Card badge='news' tags={['CBSC', 'cityam', 'enterprice']} text='Martin Hargreaves on the benefits of cbdcs for consumers' />
        </div>
        <div className="col-md-3 mb-3">
          <Card badge='news' tags={['CBSC', 'cityam', 'enterprice']} text='Martin Hargreaves on the benefits of cbdcs for consumers' />
        </div>
      </section>

    </section>
  )
}
export default ExploreSection