import{S as h,i as a}from"./assets/vendor-96ed78f5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/";function p(s){const o=`${m}?key=45461935-4caf943777d43ef92827c838d&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>r.hits).catch(r=>(console.error("Fetching error:",r),[]))}let c=null;function g(s){const o=document.querySelector(".gallery");o.innerHTML="";const r=s.map(({webformatURL:i,largeImageURL:e,tags:t,likes:n,views:d,comments:u,downloads:f})=>`
    <li class="photo-card">
      <a href="${e}">
        <img src="${i}" alt="${t}" loading="lazy" width="360" height="152"/>
      </a>
      <div class="info">
        <p class="likes"><b>Likes:</b> ${n}</p>
        <p class="vievs"><b>Views:</b> ${d}</p>
        <p class="comments"><b>Comments:</b> ${u}</p>
        <p class="dowloads"><b>Downloads:</b> ${f}</p>
      </div>
      </li>
  `).join("");o.insertAdjacentHTML("beforeend",r),c?c.refresh():c=new h(".gallery a")}function y(){document.querySelector(".loader").classList.remove("hidden")}function l(){document.querySelector(".loader").classList.add("hidden")}const b=document.querySelector(".search-form"),L=document.querySelector(".gallery");b.addEventListener("submit",s=>{s.preventDefault();const o=s.target.searchQuery.value;if(!o){a.error({class:"custom-error",message:"Search field cannot be empty!",position:"topRight"});return}L.innerHTML="",y(),p(o).then(r=>{l(),r.length===0?a.warning({message:"Sorry, there are no images matching your search query. Please try again!",class:"custom-error",position:"topRight"}):g(r)}).catch(r=>{l(),a.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error("Fetching error:",r)})});
//# sourceMappingURL=commonHelpers.js.map
