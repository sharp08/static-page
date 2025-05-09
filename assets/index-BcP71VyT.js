import{B as I,a as M,p as x,b as z,c as T,W as p,q as R,s as D,L as U,t as w,u as W,C as X,P as r,f as H,h as O,j as i,r as h}from"./index-CA-TbVeO.js";import{F as q,d as J,b as K,x as L}from"./babel-BulN-n99.js";import{I as Z,a as G}from"./IconClose-BGSgjqmw.js";function Y(o){return o!==null&&typeof o=="object"}function B(o){return Y(o)&&typeof o.then=="function"}const $={PREFIX:`${I}-popconfirm`,POPOVER:`${I}-popconfirm-popover`},Q={DEFAULT_Z_INDEX:1030};class ee extends M{init(){}destroy(){}handleCancel(e){const t=this._adapter.notifyCancel(e);B(t)?(this._adapter.updateCancelLoading(!0),t.then(n=>{this.handleVisibleChange(!1),this._adapter.updateCancelLoading(!1)},n=>{this._adapter.updateCancelLoading(!1)})):this.handleVisibleChange(!1)}handleConfirm(e){const t=this._adapter.notifyConfirm(e);B(t)?(this._adapter.updateConfirmLoading(!0),t.then(n=>{this._adapter.updateConfirmLoading(!1),this.handleVisibleChange(!1)},n=>{this._adapter.updateConfirmLoading(!1)})):this.handleVisibleChange(!1)}handleClickOutSide(e){this._adapter.notifyClickOutSide(e)}handleVisibleChange(e){this._isControlledComponent("visible")||this._adapter.setVisible(e),e?this.handleFocusOperateButton():this._adapter.focusPrevFocusElement(),this._adapter.notifyVisibleChange(e)}handleFocusOperateButton(){const{cancelButtonProps:e,okButtonProps:t}=this._adapter.getProps();x(e,"autoFocus")&&!x(e,"disabled")?this._adapter.focusCancelButton():x(t,"autoFocus")&&!x(t,"disabled")&&this._adapter.focusOkButton()}}var te=function(o,e){var t={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&e.indexOf(n)<0&&(t[n]=o[n]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(o);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(o,n[s])&&(t[n[s]]=o[n[s]]);return t};class _ extends z{constructor(e){super(e),this.handleCancel=t=>this.foundation.handleCancel(t&&t.nativeEvent),this.handleConfirm=t=>this.foundation.handleConfirm(t&&t.nativeEvent),this.handleVisibleChange=t=>this.foundation.handleVisibleChange(t),this.handleClickOutSide=t=>this.foundation.handleClickOutSide(t),this.stopImmediatePropagation=t=>t&&t.nativeEvent&&t.nativeEvent.stopImmediatePropagation(),this.renderConfirmPopCard=t=>{let{initialFocusRef:n}=t;const{content:s,title:a,className:c,style:f,cancelType:b,icon:u,prefixCls:l,showCloseIcon:C}=this.props,{direction:g}=this.context,v=T(l,c,{[`${l}-rtl`]:g==="rtl"}),d=a!==null&&typeof a<"u",m=!(s===null||typeof s>"u"),S=p.isValidElement(u),k=T({[`${l}-body`]:!0,[`${l}-body-withIcon`]:S});return p.createElement("div",{className:v,onClick:this.stopImmediatePropagation,style:f},p.createElement("div",{className:`${l}-inner`},p.createElement("div",{className:`${l}-header`},S?p.createElement("i",{className:`${l}-header-icon`,"x-semi-prop":"icon"},u):null,p.createElement("div",{className:`${l}-header-body`},d?p.createElement("div",{className:`${l}-header-title`,"x-semi-prop":"title"},a):null),C?p.createElement(R,{className:`${l}-btn-close`,icon:p.createElement(Z,null),size:"small",theme:"borderless",type:b,onClick:this.handleCancel}):null),m?p.createElement("div",{className:k,"x-semi-prop":"content"},D(s)?s({initialFocusRef:n}):s):null,p.createElement("div",{className:`${l}-footer`,ref:this.footerRef},this.renderControls())))},this.state={cancelLoading:!1,confirmLoading:!1,visible:e.defaultVisible||!1},this.foundation=new ee(this.adapter),this.footerRef=p.createRef(),this.popoverRef=p.createRef()}static getDerivedStateFromProps(e,t){const n={},{hasOwnProperty:s}=Object.prototype;return s.call(e,"visible")&&(n.visible=e.visible),n}get adapter(){return Object.assign(Object.assign({},super.adapter),{setVisible:e=>this.setState({visible:e}),updateConfirmLoading:e=>this.setState({confirmLoading:e}),updateCancelLoading:e=>this.setState({cancelLoading:e}),notifyConfirm:e=>this.props.onConfirm(e),notifyCancel:e=>this.props.onCancel(e),notifyVisibleChange:e=>this.props.onVisibleChange(e),notifyClickOutSide:e=>this.props.onClickOutSide(e),focusCancelButton:()=>{var e,t;const n=(t=(e=this.footerRef)===null||e===void 0?void 0:e.current)===null||t===void 0?void 0:t.querySelector("[data-type=cancel]");n==null||n.focus({preventScroll:!0})},focusOkButton:()=>{var e,t;const n=(t=(e=this.footerRef)===null||e===void 0?void 0:e.current)===null||t===void 0?void 0:t.querySelector("[data-type=ok]");n==null||n.focus({preventScroll:!0})},focusPrevFocusElement:()=>{var e;(e=this.popoverRef.current)===null||e===void 0||e.focusTrigger()}})}renderControls(){const{okText:e,cancelText:t,okType:n,cancelType:s,cancelButtonProps:a,okButtonProps:c}=this.props,{cancelLoading:f,confirmLoading:b}=this.state;return p.createElement(U,{componentName:"Popconfirm"},(u,l)=>p.createElement(p.Fragment,null,p.createElement(R,Object.assign({"data-type":"cancel",type:s,onClick:this.handleCancel,loading:f},w(a,"autoFocus")),t||x(u,"cancel")),p.createElement(R,Object.assign({"data-type":"ok",type:n,theme:"solid",onClick:this.handleConfirm,loading:b},w(c,"autoFocus")),e||x(u,"confirm"))))}render(){const{direction:e}=this.context,t=e==="rtl"?"bottomRight":"bottomLeft",n=this.props,{className:s,prefixCls:a,disabled:c,children:f,style:b,position:u=t}=n,l=te(n,["className","prefixCls","disabled","children","style","position"]);if(c)return f;const{visible:C}=this.state,g={onVisibleChange:this.handleVisibleChange,className:$.POPOVER,onClickOutSide:this.handleClickOutSide};return this.isControlled("visible")&&(g.trigger="custom"),p.createElement(W,Object.assign({ref:this.popoverRef},l,{content:v=>{let{initialFocusRef:d}=v;return this.renderConfirmPopCard({initialFocusRef:d})},visible:C,position:u},g),f)}}_.contextType=X;_.propTypes={motion:r.oneOfType([r.bool,r.func,r.object]),disabled:r.bool,content:r.oneOfType([r.node,r.func]),title:r.any,prefixCls:r.string,className:r.string,style:r.object,icon:r.node,okText:r.string,okType:r.string,cancelText:r.string,cancelType:r.string,onCancel:r.func,onConfirm:r.func,onClickOutSide:r.func,onVisibleChange:r.func,visible:r.bool,defaultVisible:r.bool,okButtonProps:r.object,cancelButtonProps:r.object,stopPropagation:r.oneOfType([r.bool,r.string]),showCloseIcon:r.bool,zIndex:r.number,trigger:r.string,position:r.string};_.__SemiComponentName__="Popconfirm";_.defaultProps=H(_.__SemiComponentName__,{stopPropagation:!0,trigger:"click",onVisibleChange:O,disabled:!1,icon:p.createElement(G,{size:"extra-large"}),okType:"primary",cancelType:"tertiary",prefixCls:$.PREFIX,zIndex:Q.DEFAULT_Z_INDEX,showCloseIcon:!0,onCancel:O,onConfirm:O,onClickOutSide:O});const ne="/assets/icon-C5kMDUDs.svg",oe="_header_1t8hc_9",se="_logo_1t8hc_18",A={header:oe,logo:se};function re(){return i.jsx("div",{className:A.header,children:i.jsxs("div",{className:A.logo,children:[i.jsx("img",{alt:"logo",src:ne}),i.jsx("span",{children:"React Playground"})]})})}function ie(o){const{file:e,onChange:t,options:n}=o;function s(a,c){a.addCommand(c.KeyMod.CtrlCmd|c.KeyCode.KeyJ,()=>{var f;(f=a.getAction("editor.action.formatDocument"))==null||f.run()})}return i.jsx(q,{height:"100%",path:e.name,language:e.language,onMount:s,onChange:t,value:e.value,options:{fontSize:14,scrollBeyondLastLine:!1,minimap:{enabled:!1},scrollbar:{verticalScrollbarSize:6,horizontalScrollbarSize:6},...n}})}function E(o){const e=o.split(".").pop()||"";return["js","jsx"].includes(e)?"javascript":["ts","tsx"].includes(e)?"typescript":["json"].includes(e)?"json":["css"].includes(e)?"css":"javascript"}const ae=`{\r
  "imports": {\r
    "react": "https://esm.sh/react@18.2.0",\r
    "react-dom/client": "https://esm.sh/react-dom@18.2.0"\r
  }\r
}`,le=`:root {\r
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
}`,ce=`import { useState } from 'react'\r
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
export default App`,de=`import React from 'react'\r
import ReactDOM from 'react-dom/client'\r
\r
import App from './App'\r
\r
ReactDOM.createRoot(document.getElementById('root')).render(\r
    <React.StrictMode>\r
        <App />\r
    </React.StrictMode>\r
)\r
`,F="App.jsx",j="import-map.json",y="main.jsx",ue={[y]:{name:y,language:E(y),value:de},[F]:{name:F,language:E(F),value:ce},"App.css":{name:"App.css",language:"css",value:le},[j]:{name:j,language:E(j),value:ae}},N=h.createContext({selectedFileName:"App.jsx"}),pe=o=>{const{children:e}=o,[t,n]=h.useState(ue),[s,a]=h.useState("App.jsx");function c(u){t[u]={name:u,language:E(u),value:""},n({...t})}function f(u){delete t[u],n({...t})}function b(u,l){if(!t[u]||l===void 0||l===null)return;const{[u]:C,...g}=t,v={[l]:{...C,language:E(l),name:l}};n({...g,...v})}return i.jsx(N.Provider,{value:{files:t,selectedFileName:s,setSelectedFileName:a,setFiles:n,addFile:c,removeFile:f,updateFileName:b},children:e})},me="_tabs_hoco0_1",fe="_actived_hoco0_30",P={tabs:me,"tab-item":"_tab-item_hoco0_21",actived:fe,"tabs-item-input":"_tabs-item-input_hoco0_38"};function he(o){const{value:e,actived:t=!1,readonly:n,creating:s,onClick:a,onRemove:c,onEditComplete:f}=o,[b,u]=h.useState(e),[l,C]=h.useState(s),g=h.useRef(null);function v(){C(!0),setTimeout(()=>{var m;(m=g==null?void 0:g.current)==null||m.focus()},0)}function d(){C(!1),f(b)}return h.useEffect(()=>{var m;s&&((m=g==null?void 0:g.current)==null||m.focus())},[s]),i.jsx("div",{className:T(P["tab-item"],t?P.actived:null),onClick:a,children:l?i.jsx("input",{ref:g,className:P["tabs-item-input"],value:b,onBlur:d,onChange:m=>u(m.target.value)}):i.jsxs(i.Fragment,{children:[i.jsx("span",{onDoubleClick:n?()=>{}:v,children:b}),n?null:i.jsx(_,{title:`确定删除 ${b} 吗？`,onConfirm:m=>{m==null||m.stopPropagation(),c()},children:i.jsx("span",{style:{marginLeft:5,display:"flex"},children:i.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",children:[i.jsx("line",{stroke:"#999",x1:"18",y1:"6",x2:"6",y2:"18"}),i.jsx("line",{stroke:"#999",x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]})})}function ge(){const{files:o,removeFile:e,addFile:t,updateFileName:n,selectedFileName:s,setSelectedFileName:a}=h.useContext(N),[c,f]=h.useState([""]);h.useEffect(()=>{f(Object.keys(o))},[o]);function b(d,m){n(m,d),a(d),l(!1)}const[u,l]=h.useState(!1);function C(){const d="Comp"+Math.random().toString().slice(2,8)+".jsx";t(d),a(d),l(!0)}function g(d){e(d),a(y)}const v=[y,j,F];return i.jsxs("div",{className:P.tabs,children:[c.map((d,m,S)=>i.jsx(he,{value:d,readonly:v.includes(d),creating:u&&m===S.length-1,actived:s===d,onClick:()=>a(d),onEditComplete:k=>b(k,d),onRemove:()=>g(d)},d+m)),i.jsx("div",{className:P.add,onClick:C,children:"+"})]})}function be(){const{files:o,setFiles:e,removeFile:t,addFile:n,updateFileName:s,selectedFileName:a}=h.useContext(N),c=o[a];function f(b){o[c.name].value=b,e({...o})}return i.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[i.jsx(ge,{}),i.jsx(ie,{file:c,onChange:J(f,500)})]})}function Ce(o,e){let t=e;const n=/import\s+React/g;return(o.endsWith(".jsx")||o.endsWith(".tsx"))&&!n.test(e)&&(t=`import React from 'react';
${e}`),t}function V(o,e,t){let n=Ce(o,e),s="";try{s=K.transform(n,{presets:["react","typescript"],filename:o,plugins:[je(t)],retainLines:!0}).code}catch(a){console.error("编译出错",a)}return s}function ve(o,e){let t=e.split("./").pop()||"";if(!t.includes(".")){const n=Object.keys(o).filter(s=>s.endsWith(".ts")||s.endsWith(".tsx")||s.endsWith(".js")||s.endsWith(".jsx")).find(s=>s.split(".").includes(t));n&&(t=n)}return o[t]}function ye(o){const e=`export default ${o.value}`;return URL.createObjectURL(new Blob([e],{type:"application/javascript"}))}function xe(o){const t=`
(() => {
    const stylesheet = document.createElement('style')
    stylesheet.setAttribute('id', 'style_${new Date().getTime()}_${o.name}')
    document.head.appendChild(stylesheet)

    const styles = document.createTextNode(\`${o.value}\`)
    stylesheet.innerHTML = ''
    stylesheet.appendChild(styles)
})()
    `;return URL.createObjectURL(new Blob([t],{type:"application/javascript"}))}function je(o){return{visitor:{ImportDeclaration(e){const t=e.node.source.value;if(t.startsWith(".")){const n=ve(o,t);if(!n)return;n.name.endsWith(".css")?e.node.source.value=xe(n):n.name.endsWith(".json")?e.node.source.value=ye(n):e.node.source.value=URL.createObjectURL(new Blob([V(n.name,n.value,o)],{type:"application/javascript"}))}}}}}function _e(o){const e=o[y];return V(y,e.value,o)}const Ee=`<!doctype html>\r
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
</html>`;function Pe(){const{files:o}=h.useContext(N),[e,t]=h.useState(""),[n,s]=h.useState(a());h.useEffect(()=>{const c=_e(o);t(c)},[o]);function a(){const c=Ee.replace('<script type="importmap"><\/script>',`<script type="importmap">${o[j].value}<\/script>`).replace('<script type="module" id="appSrc"><\/script>',`<script type="module" id="appSrc">${e}<\/script>`);return URL.createObjectURL(new Blob([c],{type:"text/html"}))}return h.useEffect(()=>{s(a())},[o[j].value,e]),i.jsx("div",{style:{height:"100%"},children:i.jsx("iframe",{src:n,style:{width:"100%",height:"100%",padding:0,border:"none"}})})}function Ne(){return i.jsx(pe,{children:i.jsxs("div",{style:{height:"600px",background:"#e8e8e8"},children:[i.jsx(re,{}),i.jsxs(L,{defaultSizes:[100,100],children:[i.jsx(L.Pane,{minSize:300,children:i.jsx(be,{})}),i.jsx(L.Pane,{minSize:0,children:i.jsx(Pe,{})})]})]})})}export{Ne as default};
