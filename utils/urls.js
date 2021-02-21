const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://contoleifolha.herokuapp.com/'

/**
 *
 * @param {any} image  
 */

const fromImageToUrl = (image) => {
    if (!image) {
      return "/vercel.svg"; //Or default image here
    }
    if (image.url.indexOf("/") === 0) {
      //It's a relative url, add API URL
      return `${API_URL}${image.url}`;
    }
  
    return image.url;
};
export { fromImageToUrl, API_URL };