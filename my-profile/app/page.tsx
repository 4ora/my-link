export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans p-6 md:p-12 lg:p-20 text-gray-900 selection:bg-pink-400 selection:text-black">
      <main className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">
        
        {/* 네오 브루탈리즘 내비/헤더 영역 */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-4 border-black pb-4 gap-4 sm:gap-0">
          <div className="text-3xl font-black tracking-tighter uppercase">Vibe.</div>
          <div className="text-xl font-bold bg-yellow-400 border-2 border-black px-4 py-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] -rotate-2">
            Student Profile
          </div>
        </header>

        {/* Bento Grid 메인 구조 */}
        {/* 모바일 1열, 태블릿 2열, 데스크탑 3열~4열 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 auto-rows-[minmax(200px,auto)]">
          
          {/* 1. Hero / Name 박스 (크게 차지) */}
          <section className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 row-span-2 bg-pink-400 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-8 md:p-12 flex flex-col justify-center items-start transition-transform hover:-translate-y-2 hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
              조보라<br/>
              Bo-ra
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold border-2 border-black bg-white px-4 py-2 inline-block shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              Creative Thinker & Maker
            </p>
          </section>

          {/* 2. About Me 박스 */}
          <section className="col-span-1 lg:col-span-1 xl:col-span-2 row-span-1 bg-yellow-300 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-6 md:p-8 transition-transform hover:-translate-y-1 hover:shadow-[10px_10px_0_0_rgba(0,0,0,1)] flex flex-col justify-center">
            <h2 className="text-2xl font-black uppercase mb-4 underline decoration-4 underline-offset-4">About Me</h2>
            <p className="text-lg md:text-xl font-bold leading-relaxed">
              안녕하세요! AI와 대화하며 코딩하는(Vibe Coding) 의류학과 대학생 조보라입니다. 로직보다 느낌으로 코딩을 즐기며, 트렌디한 패션과 반짝이는 발상을 사랑합니다. 🚀
            </p>
          </section>

          {/* 3. Tech Stack 박스 */}
          <section className="col-span-1 md:col-span-1 row-span-1 bg-green-400 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-6 md:p-8 flex flex-col justify-between transition-transform hover:-translate-y-1 hover:shadow-[10px_10px_0_0_rgba(0,0,0,1)]">
            <h2 className="text-2xl font-black uppercase mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-3 mt-auto">
              {["ChatGPT", "Claude", "Cursor", "Next.js", "TailwindCSS"].map((tech) => (
                <span key={tech} className="bg-white border-2 border-black font-black px-3 py-1.5 shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* 4. Social Links 박스 */}
          <section className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-1 row-span-1 border-4 border-black bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-6 md:p-8 flex flex-col gap-4 justify-center">
            <h2 className="text-2xl font-black uppercase mb-2">Connect</h2>
            <a
              href="https://www.instagram.com/4ora_/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-orange-400 border-4 border-black py-4 px-6 font-black text-lg md:text-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 hover:-translate-y-1 transition-all"
            >
              Instagram @4ora_
            </a>
            <a
              href="https://www.youtube.com/@4ora_"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-red-500 text-white border-4 border-black py-4 px-6 font-black text-lg md:text-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 hover:-translate-y-1 transition-all"
            >
              YouTube
            </a>
            <a
              href="https://blog.naver.com/4vely_"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-green-500 text-white border-4 border-black py-4 px-6 font-black text-lg md:text-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 hover:-translate-y-1 transition-all"
            >
              Naver Blog
            </a>
          </section>

        </div>
        
        {/* Footer Area */}
        <footer className="mt-12 md:mt-24 border-t-4 border-black pt-8 flex flex-col sm:flex-row justify-between items-center font-bold gap-4 sm:gap-0">
          <p className="border-b-2 border-black border-dashed">Built with ❤️ and AI.</p>
          <div className="bg-black text-white px-4 py-2 shadow-[4px_4px_0_0_#f472b6]">
            2026 © Jo Bo-ra
          </div>
        </footer>

      </main>
    </div>
  );
}
