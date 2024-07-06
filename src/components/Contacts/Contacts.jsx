
import { Email, Github, LinkedIn, List, Mobile, Telegram } from "./Contacts.styled";

export const Contacts = () => {
    return (
           <List>
      <li>
        <a href="https://github.com/NickNedilko" 
        aria-label="link to Github" 
        rel="noopener noreferrer nofollow" 
        target='_blank'
                    onClick={(e) => e.target.blur()}>
        <Github/>
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/nikolay-nedilko" 
        aria-label="link to LinkedIn" 
        rel="noopener noreferrer nofollow" 
        target='_blank'
        onClick={(e) => e.target.blur()}>
                    <LinkedIn/>
                   
          </a>
      </li>
      <li>
        <a href="https://t.me/NickyNed" 
        aria-label="link to Telegram" 
        rel="noopener noreferrer nofollow" 
        target='_blank'
        onClick={(e) => e.target.blur()}>
                    <Telegram/>
                    
                    
          </a>
        </li>
      <li>
        <a href="tel:+380982074227" 
        aria-label="link to Telephone"
        onClick={(e) => e.target.blur()}>
                    <Mobile/>
                   
                    
        </a>
      </li>
      <li>
        <a href="mailto:mykola.ned34@gmail.com" 
        aria-label="link to Email"
        onClick={(e) => e.target.blur()}>
                    <Email/>      
        </a>
      </li>
    </List>
    )
}