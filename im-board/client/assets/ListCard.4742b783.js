import{_ as p,s as h,m as _,o as a,u as x,w as g,a as t,t as s,c as n,n as b,r as v,B as G,v as I,x as k,P as l,y as L,z as C,b as w,j as m,p as S,d as B}from"./index.c8e2c391.js";const j={props:{group:{type:h,required:!0}},setup(o){return{setActiveGroup(){let r=_.groups.find(e=>e.groupId==o.group.groupId);_.activeGroup=r}}}},M={class:"card-img-overlay text-shadow d-flex flex-column justify-content-between"},F={class:"card-title p-1 text-center rounded-1"},N={class:"card-title text-center p-1 rounded-1"},A={class:"card-text"},P={key:0},R={key:1};function V(o,r,e,i,f,y){var d;const u=v("router-link");return a(),x(u,{to:{name:"Group",params:{id:(d=e.group)==null?void 0:d.groupId}}},{default:g(()=>{var c;return[t("div",{class:"card text-bg-dark my-2 elevation-3 groupCard mx-3 mx-md-2",style:b({backgroundImage:`url(${e.group.group.coverImg})`})},[t("div",M,[t("h3",F,s((c=e.group)==null?void 0:c.group.name),1),t("div",N,[t("div",A,"Owner: "+s(e.group.group.creator.name),1),e.group.group.groupMemberIds.length==1?(a(),n("div",P,s(e.group.group.groupMemberIds.length)+" Member ",1)):(a(),n("div",R,s(e.group.group.groupMemberIds.length)+" Members",1))])])],4)]}),_:1},8,["to"])}const Y=p(j,[["render",V],["__scopeId","data-v-832baa06"]]);const q={props:{boardGameList:{type:G,required:!0}},setup(o){const r=I();return{account:k(()=>_.account),route:r,async removeGameFromList(){try{if(!await l.confirm("remove from this list?"))return;await L.removeGameFromList(o.boardGameList.listId)}catch(e){C.error("[RemoveGame]",e),l.error(e)}}}}},z=o=>(S("data-v-ddd82919"),o=o(),B(),o),D={class:"hi"},$={class:"card elevation-4 my-2"},E=["src"],O={class:"card-body p-1 bg-dark rounded-bottom"},U={class:"card-title d-flex justify-content-center"},H=z(()=>t("div",{class:"card-text d-flex justify-content-center"}," Categories: ",-1)),J={class:"card-text d-flex justify-content-center"},K={class:"card-text d-flex justify-content-center"},Q={key:0};function T(o,r,e,i,f,y){var d,c;const u=v("router-link");return a(),n("div",D,[t("div",$,[w(u,{class:"text-center",to:{name:"BoardGameDetails",params:{id:(d=e.boardGameList)==null?void 0:d.gameId}}},{default:g(()=>[t("img",{src:e.boardGameList.imgUrl,class:"forcedImg rounded img-fluid"},null,8,E)]),_:1},8,["to"]),t("div",O,[t("p",U,[t("h4",null,s((c=e.boardGameList)==null?void 0:c.boardGameName),1)]),H,t("div",J," Players: "+s(e.boardGameList.players),1),t("div",K," Rating:"+s(e.boardGameList.rating.toFixed(2)),1),i.route.name=="Account"?(a(),n("div",Q,[i.account.id==e.boardGameList.accountId?(a(),n("i",{key:0,class:"mdi mdi-close text-danger selectable rounded-3 fs-3",title:"remove game from list",onClick:r[0]||(r[0]=W=>i.removeGameFromList())})):m("",!0)])):m("",!0)])])])}const Z=p(q,[["render",T],["__scopeId","data-v-ddd82919"]]);export{Y as G,Z as L};
