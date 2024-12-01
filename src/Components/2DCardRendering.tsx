import { useState } from "react";
import Card from "./Card";

function CardRendering () {
    const [borderBackground , setBorderBackground] = useState<string>("#FF0D09");
    const [title , setTitle] = useState<string>("Pomyad");
    return (
        <div className="h-screen flex flex-col gap-4 items-center justify-center bg-success p-10">
            <div className="card bg-primary">
              <input type="color" value={borderBackground} onChange={(e) => setBorderBackground(e.target.value)} />
            </div>
            <div className="flex flex-col [perspective:800px]">
              <Card title={title} borderBackground={borderBackground} level={5} />
            </div>


        </div>
    )
}

export default CardRendering;