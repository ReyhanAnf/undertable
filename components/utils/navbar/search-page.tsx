import InputSearch from "./input-search";


export default function SearchPage({ users }: any) {
  return (
    <div className="w-full h-full px-8 rounded-2xl flex flex-col justify-start pt-5 bg-transparent text-white shadow-lg ">
      <InputSearch iProfile={users} />
    </div>
  );
}
