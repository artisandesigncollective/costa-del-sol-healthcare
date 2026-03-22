import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Costa del Sol Healthcare Directory | Private Clinics & English-Speaking Doctors',
  description: 'Find private hospitals, dental clinics, and English-speaking doctors in Costa del Sol. Comprehensive healthcare directory for expats in Marbella, Málaga, Estepona & Fuengirola.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        {children}
        <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Costa del Sol Healthcare</h3>
                <p className="text-slate-400 text-sm">
                  Your trusted directory for private healthcare providers along Spain's Sunshine Coast.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-4">Locations</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><a href="/marbella/" className="hover:text-white transition">Marbella</a></li>
                  <li><a href="/malaga/" className="hover:text-white transition">Málaga</a></li>
                  <li><a href="/estepona/" className="hover:text-white transition">Estepona</a></li>
                  <li><a href="/fuengirola/" className="hover:text-white transition">Fuengirola</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><a href="/faq/" className="hover:text-white transition">FAQ</a></li>
                  <li><a href="/#insurance" className="hover:text-white transition">Insurance Guide</a></li>
                  <li><a href="/#emergency" className="hover:text-white transition">Emergency Numbers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Emergency</h4>
                <p className="text-2xl font-bold text-red-400">112</p>
                <p className="text-sm text-slate-400 mt-1">General Emergency</p>
                <p className="text-lg font-semibold text-white mt-4">061</p>
                <p className="text-sm text-slate-400">Medical Emergency</p>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
              <p>&copy; 2024 Costa del Sol Healthcare Directory. Information provided for guidance only.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
