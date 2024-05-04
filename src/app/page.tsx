/* eslint-disable @next/next/no-img-element */

import OptionCard from "~/components/OptionCard";
import Footer from "~/components/footer";
import { getServerAuthSession } from "~/server/auth";

export default async function HomePage() {
  const data = await getServerAuthSession();
  return (
    <main className="flex flex-col gap-12  justify-center items-center">
      <section className="flex flex-col p-6 gap-6 md:p-12 md:gap-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <OptionCard title="Crafting"
            description="Submit your order and get your gears crafted."
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
            buttonLabel="Gacha!" />
          {data?.user.role === "admin" && (
            <OptionCard title="Blacksmithing"
              description="Craft orders from players!"
              imageSrc="/blacksmithing.jpeg"
              linkRef="/blacksmithing"
              buttonLabel="See Orders" />
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
