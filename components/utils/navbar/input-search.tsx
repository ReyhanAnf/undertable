'use client'

import { Input } from "@/components/ui/input";
import { Suspense, useEffect, useState } from "react";
import CardSearch from "@/components/ui/search-profilecard";
import { SkeletonCard } from "../skeletoncard";


export default function InputSearch({ iProfile }: any) {
  const [search, setSearch] = useState('');
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const finded = iProfile.filter((profile: { username: string | string[]; fullname: string; }) => profile.username.includes(search) || profile.fullname.toLowerCase().includes(search.toLowerCase()));
    setData([]);
    setData(finded);
  }, [search]);



  return (
    <div>
      <Input
        onChange={(e) => { setSearch(e.target.value) }}
        type="text"
        name="search"
        className="shadow-md w-full border-2 border-opacity-25"
        placeholder="search..."
      />
      {/* <input
        value={search}
        placeholder="gas.."
        onChange={e => setSearch(e.target.value)}
      /> */}
      <div id="value-search">
        {
          data.map((profile: any, index: any) => (
            <div key={`s-${index}`}>
              <Suspense fallback={<SkeletonCard />}>
                {profile ? (
                  <CardSearch user={profile} />
                ) : ("")}
              </Suspense>
            </div>
          ))
        }

      </div>
    </div>
  )
}