import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
  <header className="u-clearfix u-header" id="sec-08ae">
    <div className="u-clearfix u-sheet u-sheet-1">
      <a
        href="Home.html"
        className="u-align-center-xs u-image u-logo u-image-1"
        data-image-width={1080}
        data-image-height={1080}
        data-animation-name="rubberBand"
        data-animation-duration={1000}
        data-animation-delay={0}
        data-animation-direction=""
        title="The Brown Eyed Network Logo"
      >
        <img
          src="images/logo-2-PhotoRoom.png-PhotoRoom.png"
          className="u-logo-image u-logo-image-1"
        />
      </a>
      <nav
        className="u-align-center u-menu u-menu-one-level u-offcanvas u-menu-1"
        data-responsive-from="MD"
      >
        <div
          className="menu-collapse u-custom-font u-font-playfair-display"
          style={{ fontSize: "1rem", letterSpacing: 0 }}
        >
          <a
            className="u-button-style u-custom-active-border-color u-custom-active-color u-custom-border u-custom-border-color u-custom-borders u-custom-color u-custom-hover-border-color u-custom-hover-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
            href="#"
          >
            <svg className="u-svg-link" viewBox="0 0 24 24">
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#menu-hamburger"
              />
            </svg>
            <svg
              className="u-svg-content"
              version="1.1"
              id="menu-hamburger"
              viewBox="0 0 16 16"
              x="0px"
              y="0px"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <rect y={1} width={16} height={2} />
                <rect y={7} width={16} height={2} />
                <rect y={13} width={16} height={2} />
              </g>
            </svg>
          </a>
        </div>
        <div className="u-custom-menu u-nav-container">
          <ul className="u-custom-font u-font-playfair-display u-nav u-spacing-20 u-unstyled u-nav-1">
            <li className="u-nav-item">
              <a
                className="u-border-active-palette-1-base u-border-hover-palette-1-base u-button-style u-nav-link u-text-active-palette-1-light-3 u-text-hover-palette-2-base u-text-palette-1-light-3"
                href="Home.html"
                style={{ padding: "10px 22px" }}
              >
                HOME
              </a>
            </li>
            <li className="u-nav-item">
              <a
                className="u-border-active-palette-1-base u-border-hover-palette-1-base u-button-style u-nav-link u-text-active-palette-1-light-3 u-text-hover-palette-2-base u-text-palette-1-light-3"
                style={{ padding: "10px 22px" }}
              >
                ARTIST
              </a>
            </li>
            <li className="u-nav-item">
              <a
                className="u-border-active-palette-1-base u-border-hover-palette-1-base u-button-style u-nav-link u-text-active-palette-1-light-3 u-text-hover-palette-2-base u-text-palette-1-light-3"
                style={{ padding: "10px 22px" }}
              >
                PROMOTIONS
              </a>
            </li>
            <li className="u-nav-item">
              <a
                className="u-border-active-palette-1-base u-border-hover-palette-1-base u-button-style u-nav-link u-text-active-palette-1-light-3 u-text-hover-palette-2-base u-text-palette-1-light-3"
                style={{ padding: "10px 22px" }}
              >
                COURCES
              </a>
            </li>
            <li className="u-nav-item">
              <a
                className="u-border-active-palette-1-base u-border-hover-palette-1-base u-button-style u-nav-link u-text-active-palette-1-light-3 u-text-hover-palette-2-base u-text-palette-1-light-3"
                style={{ padding: "10px 22px" }}
              >
                MANAGEMENT
              </a>
            </li>
          </ul>
        </div>
        <div className="u-custom-menu u-nav-container-collapse">
          <div className="u-container-style u-inner-container-layout u-palette-2-base u-sidenav">
            <div className="u-inner-container-layout u-sidenav-overflow">
              <div className="u-menu-close" />
              <ul className="u-align-center u-custom-font u-font-source-sans-pro u-nav u-popupmenu-items u-spacing-65 u-text-hover-palette-1-base u-unstyled u-nav-2">
                <li className="u-nav-item">
                  <a className="u-button-style u-nav-link" href="Home.html">
                    HOME
                  </a>
                </li>
                <li className="u-nav-item">
                  <a className="u-button-style u-nav-link">ARTIST</a>
                </li>
                <li className="u-nav-item">
                  <a className="u-button-style u-nav-link">PROMOTIONS</a>
                </li>
                <li className="u-nav-item">
                  <a className="u-button-style u-nav-link">COURCES</a>
                </li>
                <li className="u-nav-item">
                  <a className="u-button-style u-nav-link">MANAGEMENT</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="u-black u-menu-overlay u-opacity u-opacity-40" />
        </div>
      </nav>
      <span className="u-file-icon u-icon u-icon-1">
        <img src="images/2504914.png" alt="" />
      </span>
      <span className="u-file-icon u-icon u-icon-2">
        <img src="images/2504940.png" alt="" />
      </span>
      <span className="u-file-icon u-icon u-icon-3">
        <img src="images/2504903.png" alt="" />
      </span>
      <a
        className="infinite u-custom-font u-font-playfair-display u-hover-feature u-hover-palette-2-base u-login u-text-palette-2-base u-login-1"
        data-animation-name="pulse"
        data-animation-duration={1000}
        data-animation-direction=""
      >
        Login
      </a>
    </div>
  </header>
  <section
    className="skrollable skrollable-between u-align-center u-clearfix u-container-align-center u-image u-shading u-section-1"
    src=""
    id="carousel_ed7a"
    data-image-width={6912}
    data-image-height={3456}
  >
    <h1
      className="u-align-center u-custom-font u-font-playfair-display u-hover-feature u-text u-title u-text-1"
      data-animation-name="customAnimationIn"
      data-animation-duration={1500}
      data-animation-delay={250}
    >
      {" "}
      Empowering the Next Generation of Musicians
    </h1>
    <a
      href="https://nicepage.review"
      className="animated-once u-align-center u-border-1 u-border-hover-grey-50 u-border-palette-2-base u-btn u-button-style u-custom-font u-font-playfair-display u-palette-2-base u-text-active-white u-text-grey-10 u-text-hover-white u-btn-1"
      data-animation-name="customAnimationIn"
      data-animation-duration={1500}
      data-animation-delay={1000}
      data-animation-direction=""
    >
      <span className="u-icon" />
      &nbsp;Get started for free
    </a>
    <p className="u-align-center u-custom-font u-font-playfair-display u-small-text u-text u-text-variant u-text-2">
      <a
        className="u-active-none u-border-2 u-border-active-palette-2-dark-1 u-border-hover-palette-2-base u-border-no-left u-border-no-right u-border-no-top u-border-white u-btn u-button-link u-button-style u-hover-none u-none u-text-hover-palette-2-base u-text-white u-btn-2"
        data-href="products/products.html"
        title="-"
      >
        {" "}
        &nbsp;Premium plans availabel. See all plans
      </a>
    </p>
  </section>
  <section
    className="u-clearfix u-lightbox u-shading u-uploaded-video u-video u-video-cover u-section-2"
    id="sec-a275"
  >
    <div
      style={{}}
      className="u-align-left u-background-video u-expanded u-left-0"
    >
      <div className="embed-responsive">
        <video
          className="embed-responsive-item"
          data-autoplay={1}
          loop=""
          muted={1}
          autoPlay="autoplay"
          playsInline=""
        >
          <source src="files/hi.mp4" type="video/mp4" />
          <p>Your browser does not support HTML5 video.</p>
        </video>
      </div>
      <div
        className="u-video-shading"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(240,94,52,0.8), rgba(240,94,52,0.8))"
        }}
      />
    </div>
    <div className="u-clearfix u-sheet u-sheet-1">
      <h2
        className="u-align-center u-custom-font u-font-playfair-display u-hover-feature u-text u-text-1"
        data-animation-name="flipIn"
        data-animation-duration={1000}
        data-animation-delay={500}
        data-animation-direction="X"
      >
        {" "}
        Fuel Your Music Journey.
      </h2>
    </div>
  </section>
  <section
    className="u-align-left u-clearfix u-container-align-center u-image u-shading u-section-3"
    id="carousel_02ec"
    data-image-width={1366}
    data-image-height={768}
  >
    <div className="u-clearfix u-sheet u-sheet-1">
      <div className="u-expanded-width u-list u-list-1">
        <div className="u-repeater u-repeater-1">
          <div
            className="u-align-left u-container-style u-custom-item u-hover-feature u-list-item u-palette-2-base u-repeater-item u-shape-rectangle u-list-item-1"
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
            data-animation-delay={500}
          >
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
              <h3 className="u-text u-text-default u-text-1">
                {" "}
                Share Your Sound
              </h3>
              <p className="u-custom-item u-text u-text-default u-text-2">
                {" "}
                Distribute your music to 150+ DSPs for free. Keep 100% of your
                earnings.{" "}
              </p>
              <a
                href="https://nicepage.me"
                className="u-active-white u-align-center u-border-2 u-border-active-white u-border-hover-white u-border-white u-btn u-button-style u-color-scheme-summer-time u-color-style-multicolor-1 u-custom-item u-hover-white u-none u-text-active-palette-2-base u-text-body-alt-color u-text-hover-black u-btn-1"
                data-animation-name="customAnimationIn"
                data-animation-duration={1750}
                data-animation-delay={750}
              >
                Learn More
              </a>
            </div>
          </div>
          <div
            className="u-align-left u-container-style u-custom-item u-effect-hover-zoomOut u-list-item u-repeater-item u-shading u-shape-rectangle u-list-item-2"
            data-image-width={1920}
            data-image-height={1080}
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
            data-animation-delay={500}
          >
            <div className="u-background-effect u-expanded">
              <div
                className="u-background-effect-image u-expanded u-image u-shading u-image-1"
                data-image-width={1920}
                data-image-height={1080}
              />
            </div>
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-2">
              <h3 className="u-text u-text-default u-text-3">
                {" "}
                Learn and Grow
              </h3>
              <p className="u-custom-item u-text u-text-body-alt-color u-text-default u-text-4">
                {" "}
                Access educational resources on entrepreneurship, mentorship,
                and industry connections.&nbsp;
              </p>
              <a
                href="https://nicepage.me"
                className="u-active-white u-align-center u-border-2 u-border-active-white u-border-hover-white u-border-white u-btn u-button-style u-color-scheme-summer-time u-color-style-multicolor-1 u-custom-item u-hover-white u-none u-text-active-black u-text-body-alt-color u-text-hover-palette-2-base u-btn-2"
                data-animation-name="customAnimationIn"
                data-animation-duration={1750}
                data-animation-delay={750}
              >
                Learn More
              </a>
            </div>
          </div>
          <div
            className="u-align-left u-black u-container-style u-custom-item u-hover-feature u-list-item u-opacity u-opacity-65 u-repeater-item u-shape-rectangle u-list-item-3"
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
            data-animation-delay={500}
          >
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
              <h3 className="u-text u-text-default u-text-5"> Shine Bright</h3>
              <p className="u-custom-item u-text u-text-default u-text-6">
                {" "}
                Showcase your talent, promote your work, and connect with
                potential investors.{" "}
              </p>
              <a
                href="https://nicepage.me"
                className="u-active-white u-align-center u-border-2 u-border-active-white u-border-hover-white u-border-white u-btn u-button-style u-color-scheme-summer-time u-color-style-multicolor-1 u-custom-item u-hover-white u-none u-text-active-black u-text-body-alt-color u-text-hover-palette-2-base u-btn-3"
                data-animation-name="customAnimationIn"
                data-animation-duration={1750}
                data-animation-delay={750}
              >
                Learn More
              </a>
            </div>
          </div>
          <div
            className="u-align-left u-container-style u-custom-item u-hover-feature u-list-item u-palette-2-base u-repeater-item u-shape-rectangle u-list-item-4"
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
            data-animation-delay={500}
          >
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-4">
              <h3 className="u-text u-text-default u-text-7">
                {" "}
                Socialize &amp;&nbsp;Collaborate
              </h3>
              <p className="u-custom-item u-text u-text-default u-text-8">
                {" "}
                Network with mentors and peers, find collaborators, and elevate
                your music career.{" "}
              </p>
              <a
                href="https://nicepage.me"
                className="u-active-white u-align-center u-border-2 u-border-active-white u-border-hover-white u-border-white u-btn u-button-style u-color-scheme-summer-time u-color-style-multicolor-1 u-custom-item u-hover-white u-none u-text-active-palette-2-base u-text-hover-black u-text-white u-btn-4"
                data-animation-name="customAnimationIn"
                data-animation-duration={1750}
                data-animation-delay={750}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    className="skrollable skrollable-between u-align-center u-clearfix u-image u-lightbox u-parallax u-shading u-section-4"
    src=""
    id="carousel_e075"
    data-image-width={1920}
    data-image-height={1080}
  >
    <div className="u-clearfix u-sheet u-sheet-1">
      <h2
        className="u-align-center u-text u-text-body-alt-color u-text-1"
        data-animation-name="customAnimationIn"
        data-animation-duration={1500}
        data-animation-delay={250}
      >
        {" "}
        We specialize in a diverse range of music empowerment services Amplify
        Your Artistry with Us!
      </h2>
      <div className="custom-expanded data-layout-selected u-clearfix u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-row">
            <div
              className="u-align-right u-container-align-center-sm u-container-align-center-xs u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1"
              data-animation-name="customAnimationIn"
              data-animation-duration={1500}
              data-animation-delay={500}
            >
              <div className="u-container-layout u-valign-top u-container-layout-1">
                <a
                  href="https://nicepage.studio"
                  className="u-active-white u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-border-2 u-border-active-palette-2-base u-border-hover-palette-2-base u-border-white u-btn u-button-style u-none u-text-active-black u-text-body-alt-color u-text-hover-white u-btn-1"
                  data-animation-name=""
                  data-animation-duration={0}
                  data-animation-delay={0}
                  data-animation-direction=""
                >
                  {" "}
                  Discover All Offerings&nbsp;
                </a>
              </div>
            </div>
            <div
              className="u-align-left u-container-align-center-sm u-container-align-center-xs u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2"
              data-animation-name="customAnimationIn"
              data-animation-duration={1500}
              data-animation-delay={500}
            >
              <div className="u-container-layout u-container-layout-2">
                <a
                  href="https://nicepage.review"
                  className="u-active-black u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-border-active-palette-1-base u-border-hover-white u-border-none u-btn u-button-style u-hover-palette-2-base u-text-active-white u-text-body-color u-text-hover-white u-white u-btn-2"
                  data-animation-name=""
                  data-animation-duration={0}
                  data-animation-delay={0}
                  data-animation-direction=""
                >
                  {" "}
                  Consult with B.E.N. for Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="u-clearfix u-grey-90 u-section-5" id="carousel_c8a7">
    <div className="u-clearfix u-sheet u-sheet-1">
      <h2
        className="u-align-center u-text u-text-default u-text-1"
        data-animation-name="customAnimationIn"
        data-animation-duration={1500}
      >
        {" "}
        Unlocking Musical Potential
      </h2>
      <p
        className="u-align-center u-text u-text-default-lg u-text-default-md u-text-default-sm u-text-default-xl u-text-2"
        data-animation-name="customAnimationIn"
        data-animation-duration={1500}
        data-animation-delay={500}
      >
        {" "}
        Channeling creativity into clean tunes to energize your artistic
        journey. Join B.E.N. to reduce the noise and elevate your music, saving
        on the sonic costs for years of melodic brilliance ahead.
      </p>
      <div className="u-expanded-width u-list u-list-1">
        <div className="u-repeater u-repeater-1">
          <div
            className="u-container-align-center-md u-container-align-center-sm u-container-align-center-xs u-container-style u-image u-image-round u-list-item u-radius-50 u-repeater-item u-shading u-image-1"
            data-image-width={1366}
            data-image-height={768}
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
            data-animation-delay={500}
          >
            <div className="u-container-layout u-similar-container u-container-layout-1">
              <h3
                className="u-text u-text-default u-text-3"
                data-animation-name="customAnimationIn"
                data-animation-duration={1750}
                data-animation-delay={500}
              >
                {" "}
                Elevate Your Savings
              </h3>
              <p className="u-text u-text-default u-text-4">
                {" "}
                Experience the B.E.N. advantage. Join Now!
                <br />
              </p>
            </div>
          </div>
          <div
            className="u-container-align-center-md u-container-align-center-sm u-container-align-center-xs u-container-style u-image u-image-round u-list-item u-radius-50 u-repeater-item u-shading u-image-2"
            data-image-width={1366}
            data-image-height={768}
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
            data-animation-delay={500}
          >
            <div className="u-container-layout u-similar-container u-container-layout-2">
              <h3
                className="u-text u-text-default u-text-5"
                data-animation-name="customAnimationIn"
                data-animation-duration={1750}
                data-animation-delay={500}
              >
                {" "}
                Amplify Your Value
              </h3>
              <p className="u-text u-text-default u-text-6">
                {" "}
                Transform your music space with B.E.N. – Elevate Your Sound,
                Elevate Your Space!
              </p>
            </div>
          </div>
          <div
            className="u-container-align-center-md u-container-align-center-sm u-container-align-center-xs u-container-style u-image u-image-round u-list-item u-radius-50 u-repeater-item u-shading u-image-3"
            data-image-width={1366}
            data-image-height={768}
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
            data-animation-delay={500}
          >
            <div className="u-container-layout u-similar-container u-container-layout-3">
              <h3
                className="u-text u-text-default u-text-7"
                data-animation-name="customAnimationIn"
                data-animation-duration={1750}
                data-animation-delay={500}
              >
                {" "}
                Music Knows No Bounds
              </h3>
              <p className="u-text u-text-default u-text-8">
                {" "}
                B.E.N. - Where Music Works Anywhere, Everywhere!
              </p>
            </div>
          </div>
          <div
            className="u-container-align-center-md u-container-align-center-sm u-container-align-center-xs u-container-style u-image u-image-round u-list-item u-radius-50 u-repeater-item u-shading u-image-4"
            data-image-width={1366}
            data-image-height={768}
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
            data-animation-delay={750}
          >
            <div className="u-container-layout u-similar-container u-container-layout-4">
              <h3
                className="u-text u-text-default u-text-9"
                data-animation-name="customAnimationIn"
                data-animation-duration={1750}
                data-animation-delay={500}
              >
                {" "}
                Your Melodies, Your Rewards
              </h3>
              <p className="u-text u-text-default u-text-10">
                {" "}
                Join B.E.N. and Score Tax Credits &amp; Rebates Beyond the
                Beats!"
              </p>
            </div>
          </div>
          <div
            className="u-container-align-center-md u-container-align-center-sm u-container-align-center-xs u-container-style u-image u-image-round u-list-item u-radius-50 u-repeater-item u-shading u-image-5"
            data-image-width={1366}
            data-image-height={768}
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
            data-animation-delay={750}
          >
            <div className="u-container-layout u-similar-container u-container-layout-5">
              <h3
                className="u-text u-text-default u-text-11"
                data-animation-name="customAnimationIn"
                data-animation-duration={1750}
                data-animation-delay={500}
              >
                {" "}
                Play Your Part
              </h3>
              <p className="u-text u-text-default u-text-12">
                {" "}
                Let Your Music Resonate with Environmental Harmony!
              </p>
            </div>
          </div>
          <div
            className="u-container-align-center-md u-container-align-center-sm u-container-align-center-xs u-container-style u-image u-image-round u-list-item u-radius-50 u-repeater-item u-shading u-image-6"
            data-image-width={1456}
            data-image-height={820}
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
            data-animation-delay={750}
          >
            <div className="u-container-layout u-similar-container u-container-layout-6">
              <h3
                className="u-text u-text-default u-text-13"
                data-animation-name="customAnimationIn"
                data-animation-duration={1750}
                data-animation-delay={500}
              >
                {" "}
                Fueling Musical Growth
              </h3>
              <p className="u-text u-text-default u-text-14">
                Investors and Mentors Power Your Artistic Journey!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    className="u-clearfix u-shading u-video u-section-6"
    id="carousel_61f3"
  >
    <div className="u-background-video u-expanded" style={{}}>
      <div className="embed-responsive embed-responsive-1">
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/apfoJYeIeCg?playlist=apfoJYeIeCg&loop=1&mute=1&showinfo=0&controls=0&start=0&autoplay=1"
          data-autoplay={1}
          frameBorder={0}
          allowFullScreen=""
        />
      </div>
      <div
        className="u-video-shading"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55))"
        }}
      />
    </div>
    <div
      className="u-expanded-width u-grey-90 u-shape u-shape-rectangle u-shape-1"
      data-animation-name="flipIn"
      data-animation-duration={1500}
      data-animation-direction="X"
      data-animation-delay={250}
    />
    <img
      src="images/Grooveandlearn.png"
      alt=""
      className="u-image u-image-round u-radius-50 u-image-1"
      data-image-width={1366}
      data-image-height={768}
      data-animation-name="customAnimationIn"
      data-animation-duration={1500}
      data-animation-delay={500}
    />
    <div
      className="u-container-style u-group u-white u-group-1"
      data-animation-name="customAnimationIn"
      data-animation-duration={1500}
      data-animation-delay={750}
    >
      <div className="u-container-layout u-container-layout-1">
        <h3 className="u-align-left u-text u-text-palette-2-base u-text-1">
          {" "}
          Let Us Help You Thrive <br />
        </h3>
        <p className="u-align-left u-custom-font u-font-playfair-display u-small-text u-text u-text-variant u-text-2">
          {" "}
          Together, we'll harmonize your musical endeavors, saving not just
          notes but also time and effort. Join B.E.N. and let the savings
          symphony begin!"
        </p>
        <a
          href="https://nicepage.dev"
          className="u-active-palette-2-base u-align-center u-border-active-black u-border-hover-black u-border-none u-btn u-btn-round u-button-style u-hover-palette-2-base u-palette-2-base u-radius-50 u-text-active-white u-text-hover-white u-btn-1"
        >
          {" "}
          Start Jamming
          <span style={{ fontSize: "0.75rem" }} />
        </a>
      </div>
    </div>
  </section>
  <section
    className="u-clearfix u-container-align-center-md u-container-align-center-xl u-shading u-video u-section-7"
    id="carousel_ec5b"
  >
    <div className="u-background-video u-expanded" style={{}}>
      <div className="embed-responsive embed-responsive-1">
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/apfoJYeIeCg?playlist=apfoJYeIeCg&loop=1&mute=1&showinfo=0&controls=0&start=0&autoplay=1"
          data-autoplay={1}
          frameBorder={0}
          allowFullScreen=""
        />
      </div>
      <div
        className="u-video-shading"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(240,94,52,0.55), rgba(0,0,0,0.55))"
        }}
      />
    </div>
    <div className="u-clearfix u-sheet u-sheet-1">
      <h2
        className="u-align-center u-text u-text-default u-text-1"
        data-animation-name="customAnimationIn"
        data-animation-duration={1500}
      >
        Our Projects
      </h2>
      <p
        className="u-align-center u-text u-text-2"
        data-animation-name="customAnimationIn"
        data-animation-duration={1500}
        data-animation-delay={250}
      >
        Sample text. Click to select the text box. Click again or double click
        to start editing the text.
      </p>
      <div
        className="u-expanded-width-lg u-expanded-width-md u-expanded-width-xl u-palette-2-base u-shape u-shape-rectangle u-shape-1"
        data-animation-name="customAnimationIn"
        data-animation-duration={1500}
        data-animation-delay={500}
      />
      <div className="u-gallery u-layout-grid u-lightbox u-no-transition u-show-text-on-hover u-gallery-1">
        <div className="u-gallery-inner u-gallery-inner-1">
          <div
            className="u-effect-fade u-gallery-item"
            data-href="https://open.spotify.com/artist/2IX0D2dmtrio3jnGrN0LVN?si=8BxvG4cHQbqcx8CCpFGc4Q"
            data-target="_blank"
          >
            <div
              className="u-back-slide"
              data-image-width={1080}
              data-image-height={1080}
            >
              <img
                className="u-back-image u-expanded"
                src="images/smokecity.jpeg"
              />
            </div>
            <div className="u-over-slide u-shading u-over-slide-1" />
          </div>
          <div
            className="u-effect-fade u-gallery-item"
            data-href="https://audiomack.com/dvery1-1"
            data-target="_blank"
          >
            <div
              className="u-back-slide"
              data-image-width={800}
              data-image-height={800}
            >
              <img
                className="u-back-image u-expanded"
                src="images/dvospirit.jpeg"
              />
            </div>
            <div className="u-over-slide u-shading u-over-slide-2" />
          </div>
          <div
            className="u-effect-fade u-gallery-item"
            data-href="https://open.spotify.com/album/51NZwBHJwbBFsLz7kkasXA?si=1eHnqkTXRXOCJ6Qv6YpULA"
            data-target="_blank"
          >
            <div
              className="u-back-slide"
              data-image-width={717}
              data-image-height={726}
            >
              <img
                className="u-back-image u-expanded"
                src="images/Liquid.png"
              />
            </div>
            <div className="u-over-slide u-shading u-over-slide-3" />
          </div>
          <div
            className="u-effect-fade u-gallery-item"
            data-href="https://audiomack.com/3rsaint/song/paranoia-remake"
            data-target="_blank"
          >
            <div
              className="u-back-slide"
              data-image-width={1400}
              data-image-height={1400}
            >
              <img
                className="u-back-image u-expanded"
                src="images/3saintwoo.jpeg"
              />
            </div>
            <div className="u-over-slide u-shading u-over-slide-4" />
          </div>
          <div
            className="u-effect-fade u-gallery-item"
            data-href="https://open.spotify.com/track/7M3PGA35xfw0JHIAddeOAW?si=877be496c0fa4b42"
            data-target="_blank"
          >
            <div
              className="u-back-slide"
              data-image-width={3000}
              data-image-height={3000}
            >
              <img
                className="u-back-image u-expanded"
                src="images/OCTRIP.jpeg"
              />
            </div>
            <div className="u-over-slide u-shading u-over-slide-5" />
          </div>
          <div className="u-effect-fade u-gallery-item">
            <div
              className="u-back-slide"
              data-image-width={875}
              data-image-height={876}
            >
              <img
                className="u-back-image u-expanded u-back-image-6"
                src="images/12aminlagosart.png"
              />
            </div>
            <div className="u-over-slide u-shading u-over-slide-6" />
          </div>
          <div
            className="u-effect-fade u-gallery-item"
            data-href="https://audiomack.com/jsl-nation-1/song/how-far"
            data-target="_blank"
          >
            <div
              className="u-back-slide"
              data-image-width={720}
              data-image-height={738}
            >
              <img
                className="u-back-image u-expanded"
                src="images/howfar.jpeg"
              />
            </div>
            <div className="u-over-slide u-shading u-over-slide-7" />
          </div>
          <div
            className="u-effect-fade u-gallery-item"
            data-href="https://audiomack.com/boogie-corleone-1"
            data-target="_blank"
          >
            <div
              className="u-back-slide"
              data-image-width={1080}
              data-image-height={1080}
            >
              <img
                className="u-back-image u-expanded"
                src="images/festacepscores.jpeg"
              />
            </div>
            <div className="u-over-slide u-shading u-over-slide-8" />
          </div>
          <div className="u-effect-fade u-gallery-item">
            <div
              className="u-back-slide"
              data-image-width={720}
              data-image-height={1280}
            >
              <img
                className="u-back-image u-expanded"
                src="images/gbojom.jpeg"
              />
            </div>
            <div className="u-over-slide u-shading u-over-slide-9" />
          </div>
        </div>
      </div>
      <a
        href="https://nicepage.review"
        className="u-active-palette-2-base u-align-center u-border-2 u-border-active-palette-2-base u-border-hover-palette-2-base u-border-palette-2-base u-btn u-button-style u-color-scheme-summer-time u-color-style-multicolor-1 u-hover-palette-2-base u-none u-text-active-white u-text-body-color u-text-hover-white u-btn-1"
        data-animation-name="customAnimationIn"
        data-animation-duration={1750}
        data-animation-delay={750}
      >
        Contact Us
      </a>
    </div>
  </section>
  <section
    className="u-clearfix u-lightbox u-shading u-uploaded-video u-video u-video-cover u-section-8"
    id="carousel_48ff"
  >
    <div
      style={{}}
      className="u-align-left u-background-video u-expanded u-left-0"
    >
      <div className="embed-responsive">
        <video
          className="embed-responsive-item"
          data-autoplay={1}
          loop=""
          muted={1}
          autoPlay="autoplay"
          playsInline=""
        >
          <source src="files/hi.mp4" type="video/mp4" />
          <p>Your browser does not support HTML5 video.</p>
        </video>
      </div>
      <div
        className="u-video-shading"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(240,94,52,0.8), rgba(240,94,52,0.8))"
        }}
      />
    </div>
    <div className="u-clearfix u-sheet u-sheet-1">
      <div className="u-expanded-width u-list u-list-1">
        <div className="u-repeater u-repeater-1">
          <div
            className="u-align-center u-container-align-center u-container-style u-hover-feature u-list-item u-repeater-item u-shape-rectangle u-list-item-1"
            data-animation-name="customAnimationIn"
            data-animation-duration={1000}
            data-animation-delay={500}
          >
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
              <span
                className="u-align-center u-file-icon u-icon u-icon-1"
                data-animation-name=""
                data-animation-duration={0}
                data-animation-delay={0}
                data-animation-direction=""
              >
                <img src="images/5000269.png" alt="" />
              </span>
              <h4
                className="u-align-center u-custom-font u-text u-text-font u-text-1"
                data-animation-name="customAnimationIn"
                data-animation-duration={1000}
              >
                Courses
              </h4>
            </div>
          </div>
          <div
            className="u-align-center u-container-align-center u-container-style u-hover-feature u-list-item u-repeater-item u-shape-rectangle u-list-item-2"
            data-animation-name="customAnimationIn"
            data-animation-duration={1000}
            data-animation-delay={500}
            data-href="https://nicepage.com"
          >
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-2">
              <span
                className="u-align-center u-file-icon u-icon u-icon-2"
                data-animation-name=""
                data-animation-duration={0}
                data-animation-delay={0}
                data-animation-direction=""
              >
                <img src="images/4437693.png" alt="" />
              </span>
              <h4
                className="u-align-center u-custom-font u-text u-text-font u-text-2"
                data-animation-name="customAnimationIn"
                data-animation-duration={1000}
              >
                Distribution
              </h4>
            </div>
          </div>
          <div
            className="u-align-center u-container-align-center u-container-style u-hover-feature u-list-item u-repeater-item u-shape-rectangle u-list-item-3"
            data-animation-name="customAnimationIn"
            data-animation-duration={1000}
            data-animation-delay={500}
          >
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
              <span
                className="u-align-center u-file-icon u-icon u-icon-3"
                data-animation-name=""
                data-animation-duration={0}
                data-animation-delay={0}
                data-animation-direction=""
              >
                <img src="images/1968750.png" alt="" />
              </span>
              <h4
                className="u-align-center u-custom-font u-text u-text-font u-text-3"
                data-animation-name="customAnimationIn"
                data-animation-duration={1000}
              >
                Social media
              </h4>
            </div>
          </div>
          <div
            className="u-align-center u-container-align-center u-container-style u-hover-feature u-list-item u-repeater-item u-shape-rectangle u-list-item-4"
            data-animation-name="customAnimationIn"
            data-animation-duration={1000}
            data-animation-delay={500}
          >
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-4">
              <span
                className="u-align-center u-file-icon u-icon u-icon-4"
                data-animation-name=""
                data-animation-duration={0}
                data-animation-delay={0}
                data-animation-direction=""
              >
                <img src="images/10345656.png" alt="" />
              </span>
              <h4
                className="u-align-center u-custom-font u-text u-text-font u-text-4"
                data-animation-name="customAnimationIn"
                data-animation-duration={1000}
              >
                {" "}
                Synergy&nbsp;
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    className="u-align-center u-clearfix u-lightbox u-section-9"
    id="carousel_94fb"
  >
    <div className="u-clearfix u-sheet u-sheet-1">
      <h6
        className="u-align-center u-text u-text-default u-text-1"
        data-animation-name="flipIn"
        data-animation-duration={1000}
        data-animation-direction="X"
      >
        testimonials
      </h6>
      <h2
        className="u-align-center u-custom-font u-font-playfair-display u-text u-text-default u-text-2"
        data-animation-name="pulse"
        data-animation-duration={1000}
        data-animation-direction=""
      >
        Student{" "}
        <b>
          <i>reviews</i>
        </b>
      </h2>
      <div className="u-align-center u-list u-list-1">
        <div className="u-repeater u-repeater-1">
          <div
            className="u-container-style u-list-item u-palette-2-light-1 u-repeater-item u-list-item-1"
            data-animation-name="customAnimationIn"
            data-animation-duration={1000}
          >
            <div className="u-container-layout u-similar-container u-container-layout-1">
              <div
                alt=""
                className="u-image u-image-circle u-image-1"
                data-image-width={864}
                data-image-height={1080}
              />
              <h6 className="u-align-center u-text u-text-default u-text-3">
                {" "}
                Anna M.⭐⭐⭐⭐⭐{" "}
              </h6>
              <p className="u-align-center u-text u-text-4">
                B.E.N rocks! Free distribution, learning, and connecting. It's
                the dream!
                <br />
              </p>
            </div>
          </div>
          <div
            className="u-container-style u-list-item u-palette-2-light-1 u-repeater-item u-list-item-2"
            data-animation-name="customAnimationIn"
            data-animation-duration={1000}
          >
            <div className="u-container-layout u-similar-container u-container-layout-2">
              <div
                alt=""
                className="u-image u-image-circle u-image-2"
                data-image-width={980}
                data-image-height={1500}
              />
              <h6 className="u-align-center u-text u-text-default u-text-5">
                {" "}
                Tom K. ⭐⭐⭐⭐⭐
              </h6>
              <p className="u-align-center u-text u-text-6">
                {" "}
                &nbsp; &nbsp; &nbsp;B.E.N's the real deal. Mentorships, easy
                distribution. I'd give 6 stars if I could!
              </p>
            </div>
          </div>
          <div
            className="u-container-style u-list-item u-palette-2-light-1 u-repeater-item u-list-item-3"
            data-animation-name="customAnimationIn"
            data-animation-duration={1000}
          >
            <div className="u-container-layout u-similar-container u-container-layout-3">
              <div
                alt=""
                className="u-image u-image-circle u-image-3"
                data-image-width={1260}
                data-image-height={698}
              />
              <h6 className="u-align-center u-text u-text-default u-text-7">
                {" "}
                Max B. ⭐⭐⭐⭐
              </h6>
              <p className="u-align-center u-text u-text-8">
                {" "}
                Its a music miracle! It's like having your backstage pass to
                stardom. Free distribution, endless inspiration, and a fanbase
                waiting. Can't ask for more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="u-clearfix u-white u-section-10" id="carousel_8d97">
    <div className="u-clearfix u-sheet u-sheet-1">
      <div className="data-layout-selected u-clearfix u-expanded-width-sm u-expanded-width-xs u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-row">
            <div
              className="u-container-style u-image u-image-round u-layout-cell u-left-cell u-radius-27 u-shading u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-image-1"
              data-image-width={1920}
              data-image-height={1080}
            >
              <div className="u-container-layout u-valign-bottom u-container-layout-1" />
            </div>
            <div className="u-container-style u-layout-cell u-right-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-white u-layout-cell-2">
              <div className="u-container-layout u-container-layout-2">
                <h2
                  className="u-align-center u-text u-text-default u-text-palette-2-base u-text-1"
                  data-animation-name=""
                  data-animation-duration={0}
                  data-animation-delay={0}
                  data-animation-direction=""
                >
                  Contact Us
                </h2>
                <div className="u-expanded-width u-form u-form-1">
                  <form
                    action="https://forms.nicepagesrv.com/v2/form/process"
                    className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form"
                    style={{ padding: 0 }}
                    source="email"
                    name="form"
                  >
                    <div className="u-form-group u-form-name">
                      <label htmlFor="name-daf4" className="u-label">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your Name"
                        id="name-daf4"
                        name="name"
                        className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
                        required=""
                        wfd-id="id1961"
                      />
                    </div>
                    <div className="u-form-email u-form-group">
                      <label htmlFor="email-daf4" className="u-label">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter a valid email address"
                        id="email-daf4"
                        name="email"
                        className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
                        required=""
                        wfd-id="id1962"
                      />
                    </div>
                    <div className="u-form-group u-form-message">
                      <label htmlFor="message-daf4" className="u-label">
                        Message
                      </label>
                      <textarea
                        placeholder=""
                        rows={4}
                        cols={50}
                        id="message-daf4"
                        name="message"
                        className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                    <div className="u-form-agree u-form-group u-form-group-4">
                      <label
                        className="u-block-262f-42 u-field-label u-text-palette-2-base"
                        style={{}}
                      />
                      <input
                        type="checkbox"
                        id="agree-f183"
                        name="agree"
                        className="u-agree-checkbox u-field-input"
                        required=""
                        wfd-id="id1963"
                      />
                      <label
                        htmlFor="agree-f183"
                        className="u-block-262f-38 u-field-label u-text-palette-2-base"
                        style={{}}
                      >
                        I accept the Terms of service
                      </label>
                    </div>
                    <div className="u-align-left u-form-group u-form-submit">
                      <a
                        href="#"
                        className="u-active-grey-75 u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-grey-75 u-palette-2-base u-radius-50 u-btn-1"
                      >
                        Submit
                      </a>
                      <input
                        type="submit"
                        defaultValue="submit"
                        className="u-form-control-hidden"
                        wfd-id="id1964"
                      />
                    </div>
                    <div className="u-form-send-message u-form-send-success">
                      {" "}
                      Thank you! Your message has been sent.{" "}
                    </div>
                    <div className="u-form-send-error u-form-send-message">
                      {" "}
                      Unable to send your message. Please fix errors then try
                      again.{" "}
                    </div>
                    <input
                      type="hidden"
                      defaultValue=""
                      name="recaptchaResponse"
                      wfd-id="id1965"
                    />
                    <input
                      type="hidden"
                      name="formServices"
                      defaultValue="91c8e94d-94c2-a7eb-1bbb-2b89e8b98011"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="u-clearfix u-footer u-grey-80" id="sec-ee3d">
    <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
      <div className="data-layout-selected u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
        <div className="u-gutter-0 u-layout">
          <div className="u-layout-row">
            <div className="u-align-center-sm u-align-center-xs u-align-left-md u-align-left-xl u-container-style u-layout-cell u-left-cell u-size-20 u-size-30-md u-layout-cell-1">
              <div className="u-container-layout u-valign-middle-xl u-container-layout-1">
                {/*position*/}
                <div data-position="" className="u-position u-position-1">
                  {/*block*/}
                  <div className="u-block">
                    <div className="u-block-container u-clearfix">
                      {/*block_header*/}
                      <h5 className="u-block-header u-text">
                        {/*block_header_content*/} Contact Info
                        {/*/block_header_content*/}
                      </h5>
                      {/*/block_header*/}
                      {/*block_content*/}
                      <div className="u-block-content u-text">
                        {/*block_content_content*/} Email:
                        Valsparksproductions@gmail.com
                        <br />
                        <br />
                        Customer support: +250 790 138 715 (Rw)
                        <br />
                        <br />
                        Copyright Information:
                        <br />© 2022 The Brow-Eyed Network. All Rights Reserved.
                        <br />
                        <br />
                        Terms and Conditions
                        <br />
                        <br />
                        Privacy Policy
                        <br />
                        <br />
                        About Us, FAQ, and Support
                        <br />
                        {/*/block_content_content*/}
                      </div>
                      {/*/block_content*/}
                    </div>
                  </div>
                  {/*/block*/}
                </div>
                {/*/position*/}
              </div>
            </div>
            <div className="u-align-center-sm u-align-right-md u-container-align-center-sm u-container-align-center-xs u-container-style u-layout-cell u-size-20 u-size-30-md u-layout-cell-2">
              <div className="u-container-layout u-container-layout-2">
                <a
                  href="https://nicepage.com"
                  className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xs u-image u-logo u-image-1"
                  data-image-width={1080}
                  data-image-height={1080}
                >
                  <img
                    src="images/logo-2-PhotoRoom.png-PhotoRoom.png"
                    className="u-logo-image u-logo-image-1"
                  />
                </a>
              </div>
            </div>
            <div className="u-align-center-sm u-align-center-xs u-align-left-md u-align-right-lg u-align-right-xl u-container-style u-layout-cell u-right-cell u-size-20 u-size-30-md u-layout-cell-3">
              <div className="u-container-layout u-valign-middle u-container-layout-3">
                <div className="u-social-icons u-spacing-10 u-social-icons-1">
                  <a
                    className="u-social-url"
                    title="facebook"
                    target="_blank"
                    href=""
                  >
                    <span className="u-icon u-social-facebook u-social-icon u-icon-1">
                      <svg
                        className="u-svg-link"
                        preserveAspectRatio="xMidYMin slice"
                        viewBox="0 0 112 112"
                        style={{}}
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="#svg-6182"
                        />
                      </svg>
                      <svg
                        className="u-svg-content"
                        viewBox="0 0 112 112"
                        x={0}
                        y={0}
                        id="svg-6182"
                      >
                        <circle
                          fill="currentColor"
                          cx="56.1"
                          cy="56.1"
                          r={55}
                        />
                        <path
                          fill="#FFFFFF"
                          d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    className="u-social-url"
                    title="twitter"
                    target="_blank"
                    href=""
                  >
                    <span className="u-icon u-social-icon u-social-twitter u-icon-2">
                      <svg
                        className="u-svg-link"
                        preserveAspectRatio="xMidYMin slice"
                        viewBox="0 0 112 112"
                        style={{}}
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="#svg-18c2"
                        />
                      </svg>
                      <svg
                        className="u-svg-content"
                        viewBox="0 0 112 112"
                        x={0}
                        y={0}
                        id="svg-18c2"
                      >
                        <circle
                          fill="currentColor"
                          className="st0"
                          cx="56.1"
                          cy="56.1"
                          r={55}
                        />
                        <path
                          fill="#FFFFFF"
                          d="M83.8,47.3c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2C38,87.2,31,85,25,81.2c1,0.1,2.1,0.2,3.2,0.2
