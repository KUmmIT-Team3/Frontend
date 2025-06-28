
import { useNavigate } from "react-router-dom";
import type { bands } from "../../types/type";
import BandInfo from "./BandInfo"
import EmotionName from "./EmotionName";
import SongInfo from "./SongInfo"

// #91ADC6
// #97C0C0
// #F3A9B0
// #FBBD4C
// #ED6956

const EmotionBand = ({
    id,
    creatorName,
    emotion,
    description, endTime, likeCount,
    peopleCount,
    songCount,
    commentCount,
    liked }: bands) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/detail/${id}`)
    }

    const calEndTime = (dateString: string): string => {
        const date = new Date(dateString);
        const formatter = new Intl.DateTimeFormat('ko-KR', {
            timeZone: 'Asia/Seoul', // 한국 시간대
            hour: '2-digit',        // 시간을 두 자리 숫자로
            minute: '2-digit',      // 분을 두 자리 숫자로
            hour12: false           // 24시간 표기법 사용
        });
        const [hours, minutes] = formatter.format(date).split(':');

        return `${hours}시 ${minutes}분`;
    }

    return (
        <div className="flex justify-around
        w-96 h-44 mt-4 mb-4 p-4
        bg-white rounded-[20px] shadow-[2px_4px_15px_0px_rgba(0,0,0,0.10)] border border-white">

            <EmotionName emotion={emotion} />

            <div className="flex flex-col w-68">
                <div className="flex justify-between" onClick={handleClick}>
                    <div className="self-stretch justify-start text-neutral-400 text-xs font-medium font-['Roboto'] leading-none tracking-wide">by {creatorName}</div>
                    <div className="flex">
                        <img src="/icons/Time-Circle.svg" alt="시계 아이콘" />
                        <div className="justify-start text-neutral-400 text-[10px] font-normal font-['Roboto'] leading-none tracking-wide">{calEndTime(endTime)} 소멸</div>
                    </div>
                </div>

                <div className="self-stretch justify-start text-black/80 text-xs font-medium font-['Roboto'] leading-none tracking-wide">
                    {description}
                </div>

                <div className="pt-2 pd-2">
                    <SongInfo albumImg={"img"} title={"title"} singer={"singer"} />
                    <SongInfo albumImg={"img"} title={"title"} singer={"singer"} />
                </div>

                <div className="self-stretch h-0 bg-zinc-300 outline-1 outline-offset-[-0.50px] outline-zinc-300/50 mb-2"></div>

                <BandInfo manCount={peopleCount} songCount={songCount}
                    commentCount={commentCount} heartCount={likeCount} liked={liked} />

            </div>

        </div >
    )
}

export default EmotionBand