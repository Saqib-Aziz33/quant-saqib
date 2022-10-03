// import { Link } from "react-router-dom";
import {SiQuantconnect} from 'react-icons/si'
import {AiFillTwitterCircle, AiFillLinkedin} from 'react-icons/ai'

function Footer() {
  return (
    <footer className="bg-light p-4">
      <div className="container">


        <div className="row fw-bold fs-6 pt-5 pb-4">
          <section className="col-sm-2 mb-3 d-flex align-items-center gap-2">
            <SiQuantconnect size={60} />
            <span className='fs-4'>Quant</span>
          </section>
          <section className="col-sm-2 mb-3 ms-auto">
            <p style={{fontSize: '0.8rem'}}>Privacy policy</p>
          </section>
          <section className="col-sm-2 mb-3">
            <p style={{fontSize: '0.8rem'}}>Terms of use</p>
          </section>
          <section className="col-sm-2 mb-3">
            <AiFillTwitterCircle size={30} />
            <AiFillLinkedin size={30} />
          </section>
          <small style={{fontSize: '0.6rem'}} className='opacity-50'>© 2022 Quant Network Limited. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
