import { useState } from "react";
import type { BandPlayListProps } from "../../types/type";

type Props = {
    song: BandPlayListProps;
};

const BandPlayListItem = ({ song: { id, title, artist, creatorName, albumImageLink, previewLink } }: Props) => {
    const [preview, setPreview] = useState(false);
    const handleClick = () => {
        setPreview(!preview);
    }
    return (
        <div className="flex self-stretch h-14 px-2.5 py-2 bg-white rounded-lg shadow-[2px_4px_15px_0px_rgba(0,0,0,0.10)] justify-start items-center gap-4">
            <div>
                {id}
            </div>
            <div className="flex flex-row 
        w-68 mb-2">
                <div className="w-7 h-7 mr-2
            relative bg-zinc-100 rounded-lg overflow-hidden object-cover">
                    <img src={albumImageLink} alt="앨범" />
                </div>

                <div className="flex flex-col justify-around">
                    <div className="justify-start text-black text-xs font-semibold font-['Roboto'] leading-none tracking-wide">
                        {title}
                    </div>
                    <div className="justify-start text-neutral-400 text-[10px] font-normal font-['Roboto'] leading-none tracking-wide">
                        {artist}
                    </div>
                    <div className="justify-start text-neutral-400 text-[10px] font-normal font-['Roboto'] leading-none tracking-wide">
                        {creatorName}
                    </div>
                </div>
            </div>
            <img src="/icons/play_arrow.svg" alt="재생버튼" onClick={handleClick} />
            {/* 음악 재생은 태희에게 */}
            {preview && (
                <audio controls src={previewLink} autoPlay className="mt-4" />
            )}
        </div>
    )
}

export default BandPlayListItem;