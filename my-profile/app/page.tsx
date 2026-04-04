import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0f172a] text-slate-100 font-sans flex flex-col items-center justify-center py-16 px-4 selection:bg-fuchsia-500/30">
      
      {/* Background Animated Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] max-h-[500px] max-w-[500px] bg-fuchsia-600/30 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] max-h-[500px] max-w-[500px] bg-blue-600/30 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-[40%] left-[60%] w-[40%] h-[40%] max-h-[400px] max-w-[400px] bg-cyan-500/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "4s" }}></div>

      <main className="relative z-10 w-full max-w-sm md:max-w-md flex flex-col items-center">
        
        {/* Glassmorphism Profile Card */}
        <div className="w-full bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] p-8 flex flex-col items-center gap-8 text-center transition-all duration-500 hover:shadow-[0_8px_48px_0_rgba(0,0,0,0.6)] hover:bg-white/[0.05]">
          
          {/* Profile Image with Animated Gradient Ring */}
          <div className="relative group perspective">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-fuchsia-500 to-cyan-500 blur-md opacity-70 group-hover:opacity-100 animate-spin-slow transition-opacity duration-500"></div>
            <div className="relative w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-fuchsia-500 via-blue-500 to-cyan-500">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0f172a] border-2 border-transparent">
                <Image
                  src="/profile.png"
                  alt="조보라 프로필 이미지"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Texts */}
          <div className="space-y-4 w-full">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
              조보라
            </h1>
            <p className="text-base md:text-lg text-slate-300 font-medium leading-relaxed max-w-sm mx-auto">
              안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다. 🚀
            </p>
          </div>
          
          {/* Divider */}
          <div className="w-full h-px border-none bg-gradient-to-r from-transparent via-white/20 to-transparent my-2" />

          {/* Links */}
          <div className="flex flex-col gap-4 w-full">
            <a
              href="https://www.instagram.com/4ora_/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 w-full px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_-8px_rgba(217,70,239,0.5)]"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-gradient-to-br from-fuchsia-500 to-orange-500 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </div>
                <span className="font-semibold text-base md:text-lg text-slate-200 group-hover:text-white transition-colors">Instagram</span>
              </div>
              
              <div className="opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </a>
            
            <a
              href="#"
              className="group flex items-center justify-between gap-4 w-full px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_-8px_rgba(59,130,246,0.5)]"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                </div>
                <span className="font-semibold text-base md:text-lg text-slate-200 group-hover:text-white transition-colors">GitHub</span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}
