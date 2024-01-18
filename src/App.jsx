function App() {
  return (
    <>
      <main className="grid">
        <section className="text-white">
          <nav>
            <ul className="flex justify-between gap-x-4">
              <li>
                <a href="#" className=" focus:border-b-4 border-b-blue-400">
                  overview
                </a>
              </li>
              <li>
                <a href="#" className=" focus:border-b-4 border-b-blue-400">
                  Structure
                </a>
              </li>
              <li>
                <a href="#" className=" focus:border-b-4 border-b-blue-400">
                  surface
                </a>
              </li>
            </ul>
          </nav>
          <hr className=" border-dotted bg-red-500" />
        </section>
      </main>
    </>
  );
}

export default App;
