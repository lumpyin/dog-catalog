export const fetchBreeds = async (page = 0,limit = 10) => {
    const response = await fetch(`https://api.thedogapi.com/v1/breeds?limit=${ limit }&page=${ page }`);
    if(!response.ok){
        throw new Error(`Error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  }