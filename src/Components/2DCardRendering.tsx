import { useState } from "react";

function CardRendering () {
    const [backgroundColor, setBackgroundColor] = useState<string>("#FF0D09");
    return (
        <div className="h-screen flex flex-col gap-4 items-center justify-center bg-success p-10">
            <div class="card w-96 shadow-xl" style={{background: backgroundColor}}>
              <figure class="px-5 pt-5">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  class="rounded-xl" />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
        </div>
    )
}

export default CardRendering;