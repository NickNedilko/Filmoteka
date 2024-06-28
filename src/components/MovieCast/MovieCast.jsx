import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { apiCastById } from "../../services/ApiFilms";
import { ActorCard, ActorList, Info, Photo } from "./MovieCast.styled";




 const MovieCast = () => {
    const [cast, setCast] = useState(null)
    const { id } = useParams();

useEffect(() => {
    if (!id) {
      return;
    }
    apiCastById(id).then(({ data }) => {
      setCast(data.cast);
    });
  }, [id]);



    return (
        <ActorList>
            {cast && cast.map(({id, profile_path, original_name, character}) =>
            (<ActorCard key={id}>
                <Photo src={profile_path? `https://image.tmdb.org/t/p/w500${profile_path}` : 'https://bpgroup.lv/i/product_images/images/Z2000128430.jpg'} alt={original_name} />
                <Info><span>Actor:</span> {original_name}</Info>
                <Info><span>Character:</span> {character}</Info>
                </ActorCard>)
             )}
       </ActorList>
    )
}

export default MovieCast