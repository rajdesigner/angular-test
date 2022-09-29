/**
 * @description  XMLHttpRequest code in a promise and then await it to make it asynchronous.
 * @Author Rajmani
 * @param method
 * @param url 
 * @returns 
 */
const sendRequest = (method: string, url: string) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = 'json';

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      }
      resolve(xhr.response);
    };

    xhr.send();
  });
  return promise;
};

/**
 * @description this function gets All episodes and it iterate through each character
 * and makes a API call.I have also used Memoization technique so that no duplicate API calls
 */

const getAllEpisodes = async () => {
  try {
    let episodes: any = {}
    episodes = await sendRequest('GET', 'https://rickandmortyapi.com/api/episode');
    let charaterobj: any = {};
    let allepisodes = episodes?.results;
    for (const key in allepisodes) {
      let characters = allepisodes[key]?.characters;
      for (const key_character in characters) {
        if(charaterobj[characters[key_character]]){
          allepisodes[key].characters[key_character] = charaterobj[characters[key_character]];
        }
        else{
          charaterobj[characters[key_character]] = await sendRequest('GET', characters[key_character] as string);
          allepisodes[key].characters[key_character] = charaterobj[characters[key_character]];
        }
        
      }
    }
    console.log('Formatted Result', allepisodes)
	} catch (err) {
  console.log(err);
}
};

getAllEpisodes();
