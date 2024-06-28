
import { Button, Form, SearchFormButton, SearchFormInput, Wrapper } from './SearchBar.style';
import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';


export const SearchBar = ({ onSubmit}) => {
  const [searchFilm, setSearchFilm] = useState(null)
  
    const formSubmit = (e) => {
        e.preventDefault();
        if (searchFilm === null) {
            return
        }
        onSubmit(searchFilm)
          }
  return (
   <Wrapper>
          <Form onSubmit={formSubmit}>
    <SearchFormButton>
      <Button><FcSearch />
      </Button>
    </SearchFormButton>
    <SearchFormInput
      type="text"
      name="search"
    value={searchFilm ?? ''}
    onChange={(e)=>setSearchFilm(e.target.value)}
      autoComplete="off"
      autoFocus
      placeholder="Search your favorite movie"
    />
  </Form>
   </Wrapper>
  );
}