import requests from "../utils/requests";
import {useRouter} from 'next/router';

function Navbar() {
    const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex gap-8 px-5 sm:px-12 text-2xl whitespace-nowrap overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() =>router.push(`/?genre=${key}`)}
            className="last:pr-5 cursor-pointer transition duration-200 transform hover:scale-125 active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] w-1/12 h-10"/>
    </nav>
  );
}

export default Navbar;
