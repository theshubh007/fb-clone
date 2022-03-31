import Image from 'next/image'
import Link from 'next/link'
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div>
      <h1 className='text-6xl'>header</h1>
 {/* left */}
      <div className='flex items-center'>
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className='flex ml-2 item-center rounded-full'>
          <SearchIcon className="h-6"/>
          <input type="text" placeholder="Search facebook"/>
        </div>
      </div>
      {/* left finish */}

    </div>
  );
}
export default Header