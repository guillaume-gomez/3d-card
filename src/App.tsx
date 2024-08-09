import ThreeJsRendering from "./Components/ThreeJsRendering";
import ThreeJsRendering2 from "./Components/ThreeJsRendering2";

function App() {
  return (
    <div className="container m-auto">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl font-bold underline">
          Portal Experiment
        </h1>
        <ThreeJsRendering2 />
      </div>
    </div>
  );
}
export default App;
