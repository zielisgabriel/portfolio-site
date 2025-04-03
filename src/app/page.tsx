import { DM_Serif_Display, M_PLUS_1_Code } from "next/font/google";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { ArrowRightIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";
import Image from "next/image";

import CodeImage from "../../public/IMG_1611.jpg";
import Link from "next/link";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif-display-serif",
})

const mPlus1Code = M_PLUS_1_Code({
  subsets: ["latin"],
  variable: "--font-m-plus-1-code-sans-serif",
})

export const metadata: Metadata = {
  title: "José Gabriel | Portfólio",
  description: "Meu portfólio de Desenvolvedor Web profissional."
}

export default function Home() {
  return (
    <main>
      <section className="w-full">
        <ParticlesBackground />

        <div className="flex relative items-center min-h-[95vh] max-w-7xl m-auto py-12 px-4">
          <div>
            <h1 className={`${dmSerifDisplay.className} text-9xl flex flex-col`}>
              José
              <span className="flex items-center gap-2 after:w-0.5 after:h-24 after:bg-white after:block after:animate-vertical-bar-to-write">
                Gabriel
              </span>
            </h1>

            <h2 className={`${mPlus1Code.className} text-xl opacity-80`}>
              {"<div>"}<br />
              &ensp; {"<p>"}<br />
              &ensp; &ensp; Meu portifólio {"<span>profissional!</span>"}<br />
              &ensp; {"</p>"}<br />
              {"</div>"}<br />
            </h2>
          </div>

          <div className="absolute flex flex-col items-center bottom-0 left-[50%] translate-[-50%] animate-item-float opacity-70">
            <span>Swipe down</span>
              <ChevronDownIcon width={32} height={32} />
            </div>
        </div>
      </section>

      <section className="w-full relative before:bg-secondary before:w-full before:h-full before:block before:absolute before:inset-0 before:-z-50 before:opacity-90">
        <div className="w-7xl grid grid-cols-2 m-auto py-12 px-4 gap-2">
          <div className="flex flex-col w-full leading-6 gap-2">
            <h1 className="flex gap-1 text-4xl items-center text-span-color font-semibold">
              <ArrowRightIcon width={24} height={24} />
              Sobre mim:
            </h1>

            <p className="text-md font-normal ">
              &ensp; Olá, sou <span className="font-bold">José Gabriel Almeida Silveira</span>, tenho 20 anos e sou apaixonado por tecnologia e desenvolvimento de sistemas. Atualmente, curso <strong>Análise e Desenvolvimento de Sistemas</strong> no Centro Universitário Estácio – Campus Parangaba, onde estou construindo uma base sólida em programação, estrutura de dados, banco de dados e desenvolvimento web.
              <br />
              <br />
              &ensp; Tenho experiência no desenvolvimento de sites e aplicações web, atuando no front-end com <strong>React</strong> usando <strong>Next.js</strong> e no back-end com <strong>Node.js</strong> usando <strong>Express.js</strong>. Busco criar interfaces intuitivas e sistemas eficientes, sempre focando em proporcionar a melhor experiência para o usuário. Além disso, utilizo <strong>Docker</strong> para a conteinerização de aplicações, garantindo ambientes isolados e fáceis de gerenciar, o que facilita o desenvolvimento e a implantação dos projetos.
              <br />
              <br />
              &ensp; Atualmente, também estou aprofundando meus conhecimentos em computação em nuvem <strong>AWS</strong> por meio do <strong>AWS Academy</strong>, com o objetivo de obter a certificação <strong>AWS Certified Cloud Practitioner</strong> e, posteriormente, progredir para certificações mais avançadas. Acredito que a computação em nuvem é essencial para o desenvolvimento moderno e busco integrar essas tecnologias nas soluções que construo.
              <br />
              <br />
              &ensp; Meu objetivo é atuar como <strong>desenvolvedor full-stack</strong>, contribuindo para a criação de sistemas inovadores que agreguem valor às empresas. Estou em busca de uma oportunidades onde possa aplicar minhas habilidades, aprender com profissionais experientes e crescer junto com a equipe.
            </p>

            <div className="flex justify-center mt-4">
              <Link href="https://docs.google.com/document/d/1gC5KiaMim0AonQozjJdtDmSZ5ISincrI9pBtgYYpa2k/edit?tab=t.0" title="Currículo">
                <button className="bg-span-color rounded py-2 px-6 cursor-pointer hover:bg-span-color-hover hover:-translate-y-1">
                    Visualizar CV
                </button>
              </Link>
            </div>
          </div>

          <div className="flex justify-end">
            <Image src={CodeImage} alt="" width={500} height={600} className="rounded object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
}