import Link from "next/link";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-emerald-800 font-bold text-xl mr-8">
              Better
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/start" className="text-gray-600 hover:text-emerald-800">
                start
              </Link>
              <Link href="/mortgage-calculator?taxes=265&zip=421005" className="text-gray-600 hover:text-emerald-800">
                mortgage-calculater
              </Link>
              <Link href="/" className="text-gray-600 hover:text-emerald-800">
                HELOC
              </Link>
              <Link
                href="/mortgage-calculator"
                className="text-gray-600 hover:text-emerald-800"
              >
                Rates
              </Link>
              <Link href="/about-us" className="text-gray-600 hover:text-emerald-800">
                About Us
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <Link
              href="tel:+18001234567"
              className="text-gray-600 hover:text-emerald-800 mr-4"
            >
              <Phone className="h-5 w-5" />
            </Link>
            <Link
              href="/login"
              className="text-emerald-800 hover:text-emerald-900 font-medium"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}