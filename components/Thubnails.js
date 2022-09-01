import Image from "next/image";
import { FaThumbsUp } from 'react-icons/fa';
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Thubnails= forwardRef(({ result }, ref)=> {
  console.log(result);
  const BASE_URL = "http://image.tmdb.org/t/p/original/";
  return (
    <div ref={ref} className="group cursor-pointer transition duration-200 ease-in transform hover:scale-185 hover:z-50">
      <Image
        layout="responsive"
        src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`
        }
        height={1280}
        width={1920}
        alt="poster"
      />
      <div className="p-2">
        <p className="truncate">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">Name- {result.title || result.original_name}</h2>
       
        <p className="opacity-0 group-hover:opacity-100">
           type: {result.media_type && `${result.media_type}`}{" "}
           <br />
            release date: {result.release_date|| result.first_air_date}{" "}
           <p className="flex"> <FaThumbsUp className="h-5 mx-2"/>
            {result.vote_count}</p>
        </p>


      </div>
    </div>
  );
})

export default Thubnails;
