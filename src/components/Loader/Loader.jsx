import { ThreeDots } from "react-loader-spinner"
import { Wrapper } from "./Loader.styled"

export const Loader = () => {
    return (
        <Wrapper>
                <ThreeDots
            visible={true}
  height="40"
  width="40"
  color="#4d5ea9"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        </Wrapper>)
} 