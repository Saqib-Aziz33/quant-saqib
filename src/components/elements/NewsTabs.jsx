import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MediaCard from '../utils/MediaCard';

function NewsTabs() {
  return (
      <div className="news-tabs">
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="all" title="All">
            <div className="container">
            <div className="row">
                <div className="col-md-6 my-5">
                    <MediaCard badge='All' text='The Next stage of DLT marketing evolution in the next three years' img='assets/london-areal.jpg' tags={['developers']} />
                </div>
                <div className="col-md-6 my-5">
                    <MediaCard badge='All' text='The Next stage of DLT marketing evolution in the next three years' img='assets/london-areal.jpg' tags={['developers', 'media']} />
                </div>
                <div className="col-md-6 my-5">
                    <MediaCard badge='All' text='The Next stage of DLT marketing evolution in the next three years' img='assets/london-areal.jpg' tags={['developers']} />
                </div>
            </div>
            </div>
      </Tab>
      <Tab eventKey="profile" title="News">
      <div className="container">
      <div className="row">
                <div className="col-md-6 my-5">
                    <MediaCard badge='News' text='The Next stage of DLT marketing evolution in the next three years' img='assets/mediacard2.jpg' tags={['developers']} />
                </div>
                <div className="col-md-6 my-5">
                    <MediaCard badge='News' text='The Next stage of DLT marketing evolution in the next three years' img='assets/london-areal.jpg' tags={['developers', 'media']} />
                </div>
                <div className="col-md-6 my-5">
                    <MediaCard badge='News' text='The Next stage of DLT marketing evolution in the next three years' img='assets/The-right-ecosystem-for-digitaql-currencies.jpg' tags={['developers']} />
                </div>
            </div>
      </div>
      </Tab>
      <Tab eventKey="more" title="More">
      <div className="container">
      <div className="row">
                <div className="col-md-6 my-5">
                    <MediaCard badge='more' text='The Next stage of DLT marketing evolution in the next three years' img='assets/The-right-ecosystem-for-digitaql-currencies.jpg' tags={['developers']} />
                </div>
                <div className="col-md-6 my-5">
                    <MediaCard badge='more' text='The Next stage of DLT marketing evolution in the next three years' img='assets/The-right-ecosystem-for-digitaql-currencies.jpg' tags={['developers', 'media']} />
                </div>
                <div className="col-md-6 my-5">
                    <MediaCard badge='more' text='The Next stage of DLT marketing evolution in the next three years' img='assets/The-right-ecosystem-for-digitaql-currencies.jpg' tags={['developers']} />
                </div>
            </div>
      </div>
      </Tab>
    </Tabs>
        </div>
  )
}
export default NewsTabs