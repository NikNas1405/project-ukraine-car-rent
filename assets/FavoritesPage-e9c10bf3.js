import{s as o,g as e,N as n,d as r,j as t,L as i}from"./index-e7de7906.js";import{s as c,e as d,C as l}from"./CarList-ee410c93.js";const p="/project-ukraine-car-rent/assets/car-80bb4689.jpg",x=o.div`
  padding-top: 80px;
`,g=o.div`
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
`,h=o(n)`
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
`,v=()=>{const a=r(c),s=r(d);return t.jsxs(x,{children:[a&&t.jsx(i,{}),s.length>0?t.jsx(t.Fragment,{children:t.jsx(l,{adverts:s,showLoadMoreButton:!1})}):t.jsxs(g,{children:[t.jsx("p",{children:"It appears that you have not added any adverts to your favorites yet. To get started, you can add adverts that you like to your favorites for easier access in the future."}),t.jsx("div",{children:t.jsx("img",{src:p,alt:"car"})}),t.jsx(h,{to:"/catalog",children:"Choose a car"})]})]})};export{v as default};
