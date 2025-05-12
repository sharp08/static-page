import{r as a,j as s,c as n}from"./index-Dnv9Ydz9.js";import{B as m}from"./index-DRv18eom.js";import"./IconClose-DmUZn5gE.js";import"./IconTickCircle-CuWGJavL.js";const h="_container_1ny8d_1",j="_wrap_1ny8d_5",u="_polygon_1ny8d_14",y="_circle_1ny8d_21",_="_mouse_1ny8d_28",e={container:h,wrap:j,polygon:u,circle:y,mouse:_};function w(){const o=a.useRef(null),[l,d]=a.useState();function p(i){const r=o.current.getBoundingClientRect(),t=i.clientX-r.left,c=i.clientY-r.top,x=`
                M${t},${c-90}
                L${t+90},${c-30} 
                L${t+60},${c+70} 
                L${t-60},${c+70} 
                L${t-90},${c-30} 
                Z
            `;d(x)}return s.jsxs(s.Fragment,{children:[s.jsx(m,{type:"info",fullMode:!1,style:{marginBottom:"10px"},description:"多边形；圆形；跟随鼠标"}),s.jsxs("div",{className:e.container,children:[s.jsx("svg",{height:"0",width:"0",children:s.jsxs("defs",{children:[s.jsx("clipPath",{id:"polygon",children:s.jsx("polygon",{points:"200,0 400,300 0,300 200,0"})}),s.jsx("clipPath",{id:"circle",children:s.jsx("circle",{cx:"200",cy:"200",r:"100"})}),s.jsx("clipPath",{id:"mouse",children:s.jsx("path",{d:l})})]})}),s.jsx("div",{className:n(e.wrap),children:s.jsx("div",{className:n(e.polygon)})}),s.jsx("div",{className:n(e.wrap),children:s.jsx("div",{className:n(e.circle)})}),s.jsx("div",{ref:o,className:n(e.wrap),onMouseMove:p,children:s.jsx("div",{className:n(e.mouse)})})]})]})}export{w as default};
