import { useState } from "react";

function CardRendering () {
    const [borderBackground , setBorderBackground] = useState<string>("#FF0D09");
    const [title , setTitle] = useState<string>("Pomyad");
    return (
        <div className="h-screen flex flex-col gap-4 items-center justify-center bg-success p-10">
            <input type="color" value={borderBackground} onChange={(e) => setBorderBackground(e.target.value)} />

            <div className="card w-96 shadow-xl p-4" style={{background: borderBackground}}>
                <div className="card-body rounded-xl items-center text-black text-center bg-white p-0">
                    <figure className="">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes"
                      className="rounded-xl" />
                    </figure>
                    <h2 className="card-title text-bold">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardRendering;