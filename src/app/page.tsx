import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-4xl font-bold">Hello, Next.js!</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}
