import{Y as F,Z as x,m as n,$ as R,_ as B,a0 as E,e as W,x as p,P as d,a1 as k,o as r,c as i,a as t,j as M,t as g,F as I,k as $,u as S,w as N,n as Y,r as w,p as j,d as H,a2 as J,a3 as D,b as G,a4 as U,z as O,v as P,T as X,U as K,a5 as Q,W as tt,a6 as et,a7 as z,f as ot,a8 as at,a9 as st,y as rt}from"./index.5273ee37.js";import{G as nt}from"./GroupGamesCard.52553e47.js";class it{constructor(e){this.accountId=e.accountId,this.id=e.id,this.groupId=e.groupId,this.profile=new F(e.profile),this.isOnline=e.isOnline||!1}}class ct{async addGroupMember(e){const o=await x.post("/api/groupmembers",{groupId:e});n.groupMembers=[new it(o.data),...n.groupMembers]}async leaveGroup(e,o){n.groupMembers.find(_=>_.accountId==n.account.id)?await x.delete(`api/groupmembers/${e}`,o):(await x.delete(`api/groupmembers/${e}`),n.groupMembers=n.groupMembers.filter(_=>_.id!==e)),R.push({name:"Account"})}}const L=new ct;const dt={props:{group:{type:E,required:!0}},setup(a){return{editable:W({}),groupMember:p(()=>n.groupMembers),alreadyAMember:p(()=>n.groupMembers.find(o=>o.accountId==n.account.id)),groupOwner:p(()=>a.group.creatorId==n.account.id),memberId:p(()=>n.groupMembers.find(o=>o.accountId==n.account.id)),async removeGroup(){try{if(this.groupOwner||d.toast("Forbidden: Not Your Group","warning","top-end",1e3),a.group.groupMemberIds>1&&d.toast("Group has members, leave group instead.","warning","top-end",1e3),!await d.confirm())return;await k.removeGroup(a.group.id),d.success("Group Removed")}catch(o){d.error(o,"[removeGroupMember]")}},async addGroupMember(){try{a.group.creatorId==n.account.id?d.error("Already made this group and are already part of it"):(await L.addGroupMember(a.group.id),d.success(`You Joined ${a.group.name} !`))}catch(o){d.error(o,"[addMemberToGroup]")}},async leaveGroup(){try{if(a.group.creatorId==n.account.id&&!await d.confirm("Are you sure you want to leave? You'll have to choose a new group owner...")||!await d.confirm("Are you sure you want to leave?"))return;await L.leaveGroup(this.memberId.id),d.success(`Left ${a.group.name}`)}catch(o){d.error(o,"[leaveGroup]")}},async editGroup(){}}}},A=a=>(j("data-v-35266254"),a=a(),H(),a),ut={class:"d-flex"},lt=A(()=>t("button",{class:"btn text-light",type:"button","data-bs-toggle":"collapse","data-bs-target":"#groupButtons","aria-expanded":"false","aria-controls":"collapseWidthExample"},[t("i",{class:"mdi mdi-dots-horizontal fs-1"})],-1)),mt={class:"d-flex"},pt={key:1},ht={class:"collapse",id:"groupButtons"},_t={class:"logicButtons d-flex"},gt=A(()=>t("button",{class:"btn button-51 py-1 px-2 m-2","data-bs-toggle":"modal","data-bs-target":"#gameNightForm"}," Create Gamenight ",-1)),ft={key:1},bt={key:2},yt={key:3},vt=A(()=>t("button",{class:"btn btn-warning button-51 py-1 px-2 m-2","data-bs-toggle":"modal","data-bs-target":"#inviteMemberForm"}," Invite Member ",-1)),wt=[vt],Gt={class:"row justify-content-center"},xt={class:"col-md-6 text-center bannerBg my-2 rounded text-light elevation-3"},Mt={class:"name"},It=A(()=>t("span",null,[t("div",{class:"text-shadow fs-4"},"Members")],-1)),$t={class:"d-flex justify-content-center align-items-center bg-c1 p-2 rounded-5 mb-2 groupMemberBar flex-wrap"},Bt=["src","alt","title"],Ct={key:0,class:"rounded-circle onlineThing bg-success position-absolute end-50 glow2"};function kt(a,e,o,s,_,f){var c,y;const m=w("router-link");return r(),i("div",{class:"col-md-11 rounded banner elevation-3",style:Y({backgroundImage:`url(${(c=o.group)==null?void 0:c.coverImg})`})},[t("div",ut,[lt,t("div",mt,[s.alreadyAMember?(r(),i("div",pt,[t("button",{onClick:e[1]||(e[1]=u=>s.leaveGroup()),class:"btn button-51 py-1 px-2 m-2"}," Leave Group ")])):(r(),i("button",{key:0,onClick:e[0]||(e[0]=u=>s.addGroupMember()),class:"btn button-50 py-1 px-2 m-2"}," Join Group "))]),t("div",ht,[t("div",_t,[gt,s.groupOwner?(r(),i("button",{key:0,onClick:e[2]||(e[2]=u=>s.removeGroup()),class:"btn btn-danger button-51 py-1 px-2 m-2"}," Delete Group ")):(r(),i("div",ft)),s.groupOwner?(r(),i("div",bt,[t("button",{onClick:e[3]||(e[3]=u=>s.editGroup()),class:"btn btn-warning button-51 py-1 px-2 m-2","data-bs-toggle":"modal","data-bs-target":"#editForm"}," Edit group ")])):M("",!0),s.groupOwner?(r(),i("div",yt,wt)):M("",!0)])])]),t("div",Gt,[t("div",xt,[t("span",Mt,g((y=o.group)==null?void 0:y.name),1),t("div",null,[It,t("div",$t,[(r(!0),i(I,null,$(s.groupMember,u=>(r(),S(m,{to:{name:"Profile",params:{id:u==null?void 0:u.accountId}},key:u==null?void 0:u.id},{default:N(()=>{var v,h,b;return[t("img",{src:(v=u.profile)==null?void 0:v.picture,alt:(h=u.profile)==null?void 0:h.name,title:(b=u.profile)==null?void 0:b.name,height:"45",width:"45",class:"rounded-circle box-shadow m-1 profile-img position-relative"},null,8,Bt),u.profile.isOnline?(r(),i("span",Ct)):M("",!0)]}),_:2},1032,["to"]))),128))])])])])],4)}const Dt=B(dt,[["render",kt],["__scopeId","data-v-35266254"]]);const At={props:{gamenight:{type:J,required:!0}},setup(a){const e=["url(https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)","url(https://images.unsplash.com/photo-1611891487122-207579d67d98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)","url(https://images.unsplash.com/photo-1547638375-ebf04735d792?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)","url(https://images.unsplash.com/photo-1606503153255-59d8b8b82176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)","url(https://images.unsplash.com/photo-1561079028-f20597c34f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjgxfHxnYW1lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)","url(https://images.unsplash.com/photo-1606559497615-e4787c3c75a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzIxfHxnYW1lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)","url(https://images.unsplash.com/photo-1632833157919-32a1fdc249fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGJvYXJkJTIwZ2FtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)","url(https://images.unsplash.com/photo-1563811771046-ba984ff30900?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGJvYXJkJTIwZ2FtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)"];return{gameNightCreator:p(()=>a.gamenight.creatorId==n.account.id),groupOwner:p(()=>a.gamenight.groupCreator==n.account.id),attending:p(()=>a.gamenight.groupMemberIds.find(o=>o.id==n.account.id)),memberGoing:p(()=>{seeTheSame(groupMembers,a.gamenight.groupMemberIds),seeTheSame(a.gamenight.groupMemberIds,groupMembers)}),getRandomBg(){return e[Math.floor(e.length*Math.random())]},seeTheSame(o,s){return o.filter(_=>s.some(f=>_.id===f.id))},async removeGameNight(){try{if(!await d.confirm("Cancel this gamenight??"))return;await D.removeGameNight(a.gamenight.id)}catch(o){console.error("[]",o),d.error(o)}},async addGameNight(){try{await D.addGameNight(a.gamenight.id)}catch(o){d.error(o)}},async attendGamenight(o){try{await D.attendGamenight(o)}catch(s){console.error(s),d.error(s.message)}}}}},C=a=>(j("data-v-dff32f94"),a=a(),H(),a),Nt={class:"row justify-content-center"},St={class:"col-7 col-md-8 rounded bg-c4 m-2 upcomingGameNight"},jt={class:"d-flex justify-content-center mt-2 text-center"},Ht=C(()=>t("h2",null,"Upcoming Gamenight",-1)),zt={class:"d-flex justify-content-center mb-2"},Lt=O(" I'm Attending "),Tt=C(()=>t("i",{class:"bi bi-person-plus-fill"},null,-1)),Ft=[Lt,Tt],Wt=O(" Unattend "),Yt=C(()=>t("i",{class:"bi bi-person-dash-fill"},null,-1)),Ot=[Wt,Yt],Pt={class:"justify-content-center d-flex"},Vt={class:"mx-4"},Zt={class:"col-5 col-md-6 p-0 ps-md-3"},qt={class:"card m-2 noborder"},Rt=C(()=>t("div",{class:"bg-c4 text-center rounded-top"},[t("h5",{class:"mt-1"},"Attending:")],-1)),Et={key:0,class:"p-2 bg-c2 text-center rounded-bottom"},Jt=["src","alt","title"],Ut={class:"col-5 col-md-6 p-0 pe-md-3"},Xt={class:"card m-2 noborder elevation-4"},Kt=C(()=>t("div",{class:"bg-c4 text-center p-1 rounded-top"},[t("h5",{class:"mt-1"},"Playing:")],-1)),Qt={class:"bg-c2 p-2 rounded-bottom"},te={class:"d-flex justify-content-center"},ee={class:"col-md- bg-c2 rounded-1 fs-5 text-center px-3 py-1 my-1"},oe={class:"namefont"};function ae(a,e,o,s,_,f){var c,y,u,v,h;const m=w("router-link");return r(),i("div",{class:"GameNightCard card my-2 elevation-3 position-relative",style:Y({backgroundImage:s.getRandomBg()})},[t("div",Nt,[t("div",St,[t("div",jt,[Ht,s.gameNightCreator||s.groupOwner?(r(),i("i",{key:0,title:"Remove Game Night",class:"mdi mdi-close text-danger fs-4 selectable position-absolute rounded x",onClick:e[0]||(e[0]=b=>s.removeGameNight())})):M("",!0)]),t("div",zt,[s.attending?(r(),i("button",{key:1,class:"btn button-51 animate__animated animate__fadeIn",onClick:e[2]||(e[2]=b=>{var l;return s.attendGamenight((l=o.gamenight)==null?void 0:l.id)})},Ot)):(r(),i("button",{key:0,class:"btn button-51 animate__animated animate__fadeIn",onClick:e[1]||(e[1]=b=>{var l;return s.attendGamenight((l=o.gamenight)==null?void 0:l.id)})},Ft))]),t("div",Pt,[t("span",null,[t("p",null,g(new Date((c=o.gamenight)==null?void 0:c.startDate).toLocaleDateString("en-us",{month:"short",day:"2-digit",year:"numeric"})),1)]),t("span",Vt,[t("p",null,g(new Date((y=o.gamenight)==null?void 0:y.startDate).toLocaleTimeString("en-us",{hour:"2-digit",minute:"2-digit"})),1)]),t("span",null,[t("p",null,"At: "+g((u=o.gamenight)==null?void 0:u.location),1)])])]),t("div",Zt,[t("div",qt,[Rt,(v=o.gamenight)!=null&&v.groupMemberIds?(r(),i("div",Et,[G(U,{name:"custom-classes",enterActiveClass:"animate__zoomIn animate__animated",leaveActiveClass:"animate__zoomOut animate__animated"},{default:N(()=>{var b;return[(r(!0),i(I,null,$((b=o.gamenight)==null?void 0:b.groupMemberIds,l=>(r(),S(m,{to:{name:"Profile",params:{id:l==null?void 0:l.id}},key:l.id},{default:N(()=>[t("img",{src:l==null?void 0:l.picture,alt:l==null?void 0:l.name,title:l==null?void 0:l.name,height:"45",width:"45",class:"rounded-circle box-shadow m-1 profile-img"},null,8,Jt)]),_:2},1032,["to"]))),128))]}),_:1})])):M("",!0)])]),t("div",Ut,[t("div",Xt,[Kt,t("div",Qt,[t("div",te,[t("div",ee,[t("b",oe,g((h=o.gamenight)==null?void 0:h.game),1)])])])])])])],4)}const se=B(At,[["render",ae],["__scopeId","data-v-dff32f94"]]);class V{constructor(e){this.id=e.id,this.groupId=e.groupId,this.creatorId=e.creatorId,this.body=e.body,this.creator=new F(e.creator),this.createdExactTime=e.createdAt,this.createdAt=new Date(e.createdAt).toLocaleDateString("en-Us",{month:"short",day:"2-digit",hour:"numeric",minute:"numeric"})}}class re{async getGroupChatsByGroupId(e){const o=await x.get(`api/groupchats/${e}`);n.groupChats=o.data.map(s=>new V(s))}async addGroupChat(e){await x.post("api/groupchats/",e)}}const Z=new re,ne={setup(){let a=W({});const e=P();return{editable:a,async handleSubmit(){try{if(!n.account.id)return X.loginWithPopup();const o=e.params.id;a.value.groupId=o,await Z.addGroupChat(a.value),a.value={}}catch(o){d.error(o,"handleChatSubmit")}}}}},ie={class:"bg-dark rounded ms-2"},ce=t("div",{class:"row"},[t("div",{class:"d-flex justify-content-between"},[t("div",{class:"p-2 mt-2 ms-1"},"Add post. . ."),t("button",{class:"btn bg-c6 mx-2 my-2 rounded-pill",type:"submit","aria-label":"Submit Post",title:"Submit"}," Post ")])],-1),de={class:"text-start d-flex justify-content-center"},ue={class:""},le={class:"form-group text-center m-1"},me=t("div",null,null,-1);function pe(a,e,o,s,_,f){return r(),i("div",ie,[t("form",{onSubmit:e[1]||(e[1]=tt((...m)=>s.handleSubmit&&s.handleSubmit(...m),["prevent"]))},[ce,t("div",de,[t("div",ue,[t("div",le,[K(t("textarea",{class:"p-2 rounded w-100",rows:"2","onUpdate:modelValue":e[0]||(e[0]=m=>s.editable.body=m),cols:"150",placeholder:"",required:"",name:"postcontent"},null,512),[[Q,s.editable.body]])])]),me])],32)])}const he=B(ne,[["render",pe]]);const _e={props:{chat:{type:V,required:!0}},setup(a){return{account:p(()=>n.account)}}},ge={class:"chatContainer container animate__animated animate__fadeIn"},fe={class:"row"},be={class:"col-12"},ye={key:0,class:"d-flex gap-1 justify-content-end pt-2 pb-2"},ve={class:"mt-2 time"},we={class:""},Ge={key:1,class:"d-flex gap-1 justify-content-start animate__animated animate__fadeInLeft"},xe={class:"bg-c4 rounded p-2 my-2 max-width"},Me=["src","alt","title"],Ie={class:""},$e={class:"mt-3 time"};function Be(a,e,o,s,_,f){var m,c;return r(),i("div",ge,[t("div",fe,[t("div",be,[((m=o.chat)==null?void 0:m.creatorId)==((c=s.account)==null?void 0:c.id)?(r(),i("div",ye,[t("span",ve,g(o.chat.createdAt),1),t("div",{class:et(["bg-c2 rounded-3 p-2 max-width",s.account?"bg-c1 ":"bg-success"])},[t("span",we,g(o.chat.body),1)],2)])):(r(),i("div",Ge,[t("div",xe,[t("img",{src:o.chat.creator.picture,alt:o.chat.creator.name,title:o.chat.creator.name,class:"rounded-circle me-2 profilePic",height:"20",width:"20"},null,8,Me),t("span",Ie,g(o.chat.body),1)]),t("span",$e,g(o.chat.createdAt),1)]))])])])}const Ce=B(_e,[["render",Be],["__scopeId","data-v-17e6fe8c"]]);class T{static EnterGroup(e){z.emit("ENTER_GROUP",e)}static LeaveGroup(e){z.emit("LEAVE_GROUP",e)}}const ke={setup(){const a=P();async function e(){try{await k.getGroupById(a.params.id)}catch(c){d.error(c,"[getGroupById]")}}async function o(){try{await k.getGroupMembers(a.params.id)}catch(c){d.error(c,"[getGroupMemberByGroupId]")}}async function s(){try{await rt.getListsByGroupId(a.params.id)}catch(c){d.error(c,"[getListsByGroupId]")}}async function _(){try{await Z.getGroupChatsByGroupId(a.params.id)}catch(c){d.error(c,"[getListsByGroupId]")}}async function f(){try{await D.getGroupGameNights(a.params.id)}catch(c){d.error(c,"[groupGameNights]")}}function m(){let c=document.getElementById("chatbox");if(!c)return setTimeout(m,500);c.scrollTop=9999}return ot(()=>{e(),o(),s(),_(),f(),m(),T.EnterGroup(a.params.id)}),at(()=>{T.LeaveGroup(a.params.id)}),{chats:p(()=>n.groupChats),group:p(()=>n.activeGroup),lists:p(()=>n.groupFilteredLists),account:p(()=>n.account),gamenights:p(()=>n.groupGameNights),groupOwner:p(()=>n.activeGroup.creatorId==n.account.id),async createGroup(){try{await k.createGroup()}catch(c){d.error(c,"[createGroup]")}}}},components:{GroupBanner:Dt,GameNightCard:se,GroupChatInput:he,GroupGamesCard:nt,Chat:Ce,GameNightForm:st}},q=a=>(j("data-v-bd42ccaa"),a=a(),H(),a),De={key:0,class:"animate__animated animate__fadeOut"},Ae={key:1,class:"group-page animate__animated animate__fadeInRight container-fluid"},Ne={class:"row justify-content-center"},Se={class:"row justify-content-center"},je={class:"col-md-3 bg-dark rounded mt-2"},He=q(()=>t("div",{class:"bg-c6 rounded px-2 py-2 my-2 text-center mx-5"},[t("h4",null,"Group Chat")],-1)),ze={class:"overflow-auto groupchatbox bg-dark lighten-10 rounded",id:"chatbox"},Le={class:"col-md-5 overflow-auto gamecardbox mx-5"},Te={class:"px-1"},Fe={class:"col-md-3 overflow-auto gamecardbox bg-dark pt-2 mt-2 rounded"},We=q(()=>t("div",{class:"bg-c1 rounded text-center pt-2 pb-1 mx-5"},[t("h4",null,"Group Games")],-1)),Ye={class:"mt-2"},Oe={class:"row flex-wrap"};function Pe(a,e,o,s,_,f){const m=w("GroupBanner"),c=w("Chat"),y=w("GroupChatInput"),u=w("GameNightCard"),v=w("GroupGamesCard");return s.group?(r(),i("div",Ae,[t("div",Ne,[G(m,{class:"mt-2 rounded",group:s.group},null,8,["group"])]),t("div",Se,[t("div",je,[He,t("div",ze,[(r(!0),i(I,null,$(s.chats,h=>(r(),i("div",{class:"col-md-12",key:h.id},[G(c,{chat:h},null,8,["chat"])]))),128))]),G(y)]),t("div",Le,[t("div",Te,[(r(!0),i(I,null,$(s.gamenights,h=>(r(),S(u,{gamenight:h},null,8,["gamenight"]))),256))])]),t("div",Fe,[We,t("div",Ye,[t("div",Oe,[(r(!0),i(I,null,$(s.lists,h=>(r(),i("div",{key:h.id,class:"mt-4 col-12"},[G(v,{boardGameList:h},null,8,["boardGameList"])]))),128))])])])])])):(r(),i("div",De," loading.... "))}const qe=B(ke,[["render",Pe],["__scopeId","data-v-bd42ccaa"]]);export{qe as default};