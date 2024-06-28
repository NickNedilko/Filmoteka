import { useState } from "react";
x
export const useLocalStorage = ()=>{
    const setLocal = (film) =>localStorage.setItem('favorite', JSON.stringify(film));
      
   const getLocal = ()=> {
        const data = localStorage.getItem('favorite');
       return data !== null ? JSON.parse(data): []
    }
    
    const [favorites, setFavorites] = useState(()=>getLocal())


const addToLocal = (film)=>{
    const savedFavorites = getLocal();
    savedFavorites.push(film)
    setFavorites(savedFavorites)
    setLocal(savedFavorites);
}

const remove = (film)=>{
    const savedFavorites = getLocal();
    const filter = savedFavorites.filter(item=> item.id !==film.id);
    setFavorites(filter)
    setLocal(filter);
}

const toggleFavorite = (film) => {
    const savedFavorites = getLocal();
   
   const isFavorites = !!savedFavorites.find(item=>item.id===film.id);
    if(isFavorites){
        remove(film)
    }else{
        addToLocal(film)
    }

    
}

return {toggleFavorite, favorites, remove, addToLocal, setLocal, getLocal};

}