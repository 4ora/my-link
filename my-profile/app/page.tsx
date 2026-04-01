export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <main className="flex flex-col items-center gap-6 text-center max-w-sm">
        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            조보라
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다.
          </p>
        </div>
        
        <div className="flex flex-col gap-3 w-full">
          <a
            href="https://www.instagram.com/4ora_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all font-medium"
          >
            <span className="text-zinc-500">Instagram</span>
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">@4ora_</span>
          </a>
        </div>
      </main>
    </div>
  );
}
