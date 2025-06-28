type BandInfoProps = {
    manCount: number;
    songCount: number;
    commentCount: number;
    heartCount: number;
    liked: boolean;
    setIsLiked: React.Dispatch<React.SetStateAction<boolean>>;
    handleClick: () => void;
}
const BandInfo = ({ manCount, songCount, commentCount, heartCount, liked, setIsLiked, handleClick }: BandInfoProps) => {

    return (
        <div className="flex justify-between items-center">
            <div className="flex justify-between items-cente
                w-43">
                <div className="flex">
                    <div className="w-3.5 h-3.5 mr-1.5">
                        <img src="/icons/people.svg" alt="참여인원" />
                    </div>
                    <div className="justify-start text-neutral-400 text-xs font-semibold font-['Roboto'] leading-none tracking-wide">{manCount}명</div>
                </div>
                <div className="flex">
                    <div className="w-3.5 h-3.5 mr-1.5">
                        <img src="/icons/song-folder.svg" alt="노래개수" />
                    </div>
                    <div className="justify-start text-neutral-400 text-xs font-semibold font-['Roboto'] leading-none tracking-wide">{songCount}곡</div>
                </div>
                <div className="flex">
                    <div className="w-3.5 h-3.5 mr-1.5">
                        <img src="/icons/comment_icon.svg" alt="코멘트개수" />
                    </div>
                    <div className="justify-start text-neutral-400 text-xs font-semibold font-['Roboto'] leading-none tracking-wide">{commentCount}</div>
                </div>
            </div>
            <div className="flex">
                <div className="w-3.5 h-3.5 mr-1.5" onClick={() => {
                    handleClick()
                    setIsLiked(liked)
                }
                }>
                    {liked ?
                        <img src="/icons/Heart.svg" alt="공감됨" />
                        :
                        <img src="/icons/Heart-off.svg" alt="공감안됨" />
                    }
                </div>
                <div className="justify-start text-neutral-400 text-xs font-semibold font-['Roboto'] leading-none tracking-wide">{heartCount}</div>
            </div>
        </div>

    )
}

export default BandInfo;