import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

function Layout({ children, showHero = false }: props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}
      <div className="container mx-auto py-10 flex-1">{children}</div>
      <Footer />
    </div>
  );
}

type props = {
  children: React.ReactNode;
  showHero?: boolean;
};

export default Layout;
