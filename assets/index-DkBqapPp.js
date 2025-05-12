import{j as s,r as a,c as j}from"./index-Dnv9Ydz9.js";import{F as y,d as _,b as C,x as m}from"./babel-BqlISJHq.js";const R="/static-page/assets/icon-C5kMDUDs.svg",S="_header_1t8hc_9",A="_logo_1t8hc_18",v={header:S,logo:A};function N(){return s.jsx("div",{className:v.header,children:s.jsxs("div",{className:v.logo,children:[s.jsx("img",{alt:"logo",src:R}),s.jsx("span",{children:"React Playground"})]})})}const w=`{\r
  "imports": {\r
    "react": "https://esm.sh/react@18.2.0",\r
    "react-dom/client": "https://esm.sh/react-dom@18.2.0"\r
  }\r
}`,M=`:root {\r
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\r
    -webkit-font-smoothing: antialiased;\r
    -moz-osx-font-smoothing: grayscale;\r
    font-weight: 400;\r
    line-height: 1.5;\r
    color: rgb(255 255 255 / 87%);\r
    text-rendering: optimizelegibility;\r
    text-size-adjust: 100%;\r
    background-color: #242424;\r
    color-scheme: light dark;\r
    font-synthesis: none;\r
}\r
\r
#root {\r
    max-width: 1280px;\r
    padding: 2rem;\r
    margin: 0 auto;\r
    text-align: center;\r
}\r
\r
body {\r
    display: flex;\r
    min-width: 320px;\r
    min-height: 100vh;\r
    margin: 0;\r
    place-items: center;\r
}\r
\r
h1 {\r
    font-size: 3.2em;\r
    line-height: 1.1;\r
}\r
\r
button {\r
    padding: 0.6em 1.2em;\r
    font-family: inherit;\r
    font-size: 1em;\r
    font-weight: 500;\r
    cursor: pointer;\r
    background-color: #1a1a1a;\r
    border: 1px solid transparent;\r
    border-radius: 8px;\r
    transition: border-color 0.25s;\r
}\r
\r
button:hover {\r
    border-color: #646cff;\r
}\r
\r
button:focus,\r
button:focus-visible {\r
    outline: 4px auto -webkit-focus-ring-color;\r
}\r
\r
@media (prefers-color-scheme: light) {\r
    :root {\r
        color: #213547;\r
        background-color: #fff;\r
    }\r
\r
    button {\r
        background-color: #f9f9f9;\r
    }\r
}`,E=`import { useState } from 'react'\r
import './App.css'\r
\r
function App() {\r
    const [count, setCount] = useState(0)\r
\r
    return (\r
        <>\r
            <h1>Hello World</h1>\r
            <div className='card'>\r
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>\r
            </div>\r
        </>\r
    )\r
}\r
\r
export default App`,F=`import React from 'react'\r
import ReactDOM from 'react-dom/client'\r
\r
import App from './App'\r
\r
ReactDOM.createRoot(document.getElementById('root')).render(\r
    <React.StrictMode>\r
        <App />\r
    </React.StrictMode>\r
)\r
`;function h(e){const t=e.split(".").pop()||"";return["js","jsx"].includes(t)?"javascript":["ts","tsx"].includes(t)?"typescript":["json"].includes(t)?"json":["css"].includes(t)?"css":"javascript"}const d="App.jsx",u="import-map.json",l="main.jsx",L={[l]:{name:l,language:h(l),value:F},[d]:{name:d,language:h(d),value:E},"App.css":{name:"App.css",language:"css",value:M},[u]:{name:u,language:h(u),value:w}},p=a.createContext({}),P=e=>{const{children:t}=e,[r,n]=a.useState(L),[o,i]=a.useState(d);return s.jsx(p.Provider,{value:{files:r,selectedFileName:o,setSelectedFileName:i,setFiles:n},children:t})};function U(){const{files:e,setFiles:t,selectedFileName:r}=a.useContext(p),n=e[r];function o(c){e[n.name].value=c,t({...e})}function i(c,g){c.addCommand(g.KeyMod.CtrlCmd|g.KeyCode.KeyJ,()=>{var x;(x=c.getAction("editor.action.formatDocument"))==null||x.run()})}return s.jsx(y,{height:"100%",path:n.name,language:n.language,onMount:i,onChange:_(o,500),value:n.value,options:{fontSize:14,scrollBeyondLastLine:!1,minimap:{enabled:!1},scrollbar:{verticalScrollbarSize:6,horizontalScrollbarSize:6}}})}const z="_tabs_11u95_1",I="_actived_11u95_30",f={tabs:z,"tab-item":"_tab-item_11u95_21",actived:I};function O(e){const{value:t,actived:r=!1,onClick:n}=e,o=j(f["tab-item"],r?f.actived:null);return s.jsx("div",{className:o,onClick:n,children:s.jsx("span",{children:t})})}function k(){const{files:e,selectedFileName:t,setSelectedFileName:r}=a.useContext(p),[n,o]=a.useState(Object.keys(e));return s.jsx("div",{className:f.tabs,children:n.map((i,c)=>s.jsx(O,{value:i,actived:t===i,onClick:()=>r(i)},i+c))})}function T(){return s.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[s.jsx(k,{}),s.jsx(U,{})]})}function b(e,t,r){let n=W(e,t),o="";try{o=C.transform(n,{presets:["react","typescript"],filename:e,plugins:[H(r)],retainLines:!0}).code}catch(i){console.error("编译出错",i)}return o}function W(e,t){let r=t;const n=/import\s+React/g;return(e.endsWith(".jsx")||e.endsWith(".tsx"))&&!n.test(t)&&(r=`import React from 'react';
${t}`),r}function D(e,t){let r=t.split("./").pop()||"";if(!r.includes(".")){const n=Object.keys(e).filter(o=>o.endsWith(".ts")||o.endsWith(".tsx")||o.endsWith(".js")||o.endsWith(".jsx")).find(o=>o.split(".").includes(r));n&&(r=n)}return e[r]}function $(e){const t=`export default ${e.value}`,r=URL.createObjectURL(new Blob([t],{type:"application/javascript"}));return console.log(r),r}function B(e){const r=`
(() => {
    const stylesheet = document.createElement('style')
    stylesheet.setAttribute('id', 'style_${new Date().getTime()}_${e.name}')
    document.head.appendChild(stylesheet)

    const styles = document.createTextNode(\`${e.value}\`)
    stylesheet.innerHTML = ''
    stylesheet.appendChild(styles)
})()
    `;return URL.createObjectURL(new Blob([r],{type:"application/javascript"}))}function H(e){return{visitor:{ImportDeclaration(t){const r=t.node.source.value;if(r.startsWith(".")){const n=D(e,r);if(!n)return;if(n.name.endsWith(".css")){t.node.source.value=B(n);return}if(n.name.endsWith(".json")){t.node.source.value=$(n);return}t.node.source.value=URL.createObjectURL(new Blob([b(n.name,n.value,e)],{type:"application/javascript"}))}}}}}function J(e){const t=e[l];return b(l,t.value,e)}const K=`<!doctype html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8" />\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
    <title>Preview</title>\r
</head>\r
\r
<body>\r
    <script type="importmap"><\/script>\r
    <script type="module" id="appSrc"><\/script>\r
    <div id="root"></div>\r
</body>\r
\r
</html>`;function Y(){const{files:e}=a.useContext(p),[t,r]=a.useState(n());function n(o){const i=K.replace('<script type="importmap"><\/script>',`<script type="importmap">${e[u].value}<\/script>`).replace('<script type="module" id="appSrc"><\/script>',`<script type="module" id="appSrc">${o}<\/script>`);return URL.createObjectURL(new Blob([i],{type:"text/html"}))}return a.useEffect(()=>{const o=J(e);r(n(o))},[e]),s.jsx("div",{style:{height:"100%"},children:s.jsx("iframe",{src:t,style:{width:"100%",height:"100%",padding:0,border:"none"}})})}function Q(){return s.jsx(P,{children:s.jsxs("div",{style:{height:"600px",background:"#e8e8e8"},children:[s.jsx(N,{}),s.jsxs(m,{defaultSizes:[100,100],children:[s.jsx(m.Pane,{minSize:300,children:s.jsx(T,{})}),s.jsx(m.Pane,{minSize:0,children:s.jsx(Y,{})})]})]})})}export{Q as default};
