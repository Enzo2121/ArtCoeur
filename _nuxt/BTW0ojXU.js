import{ac as m,ad as p,V as w,c as f,e as h,I as _}from"./CkDFbsdv.js";import{u as g}from"./BCJ-sKrE.js";const v=["id"],y={__name:"Tweet",props:{id:{type:String,required:!0}},setup(s){const r=m(),o=p(),a=s,{onLoaded:n}=g("https://platform.twitter.com/widgets.js");function d(){const e=document.getElementById(o);twttr.widgets.createTweet(a.id,e,{theme:r.value==="dark"?"dark":""})}function i(e,t){var u=document.querySelectorAll("[data-tweet-id]");u.forEach(function(c){var l=c.getAttribute("src");c.setAttribute("src",l.replace("theme="+e,"theme="+t))})}return n(()=>{d()}),w(()=>r.value,(e,t)=>{i(t,e)},{deep:!0}),(e,t)=>(f(),h("div",{id:_(o)},null,8,v))}};export{y as default};
