export  const renderPhotos = pictures => {
      return pictures.map(picture =>
          `
 <li class="gallery-item">
  <a class="gallery-link" href="${picture.largeImageURL}">
  <div class="image-wrapper">
    <img
      class="gallery-image"
      src="${picture.webformatURL}"
      alt="${picture.tags}"
    />
     </div>
    </a>
    <div class="content">

    <div class="detailed-info">
    <h3 class="title">Likes</h3>
       <p class="quantity">${picture.likes}</p>
         </div>

         <div class="detailed-info">
       <h3 class="title">Views</h3>
       <p class="quantity">${picture.views}</p>
        </div>
      
        <div class="detailed-info">
       <h3 class="title">Comments</h3>
       <p class="quantity">${picture.comments}</p>
       </div>

        <div class="detailed-info">
       <h3 class="title">Downloads</h3>
       <p class="quantity">${picture.downloads}</p>
       </div>

    </div>
</li> 
        `).join('');
          
   }