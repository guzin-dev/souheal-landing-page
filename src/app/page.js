import Image from 'next/image';
import appImagem from '../app/assets/app.png';

export default function Home() {
  return (
    <main className="flex flex-col gap-10 h-full w-full p-8 font-work">
      <section className="flex sticky bg-white top-0 border-b-gray-100 border-b justify-center sm:justify-between items-center px-10 lg:px-40 md:px-20 w-full h-20">
        <div className="flex items-center gap-2">
          <Image src="./logo.svg" width={50} height={50}></Image>
          <p className="text-brand font-medium text-2xl tracking-[-0.1em]">SoulHeal</p>
        </div>
        <div className="cursor-pointer active:scale-90 transition-all hover:bg-gray-50 gap-1 text-brand border-opacity-40 border-brand border p-2 px-8 rounded-md hidden sm:flex">
          <p className="tracking-tighter text-lg">Acessar produto</p>
          <p className="font-materialIcons text-lg">north_east</p>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center gap-10 w-full px-16 lg:px-64 md:px-40">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-3xl sm:text-7xl text-center font-medium tracking-[-0.1em]">
              Desenvolva rotinas <span className="text-brand">saudáveis</span> e alcance{' '}
              <span className="text-brand">seu melhor potencial.</span>
            </h1>
            <p className="text-center w-1/2 tracking-tighter text-gray-400">
              De forma intuitiva SoulHeal foi projetado para ajudá-lo a desenvolver hábitos saudáveis de forma simples e
              eficaz.
            </p>
            <div className="cursor-pointer hover:opacity-90 active:scale-90 transition-all gap-1 text-white border-opacity-40 bg-brand p-2 px-8 rounded-md hidden sm:flex">
              <p className="tracking-tighter text-lg">Quero melhorar meu potencial</p>
            </div>
          </div>
          <Image src={appImagem} className="w-2/3"></Image>
        </div>
        <div className="flex flex-col w-full px-8">
          <div>
            <p>Imagem</p>
            <p></p>
          </div>
        </div>
      </section>
    </main>
  );
}
