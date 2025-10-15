export default function App() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <section className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1 text-sm text-gray-600 shadow-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
          HomeEase is ready
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          MERN starter with React, Vite, and Tailwind
        </h1>
        <p className="max-w-prose text-balance text-lg text-gray-600">
          Edit <code className="font-mono">src/App.jsx</code> and save to see hot reload.
        </p>
        <div className="mt-4 flex gap-3">
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-black px-4 py-2 font-medium text-white shadow hover:bg-gray-800"
          >
            React Docs
          </a>
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-white px-4 py-2 font-medium text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50"
          >
            Tailwind Docs
          </a>
        </div>
      </section>
    </main>
  );
}
