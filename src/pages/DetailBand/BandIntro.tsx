import EmotionName from "../Home/EmotionName";

// creatorName, emotion, description, liked, likeCount, peopleCount, songCount, commentCount

type BandIntroProps = {
    creatorName: string;
    emotion: string;
    description: string;
    liked: boolean;
    likeCount: number;
    peopleCount: number;
    songCount: number;
    commentCount: number;
}

const BandIntro = ({ creatorName, emotion, description, liked, likeCount, peopleCount, songCount, commentCount }: BandIntroProps) => {
    return (
        <div className="w-96 h-44 p-4 m-6
         bg-gradient-to-r from-cyan-700/90 to-pink-400 rounded-[10px] justify-center items-center">
            <div>
                <div className="flex justify-between">
                    <EmotionName emotion={emotion} />
                    <div className="flex">
                        <div className="w-3.5 h-3.5 mr-1.5">
                            {liked ?
                                <img src="/icons/Heart-off-white.svg" alt="공감됨" />
                                :
                                <img src="/icons/Heart-off-white.svg" alt="공감안됨" />
                            }
                        </div>
                        <div className="justify-start text-white text-xs font-medium font-['Roboto'] leading-none tracking-wide">{likeCount}</div>
                    </div>
                </div>

                <div>


                    <div className="mt-3 self-stretch justify-start text-white/60 text-xs font-medium font-['Roboto'] leading-none tracking-wide">
                        by {creatorName}
                    </div>


                    <div className="mt-1.5 self-stretch justify-start text-white text-xs font-medium font-['Roboto'] leading-none tracking-wide">
                        {description}
                    </div>


                    <div className="flex justify-between items-center mt-3 mb-3
                w-43">
                        <div className="flex">
                            <div className="w-3.5 h-3.5 mr-1.5">
                                <img src="/icons/people-white.svg" alt="참여인원" />
                            </div>
                            <div className="justify-start text-white/80 text-xs font-semibold font-['Roboto'] leading-none tracking-wide">{peopleCount}명</div>
                        </div>
                        <div className="flex">
                            <div className="w-3.5 h-3.5 mr-1.5">
                                <img src="/icons/song-folder-white.svg" alt="노래개수" />
                            </div>
                            <div className="justify-start text-white/80 text-xs font-semibold font-['Roboto'] leading-none tracking-wide">{songCount}곡</div>
                        </div>
                        <div className="flex">
                            <div className="w-3.5 h-3.5 mr-1.5">
                                <img src="/icons/comment_icon_white.svg" alt="코멘트개수" />
                            </div>
                            <div className="justify-start text-white/80 text-xs font-semibold font-['Roboto'] leading-none tracking-wide">{commentCount}</div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default BandIntro;