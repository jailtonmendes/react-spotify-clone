import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export function Main() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>

      <h2 className="font-semibold text-3xl mt-10">Boa Tarde</h2>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <a
          href="#"
          className="bg-white/10 group rounded flex gap-4 items-center overflow-hidden hover:bg-white/20 transition-colors"
        >
          <img src="/album.png" alt="Minha Imagem" width={104} height={104} />
          <strong>Mamonas assassinas</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/10 group rounded flex gap-4 items-center overflow-hidden hover:bg-white/20 transition-colors"
        >
          <img src="/album1.png" alt="Minha Imagem" width={104} height={104} />
          <strong>Turma do Pagode</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/10 group rounded flex gap-4 items-center overflow-hidden hover:bg-white/20 transition-colors"
        >
          <img src="/album3.png" alt="Minha Imagem" width={104} height={104} />
          <strong>MPB</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/10 group rounded flex gap-4 items-center overflow-hidden hover:bg-white/20 transition-colors"
        >
          <img src="/album4.png" alt="Minha Imagem" width={104} height={104} />
          <strong>Aviões</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/10 group rounded flex gap-4 items-center overflow-hidden hover:bg-white/20 transition-colors"
        >
          <img src="/album5.png" alt="Minha Imagem" width={104} height={104} />
          <strong>Mastruz com leite</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/10 group rounded flex gap-4 items-center overflow-hidden hover:bg-white/20 transition-colors"
        >
          <img src="/album6.png" alt="Minha Imagem" width={104} height={104} />
          <strong>Léo Santana</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
      </div>

      <h2 className="font-semibold text-3xl mt-10">
        Feito para Jailton Mendes
      </h2>

      <div className="grid grid-cols-5 gap-4 mt-4">
        <a
          href=""
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <img
            src="/album7.png"
            alt="Minha Imagem"
            className="w-full"
            width={120}
            height={120}
          />
          <strong className="font-semibold">Luiz Gonzaga</strong>
          <span className="text-sm text-zinc-500">O Rei do baião...</span>
        </a>

        <a
          href=""
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <img
            src="/album8.png"
            alt="Minha Imagem"
            className="w-full"
            width={120}
            height={120}
          />
          <strong className="font-semibold">Japinha Conde</strong>
          <span className="text-sm text-zinc-500">
            Os melhores Hits com Japinha Conde...
          </span>
        </a>

        <a
          href=""
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <img
            src="/album9.png"
            alt="Minha Imagem"
            className="w-full"
            width={120}
            height={120}
          />
          <strong className="font-semibold">Pagode do Exalta</strong>
          <span className="text-sm text-zinc-500">
            Sejam bem vindos ao pagode do exalta...
          </span>
        </a>

        <a
          href=""
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <img
            src="/album10.png"
            alt="Minha Imagem"
            className="w-full"
            width={80}
            height={80}
          />
          <strong className="font-semibold">Hits do Pagode</strong>
          <span className="text-sm text-zinc-500">
            Os mais tocados 2023
          </span>
        </a>

        <a
          href=""
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <img
            src="/album11.png"
            alt="Minha Imagem"
            className="w-full"
            width={80}
            height={80}
          />
          <strong className="font-semibold">Sorriso Maroto</strong>
          <span className="text-sm text-zinc-500">
            Wallows, COIN, girl in red and more
          </span>
        </a>
      </div>
    </main>
  );
}
