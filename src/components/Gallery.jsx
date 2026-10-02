import React from "react"

import p1 from "../assets/photos/p1.png"
import p2 from "../assets/photos/p2.png"
import p3 from "../assets/photos/p3.png"
import p4 from "../assets/photos/p4.png"
import p5 from "../assets/photos/p5.png"
import p6 from "../assets/photos/p6.png"
import p7 from "../assets/photos/p7.png"

const images = [
    { id: 1, img: p1 },
    { id: 2, img: p2 },
    { id: 3, img: p3 },
    { id: 4, img: p4 },
    { id: 5, img: p5 },
    { id: 6, img: p6 },
    { id: 7, img: p7 },
]

export const Gallery = () => {
    return (
        <section className="w-full overflow-hidden">
            <div className="flex w-full items-center justify-center">
                <div className="relative aspect-square w-1/2 shrink-0 overflow-hidden">
                    <img
                        src={images[2].img}
                        alt=""
                        className="h-full w-full object-cover brightness-[0.90] saturate-[0.80]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-black/15" />
                </div>

                <div className="w-1/4 shrink-0">
                    <div className="relative aspect-square w-full overflow-hidden">
                        <img
                            src={images[1].img}
                            alt=""
                            className="h-full w-full object-cover brightness-[0.90] saturate-[0.80]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-black/15" />
                    </div>

                    <div className="relative aspect-square w-full overflow-hidden">
                        <img
                            src={images[0].img}
                            alt=""
                            className="h-full w-full object-cover brightness-[0.90] saturate-[0.80]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-black/15" />
                    </div>
                </div>

                <div className="w-1/8 shrink-0">
                    {images.slice(3, 7).map((image) => (
                        <div
                            key={image.id}
                            className="relative aspect-square w-full overflow-hidden"
                        >
                            <img
                                src={image.img}
                                alt=""
                                className="h-full w-full object-cover brightness-[0.90] saturate-[0.80]"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-black/15" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}