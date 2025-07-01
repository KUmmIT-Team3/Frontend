import { useState } from "react";
import { postComment } from "../../apis/detailpage";

import type { Comment } from "../../types/type";

type CommentBarProps = {
    comments: Comment[];
    bandId: number;
    memberId: number;
    onCommentPosted: () => void;
};

// 내부 로직은 변경 없음
const CommentBar = ({ comments, bandId, memberId, onCommentPosted }: CommentBarProps) => {
    const [commentTerm, setCommentTerm] = useState("");

    const handleClick = async () => {
        if (!commentTerm.trim()) {
            alert("댓글 내용을 입력해주세요.");
            return;
        }
        try {
            await postComment(bandId, memberId, commentTerm);
            setCommentTerm("");
            onCommentPosted();
        } catch (error) {
            console.error(error);
            alert("댓글 등록에 실패했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <div>
            <div className="w-[360px] flex flex-col justify-center items-center mb-6 bg-white px-[12px] py-[20px] gap-[15px] rounded-2xl shadow-md">
                <div className="flex justify-between items-center">
                    <input
                        className="w-[281px] h-[40px] border border-[#D9D9D9] rounded-lg px-3 py-1 text-[14px] focus:outline-none focus:border-[#979797]"
                        placeholder="이 감정에 대한 생각을 나누어보세요"
                        value={commentTerm}
                        onChange={(e) => setCommentTerm(e.target.value)}
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
                            <div key={comment.id} className="flex justify-start items-center mb-2">
                                <div className="w-10 h-10 relative left-[-6px] bg-[#F9906F] rounded-[20px] mr-4">
                                    <div className="left-[12.50px] top-[8px] absolute justify-start text-white text-base font-normal font-['Roboto'] leading-normal tracking-wide">
                                        {comment.creatorName[0]}
                                    </div>
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
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CommentBar;
