import { useNavigate } from "react-router-dom";
import type { bands } from "../../types/type";
import BandInfo from "./BandInfo";
import EmotionName from "./EmotionName";
import SongInfo from "./SongInfo";
import { toggleLike } from "../../apis/detailpage";
import { useState } from "react";

// #91ADC6
// #97C0C0
// #F3A9B0
// #FBBD4C
// #ED6956

const EmotionBand = ({
    id,
    creatorName,
    emotion,
    description,
    endTime,
    likeCount,
    peopleCount,
    commentCount,
    songs,
    liked,
}: bands) => {
    const navigate = useNavigate();
    const [isLiked, setIsLiked] = useState(liked);
    const handleClick = () => {
        navigate(`/detail/${id}`);
    };
    const memberId = parseInt(localStorage.getItem("memberId") || "0", 10);

    const calEndTime = (dateString: string): string => {
        const date = new Date(dateString);
        const formatter = new Intl.DateTimeFormat("ko-KR", {
            timeZone: "Asia/Seoul", // 한국 시간대
            hour: "2-digit", // 시간을 두 자리 숫자로
            minute: "2-digit", // 분을 두 자리 숫자로
            hour12: false, // 24시간 표기법 사용
        });
        const [hours, minutes] = formatter.format(date).split(":");

        return `${hours}시 ${minutes}분`;
    };

    const handleLike = async (bandId: number, memberId: number) => {
        try {
            console.log("handleLike 호출, bandId =", bandId, "memberId = ", memberId)
            await toggleLike(bandId, memberId);
            setIsLiked(!liked);
        } catch (error) {
            console.error(error);
            alert("공감 시도에 실패. 다시 시도해주세요.");
        }
    };

    return (
        <div
            className="flex flex-col 
        w-[365px] min-h-[150px] my-4 px-4 py-2
        bg-white rounded-[20px] shadow-[2px_4px_15px_0px_rgba(0,0,0,0.10)] border border-white"
        >
            <div className="flex justify-end items-center">
                <img
                    className="mb-[2px] mr-[3px]"
                    src="/icons/Time-Circle.svg"
                    alt="시계 아이콘"
                />
                <div className="justify-start text-neutral-400 text-[10px] font-normal font-['Roboto'] leading-none tracking-wide">
                    {calEndTime(endTime)} 소멸
                </div>
            </div>
            <div className="flex ">
                <EmotionName emotion={emotion} />

                <div className="flex flex-col ml-[10px] w-68">
                    <div className="flex justify-between" onClick={handleClick}>
                        <div className="self-stretch justify-start mb-[4px] text-neutral-400 text-xs font-medium leading-none tracking-[0.1em]">
                            by {creatorName}
                        </div>
                    </div>

                    <div
                        className="self-stretch justify-start text-black/80 text-xs leading-none tracking-wide"
                        onClick={handleClick}
                    >
                        {description}
                    </div>

                    <div className="pt-2 pd-2" onClick={handleClick}>
                        {songs !== undefined &&
                            songs.map((song) => {
                                return (
                                    <SongInfo
                                        albumImg={song.albumImageLink}
                                        title={song.title}
                                        singer={song.artist}
                                    />
                                );
                            })}
                    </div>
                    <div className="self-stretch h-0 bg-zinc-300 outline-1 outline-offset-[-0.50px] outline-zinc-300/50 mb-2"></div>

                    <BandInfo
                        manCount={peopleCount}
                        // songCount={songCount}
                        songCount={songs.length}
                        commentCount={commentCount}
                        heartCount={likeCount}
                        liked={isLiked}
                        handleClick={() => {
                            if (id !== undefined && memberId !== null)
                                handleLike(id, memberId);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default EmotionBand;
