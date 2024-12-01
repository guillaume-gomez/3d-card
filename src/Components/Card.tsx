import { useRef } from "react";

interface cardInterface {
    title: string;
    borderBackground: string;
    level: number;
}

function Card({title, borderBackground , level} : cardInterface ) {
    const boundingRef = useRef<DOMRect|null>(null);
    return (
        <div
            onMouseEnter={(event) => {
                boundingRef.current = event.currentTarget.getBoundingClientRect();
            }}
            onMouseLeave={() => {
                boundingRef.current = null;
            }}
            onMouseMove={(event) => {
                if(!boundingRef.current) {
                    return;
                }
                const x = event.clientX - boundingRef.current.left;
                const y = event.clientY - boundingRef.current.top;

                const xPercentage = x / boundingRef.current.width;
                const yPercentage = y / boundingRef.current.height;

                //xPercentage and yPercentage has in interval between [0, 1];
                const centerRotation = 0.5;
                const angle = 20;
                const xRotation = (xPercentage - centerRotation) * angle;
                const yRotation = (centerRotation - yPercentage) * angle;

                event.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
                event.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
                event.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
                event.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
            }}
            className="group relative card w-96 shadow-xl p-4 image-full
                        hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)]
                        transition-transform ease-out
                    "
            style={{ background: borderBackground, height: 500 }}
        >
            <div className="card-body rounded-xl items-center text-black text-center bg-white p-0">
                <figure className="h-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  className="rounded-xl h-full" />
                </figure>
                <div className="absolute inset-0 text-black">
                    <div className="bg-secondary p-4 rounded-xl" style={{width: 50}}>
                        <span className="font-bold">{level}</span>
                    </div>
                </div>
                <div className="absolute text-black text-center" style={{bottom: 5}}>
                    <h2 className="font-extrabold text-bold bg-secondary p-4 text-2xl">{title}</h2>
                    <p className="bg-accent">If a dog chews shoes whose shoes does he choose?</p>
                    <span className="rounded-xl p-2 text-xs bg-primary" style={{width: 50}}>
                        5/20
                    </span>
                </div>
                <div className="pointer-events-none absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.3)_20%,transparent_80%)]"
                >
                </div>
            </div>
        </div>
    );
}

export default Card;