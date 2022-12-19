import{_ as P,e as y,x as C,m as e,R as l,P as r,o as d,c,a as o,F as x,k as w,U as b,ae as M,t as I,V as G,W as j,p as W,d as N,X as V,f as T,g as h,ab as F,ac as L,b as v,w as Q,a4 as U,j as A,r as g}from"./index.22bc8e8b.js";import{B as q,a as $}from"./BoardGameCardSearchPage.c57ad20a.js";import"./AddToList.2430e4a4.js";const E={setup(){const i=y(""),a=y(""),_=y([]),t=y([]);return{isSearch:!1,filters1:_,filters2:t,playerCount:i,playTime:a,categories:C(()=>e.bgCategories),mechanics:C(()=>e.bgMechanics),async searchByCoolMethod(){try{e.itsAMaybe=12,e.hopeItWorks=0;let p=`categories=${_.value}`,s=`mechanics=${t.value}`,m=`gt_max_players=${i.value}`,k=`lt_max_playtime=${a.value}`;e.queryFilter=[...e.queryFilter,m,k,p,s];const f=e.queryFilter;e.nextQueryFilter=e.queryFilter;let u=f.join("&");e.activeSearchQuery=f,await l.getBoardGames(u),e.boardgames<=0?(r.toast("Refine your search..."),e.queryFilter=[]):e.queryFilter=[]}catch(p){r.error(p,"[Cool Search Method]")}},async incrementSkip(p){try{switch(p){case"next":e.skip+=10;break;case"prev":if(e.skip<=0)return;e.skip-=10;break;default:break}}catch(s){r.error("[INCREMENT SKIP]",s)}},newSearch(){e.skip=0}}}},S=i=>(W("data-v-cef465d7"),i=i(),N(),i),R={class:"container-fluid"},O={class:"row justify-content-evenly align-items-center"},D={class:"dropdown col-md-3 my-1",id:"dropdown"},K=S(()=>o("button",{class:"dropdown-toggle collapsed button-50 p-2 focus",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Categories ",-1)),Y={class:"row scrollableY p-2 dropdown-menu bg-dark"},X={class:"col-md-12"},z=["value"],H={for:"card-game",class:"ms-2"},J={class:"dropdown col-md-3 my-1",id:"dropdown2"},Z={class:"dropdown-item"},ee=S(()=>o("button",{class:"dropdown-toggle collapsed button-50 p-2 focus",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Mechanics ",-1)),te={class:"row scrollableY p-2 dropdown-menu bg-dark"},oe={class:"col-md-12"},ae=["value"],se={for:"card-game",class:"ms-2"},ie={class:"col-md-2 my-1"},ne=S(()=>o("div",null,"Player count",-1)),re=V('<option selected data-v-cef465d7></option><option value="1" data-v-cef465d7>1</option><option value="2" data-v-cef465d7>2</option><option value="3" data-v-cef465d7>3</option><option value="4" data-v-cef465d7>4</option><option value="5" data-v-cef465d7>5</option><option value="6" data-v-cef465d7>6</option><option value="7" data-v-cef465d7>7</option><option value="8" data-v-cef465d7>8</option><option value="9" data-v-cef465d7>9</option><option value="10" data-v-cef465d7>10+</option>',11),de=[re],ce={class:"col-md-2 my-1"},le=S(()=>o("div",null,"Play time",-1)),pe=V('<option selected data-v-cef465d7></option><option value="10" data-v-cef465d7>10 mins</option><option value="15" data-v-cef465d7>15 mins </option><option value="20" data-v-cef465d7>20 mins </option><option value="25" data-v-cef465d7>25 mins</option><option value="30" data-v-cef465d7>30 mins </option><option value="35" data-v-cef465d7>35 mins</option><option value="40" data-v-cef465d7>40 mins</option><option value="45" data-v-cef465d7>45 mins</option><option value="50" data-v-cef465d7>50 mins </option><option value="55" data-v-cef465d7>55 mins </option><option value="60" data-v-cef465d7>60+ mins</option>',12),me=[pe],_e={class:"col-md-1"};function ue(i,a,_,t,n,p){return d(),c("div",R,[o("form",{onSubmit:a[5]||(a[5]=j(s=>t.searchByCoolMethod(),["prevent"]))},[o("div",O,[o("div",D,[K,o("div",Y,[o("div",X,[(d(!0),c(x,null,w(t.categories,s=>(d(),c("div",{class:"dropdown-item inputBox d-flex text-light",key:s.id,id:"CategoryDiv"},[b(o("input",{class:"checkBox",type:"checkbox",value:s.id,"onUpdate:modelValue":a[0]||(a[0]=m=>t.filters1=m)},null,8,z),[[M,t.filters1]]),o("label",H,I(s.name),1)]))),128))])])]),o("div",J,[o("div",Z,[ee,o("div",te,[o("div",oe,[(d(!0),c(x,null,w(t.mechanics,s=>(d(),c("div",{class:"dropdown-item inputBox d-flex text-light",key:s.id},[b(o("input",{class:"checkBox",type:"checkbox",value:s.id,"onUpdate:modelValue":a[1]||(a[1]=m=>t.filters2=m)},null,8,ae),[[M,t.filters2]]),o("label",se,I(s.name),1)]))),128))])])])]),o("div",ie,[ne,b(o("select",{class:"form-select","aria-label":"Select Number of Players","onUpdate:modelValue":a[2]||(a[2]=s=>t.playerCount=s),id:"playerCount"},de,512),[[G,t.playerCount]])]),o("div",ce,[le,b(o("select",{class:"form-select","aria-label":"Select Number of Players","onUpdate:modelValue":a[3]||(a[3]=s=>t.playTime=s),id:"playerCount"},me,512),[[G,t.playTime]])]),o("div",_e,[o("button",{class:"btn button-51",type:"submit",onClick:a[4]||(a[4]=s=>t.newSearch())}," SUBMIT ")])])],32)])}const he=P(E,[["render",ue],["__scopeId","data-v-cef465d7"]]);const ve={setup(){const i=y("");async function a(){try{await l.getBoardGameCategoriesList()}catch(t){r.error(t,"[getCategoryList]")}}async function _(){try{await l.getBoardGameMechanicsList()}catch(t){r.error(t,"[getMechanicsList]")}}return T(()=>{a(),_()}),{editable:i,boardGames:h(()=>e.boardgames.slice(e.hopeItWorks,e.itsAMaybe)),categories:h(()=>e.bgCategories),skip:h(()=>e.skip),hopeItWorks:h(()=>e.hopeItWorks),itsAMaybe:h(()=>e.itsAMaybe),async incrementSkip(t){try{switch(t){case"next":if(e.itsAMaybe==e.boardgames.length){e.skip+=48,e.nextQueryFilter[e.nextQueryFilter.length-1]=`skip=${e.skip}`;const n=e.nextQueryFilter.join("&");await l.getBoardGames(n),e.itsAMaybe=12,e.hopeItWorks=0}e.itsAMaybe+=12,e.hopeItWorks+=12;break;case"prev":e.hopeItWorks>0&&(e.hopeItWorks-=12),e.itsAMaybe>=22&&(e.itsAMaybe-=12);break;default:e.itsAMaybe+=0,e.hopeItWorks+=0;break}}catch(n){r.error("[INCREMENT SKIP]",n)}},async paginationAttempt2(t){try{const n=e.activeSearchQuery.join("&");t=="prev"?(e.nextSet+=25,await l.getBoardGames(n)):e.nextSet-=25,await l.getBoardGames(n)}catch(n){r.error(n,"[paginationAttempt2]")}},async nextSet(){try{e.nextSet+=25,await l.getBoardGamesByOrder_By()}catch(t){r.error(t,"[nextSet]")}},async previousSet(){try{e.nextSet-=25,await l.getBoardGamesByOrder_By()}catch(t){r.error(t,"[previousSet]")}}}},components:{Filters:F,Searchbar:L,BoardGameCard:q,BGCardSearchPage:$,BoardGameCardSearchPage:$,FilterBar:he,FiltersSideBar:F}},B=i=>(W("data-v-75f854ab"),i=i(),N(),i),ye={key:0,class:"container-fluid px-3 animate__animated animate__fadeInRight"},fe={class:"row justify-content-center g-md-0"},be={class:"col-md-12 border-secondary border-3 rounded-bottom"},ge={class:"d-flex flex-column align-items-center"},Se={class:"col-md-4 my-3"},ke=B(()=>o("h5",{class:"text-dark"}," Or search by..",-1)),xe={class:"col-md-11 d-flex bg-dark lighten-10 rounded p-3"},we={class:"col-md-2"},Be={class:"col-md-10"},Ce={class:"row mx-2"},Me={key:0,class:"col-md-12 d-flex flex-column justify-content-center align-items-center"},Ie=B(()=>o("h1",null,"Currently no results ",-1)),Ge=B(()=>o("img",{src:"https://cdn-icons-png.flaticon.com/512/2621/2621165.png",alt:"no results found",width:"400",height:"400"},null,-1)),Fe=[Ie,Ge],Ae={class:"d-flex justify-content-center my-2"},$e=["disabled"],Pe=["disabled"];function We(i,a,_,t,n,p){const s=g("Searchbar"),m=g("FilterBar"),k=g("FiltersSideBar"),f=g("BoardGameCardSearchPage");return t.boardGames?(d(),c("div",ye,[o("div",fe,[o("div",be,[o("div",ge,[o("div",Se,[v(s)]),ke])]),o("div",xe,[v(m)]),o("div",we,[v(k)]),o("div",Be,[o("div",Ce,[v(U,{name:"custom-classes",enterActiveClass:"animate__fadeIn animate__animated",leaveActiveClass:"animate__fadeOut animate__animated"},{default:Q(()=>[(d(!0),c(x,null,w(t.boardGames,u=>(d(),c("div",{class:"col-md-3 mt-3",key:u.id},[v(f,{boardGame:u},null,8,["boardGame"])]))),128))]),_:1})]),t.boardGames.length<=0?(d(),c("div",Me,Fe)):A("",!0),o("div",Ae,[o("button",{class:"btn button-51 mx-1",onClick:a[0]||(a[0]=u=>t.incrementSkip("prev")),type:"button",disabled:t.hopeItWorks==0}," Previous ",8,$e),o("button",{class:"btn button-52 mx-1",onClick:a[1]||(a[1]=u=>t.incrementSkip("next")),type:"button",disabled:t.boardGames.length<=0||t.boardGames.length<t.itsAMaybe-t.hopeItWorks}," Next ",8,Pe)])])])])):A("",!0)}const Te=P(ve,[["render",We],["__scopeId","data-v-75f854ab"]]);export{Te as default};
