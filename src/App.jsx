import ImageSVG from "./assets/images/illustration-article.svg"
import Avatar from "./assets/images/image-avatar.webp"
import "./index.css"

function App() {

  return (
    <main className="h-screen bg-Yellow font-Figtree flex items-center justify-center">
      <div className="bg-White max-w-80 p-5 rounded-2xl border-solid border border-Gray_950 flex flex-col Card">
        <div className="flex items-center justify-center">
          <img src={ImageSVG} alt="" className="rounded-lg mb-5" />
        </div>
        <div className="flex flex-col gap-4">
          <a href="#" className="bg-Yellow w-fit p-1 rounded-[10%] font-bold px-3 text-sm">Learning</a>
          <p className="text-sm text-Gray_950 font-medium">Published 21 Dec 2023</p>
          <h1 className="font-black text-xl text-Gray_950 cursor-pointer hover:text-Yellow ease-in-out transition-all duration-300">HTML & CSS foundations</h1>
          <p className="text-Gray_500 text-sm">These languages are the backbone of every website, defining structure, content, and presentation.</p>
          <div className="flex items-center gap-4 mt-1"> 
            <img src={Avatar} alt="Avatar" className="w-8"/>
            <p className="font-black text-Gray_950">Greeg Hooper</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
