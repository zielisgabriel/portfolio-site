import { DM_Serif_Display, M_PLUS_1_Code } from "next/font/google";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif-display-serif",
})

const mPlus1Code = M_PLUS_1_Code({
  subsets: ["latin"],
  variable: "--font-m-plus-1-code-sans-serif",
})

export default function Home() {
  return (
    <main>
      <section className="h-screen w-full">
        <ParticlesBackground />

        <div className="grid grid-cols-2 items-center justify-center h-full max-w-7xl m-auto">
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
        </div>

        <div className="absolute flex flex-col items-center bottom-4 left-[50%] translate-[-50%] animate-item-float opacity-70">
          <span>Swipe down</span>
          <ChevronDownIcon width={32} height={32} />
        </div>
      </section>

      <section className="bg-secondary py-8">
        <div className="w-7xl m-auto">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dignissimos atque, obcaecati debitis adipisci tenetur eos reprehenderit earum molestiae, dolores neque temporibus. Dolores temporibus veritatis commodi numquam laudantium. Illum, ex.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dignissimos atque, obcaecati debitis adipisci tenetur eos reprehenderit earum molestiae, dolores neque temporibus. Dolores temporibus veritatis commodi numquam laudantium. Illum, ex.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dignissimos atque, obcaecati debitis adipisci tenetur eos reprehenderit earum molestiae, dolores neque temporibus. Dolores temporibus veritatis commodi numquam laudantium. Illum, ex.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dignissimos atque, obcaecati debitis adipisci tenetur eos reprehenderit earum molestiae, dolores neque temporibus. Dolores temporibus veritatis commodi numquam laudantium. Illum, ex.</p>
        </div>
      </section>
    </main>
  );
}