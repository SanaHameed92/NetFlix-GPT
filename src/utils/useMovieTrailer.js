import { useEffect } from "react";
import { addTrailerVideo } from "./movieSlice";
import { useDispatch } from "react-redux";
import { API_options } from "./constants";

const useMovieTrailer = ({movieId}) =>{

    const dispatch = useDispatch()
    
    //fetch trailer video , api call, need a movie id
    const getMovieVideos = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',API_options)
        const json = await data.json();
        console.log(json);

        const filterData = json.results.filter(video => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0]
        console.log(trailer);
        dispatch(addTrailerVideo(trailer))
        
    };

    useEffect(()=>{
        getMovieVideos();
    },[])




}


export default useMovieTrailer