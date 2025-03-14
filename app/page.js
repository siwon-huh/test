import Image from "next/image";
import QuoteCalculator from "./test";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Website Maintenance Quote Calculator</h1>
        <QuoteCalculator />
      </div>
    </main>
  );
}
