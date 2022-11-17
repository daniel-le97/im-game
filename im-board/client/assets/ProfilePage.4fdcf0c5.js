import{_ as C,e as P,v as j,f as B,g as n,G as I,c as l,j as f,a as t,n as S,t as F,u as N,w as O,F as k,k as E,ad as m,P as _,m as r,r as x,o as a,b as M,p as V,d as W}from"./index.50f244e3.js";import{G as A,L as U}from"./ListCard.6f292abd.js";import{G as z}from"./GroupGamesCard.f53d2885.js";const D={setup(){const i=P("favorite"),o=j(),p=P("");async function s(){try{await m.getProfileGroups(o.params.id)}catch(e){_.error(e,"[getMyGroups]")}}async function v(){try{await m.getProfileLists(o.params.id)}catch(e){console.error("[get my lists]",e),_.error(e)}}async function g(){try{await m.getUserProfile(o.params.id)}catch(e){_.error(e,"[getProfile]")}}function u(){document.getElementById("Fave").focus()}return B(()=>{g(),s(),v(),u()}),{filterBg:i,editable:p,account:n(()=>r.account),user:n(()=>r.user),groups:n(()=>r.groupMemberShips),wishList:n(()=>r.bgLists.filter(e=>e.listName=="wish")),favList:n(()=>r.bgLists.filter(e=>e.listName=="favorite")),ownedList:n(()=>r.bgLists.filter(e=>e.listName=="owned")),profile:n(()=>r.activeProfile),bgLists:n(()=>r.bgLists.filter(e=>i.value?e.listName==i.value:!0))}},components:{GroupCard:A,GroupForm:I,ListCard:U,GroupGamesCard:z}},d=i=>(V("data-v-14d422bb"),i=i(),W(),i),R={key:0,class:"animate__animated animate__fadeOut"},q=d(()=>t("div",{class:"loader"},null,-1)),H=[q],J={class:"account Page container-fluid"},K={class:"col-md-12 d-flex justify-content-center"},Q=["src"],T=d(()=>t("div",{class:"row justify-content-center align-items-center p-4"},null,-1)),X={class:"row justify-content-center align-items-center g-2 mt-3 mb-2"},Y=d(()=>t("div",{class:"col-md"},null,-1)),Z={class:"col-md d-flex justify-content-center"},$={class:"username"},tt={class:"col-md d-flex justify-content-end"},et=d(()=>t("button",{class:"btn rounded-circle editbtn"},[t("i",{class:"ps-1 mdi mdi-account-cog-outline fs-1",alt:"",title:"Edit Profile"})],-1)),st={class:"row flex-wrap justify-content-between pt-4 pb-3"},ot={class:"col-md mx-md-3 bg-grey rounded"},it=d(()=>t("div",{class:"d-flex justify-content-center pt-2 bg-c3 rounded elevation-4"},[t("h2",{class:"font"},"Game Lists")],-1)),nt={class:"row justify-content-center"},rt={class:"mb-2 mt-2 d-flex justify-content-center"},at={class:"ms-3"},ct={class:"ms-3"},lt={class:"ms-3"},dt={class:"cardholder"},ut={class:"row"};function ft(i,o,p,s,v,g){var b,h,y,w,G,L;const u=x("router-link"),e=x("GroupGamesCard");return a(),l(k,null,[s.profile?f("",!0):(a(),l("div",R,H)),t("div",J,[t("div",{class:"row bg-c5 banner eum-ipsum",style:S({backgroundImage:`url(${(b=s.profile)==null?void 0:b.coverImg})`})},[t("div",K,[(h=s.profile)!=null&&h.picture?(a(),l("img",{key:0,src:(y=s.profile)==null?void 0:y.picture,alt:"",height:"150",width:"150",class:"eum rounded-circle mt-2 icon forcedImg"},null,8,Q)):f("",!0)])],4),T,t("div",X,[Y,t("div",Z,[t("h1",$,F((w=s.profile)==null?void 0:w.name),1)]),t("div",tt,[((G=s.account)==null?void 0:G.id)==((L=s.profile)==null?void 0:L.id)?(a(),N(u,{key:0,to:{name:"Account"}},{default:O(()=>[et]),_:1})):f("",!0)])]),t("div",st,[t("div",ot,[it,t("div",nt,[t("b",rt,[t("div",at,[t("input",{type:"button",id:"Fave",name:"Fave",value:"Favorites",autofocus:"true",class:"button-50 py-2 filterbtn focus",onClick:o[0]||(o[0]=c=>s.filterBg="favorite")})]),t("div",ct,[t("input",{type:"button",class:"button-50 py-2 filterbtn",id:"Owned",name:"Owned",value:"Owned",onClick:o[1]||(o[1]=c=>s.filterBg="owned")})]),t("div",lt,[t("input",{type:"button",id:"Wishlist",name:"Wishlist",class:"button-50 py-2 filterbtn",value:"Wishlist",onClick:o[2]||(o[2]=c=>s.filterBg="wish")})])])]),t("div",dt,[t("div",ut,[(a(!0),l(k,null,E(s.bgLists,c=>(a(),l("div",{class:"col-md-4 px-4",key:c.id},[M(e,{boardGameList:c,class:"elevation-5"},null,8,["boardGameList"])]))),128))])])])])])],64)}const vt=C(D,[["render",ft],["__scopeId","data-v-14d422bb"]]);export{vt as default};