c6.3,0,12.1-2.1,16.7-5.7c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1
c0-0.1,0-0.1,0-0.2c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14
c-0.2-1-0.3-2-0.3-3.1c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4
c2.7-0.3,5.3-1,7.7-2.1C88.7,43,86.4,45.4,83.8,47.3z"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    className="u-social-url"
                    title="instagram"
                    target="_blank"
                    href=""
                  >
                    <span className="u-icon u-social-icon u-social-instagram u-icon-3">
                      <svg
                        className="u-svg-link"
                        preserveAspectRatio="xMidYMin slice"
                        viewBox="0 0 112 112"
                        style={{}}
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="#svg-b3a7"
                        />
                      </svg>
                      <svg
                        className="u-svg-content"
                        viewBox="0 0 112 112"
                        x={0}
                        y={0}
                        id="svg-b3a7"
                      >
                        <circle
                          fill="currentColor"
                          cx="56.1"
                          cy="56.1"
                          r={55}
                        />
                        <path
                          fill="#FFFFFF"
                          d="M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2
z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"
                        />
                        <path
                          fill="#FFFFFF"
                          d="M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"
                        />
                        <path
                          fill="#FFFFFF"
                          d="M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8
C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5
c5.5,0,9.9,4.5,9.9,9.9V73.3z"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    className="u-social-url"
                    title="linkedin"
                    target="_blank"
                    href=""
                  >
                    <span className="u-icon u-social-icon u-social-linkedin u-icon-4">
                      <svg
                        className="u-svg-link"
                        preserveAspectRatio="xMidYMin slice"
                        viewBox="0 0 112 112"
                        style={{}}
                      >
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref="#svg-c3b9"
                        />
                      </svg>
                      <svg
                        className="u-svg-content"
                        viewBox="0 0 112 112"
                        x={0}
                        y={0}
                        id="svg-c3b9"
                      >
                        <circle
                          fill="currentColor"
                          cx="56.1"
                          cy="56.1"
                          r={55}
                        />
                        <path
                          fill="#FFFFFF"
                          d="M41.3,83.7H27.9V43.4h13.4V83.7z M34.6,37.9L34.6,37.9c-4.6,0-7.5-3.1-7.5-7c0-4,3-7,7.6-7s7.4,3,7.5,7
C42.2,34.8,39.2,37.9,34.6,37.9z M89.6,83.7H76.2V62.2c0-5.4-1.9-9.1-6.8-9.1c-3.7,0-5.9,2.5-6.9,4.9c-0.4,0.9-0.4,2.1-0.4,3.3v22.5
H48.7c0,0,0.2-36.5,0-40.3h13.4v5.7c1.8-2.7,5-6.7,12.1-6.7c8.8,0,15.4,5.8,15.4,18.1V83.7z"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <section className="u-backlink u-clearfix u-grey-80">
    <a className="u-link" href="https://nicepage.com/templates" target="_blank">
      <span>Templates</span>
    </a>
    <p className="u-text">
      <span>created with</span>
    </p>
    <a
      className="u-link"
      href="https://nicepage.com/static-site-generator"
      target="_blank"
    >
      <span>Static website</span>
    </a>
    .
  </section>
</>

  );
}

export default App;
