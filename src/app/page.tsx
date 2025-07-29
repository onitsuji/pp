export default function Home() {
  return (
    <>
      <header>
        <nav className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl">Justin O&apos;Connell</h1>
            <p className="text-md">Fullstack Developer</p>
          </div>
          <div className="flex gap-x-2">
            <div>e</div>
            <div>l</div>
            <div>x</div>
            <div>g</div>
          </div>
        </nav>
      </header>
      <section className="mt-4">
        <p>Building fast and interactive apps for the web.</p>
      </section>
      <section className="mt-10">
        <h2>What I&apos;ve Built Recently 🛠️</h2>
        {/* Cards Container */}
        <div></div>
      </section>
    </>
  );
}
