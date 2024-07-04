import { useEffect } from "react";
import { FilmsList } from "../../components/FilmsList/FilmsList";
import { useLocalStorage } from "../../hooks/useLocalStorage"

const WatchListPage = () => {
    
    const {watchList } = useLocalStorage();

useEffect(() => {
console.log(watchList)
}, [watchList])
    return (
        <FilmsList films={watchList} loadMore={null}>Your WatchList</FilmsList>
    )

}
export default WatchListPage