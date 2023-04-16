import { SunIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main>
      <div className=" flex flex-col items-center justify-center md:h-screen text-white">
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
              <h2>Exemplos</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">Explique-me algo</p>
              <p className="infoText">
                Qual é a diferença entre um cão e um gato?
              </p>
            </div>
          </div>
          <div className="hidden md:inline">
            <div className="flex flex-col items-center justify-center mb-5">
              <SunIcon className="h-6 w-6 text-white" />

              <h2>Capacidades</h2>
            </div>
            <div className="space-y-2 ">
              <p className="infoText">Alterar o modelo ChatGPT a ser usado</p>
              <p className="infoText">
                As mensagens são armazenadas no firesbase
              </p>
            </div>
          </div>
          <div className="hidden md:inline">
            <div className="flex flex-col items-center justify-center mb-5">
              <SunIcon className="h-6 w-6 text-white" />

              <h2>Limitações</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">Pode gerar informações incorretas</p>
              <p className="infoText">
                Informações limitadas a eventos até 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
