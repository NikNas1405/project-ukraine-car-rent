import{s,g as e,N as n,d as r,j as t,C as i,L as c}from"./index-00771da0.js";import{s as d,g as l,C as x}from"./CarList-41f83289.js";const p="/project-ukraine-car-rent/assets/car-80bb4689.jpg",g=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;

  > p {
    font-size: 16px;
    line-height: 1.5;
    color: ${e.colorBlack};
  }

  > div {
    width: 200px;
    height: 200px;
  }
`,h=s(n)`
  min-width: 100px;
  padding: 15px 20px;
  background-color: ${e.colorAccent};
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;

  &:focus,
  &:hover {
    background: ${e.colorAccent1};
  }
`,j=()=>{const a=r(d),o=r(l);return t.jsx(i,{children:a?t.jsx(c,{}):t.jsx(t.Fragment,{children:o.length>0?t.jsx(x,{adverts:o,showLoadMoreButton:!1}):t.jsxs(g,{children:[t.jsx("p",{children:"It appears that you have not added any adverts to your favorites yet. To get started, you can add adverts that you like to your favorites for easier access in the future."}),t.jsx("div",{children:t.jsx("img",{src:p,alt:"car"})}),t.jsx(h,{to:"/catalog",children:"Choose a car"})]})})})};export{j as default};
