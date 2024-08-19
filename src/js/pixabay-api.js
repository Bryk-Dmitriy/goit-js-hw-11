const baseUrl = 'https://pixabay.com/api/';

export function fetchImages(query) {
  const url = `${baseUrl}?key=45461935-4caf943777d43ef92827c838d&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      return data.hits;
    })
    .catch(error => {
      console.error('Fetching error:', error);
      return [];
    });
}