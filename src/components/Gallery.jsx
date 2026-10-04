import React, { useEffect, useState } from "react"

import p1 from "../assets/photos/p1.png"
import p2 from "../assets/photos/p2.png"
import p3 from "../assets/photos/p3.png"
import p4 from "../assets/photos/p4.png"
import p5 from "../assets/photos/p5.png"
import p6 from "../assets/photos/p6.png"
import p7 from "../assets/photos/p7.jpg"

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
    const [selectedImage, setSelectedImage] = useState(null)

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedImage(null)
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [selectedImage])

    const openPreview = (image) => {
        setSelectedImage(image)
    }

    const closePreview = () => {
        setSelectedImage(null)
    }

    return (
        <>
            <section className="w-full overflow-hidden">
                <div className="flex items-center justify-center">
                    <button
                        type="button"
                        onClick={() => openPreview(images[0])}
                        className="relative aspect-square w-1/2 shrink-0 overflow-hidden cursor-zoom-in"
                    >
                        <img
                            src={images[0].img}
                            alt=""
                            className="h-full w-full object-cover brightness-[0.90] saturate-[0.80] transition-transform duration-500 hover:scale-105"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-black/15" />
                    </button>

                    <div className="w-1/4 shrink-0">
                        <button
                            type="button"
                            onClick={() => openPreview(images[1])}
                            className="relative block aspect-square w-full overflow-hidden cursor-zoom-in"
                        >
                            <img
                                src={images[1].img}
                                alt=""
                                className="h-full w-full object-cover brightness-[0.90] saturate-[0.80] transition-transform duration-500 hover:scale-105"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-black/15" />
                        </button>

                        <button
                            type="button"
                            onClick={() => openPreview(images[2])}
                            className="relative block aspect-square w-full overflow-hidden cursor-zoom-in"
                        >
                            <img
                                src={images[2].img}
                                alt=""
                                className="h-full w-full object-cover brightness-[0.90] saturate-[0.80] transition-transform duration-500 hover:scale-105"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-black/15" />
                        </button>
                    </div>

                    <div className="w-1/8 shrink-0">
                        {images.slice(3, 7).map((image) => (
                            <button
                                key={image.id}
                                type="button"
                                onClick={() => openPreview(image)}
                                className="relative block aspect-square w-full overflow-hidden cursor-zoom-in"
                            >
                                <img
                                    src={image.img}
                                    alt=""
                                    className="h-full w-full object-cover brightness-[0.90] saturate-[0.80] transition-transform duration-500 hover:scale-105"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-black/15" />
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={closePreview}
                >
                    <button
                        type="button"
                        onClick={closePreview}
                        className="absolute right-5 top-5 z-[9999] flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20"
                        aria-label="Close image preview"
                    >
                        ×
                    </button>

                    <img
                        src={selectedImage.img}
                        alt=""
                        className="max-h-[90vh] max-w-[95vw] object-contain"
                        onClick={(event) => event.stopPropagation()}
                    />
                </div>
            )}
        </>
    )
}