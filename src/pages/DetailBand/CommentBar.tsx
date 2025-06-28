import { useState } from "react";
import type { comment } from "../../types/type";

type CommentBarProps = {
    comments: comment[];
}

const CommentBar = ({ comments }: CommentBarProps) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleClick = () => {

    }

    return (
        <div>
            <div className="w-[360px] flex flex-col justify-center items-center bg-white px-[12px] py-[20px] gap-[15px] rounded-2xl shadow-md">
                <div className="flex justify-between items-center">
                    <input
                        className="w-[281px] h-[40px] border border-[#D9D9D9] rounded-lg px-3 py-1 text-[14px] focus:outline-none focus:border-[#979797]"
                        placeholder="이 감정에 대한 생각을 나누어보세요"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div
                        className="w-10 h-10 bg-[#C77EB5] rounded-lg inline-flex justify-center items-center cursor-pointer"
                        onClick={handleClick}
                    >
                        <img src="/icons/Send.svg" />
                    </div>
                </div>

                <div className="w-[281px] mt-4">
                    {comments.map((comment) => {
                        return (
                            <div key={comment.id} className="flex justify-start items-center">

                                <div className="w-10 h-10 relative bg-[#F9906F] rounded-[20px] mr-4">
                                    <div className="left-[12.50px] top-[8px] absolute justify-start text-white text-base font-normal font-['Roboto'] leading-normal tracking-wide">{comment.creatorName[0]}</div>
                                </div>

                                <div className="flex flex-col">
                                    <div className="justify-start text-stone-900 text-sm font-medium font-['Roboto'] leading-tight tracking-tight">
                                        {comment.creatorName}
                                    </div>
                                    <div className="justify-start text-color_text_gray/60 text-sm font-medium font-['Roboto'] leading-tight tracking-tight">
                                        {comment.comment}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>


        </div>
    );
}

export default CommentBar;