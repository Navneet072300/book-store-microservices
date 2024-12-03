import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

function Library() {
  const onClick = () => {
    console.log("Button clicked");
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className=" inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className=" text-neutral-400" />
          <p className=" text-neutral-400 text-lg font-medium">Your Library</p>
        </div>
        <AiOutlinePlus
          size={26}
          onClick={onClick}
          className="text-neutral-400 hover:text-white transition cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Library;
