import type { BandPlayListProps } from "../../types/type";
import BandPlayListItem from "./BandPlayListItem";

type PlayListProps = {
    songs: BandPlayListProps[];
}

const BandPlayList = ({ songs }: PlayListProps) => {
    return (
        <div className="h-48 px-2.5 py-2.5 p-2.5 ml-6 mr-6 mb-6
        bg-white rounded-[20px] shadow-[2px_4px_15px_0px_rgba(0,0,0,0.10)] 
        outline-1 outline-offset-[-1px] outline-white inline-flex flex-col justify-start items-start gap-2">
            <div className="flex justify-start items-center">
                <div className="mr-2.5">
                    <img src="/icons/Music-blue.svg" alt="음표" />
                </div>
                <div className="justify-start text-black text-base font-medium font-['Roboto'] leading-normal tracking-tight">플레이리스트</div>
            </div>

            {songs !== undefined && songs.map((song, index) => {
                return <BandPlayListItem song={song} key={song.id} index={index} />
            })}

        </div>
    )
}

export default BandPlayList;