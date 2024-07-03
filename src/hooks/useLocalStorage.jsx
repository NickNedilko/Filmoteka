import { useState } from "react";

export const useLocalStorage = ()=>{
    const setLocal = (film) =>localStorage.setItem('watchList', JSON.stringify(film));
      
   const getLocal = ()=> {
        const data = localStorage.getItem('watchList');
       return data !== null ? JSON.parse(data): []
    }
    
    const [watchList, setWatchList] = useState(()=>getLocal())


const addToLocal = (film)=>{
    const savedWatchList = getLocal();
    savedWatchList.push(film)
    setWatchList(savedWatchList)
    setLocal(savedWatchList);
}

const remove = (film)=>{
    const savedWatchList = getLocal();
    const filter = savedWatchList.filter(item=> item.id !==film.id);
    setWatchList(filter)
    setLocal(filter);
}

const toggleWatchList = (film) => {
    const savedWatchList = getLocal();
   
   const isWatchList = !!savedWatchList.find(item=>item.id===film.id);
    if(isWatchList){
        remove(film)
    }else{
        addToLocal(film)
    }

    
}

return {toggleWatchList, watchList, remove, addToLocal, setLocal, getLocal};

}