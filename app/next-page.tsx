import Image from "next/image";

export default function Home() {
  return (
    <div className="p-10 bg-blue-200 text-center">
      <h1 className="text-3xl font-bold text-blue-900">レシートモンスター!ちぢめてレシモン</h1>
    <h2 className="text-xl font-semibold text-blue-800">レシートをためて冒険へ出かけよう</h2>
    <p>あなたは伊豆にいます。
        行きたい場所を選んで、サービスを受けレシートを受け取ってください。
        伊豆にあると言われる伝説のレシートを求めてあなたは冒険に出かけます。
    </p>
   </div>
    
  )
}