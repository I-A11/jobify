import Main from "../assets/images/main.svg";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking App</span>
          </h1>
          <p>
            I'm baby letterpress tote bag bicycle rights Brooklyn master cleanse
            jean shorts. Brunch meh distillery post-ironic vape ascot cupping.
            Pug activated charcoal deep v gorp core kinfolk. jean shorts. Brunch
            meh distillery post-ironic vape ascot cupping. Pug activated
            charcoal deep v gorp core kinfolk.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={Main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
