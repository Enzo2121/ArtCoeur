import{ab as c,d,c as m,e as x,f as t,i as s,w as n,C as u,N as g}from"./BAEfmSgz.js";import{r as o}from"./Cx3OwwNV.js";import"./Dnd51l0P.js";const h=c("/images/heartHero.svg"),p={class:"max-w-screen-xl mx-auto px-4 gap-12 text-[#331E23] md:px-8"},_={class:"max-w-4xl mx-auto text-center"},b={class:"lg:text-5xl text-[#331E23] jakarta-bold mx-auto md:text-5xl"},f={class:"max-w-2xl mx-auto jakarta-regular lg:text-lg text-[#331E23] dark:text-white mt-1"},k={class:"flex items-center justify-center gap-x-3 mt-3"},w={class:"relative mt-14"},L=d({__name:"simpleHero",props:{button1Link:String,button2Link:String,imageSrc:String},setup(a){return(e,r)=>{const l=u,i=g;return m(),x("section",null,[t("div",p,[t("div",_,[t("h2",b,[o(e.$slots,"heroTitle")]),t("p",f,[o(e.$slots,"heroDescription")]),t("div",k,[s(l,{to:a.button1Link,class:"inline-block py-0 px-4 text-[#331E23] hover:text-gray-500 dark:text-white border dark:border-gray-200/20 font-medium duration-150 active:bg-gray-100 rounded-lg jakarta-regular"},{default:n(()=>[o(e.$slots,"button1Text")]),_:3},8,["to"]),s(l,{to:a.button2Link,class:"inline-block py-0 px-4 text-white font-medium duration-150 hover:bg-gray-500 active:bg-gray-700 rounded-lg shadow-lg hover:shadow-none",style:{backgroundColor:"#B4878E"}},{default:n(()=>[o(e.$slots,"button2Text")]),_:3},8,["to"])])]),t("div",w,[s(i,{src:a.imageSrc,class:"lg:w-full lg:h-[42rem] md:w-full md:h-[32rem] w-full h-[18rem] shadow-lg rounded-lg border-[5px] border-[#331E23]",alt:"Hero Image"},null,8,["src"]),r[0]||(r[0]=t("div",{class:"absolute -top-5 right-4 translate-x-1/2 -translate-y-1/2"},[t("img",{src:h,class:"max-lg:w-10 max-lg:h-10",alt:"Heart Icon"})],-1))])])])}}});export{L as default};
