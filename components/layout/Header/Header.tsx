import { HeaderProps } from "./Header.props"
import styles from './Header.module.css'
import { useState } from "react"
import Link from "next/link"

export const Header = ({ children }: HeaderProps): JSX.Element => {
      const [navbar, setNavbar] = useState<boolean>(false)

      // Sidenav li open close
      let navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li > a, .sub-menu > li > a'));
      for (let y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
      }


      function checkLi(current) {
            current.parentElement.parentElement.querySelectorAll("li").forEach(el =>
                  (current.parentElement !== el) ? el.classList.remove('open') : ''
            );

            setTimeout(() => {
                  current.parentElement.classList.toggle('open');

            }, 100);
      }

      return(
            <header className="site-header header-transparent mo-left" id="fix-header">
                  <div className="top-bar">
                        <div className="container">
                              <div className="row d-flex justify-content-between">
                                    <div className="dlab-topbar-left">
                                          <ul>
                                                <li><i className="flaticon-phone-call m-r5"></i> 001 1234 6789</li>
                                                <li><i className="ti-location-pin m-r5"></i> 6701 Democracy Blvd, Suite 300, USA</li>
                                          </ul>
                                    </div>
                                    <div className="dlab-topbar-right">
                                          <ul>
                                                <li><i className="ti-skype m-r5"></i> Agency.software</li>
                                                <li><i className="ti-email m-r5"></i> info@example.com</li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                  </div>

                  <div className="sticky-header main-bar-wraper navbar-expand-lg" >
                        <div className="main-bar clearfix ">
                              <div className="container clearfix">
                                    <div className="logo-header mostion">
                                          {/* <Link href='/' className="dez-page"><img src={logo} alt="" /></Link> */}
                                    </div>

                                    <button onClick={() => setNavbar(true)} className={navbar ? "navbar-toggler collapsed navicon justify-content-end show" : "navbar-toggler collapsed navicon justify-content-end"} type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                    </button>

                                    <div className="extra-nav">
                                          <div className="extra-cell">
                                                <Link href='/contact' className="dez-page site-button primary">Inquire Now </Link>
                                          </div>
                                    </div>

                                    <div className="header-nav navbar-collapse collapse myNavbar justify-content-end" id="navbarNavDropdown">
                                          <div className="logo-header mostion d-md-block d-lg-none">
                                                {/* <Link href='./' className="dez-page">
                                                      <img src={logo2} alt="" /></Link> */}
                                          </div>
                                          {/*  Header Menu Contents  */}
                                          {/* <HeaderMenu /> */}
                                          {/*  Header Menu Contents End */}
                                    </div>
                              </div>
                        </div>
                  </div>
            </header>
      )
}