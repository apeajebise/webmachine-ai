import { AppProvider } from '@/context/AppContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import KeyFeatures from '@/components/KeyFeatures';
import Portfolio from '@/components/Portfolio';
import PitchDeck from '@/components/PitchDeck';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import AdminPanel from '@/components/AdminPanel';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-neutral-950 text-white antialiased selection:bg-emerald-400/30">
        <Navbar />
        <main>
          <Hero />
          <KeyFeatures />
          <Portfolio />
          <PitchDeck />
          <Testimonials />
          <Pricing />
          <Blog />
          <Contact />
        </main>
        <Footer />
        <ChatWidget />
        <AdminPanel />
      </div>
    </AppProvider>
  );
}

export default App;
