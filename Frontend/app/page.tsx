export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-xl p-8 shadow rounded">
        <h1 className="text-2xl font-bold">Quiz App</h1>
        <p className="mt-2">Quick full-stack quiz example</p>
        <a href="/quiz" className="mt-4 inline-block px-4 py-2 bg-sky-600 text-white rounded">Start Quiz</a>
      </div>
    </main>
  );
}
