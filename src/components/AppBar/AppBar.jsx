

import { List, Logo, Nav, StyledLink } from "./AppBar.styled"
// import { ReactComponent as Logo} from "../../assets/filmoteka.svg"

export const AppBar = () => {
    
    return (
      <Nav>
        
        <StyledLink to="/" 
          aria-label='home'
          onClick={(e) => e.target.blur()}>
           <span>
                <svg id="Capa_1" enableBackground="new 0 0 510 510" height="51" viewBox="0 0 510 510" width="51" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink"><linearGradient id="lg1"><stop offset="0" stopColor="#fef056"/><stop offset=".5213" stopColor="#f4d902"/><stop offset="1" stopColor="#fe9738"/></linearGradient><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="4.232" x2="673.984" xlinkHref="#lg1" y1="105.538" y2="105.538"/><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="-64" x2="488.36" xlinkHref="#lg1" y1="46.881" y2="46.881"/><linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="-64" x2="488.36" xlinkHref="#lg1" y1="113.142" y2="113.142"/><linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="34.921" x2="487.594" y1="336.375" y2="336.375"><stop offset="0" stopColor="#f8f6f7"/><stop offset=".1788" stopColor="#f8f6f7"/><stop offset="1" stopColor="#e7e6f5"/></linearGradient><linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="34.921" x2="487.594" y1="336.375" y2="336.375"><stop offset="0" stopColor="#f8f6f7"/><stop offset="1" stopColor="#d1ceeb"/></linearGradient><linearGradient id="lg2"><stop offset="0" stopColor="#fe646f"/><stop offset=".593" stopColor="#fb2b3a"/><stop offset="1" stopColor="#c41926"/></linearGradient><linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="81.652" x2="498.405" xlinkHref="#lg2" y1="336.375" y2="336.375"/><linearGradient id="SVGID_9_" gradientUnits="userSpaceOnUse" x1="-123" x2="401.421" xlinkHref="#lg2" y1="182.4" y2="182.4"/><linearGradient id="SVGID_11_" gradientUnits="userSpaceOnUse" x1="-123" x2="401.421" xlinkHref="#lg2" y1="336.375" y2="336.375"/><linearGradient id="SVGID_12_" gradientUnits="userSpaceOnUse" x1="65.744" x2="505" xlinkHref="#lg2" y1="164.544" y2="164.544"/><g><g><path d="m417.747 49.947c-21.855 0-41.134 11.003-52.619 27.766-14.771-17.001-36.533-27.766-60.823-27.766-8.376 0-16.452 1.28-24.047 3.652-13.606-31.529-44.969-53.599-81.491-53.599-36.997 0-68.699 22.648-82.013 54.834-7.544-3.144-15.818-4.887-24.502-4.887-35.206 0-63.747 28.54-63.747 63.747s28.54 63.747 63.747 63.747c19.207 0 36.417-8.507 48.104-21.944 15.606 13.662 36.04 21.944 58.41 21.944 12.577 0 24.539-2.623 35.379-7.342 13.83 24.457 40.058 40.978 70.159 40.978 32.777 0 60.962-19.585 73.544-47.681 10.923 8.78 24.792 14.045 39.898 14.045 35.206 0 63.747-28.54 63.747-63.747s-28.539-63.747-63.746-63.747z" fill="url(#SVGID_1_)"/><g><path d="m304.305 49.947c-8.376 0-16.452 1.28-24.047 3.652-13.606-31.529-44.969-53.599-81.491-53.599-26.162 0-49.667 11.335-65.904 29.349 8.19-2.495 16.878-3.847 25.884-3.847 30.846 0 58.011 15.743 73.908 39.631 5.119 7.693 14.169 11.674 23.361 10.736 2.719-.278 5.477-.42 8.269-.42 16.732 0 32.264 5.108 45.138 13.843 8.945 6.07 20.825 6.034 29.381-.573 7.401-5.715 16.092-9.839 25.563-11.86-14.752-16.504-36.183-26.912-60.062-26.912z" fill="url(#SVGID_2_)"/><path d="m417.747 49.947c-21.338 0-40.217 10.492-51.787 26.59 3.814-.712 7.746-1.088 11.767-1.088 35.206 0 63.747 28.54 63.747 63.747 0 13.862-4.439 26.681-11.953 37.141 29.579-5.526 51.973-31.461 51.973-62.643 0-35.206-28.54-63.747-63.747-63.747z" fill="url(#SVGID_3_)"/></g></g><path d="m57 162.75 49.87 322.278c2.222 14.354 14.933 24.972 29.895 24.972h236.469c14.962 0 27.674-10.618 29.895-24.972l49.871-322.278z" fill="url(#SVGID_4_)"/><path d="m453 162.75-49.87 322.28c-2.22 14.35-14.93 24.97-29.9 24.97h-40.02c14.97 0 27.68-10.62 29.9-24.97l31.713-204.935c6.348-41.024-25.385-78.045-66.897-78.045h-264.846l-6.08-39.3z" fill="url(#SVGID_5_)"/><g fill="url(#SVGID_6_)"><path d="m222.208 485.028c.492 14.354 3.306 24.972 6.618 24.972h52.349c3.312 0 6.126-10.618 6.618-24.972l11.04-322.278h-87.665z"/><path d="m159.573 485.028-32.128-322.278h-70.445l49.87 322.278c2.222 14.354 14.933 24.972 29.895 24.972h42.066c-9.638 0-17.827-10.618-19.258-24.972z"/><path d="m382.555 162.75-32.127 322.278c-1.431 14.354-9.62 24.972-19.259 24.972h42.066c14.962 0 27.674-10.618 29.895-24.972l49.87-322.278z"/></g><g><path d="m212.514 202.05h84.972l1.347-39.3h-87.666z" fill="url(#SVGID_9_)"/><path d="m57 162.75 6.081 39.3h68.282l-3.918-39.3z" fill="url(#SVGID_9_)"/><path d="m382.555 162.75-5.975 59.941c14.107 14.603 21.645 35.425 18.244 57.403l-31.714 204.936c-2.22 14.35-14.93 24.97-29.9 24.97h40.025c14.962 0 27.674-10.618 29.895-24.972l49.87-322.278z" fill="url(#SVGID_11_)"/></g><path d="m450.478 152.044h-390.956c-6.903 0-12.5 5.597-12.5 12.5s5.597 12.5 12.5 12.5h390.957c6.903 0 12.5-5.597 12.5-12.5s-5.597-12.5-12.501-12.5z" fill="url(#SVGID_12_)"/></g></svg>
            <Logo>Filmoteka</Logo> 
          </span>
            </StyledLink>
           
        <List>
          <li><StyledLink to="/" 
          aria-label='home'
            onClick={(e) => e.target.blur()}>Home</StyledLink></li>
          <li><StyledLink to="watchlist" 
          aria-label='watchlist'
          onClick={(e) => e.target.blur()}>Watchlist</StyledLink></li>
          <li><StyledLink to="upcoming" 
          aria-label='upcoming'
          onClick={(e) => e.target.blur()}>Upcoming Films</StyledLink></li>
          <li><StyledLink to="movies" 
          aria-label='movies'
          onClick={(e) => e.target.blur()}>Films</StyledLink></li>
        </List>
      </Nav>
    )
}