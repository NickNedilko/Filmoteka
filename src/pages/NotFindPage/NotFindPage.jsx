
import image from '../../assets/404_page_cover.jpg'
import { Image, Wrapper } from './NotFindPage.syled'

export const NotFindPage = () => {
    

    return (
        <Wrapper>
        <Image src={image} alt="page 404" />
        </Wrapper>
    )
}