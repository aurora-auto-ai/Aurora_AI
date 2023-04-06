import { SunIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main>
      <div className=" flex flex-col items-center justify-center h-screen text-white">
        <h1
          className="text-5xl font-bold
        mb-20"
        >
          ChatGPT
        </h1>
        <div className="flex flex-col md:flex-row gap-4 ">
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <SunIcon className="h-6 w-6 text-white" />
              <h2>Examples</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">Explain something to me</p>
              <p className="infoText">Some Random Example text</p>
              <p className="infoText">Some Random Example text2</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <SunIcon className="h-6 w-6 text-white" />

              <h2>Examples</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">Explain something to me</p>
              <p className="infoText">Some Random Example text</p>
              <p className="infoText">Some Random Example text2</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <SunIcon className="h-6 w-6 text-white" />

              <h2>Examples</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">Explain something to me</p>
              <p className="infoText">Some Random Example text</p>
              <p className="infoText">Some Random Example text2</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
