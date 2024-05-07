"use strict";(self.webpackChunkkeyboards=self.webpackChunkkeyboards||[]).push([[637],{5931:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=i(4848),s=i(8453);const l={},t="DK Saver Redux",o={id:"projects/dk-saver-redux",title:"DK Saver Redux",description:"A replacement PCB for the DK Saver keyboard",source:"@site/docs/projects/dk-saver-redux.md",sourceDirName:"projects",slug:"/projects/dk-saver-redux",permalink:"/keyboards/projects/dk-saver-redux",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deca",permalink:"/keyboards/projects/deca"},next:{title:"efreet Redux",permalink:"/keyboards/projects/efreet-redux"}},a={},d=[{value:"General Info",id:"general-info",level:2},{value:"Cable Wiring",id:"cable-wiring",level:2},{value:"USB 2.0",id:"usb-20",level:3},{value:"USB 2.0 using a PS/2 or DIN cable",id:"usb-20-using-a-ps2-or-din-cable",level:3},{value:"Firmware",id:"firmware",level:2},{value:"Binaries",id:"binaries",level:3},{value:"VIA JSON",id:"via-json",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"dk-saver-redux",children:"DK Saver Redux"}),"\n",(0,r.jsx)(n.p,{children:"A replacement PCB for the DK Saver keyboard"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:"https://i.imgur.com/H4T3ePy.jpg",alt:""}),"\r\n(Photo courtesy of ",(0,r.jsx)(n.a,{href:"https://www.twitch.tv/lightningkeyboards",children:"Lightning"}),")"]}),"\n",(0,r.jsx)(n.h2,{id:"general-info",children:"General Info"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"AT90USB646 MCU"}),"\n",(0,r.jsx)(n.li,{children:"A.87B/h87/skinny A.87/TX87 footprint compatible with no TGR o-ring cutouts"}),"\n",(0,r.jsxs)(n.li,{children:["Cherry MX Lock in-switch indicator LED compatibility on caps & scroll lock","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)("ins",{children:"The circular pad for the LEDs is positive, while the square pads are negative"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Physical slide switch for changing the exposed indicator LED to either function as a caps lock indicator, or utilize QMK backlight"}),"\n",(0,r.jsx)(n.li,{children:"Unified Daughterboard w/ Molex Pico-EZmate (JST-SH connectors are too tall to properly fit lmao sorry) compatibility for easy testing & flashing without soldering a USB 2.0 cable"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"cable-wiring",children:"Cable Wiring"}),"\n",(0,r.jsx)(n.h3,{id:"usb-20",children:"USB 2.0"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Pin name"}),(0,r.jsx)(n.th,{children:"Wire color"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"VCC"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)("ins",{children:"Red"})," or orange"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"D-"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)("ins",{children:"White"})," or gold"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"D+"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("ins",{children:"Green"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GND"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)("ins",{children:"Black"})," or blue"]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"(Underlined colors are the most common)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The USB cable shielding (usually some sort of metallic foil) surrounding the 4 main wires in your USB 2.0 cable, ",(0,r.jsx)(n.strong,{children:"or"})," the drain wire (an exposed, bare metal wire touching/connected to that foil shielding; ",(0,r.jsx)(n.strong,{children:"some cables may or may not have this"}),") should ideally be soldered to the ",(0,r.jsx)(n.code,{children:"SHIELD"})," pin as well","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This is technically optional, your keyboard will still work if you don't do this, but let's be real, you might as well spend the extra 5 minutes doing this if you even have one of these in the first place, don't be lazy lmfao"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"usb-20-using-a-ps2-or-din-cable",children:"USB 2.0 using a PS/2 or DIN cable"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"QMK doesn't support PS/2 keyboard output, and neither does this MCU, so you'll have to cut the connector off of your existing cable and solder a USB connector onto that instead"}),"\n",(0,r.jsx)(n.li,{children:"You can probably figure out how to do this yourself using the magic of the internet and that USB 2.0 wiring diagram above :)"}),"\n",(0,r.jsxs)(n.li,{children:["The same rules with soldering to the ",(0,r.jsx)(n.code,{children:"SHIELD"})," pin from the section above apply here as well"]}),"\n",(0,r.jsx)(n.li,{children:"I am not responsible if you fuck up your PCB from doing this incorrectly"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"firmware",children:"Firmware"}),"\n",(0,r.jsxs)(n.p,{children:["Source code available in ",(0,r.jsx)(n.a,{href:"https://github.com/qmk/qmk_firmware/tree/master/keyboards/druah/dk_saver_redux",children:"QMK repositories"})]}),"\n",(0,r.jsx)(n.h3,{id:"binaries",children:"Binaries"}),"\n",(0,r.jsx)(n.p,{children:"All binaries have VIA enabled, with native VIA detection soon\u2122"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.a,{href:"pathname:///files/dk_saver_redux.hex",children:"dk_saver_redux.hex"})]}),"\n",(0,r.jsxs)(n.li,{children:["asym_eager_defer_pk debounce (GAMING): ",(0,r.jsx)(n.a,{href:"pathname:///files/dk_saver_redux_gaming.hex",children:"dk_saver_redux_gaming.hex"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Theoretically allows for close to ",(0,r.jsx)(n.em,{children:"zero"})," latency on keypress downstrokes; noise can be detected as ghost keypresses when testing the PCB, and only use fresh switches/leaves or else your switches ",(0,r.jsx)(n.strong,{children:"will"})," chatter when using this debounce method"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Flashing backlight when typing: ",(0,r.jsx)(n.a,{href:"pathname:///files/dk_saver_redux_backlight.hex",children:"dk_saver_redux_backlight.hex"})]}),"\n",(0,r.jsxs)(n.li,{children:["Flashing caps lock indicator when typing: ",(0,r.jsx)(n.a,{href:"pathname:///files/dk_saver_redux_caps_lock.hex",children:"dk_saver_redux_caps_lock.hex"})]}),"\n",(0,r.jsxs)(n.li,{children:["Flashing scroll lock indicator when typing: ",(0,r.jsx)(n.a,{href:"pathname:///files/dk_saver_redux_scroll_lock.hex",children:"dk_saver_redux_scroll_lock.hex"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"via-json",children:"VIA JSON"}),"\n",(0,r.jsxs)(n.p,{children:["Only compatible with VIA v3: ",(0,r.jsx)(n.a,{href:"pathname:///files/dk_saver_redux.json",children:"dk_saver_redux.json"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'Druah assumes no responsibility or liability for any errors or omissions in his content. The information contained is provided on an "as is" basis with no guarantees of completeness, accuracy, usefulness, or timeliness.'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var r=i(6540);const s={},l=r.createContext(s);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);