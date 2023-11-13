import Image from 'next/image';
import appImagem from '../app/assets/app.png';
import nutricaoImagem from '../app/assets/nutricao.png';
import meditacaoImagem from '../app/assets/meditacao.png';
import treinoImagem from '../app/assets/treino.png';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col gap-10 h-full w-full p-8 font-work">
      <section className="flex sticky bg-white top-0 border-b-gray-100 border-b justify-center sm:justify-between items-center px-10 lg:px-40 md:px-20 w-full h-20">
        <div className="flex items-center gap-2">
          <Image src="./logo.svg" width={50} height={50}></Image>
          <p className="text-brand font-medium text-2xl tracking-[-0.1em]">SoulHeal</p>
        </div>
        <Link href="https://soulheal-ten.vercel.app/">
          <div className="cursor-pointer active:scale-90 transition-all hover:bg-gray-50 gap-1 text-brand border-opacity-40 border-brand border p-2 px-8 rounded-md hidden sm:flex">
            <p className="tracking-tighter text-lg">Garanta já o seu</p>
            <p className="font-materialIcons text-lg">north_east</p>
          </div>
        </Link>
      </section>
      <section className="flex flex-col gap-20">
        <div className="flex flex-col items-center gap-10 w-full px-8 lg:px-64 md:px-40">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-3xl sm:text-7xl text-center font-medium tracking-[-0.1em]">
              Desenvolva rotinas <span className="text-brand">saudáveis</span> e alcance{' '}
              <span className="text-brand">seu melhor potencial.</span>
            </h1>
            <p className="text-center w-64 sm:w-1/2 tracking-tighter text-gray-400">
              De forma intuitiva SoulHeal foi projetado para ajudá-lo a desenvolver hábitos saudáveis de forma simples e
              eficaz.
            </p>
            <Link href="https://soulheal-ten.vercel.app/">
              <div className="cursor-pointer hover:opacity-90 active:scale-90 transition-all gap-1 text-white border-opacity-40 bg-brand p-2 px-8 rounded-md hidden sm:flex">
                <p className="tracking-tighter text-lg">Quero melhorar meu potencial</p>
              </div>
            </Link>
          </div>
          <Image src={appImagem} className="sm:w-2/3"></Image>
        </div>
        <div className="flex flex-col w-full gap-10 px-6 sm:px-16">
          <div className="flex items-center gap-10 border rounded-md p-4 lg:border-none lg:rounded-none lg:p-0">
            <Image src={nutricaoImagem} className="w-96 hidden lg:flex"></Image>
            <div>
              <p className="text-brandDarker text-xl tracking-tighter font-medium">
                Nutrição sob medida para o seu sucesso 🌟
              </p>
              <p className="tracking-tighter text-lg text-brandDarker">
                Explore um mundo de opções de receitas. Adapte seu plano alimentar às suas preferências e objetivos,
                criando uma base sólida para o seu caminho em direção a uma vida mais saudável e equilibrada.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-10 border rounded-md p-4 lg:border-none lg:rounded-none lg:p-0">
            <div>
              <p className="text-brandDarker text-xl tracking-tighter font-medium">
                Exercícios que se encaixam no seu ritmo de vida 🏋️‍♂️
              </p>
              <p className="tracking-tighter text-lg text-brandDarker">
                Desenvolva uma rotina de exercícios totalmente adaptada ao seu estilo de vida. Com opções variadas e
                flexíveis, você terá a liberdade de moldar seu caminho para o bem-estar físico e a vitalidade que
                merece.
              </p>
            </div>
            <Image src={treinoImagem} className="w-96 hidden lg:flex"></Image>
          </div>
          <div className="flex items-center gap-10 border rounded-md p-4 lg:border-none lg:rounded-none lg:p-0">
            <Image src={meditacaoImagem} className="w-96 hidden lg:flex"></Image>
            <div>
              <p className="text-brandDarker text-xl tracking-tighter font-medium">
                Encontre paz interior, onde quer que esteja 👼
              </p>
              <p className="tracking-tighter text-lg text-brandDarker">
                Desperte a sua tranquilidade com meditações personalizáveis. Deixe o SoulHeal guiá-lo em uma jornada de
                introspecção e serenidade, permitindo que você encontre equilíbrio em meio às demandas da vida
                cotidiana.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-10 px-6 sm:px-16 items-center">
          <div className="flex flex-col w-full gap-2 items-center">
            <h1 className="text-3xl sm:text-7xl text-center font-medium tracking-[-0.1em]">Planos</h1>
            <p className="text-center w-64 sm:w-1/2 tracking-tighter text-gray-400">
              Descubra os planos SoulHeal e desbloqueie o potencial completo para uma vida saudável e equilibrada
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full gap-10">
            <div className="flex flex-col gap-5 flex-1 border rounded-md p-4">
              <div className="flex w-full flex-col text-center tracking-tighter">
                <p className="text-2xl font-semibold">Mensal</p>
                <p className="text-brandDarker font-bold text-2xl sm:text-4xl">
                  R$69.90<span className="text-base font-medium">/Mês</span>
                </p>
              </div>
              <div className="tracking-tighter text-gray-600 text-base md:text-xl p-4">
                <li>Acesso completo e ilimitado ao aplicativo SoulHeal.</li>
                <li>Personalização total do seu treino.</li>
                <li>Acompanhamento em tempo real do seu progresso e estatísticas.</li>
                <li>Notificações inteligentes e lembretes personalizados para manter o foco.</li>
                <li>Recursos exclusivos para aprimorar sua jornada de bem-estar.</li>
                <li>Atualizações regulares e novos recursos para enriquecer sua experiência.</li>
              </div>
            </div>
            <div className="flex flex-col gap-5 flex-1 border rounded-md p-4">
              <div className="flex w-full flex-col text-center tracking-tighter">
                <p className="text-2xl font-semibold">Anual</p>
                <p className="text-brandDarker font-bold text-2xl sm:text-4xl">R$600</p>
              </div>
              <div className="tracking-tighter text-gray-600 text-base md:text-xl p-4">
                <li>Acesso completo e ilimitado ao aplicativo SoulHeal.</li>
                <li>Personalização total do seu treino.</li>
                <li>Acompanhamento em tempo real do seu progresso e estatísticas.</li>
                <li>Notificações inteligentes e lembretes personalizados para manter o foco.</li>
                <li>Recursos exclusivos para aprimorar sua jornada de bem-estar.</li>
                <li>Atualizações regulares e novos recursos para enriquecer sua experiência.</li>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full px-6 sm:px-16 items-center text-center tracking-tighter gap-5">
          <p className="font-bold text-xl text-brandDarker">Experimente agora!</p>
          <p className="text-gray-600 w-64 sm:w-1/2">
            Inicie sua jornada de transformação com o SoulHeal hoje. Registre-se agora e dê o primeiro passo rumo a uma
            vida mais plena e feliz!
          </p>
          <Link href="https://soulheal-ten.vercel.app/">
            <div className="cursor-pointer active:scale-90 transition-all hover:bg-gray-50 gap-1 text-brand border-opacity-40 border-brand border p-2 px-8 rounded-md flex">
              <p className="tracking-tighter text-lg">Garanta já o seu</p>
              <p className="font-materialIcons text-lg">north_east</p>
            </div>
          </Link>
        </div>
      </section>
      <section className="border-t mt-10">
        <div className="flex w-full items-center justify-center gap-2 mt-10">
          <Image src="./logo.svg" width={50} height={50}></Image>
          <p className="text-brand font-medium text-2xl tracking-[-0.1em]">SoulHeal</p>
        </div>
      </section>
    </main>
  );
}
