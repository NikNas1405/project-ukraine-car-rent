import{s as o,g as r,N as n,j as e,C as t}from"./index-5f9ca160.js";const a="/project-ukraine-car-rent/assets/hero-ec1100c2.jpg",i=o.section`
  width: 100%;
  margin: 0 auto;
  padding: 300px 0;
  background-color: ${r.colorInput};
  background-image: linear-gradient(
      180deg,
      rgba(25, 46, 52, 0.61) 5.73%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${a}),
    linear-gradient(180deg, rgba(25, 46, 52, 0.61) 5.73%, rgba(0, 0, 0, 0) 100%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;

  > p {
    max-width: 600px;
    margin: 0 auto 48px;
    font-weight: 500;
    font-size: 24px;
    line-height: 1;
    letter-spacing: 0.02em;
    color: ${r.colorHeartBorder};
  }
`,s=o.h1`
  max-width: 496px;
  margin: 0 auto 48px;
  font-weight: 700;
  font-size: 56px;
  line-height: 1.07;
  letter-spacing: 0.02em;
  color: ${r.colorInput};
`,c=o(n)`
  min-width: 100px;
  padding: 15px 20px;
  background-color: ${r.colorAccent};
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  transition: 3ms ease background-color;

  &:focus,
  &:hover {
    background-color: ${r.colorAccent1};
  }
`,l=o.section`
  font-size: 16px;
  line-height: 1.5;
  color: ${r.colorBlack};

  > h2 {
    font-size: 24px;
    color: ${r.colorAccent1};
    margin-bottom: 20px;
  }

  > p {
    font-size: 18px;
    margin-bottom: 40px;
  }

  > ol {
    margin-bottom: 60px;
    display: flex;
    text-align: center;
    gap: 24px;

    > li {
      padding: 8px;
      border: 1px solid ${r.colorInputBorder};
      border-radius: 12px;
      flex-basis: calc((100% - 2 * 24px) / 3);
    }
  }
`,p=()=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(s,{children:"Ukraine Car Rental Service"}),e.jsx("p",{children:"Your reliable partner in travels and journeys"}),e.jsx(c,{to:"catalog",children:"Choose a car"})]}),e.jsx(t,{children:e.jsxs(l,{children:[e.jsx("p",{children:"Welcome to our car rental service! We are your reliable partner in travels and journeys. Forget about worries regarding transportation – we offer a wide range of cars with different classes and configurations."}),e.jsx("h2",{children:"Our advantages:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Flexible rates and favorable rental conditions."}),e.jsx("li",{children:"Modern and regularly serviced fleet of vehicles."}),e.jsx("li",{children:"Convenient search and filtering of cars based on your preferences."}),e.jsx("li",{children:"Simple and fast booking process."})]}),e.jsx("p",{children:"Choose comfort and safety with our cars for the best travel experience!"})]})})]});export{p as default};
