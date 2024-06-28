import ReactPlayer from "react-player";



export const VideoPlayer = ({id}) => {
    console.log(`https://www.youtube.com/watch?v=${id}`)
    return (
        <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            playing="true"
            controls='true'
        />
        
    )
}