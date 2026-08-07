import { MessageCircle, ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const DEFAULT_COMMENTS = [
    {
        id: 1,
        name: "Deborah Smith",
        comment:
            "Very professional service. The team was patient, explained everything clearly, and handled the treatment properly.",
        time: "2 hours ago",
        likes: 4,
    },
    {
        id: 2,
        name: "James Vance",
        comment:
            "Booking was easy and the service was fast. Very satisfied with the overall experience.",
        time: "5 hours ago",
        likes: 1,
    },
    {
        id: 3,
        name: "Evelyn Carter",
        comment:
            "Friendly staff and effective pest treatment. Highly recommended.",
        time: "1 day ago",
        likes: 12,
    },
];

export default function FacebookSection() {
    const [comments, setComments] = useState(DEFAULT_COMMENTS);

    useEffect(() => {
        async function fetchFacebookComments() {
            if (!API_URL) return;

            try {
                const response = await fetch(`${API_URL}/facebook/comments`);

                if (!response.ok) {
                    throw new Error("Failed to load Facebook comments.");
                }

                const data = await response.json();

                if (data.comments?.length) {
                    setComments(data.comments);
                }
            } catch (error) {
                console.error(error);

                setComments(DEFAULT_COMMENTS);
            }
        }

        fetchFacebookComments();
    }, []);

    return (
        <section className="bg-green-50/40 px-6 py-20 lg:px-10">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-green-600">
                        Social Proof
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
                        Join the Conversation
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 secondary-font lg:text-base">
                        See what people are saying about our pest control services.
                    </p>
                </div>

                {/* Facebook Comments */}
                <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-xl border border-slate-200 bg-white">

                    {/* Facebook Header */}
                    <div className="flex items-center justify-between bg-[#1877F2] px-5 py-3 text-white">
                        <div className="flex items-center gap-2">
                            <div className="flex size-6 items-center justify-center rounded-full bg-white font-bold text-[#1877F2]">
                                f
                            </div>

                            <span className="text-sm font-semibold">
                                Facebook Comments
                            </span>
                        </div>

                        <span className="text-xs text-blue-100">
                            {comments.length} comments
                        </span>
                    </div>

                    {/* Comments */}
                    <div className="space-y-4 p-5">
                        {comments.map((comment) => (
                            <div key={comment.id} className="flex items-start gap-3">

                                {/* Avatar */}
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
                                    {comment.name.charAt(0)}
                                </div>

                                <div className="min-w-0 flex-1">

                                    {/* Comment Bubble */}
                                    <div className="rounded-xl bg-slate-100 px-4 py-3">
                                        <p className="text-sm font-semibold text-slate-900">
                                            {comment.name}
                                        </p>

                                        <p className="mt-1 text-sm leading-6 text-slate-600 secondary-font">
                                            {comment.comment}
                                        </p>
                                    </div>

                                    {/* Meta */}
                                    <div className="mt-2 flex items-center gap-3 px-2 text-xs text-slate-500 secondary-font">
                                        <button className="font-medium text-[#1877F2] hover:underline">
                                            Like
                                        </button>

                                        <span>{comment.time}</span>

                                        {comment.likes > 0 && (
                                            <span className="flex items-center gap-1">
                                                <ThumbsUp className="size-3 fill-[#1877F2] text-[#1877F2]" />
                                                {comment.likes}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-center gap-2 border-t border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-500">
                        <MessageCircle className="size-4" />

                        <span className="secondary-font">
                            Follow the conversation on Facebook
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}