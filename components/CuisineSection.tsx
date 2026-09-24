const items = [
  ["01", "MAR", "Mariscos, pescado, callo y frescura para compartir."],
  ["02", "FUEGO", "Grill, brasas, salsas intensas y servicio nocturno."],
  ["03", "SUSHI", "Influencia japonesa en una lectura contemporanea."],
  ["04", "COCTELERIA", "Bebidas con hierbas, acidez y atmosfera de noche."]
];

export function CuisineSection() {
  return (
    <section className="section-pad bg-riviera-mint">
      <div className="container-x">
        <p className="eyebrow">Nuestra cocina</p>
        <h2 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-none text-riviera-warm sm:text-6xl">
          Del mar al fuego, con una lectura contemporanea.
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-[1.25rem] border border-riviera-wood/15 bg-riviera-wood/15 md:grid-cols-4">
          {items.map(([num, title, text]) => (
            <article key={title} className="group bg-riviera-charcoal p-7 transition duration-300 hover:bg-riviera-graphite">
              <p className="text-xs font-extrabold tracking-[0.24em] text-riviera-wood">{num}</p>
              <h3 className="mt-8 font-display text-4xl font-bold text-riviera-warm">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-riviera-warm/60">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
