import { useState } from "react";
import Card from "./Card";

interface CardData {
  title: string;
  color: string;
  content: string;
  borderBackground: string;
  level: number;
  totalSeries: number;
  seriesPosition: number;
}

let cardData : [] = [];

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function randomTitle() {
  const index = Math.floor(Math.random() * 6);
  const titles = ["Absent Moon", "The Silent Teacher","Lights of Trainer", "The Names's Dreaming", "The Servant of the Sons", "Sorcerer in the Sky"]
  return titles[index];
}

for(let i=0; i < 6; i++) {
  cardData.push({
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus lacinia purus, et euismod lacus sodales at. Suspendisse elementum laoreet mauris, et cursus mauris feugiat maximus",
    title: randomTitle(),
    color: getRandomColor(),
    borderBackground: getRandomColor(),
    level: 2,
    totalSeries: 6,
    seriesPosition: i
  });
}

function CardRendering () {
    const [borderBackground , setBorderBackground] = useState<string>("#C542D7");
    const [color , setColor] = useState<string>("#35A738");
    const [title , setTitle] = useState<string>("Pomyad");
    const [content , setContent] = useState<string>("Ceci est un contenu pour montrer que ca marche mdr");
    return (
        <div className="h-screen flex flex-col gap-9 items-center justify-center p-10">
            <div className="card bg-base-300 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Settings</h2>
                <label className="flex items-center gap-1">
                  border color
                  <input
                    type="color"
                    value={borderBackground}
                    onChange={(e) => setBorderBackground(e.target.value)}
                  />
                </label>
                <label className="flex items-center gap-1">
                  Color
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </label>
                <label className="flex items-center gap-1">
                  title
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>
                <label className="flex items-center gap-1">
                  content
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </label>
              </div>
            </div>


            <div className="flex flex-row gap-6 [perspective:800px]">
              <Card
                title={title}
                color={color}
                content={content}
                borderBackground={borderBackground}
                level={5}
                totalSeries={20}
                seriesPosition={7}
                />
            </div>

            <div className="flex flex-row gap-6 [perspective:800px]">
              {cardData.map(({title, color, content, borderBackground, level, totalSeries, seriesPosition}) => {
                return (
                  <Card
                  key={title}
                  title={title}
                  color={color}
                  content={content}
                  borderBackground={borderBackground}
                  level={level}
                  totalSeries={totalSeries}
                  seriesPosition={seriesPosition}
                  />
                );
                })}
              </div>


        </div>
    )
}

export default CardRendering;