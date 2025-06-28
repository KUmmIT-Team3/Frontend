type SongInfoProps = {
    albumImg: string;
    title: string;
    singer: string;
}

const SongInfo = ({ albumImg, title, singer }: SongInfoProps) => {

    return (
        <div className="flex flex-row 
        w-68 mb-2">
            <div className="w-7 h-7 mr-2
            relative bg-zinc-100 rounded-lg overflow-hidden object-cover">
                <img src={albumImg} alt="앨범" />
            </div>

            <div className="flex flex-col justify-around">
                <div className="justify-start text-black text-xs font-semibold font-['Roboto'] leading-none tracking-wide">
                    {title}
                </div>
                <div className="justify-start text-neutral-400 text-[10px] font-normal font-['Roboto'] leading-none tracking-wide">
                    {singer}
                </div>
            </div>
        </div>
    )
}

export default SongInfo;