"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[160],{7588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(7624),i=n(2172);const s={sidebar_position:5},r="Automatic Updates",a={id:"guides/automatic-updates",title:"Automatic Updates",description:"Configuring Automatic Updates with Cron",source:"@site/docs/guides/automatic-updates.md",sourceDirName:"guides",slug:"/guides/automatic-updates",permalink:"/guides/automatic-updates",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/tree/main/docusaurus/docs/guides/automatic-updates.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Automatic Reboots",permalink:"/guides/automatic-reboots"},next:{title:"Advanced",permalink:"/category/advanced"}},c={},d=[{value:"Configuring Automatic Updates with Cron",id:"configuring-automatic-updates-with-cron",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"automatic-updates",children:"Automatic Updates"}),"\n",(0,o.jsx)(t.h2,{id:"configuring-automatic-updates-with-cron",children:"Configuring Automatic Updates with Cron"}),"\n",(0,o.jsxs)(t.p,{children:["To be able to use automatic Updates with this Server the following environment variables ",(0,o.jsx)(t.strong,{children:"have"})," to be set to ",(0,o.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"RCON_ENABLED"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"UPDATE_ON_BOOT"})}),"\n"]}),"\n",(0,o.jsxs)(t.admonition,{type:"warning",children:[(0,o.jsxs)(t.p,{children:["If docker restart is not set to policy ",(0,o.jsx)(t.code,{children:"always"})," or ",(0,o.jsx)(t.code,{children:"unless-stopped"}),"\nthen the server will shutdown and will need to be manually restarted."]}),(0,o.jsxs)(t.p,{children:["The example docker run command and docker compose file in ",(0,o.jsx)(t.a,{href:"https://palworld-server-docker.loef.dev/",children:"the Quicksetup"}),"\nalready use the needed policy"]})]}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"AUTO_UPDATE_ENABLED"})," enable or disable automatic updates (Default is disabled)"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"AUTO_UPDATE_CRON_EXPRESSION"})," is a cron expression, in a Cron-Expression you define an interval for when to run jobs."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["This image uses Supercronic for crons\nsee ",(0,o.jsx)(t.a,{href:"https://github.com/aptible/supercronic#crontab-format",children:"supercronic"}),"\nor ",(0,o.jsx)(t.a,{href:"https://crontab-generator.org",children:"Crontab Generator"}),"."]})}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"AUTO_UPDATE_CRON_EXPRESSION"})," to change the default schedule."]})]})}function l(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>r});var o=n(1504);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);