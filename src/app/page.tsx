
import OptionCard from "~/components/OptionCard";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-12  justify-center items-center">
      <section className="flex flex-col p-6 gap-6 md:p-12 md:gap-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <OptionCard title="Crafting"
            description="Craft powerful items to aid you in your journey."
            imageSrc="/craft.jpeg"
            linkRef="/crafting"
            buttonLabel="Start Crafting" />
          <OptionCard title="Inventory"
            description="Manage your items, equipment, and resources."
            imageSrc="/inventory.jpeg"
            linkRef="/inventory"
            buttonLabel="Open Inventory" />
          <OptionCard title="Gacha Cards"
            description="Collect and trade gacha cards for unique rewards."
            imageSrc="/gacha.jpeg"
            linkRef="/gacha"
            buttonLabel="View Gacha Cards" />
        </div>
      </section>
      <footer className="bg-card bg-cover bg-center text-white w-full">
        <div className="mx-auto w-full max-w-2xl px-5 py-10 md:px-10 md:py-12 lg:py-14">
          <div className="flex flex-col items-center justify-center">
            <a href="#" className="mb-4 max-w-full flex flex-col items-center">
              <img src="/logo.png" alt="Logo" className="inline-block max-w-60 max-h-60" />
              <h1 className="font-bold text-2xl">Ragnarok Forge</h1>
            </a>
            <div className="text-center font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:py-1">
              <a href="#" className="inline-block px-6 py-2 font-normal transition hover:text-[#d6a701]">About</a>
              <a href="#" className="inline-block px-6 py-2 font-normal transition hover:text-[#d6a701]">Features</a>
              <a href="#" className="inline-block px-6 py-2 font-normal transition hover:text-[#d6a701]">Works</a>
              <a href="#" className="inline-block px-6 py-2 font-normal transition hover:text-[#d6a701]">Support</a>
              <a href="#" className="inline-block px-6 py-2 font-normal transition hover:text-[#d6a701]">Help</a>
            </div>
            <div className="mb-8 mt-8 w-48 border-b border-solid border-b-white"></div>
            <div className="mb-12 grid w-full max-w-[208px] grid-flow-col grid-cols-4 gap-3">
              <a href="#" className="ifont-bold mx-auto flex max-w-[24px] flex-col">
                <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bc5e36f4a882999413_Frame%205479.svg" alt="" className="inline-block" />
              </a>
              <a href="#" className="mx-auto flex max-w-[24px] flex-col font-bold">
                <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bf093252f2b2114050_Frame%205480.svg" alt="" className="inline-block" />
              </a>
              <a href="#" className="ifont-bold mx-auto flex max-w-[24px] flex-col">
                <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bde1a389ee15d86fc6_Frame%205481-1.svg" alt="" className="inline-block" />
              </a>
              <a href="#" className="mx-auto flex max-w-[24px] flex-col font-bold">
                <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bf10337117b26b8e51_Frame%205481.svg" alt="" className="inline-block" />
              </a>
            </div>
            <p className="max-[479px]:text-sm">© Ragnarok Forge Copyright 2024. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
