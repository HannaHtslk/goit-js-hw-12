import{a as f,S as L,i as m}from"./assets/vendor-eded45c0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const b="/goit-js-hw-12/assets/bi_x-octagon-17638c89.svg";f.defaults.baseURL="https://pixabay.com";const P="43342767-c7e13188a4d46cb3021e40da1",p=(o,e)=>{const r={params:{key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:15}};return f.get("/api/",r)},h=o=>o.map(e=>`
 <li class="gallery-item js-gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
  <div class="image-wrapper">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags}"
    />
     </div>
    </a>
    <div class="content">

    <div class="detailed-info">
    <h3 class="title">Likes</h3>
       <p class="quantity">${e.likes}</p>
         </div>

         <div class="detailed-info">
       <h3 class="title">Views</h3>
       <p class="quantity">${e.views}</p>
        </div>
      
        <div class="detailed-info">
       <h3 class="title">Comments</h3>
       <p class="quantity">${e.comments}</p>
       </div>

        <div class="detailed-info">
       <h3 class="title">Downloads</h3>
       <p class="quantity">${e.downloads}</p>
       </div>

    </div>
</li> 
        `).join(""),y={titleColor:"rgba(255, 255, 255, 1)",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"rgba(255, 255, 255, 1)",background:"#EF4040",iconUrl:b,position:"topRight",progressBarColor:"rgba(181, 27, 27, 1)",maxWidth:"432px"},w={message:"We're sorry, but you've reached the end of search results.",position:"topRight"};new L(".gallery a",{captionsData:"alt",captionDelay:250});const q=document.querySelector(".js-search-form"),M=document.querySelector(".js-search-input"),a=document.querySelector(".js-gallery"),d=document.querySelector(".js-loader"),g=document.querySelector(".js-load-more");let n=null,l=1;const c=()=>{g.classList.add("is-hidden"),g.removeEventListener("click",v)},S=async o=>{try{if(o.preventDefault(),n=M.value.trim(),l=1,n===""){m.error(y),a.innerHTML="",c(),o.target.reset();return}a.innerHTML="",d.classList.add("is-visible");const{data:e}=await p(n,l),r=15,i=Math.ceil(e.totalHits/r);if(d.classList.remove("is-visible"),e.hits.length===0){m.error(y),a.innerHTML="",o.target.reset(),c();return}if(i===1){c(),a.innerHTML=h(e.hits),o.target.reset();return}a.innerHTML=h(e.hits),g.classList.remove("is-hidden"),g.addEventListener("click",v)}catch(e){console.log(e)}o.target.reset()},v=async o=>{try{l++,d.classList.add("is-visible");const{data:e}=await p(n,l),r=15,i=Math.ceil(e.totalHits/r);d.classList.remove("is-visible"),a.insertAdjacentHTML("beforeend",h(e.hits));let s=document.querySelector(".js-gallery-item").getBoundingClientRect();console.log(s),window.scrollBy({top:s.height*2,behavior:"smooth"}),console.log(s.height),l===i&&(c(),m.info(w))}catch(e){console.log(e)}};q.addEventListener("submit",S);
//# sourceMappingURL=commonHelpers.js.map
