import{a as u,S as m,i as l}from"./assets/vendor-eded45c0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const g="/goit-js-hw-12/assets/bi_x-octagon-17638c89.svg";u.defaults.baseURL="https://pixabay.com";const f="43342767-c7e13188a4d46cb3021e40da1",p=r=>{const e={params:{key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}};return u.get("/api/",e)},h=r=>r.map(e=>`
 <li class="gallery-item">
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
        `).join(""),c={titleColor:"rgba(255, 255, 255, 1)",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"rgba(255, 255, 255, 1)",background:"#EF4040",iconUrl:g,position:"topRight",progressBarColor:"rgba(181, 27, 27, 1)",maxWidth:"432px"};new m(".gallery a",{captionsData:"alt",captionDelay:250});const y=document.querySelector(".js-search-form"),v=document.querySelector(".js-search-input"),a=document.querySelector(".js-gallery"),d=document.querySelector(".js-loader"),b=async r=>{r.preventDefault();const e=v.value.trim();if(e===""){l.error(c),a.innerHTML="",r.target.reset();return}a.innerHTML="";try{d.classList.add("is-visible");const{data:o}=await p(e);if(d.classList.remove("is-visible"),o.hits.length===0){l.error(c),a.innerHTML="",r.target.reset();return}a.innerHTML=h(o.hits)}catch(o){console.log(o)}r.target.reset()};y.addEventListener("submit",b);
//# sourceMappingURL=commonHelpers.js.map
