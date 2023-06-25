'use strict';
const accessKey = 'M2mGDyGaHVgrMD-RfTalKB2hrYLLDZfB3SLvhSOfoWM';
const apiUrl = 'https://api.unsplash.com/';

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const imageContainer = document.getElementById('image-container');

function searchImages() {
  const searchTerm = searchInput.value;

  const url = `${apiUrl}search/photos?query=${searchTerm}&per_page=10&client_id=${accessKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      showImages(data.results);
    })
    .catch(error => {
      console.log('Xəta:', error);
    });
}

function showImages(images) {
  imageContainer.innerHTML = '';

  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.urls.small;
    imgElement.alt = image.alt_description;

    imageContainer.appendChild(imgElement);
  });
}


searchButton.addEventListener('click', searchImages);
