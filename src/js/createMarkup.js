
import { icons } from "./icons";

export function createMarkup(fetched) {
    return fetched.hits.map(hit => {
        return `
        <a class="links" href="${hit.largeImageURL}">
        <div class="photo-card">
                    <img class="gallery-image" src="${hit.webformatURL}" alt="${hit.tags} loading="lazy" width="300" height="180""/>
                    
                    <div class="info">
                    <p class="info-item">
                    ${icons.like}
                        <b> ${hit.likes}</b>
                       
                    </p>
                    <p class="info-item">
                    ${icons.view}
                        <b> ${hit.views}</b>
                       
                    </p>
                    <p class="info-item">
                    ${icons.comments}
                        <b>${hit.comments}</b>
                       
                    </p>
                    <p class="info-item">
                    ${icons.downloads}
                        <b> ${hit.downloads}</b>
                       
                    </p>
                    </div>
                </div>
                </a>`
    }).join('')
}