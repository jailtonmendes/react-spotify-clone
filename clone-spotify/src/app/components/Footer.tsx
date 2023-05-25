import {
    Play,
    Shuffle,
    SkipBack,
    Repeat,
    SkipForward,
    Mic2,
    LayoutList,
    Laptop2,
    Volume,
    Maximize2,
  } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/album.png" alt="Minha Imagem" width={56} height={56} />
            <div className="flex flex-col">
              <strong className="font-normal">Rope</strong>
              <strong className="text-xs text-zinc-400">Foo Figthers</strong>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-6">
              <Shuffle size={20} className="text-zinc-200" />
              <SkipBack size={20} className="text-zinc-200" />

              <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
                <Play />
              </button>

              <SkipForward size={20} className="text-zinc-200" />
              <Repeat size={20} className="text-zinc-200" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-300">0:31</span>
              <div className="h-1 rounded-full w-96 bg-zinc-600">
                <div className="h-1 rounded-full w-40 bg-zinc-200"></div>
              </div>
              <span className="text-xs text-zinc-300">2:14</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Mic2 size={20} />
            <LayoutList size={20} />
            <Laptop2 size={20} />
            <div className="flex items-center gap-4">
              <Volume size={20} />
              <div className="h-1 rounded-full w-24 bg-zinc-600">
                <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
              </div>
            </div>
            <Maximize2 size={20} />
          </div>
        </footer>
    )
}