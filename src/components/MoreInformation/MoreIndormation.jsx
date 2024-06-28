import { Info, StyledLink, LinkList } from "./MoreIndormation.styled"

export const MoreIndormation = () => {
    
    return (
        <Info>
               <h2>Additional information:</h2>
        <nav>
        <LinkList>
          <li><StyledLink to="cast" 
          aria-label='cast'
              onClick={(e) => e.target.blur()}>Cast</StyledLink></li>
            
          <li><StyledLink to="reviews" 
          aria-label='reviews'
              onClick={(e) => e.target.blur()}>Reviews</StyledLink></li>
            

        </LinkList>
      </nav>
        </Info>
        
    )
}