import resume from './assets/hossein-ghiasi-resume.pdf'

function App() {
  return (
    <div className="w-full h-[100vh] text-white text-center bg-gradient-to-r from-purple-400 to-blue-600">
      <h1 className="text-4xl pt-5 ">خوش آمدید</h1>
      <a href={resume} download className='bg-yellow-500 text-center inline-block mt-10 w-[360px] px-5 py-2 rounded-sm  text-[19px] animate-bounce '>برای دریافت رزومه حسین غیاثی کلیک کنید</a>
    </div>
  );
}

export default App;
