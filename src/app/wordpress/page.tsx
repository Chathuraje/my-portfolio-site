import WordpressSection from "@/components/sections/wordpress";
import Header from "@/components/shared/header";
import { Footer } from "react-day-picker";

export default function Wordpress() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <WordpressSection />
            </main>
            <Footer />
        </div>
    );
}
