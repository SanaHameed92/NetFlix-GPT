export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-5e9f-7420-a5e4-86ff612f8e2a/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"


export const API_options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_BEARER_TOKEN}`
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780"


  export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/US-en-20241216-TRIFECTA-perspective_16158377-32b2-42cc-ba71-15929be7d1f2_medium.jpg"


  export const SUPPORTED_LANG = [{identity: "en" , name: "English"},{identity: "mal" , name: "Malayalam"},{identity: "hindi" , name: "Hindi"},{identity: "spanish" , name: "Spanish"}]