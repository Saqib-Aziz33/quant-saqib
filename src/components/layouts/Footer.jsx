// import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import {SiQuantconnect} from 'react-icons/si'
import {AiFillTwitterCircle, AiFillLinkedin} from 'react-icons/ai'
import faqsData from '../utils/faqs.json'

function Footer() {
  return (
    <footer className="footer bg-light py-4">
      <div className="container">
        {/* pc faqs */}
        <section className="pc-faqs">
        <div className="d-flex justify-content-between gap-2 pt-5">
          {faqsData.map((faqItem, index) => (
            <div key={index}>
              <h6 className="text-uppercase">{faqItem.title}</h6>
              {faqItem.links.map((link, index) => (
                <>
                  <a
                    className="text-decoration-none text-secondary"
                    style={{ fontSize: "0.8rem" }}
                    href="/"
                  >
                    {link}
                  </a>
                  <br />
                </>
              ))}
            </div>
          ))}
        </div>
        </section>

        {/* mobile faqs */}
        <div className="mobile-faqs">
          <Accordion>
            {faqsData.map((faqItem, index) => (
              <Accordion.Item eventKey={index} key={index} className='my-2'>
                <Accordion.Header><h2>{faqItem.title}</h2></Accordion.Header>
                <Accordion.Body>
                  {faqItem.links.map((link, index) => (
                    <>
                      <a
                        className="text-decoration-none text-secondary fs-4"
                        href="/"
                      >
                        {link}
                      </a>
                      <br />
                    </>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>

        <div className="row fw-bold fs-6 pt-5 pb-4">
          <section className="col-sm-2 mb-3 d-flex align-items-center gap-2">
            <SiQuantconnect size={60} />
            <span className="fs-4">Quant</span>
          </section>
          <section className="col-sm-2 mb-3 ms-auto">
            <p style={{ fontSize: "0.8rem" }}>Privacy policy</p>
          </section>
          <section className="col-sm-2 mb-3">
            <p style={{ fontSize: "0.8rem" }}>Terms of use</p>
          </section>
          <section className="col-sm-2 mb-3">
            <AiFillTwitterCircle size={30} />
            <AiFillLinkedin size={30} />
          </section>
          <small style={{ fontSize: "0.6rem" }} className="opacity-50">
            © 2022 Quant Network Limited. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
