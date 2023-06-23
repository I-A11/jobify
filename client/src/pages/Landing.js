import Logo from "../assets/images/logo.svg";
import Main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={Logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking App</span>
          </h1>
          <p>
            I'm baby letterpress tote bag bicycle rights Brooklyn master cleanse
            jean shorts. Brunch meh distillery post-ironic vape ascot cupping.
            Pug activated charcoal deep v gorp core kinfolk.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={Main} alt="job hunt" className="img main-img" />
      </div>
    </main>
  );
};

export default Landing;
