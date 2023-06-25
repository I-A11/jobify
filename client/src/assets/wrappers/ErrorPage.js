import styled from "styled-components";

const Wrapper = styled.main`
  text-align: center;
  img {
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }

  @media (max-width: 620px) {
    img {
      max-width: 400px;
    }
  }
  @media (max-width: 400px) {
    img {
      max-width: 300px;
    }
    h3 {
      font-size: 1.7rem;
    }
  }
`;

export default Wrapper;
