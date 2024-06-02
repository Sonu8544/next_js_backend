import ContactForm from "@/components/ContactForm";
import HomeBanner from "@/components/HomeBanner";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, consectetur!</h1>
      <ContactForm />
      <HomeBanner />
    </main>
  );
}
