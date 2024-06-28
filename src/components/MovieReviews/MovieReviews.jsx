import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { apiReviewsById } from "../../services/ApiFilms";
import { Avatar, Content, ReviewAvtor, ReviewCard, ReviewsList } from "./MovieReviews.styled";



 const MovieReviews = () => {
    const [reviews, setReviews] = useState(null)
    const { id } = useParams();


useEffect(() => {
    if (!id) {
      return;
    }
    apiReviewsById(id).then(({ data }) => {
      setReviews(data.results);
    });
  }, [id]);



    return (
        <ReviewsList>
            {reviews && reviews.map(({author, author_details, content, id}) =>
            (<ReviewCard key={id}>
              <ReviewAvtor>
                                <Avatar src={author_details.avatar_path? `https://image.tmdb.org/t/p/w500${author_details.avatar_path
}` : 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'} alt={author} />
                <p>{author}</p>
              </ReviewAvtor>
                <Content>{content}</Content>
                </ReviewCard>)
             )}
       </ReviewsList>
    )
}

export default MovieReviews;