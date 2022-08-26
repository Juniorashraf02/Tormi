import Image from "next/image";
import HeaderItems from "./HeaderItems";

import {
    AiOutlineHome, AiOutlineUser, AiOutlineSearch
} from 'react-icons/ai'
import {
    HiTrendingUp, HiOutlineCollection
} from 'react-icons/hi'
import {
    MdVerified, 
} from 'react-icons/md'

function Header() {
  return (
    <header className="mx-4">
      <div className="flex justify-between">
        <div className="flex gap-4">
            <HeaderItems title="HOME" Icon={AiOutlineHome}/>
            <HeaderItems title="TRENDING" Icon={HiTrendingUp}/>
            <HeaderItems title="VERIFIED" Icon={MdVerified}/>
            <HeaderItems title="COLLECTION" Icon={HiOutlineCollection}/>
            <HeaderItems title="SEARCH" Icon={AiOutlineSearch}/>
            <HeaderItems title="USER" Icon={AiOutlineUser}/>
        </div>
        <div>
          <h1 className="text-4xl font-bold cursor-pointer">Tormi</h1>
        </div>
      </div>
      <Image
        src="http://links.papareact.com/ua6"
        alt="pictures"
        height={100}
        width={200}
      />
    </header>
  );
}

export default Header;
