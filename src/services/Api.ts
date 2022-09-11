export const fetchBreeds = async (page:number = 0,limit:number = 10) => {
    
    try{
        const response = await fetch(`https://api.thedogapi.com/v1/breeds?limit=${ limit }&page=${ page }`);
        if(!response.ok){
            throw new Error(`Error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    }catch(err){
        console.log(err);
        return null;
    }
  }