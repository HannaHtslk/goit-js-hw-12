import{i as l,S as u}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const m="/goit-js-hw-12/assets/bi_x-octagon-17638c89.svg",h="https://pixabay.com",f="43342767-c7e13188a4d46cb3021e40da1",g=o=>{const e=new URLSearchParams({key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${h}/api/?${e}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},y=o=>o.map(e=>`
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
        `).join(""),c={titleColor:"rgba(255, 255, 255, 1)",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"rgba(255, 255, 255, 1)",background:"#EF4040",iconUrl:m,position:"topRight",progressBarColor:"rgba(181, 27, 27, 1)",maxWidth:"432px"},p=document.querySelector(".js-search-form"),v=document.querySelector(".js-search-input"),i=document.querySelector(".js-gallery"),d=document.querySelector(".js-loader"),b=o=>{o.preventDefault();const e=v.value.trim();if(e===""){l.error(c),i.innerHTML="",o.target.reset();return}i.innerHTML="",d.classList.add("is-visible"),g(e).finally(()=>{d.classList.remove("is-visible")}).then(s=>{if(s.hits.length===0){l.error(c),i.innerHTML="",o.target.reset();return}i.innerHTML=y(s.hits),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(s=>{console.log(s)}),o.target.reset()};p.addEventListener("submit",b);
//# sourceMappingURL=commonHelpers.js.map
