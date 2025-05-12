import{r as a,j as s,c as n}from"./index-DmZJpKwk.js";import{B as m}from"./index-CVgtpZva.js";import"./IconClose-BBn-r4QL.js";import"./IconTickCircle-BS4CqSjU.js";const h="_container_19r1r_1",j="_wrap_19r1r_5",u="_polygon_19r1r_14",_="_circle_19r1r_21",f="_mouse_19r1r_28",e={container:h,wrap:j,polygon:u,circle:_,mouse:f};function w(){const r=a.useRef(null),[l,p]=a.useState();function d(o){const i=r.current.getBoundingClientRect(),t=o.clientX-i.left,c=o.clientY-i.top,x=`
                M${t},${c-90}
                L${t+90},${c-30} 
                L${t+60},${c+70} 
                L${t-60},${c+70} 
                L${t-90},${c-30} 
                Z
            `;p(x)}return s.jsxs(s.Fragment,{children:[s.jsx(m,{type:"info",fullMode:!1,style:{marginBottom:"10px"},description:"多边形；圆形；跟随鼠标"}),s.jsxs("div",{className:e.container,children:[s.jsx("svg",{height:"0",width:"0",children:s.jsxs("defs",{children:[s.jsx("clipPath",{id:"polygon",children:s.jsx("polygon",{points:"200,0 400,300 0,300 200,0"})}),s.jsx("clipPath",{id:"circle",children:s.jsx("circle",{cx:"200",cy:"200",r:"100"})}),s.jsx("clipPath",{id:"mouse",children:s.jsx("path",{d:l})})]})}),s.jsx("div",{className:n(e.wrap),children:s.jsx("div",{className:n(e.polygon)})}),s.jsx("div",{className:n(e.wrap),children:s.jsx("div",{className:n(e.circle)})}),s.jsx("div",{ref:r,className:n(e.wrap),onMouseMove:d,children:s.jsx("div",{className:n(e.mouse)})})]})]})}export{w as default};
