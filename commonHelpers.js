import{a as f,S as L,i as u}from"./assets/vendor-eded45c0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const b="/goit-js-hw-12/assets/bi_x-octagon-17638c89.svg";f.defaults.baseURL="https://pixabay.com";const w="43342767-c7e13188a4d46cb3021e40da1",y=(s,e)=>{const i={params:{key:w,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:15}};return f.get("/api/",i)},h=s=>s.map(e=>`
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
        `).join(""),p={titleColor:"rgba(255, 255, 255, 1)",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"rgba(255, 255, 255, 1)",background:"#EF4040",iconUrl:b,position:"topRight",progressBarColor:"rgba(181, 27, 27, 1)",maxWidth:"432px"},P={message:"We're sorry, but you've reached the end of search results.",position:"topRight"},q=document.querySelector(".js-search-form"),o=document.querySelector(".js-gallery"),a=document.querySelector(".js-loader"),M=document.querySelector(".js-search-input"),g=document.querySelector(".js-load-more");let c=null,l=1,S=new L(".gallery a",{captionsData:"alt",captionDelay:250});const d=()=>{g.classList.add("is-hidden"),g.removeEventListener("click",v)},j=async s=>{try{if(s.preventDefault(),c=M.value.trim(),l=1,c===""){u.error(p),o.innerHTML="",d(),s.target.reset();return}o.innerHTML="",a.classList.add("is-visible");const{data:e}=await y(c,l);if(a.classList.remove("is-visible"),e.hits.length===0){o.innerHTML="",s.target.reset(),u.error(p),d();return}if(Math.ceil(e.totalHits/e.per_page)===1){d(),o.innerHTML=h(e.hits),s.target.reset();return}o.innerHTML=h(e.hits),g.classList.remove("is-hidden"),g.addEventListener("click",v),S.refresh()}catch(e){a.classList.remove("is-visible"),console.log(e)}s.target.reset()},v=async s=>{try{l++,a.classList.add("is-visible");const{data:e}=await y(c,l);a.classList.remove("is-visible"),o.insertAdjacentHTML("beforeend",h(e.hits));let n=document.querySelector(".js-gallery-item").getBoundingClientRect();window.scrollBy({top:n.height*2,behavior:"smooth"});const t=Math.ceil(e.totalHits/e.per_page);l===t&&(d(),u.info(P))}catch(e){console.log(e)}};q.addEventListener("submit",j);
//# sourceMappingURL=commonHelpers.js.map
