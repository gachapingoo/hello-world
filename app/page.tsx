import Image from "next/image";

export default function Home() {
  return (
    <div className="p-10 bg-blue-200 text-center">
      <h1 className="text-3xl font-bold text-blue-900">Tailwind OK!</h1>
      <p>aaa</p>
      <input type="button" value="Click me" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" /> 
    </div>
    
  )
}