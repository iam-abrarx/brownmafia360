import Header from "@/components/Header";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="w-[85%] mx-auto pt-32 pb-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-black mb-8">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-black/60 max-w-2xl">
          We help organizations turn strategy into action. Through consulting, technology, and advocacy, we tackle complex challenges, foster collaboration, and deliver meaningful, measurable outcomes for communities and institutions.
        </p>
      </section>
    </main>
  );
}
