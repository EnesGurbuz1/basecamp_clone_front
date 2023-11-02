// pages/index.tsx

import { NextPage } from 'next';
import Link from 'next/link';

const Header: NextPage = () => {
  return (
    <div className="">
      <div className="bg-transparent p-4 ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-semibold">
            <Link href="/">Basecamp</Link>
          </div>
          <div className="flex space-x-6">
            <Link href="/home">Home</Link>
            <Link href="/lineup">Lineup</Link>
            <Link href="/pings">Pings</Link>
            <Link href="/hey">Hey!</Link>
            <Link href="/activity">Activity</Link>
            <Link href="/mystuff">My Stuff</Link>
            <Link href="/find">Find</Link>
            <div className="rounded-full bg-orange-500 h-8 w-8 flex items-center justify-center text-white">
              M
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10">
        {/* Page content goes here */}
      </div>
    </div>
  );
};

export default Header;