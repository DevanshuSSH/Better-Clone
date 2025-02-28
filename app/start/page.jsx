import Image from "next/image";
import Link from "next/link";
import { Home, RefreshCw, DollarSign, Check, Phone } from "lucide-react";

export default function StartPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with logo and phone */}
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-emerald-800 font-bold text-xl">Better</span>
            <span className="text-gray-500 ml-1">Mortgage</span>
          </Link>
        </div>
        <Link href="tel:+18005238837" className="flex items-center text-emerald-600 hover:text-emerald-700">
          <Phone className="h-4 w-4 mr-2" />
          <span className="text-sm">Need help? Call (415) 523-8837</span>
        </Link>
      </div>

      {/* Main content */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 py-8">
        {/* Profile image */}
        <div className="mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
            <Image
              src="/placeholder.svg?height=64&width=64"
              alt="Betsy"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
        </div>

        {/* Greeting */}
        <h1 className="text-3xl font-bold text-center mb-2">Hi, I'm Betsy!</h1>
        <p className="text-xl text-center mb-8">What can I help you with?</p>

        {/* Option buttons */}
        <div className="w-full max-w-md space-y-4 mb-12">
          <Link
            href="/mortgage-calculator"
            className="flex items-center border border-gray-300 rounded-md p-4 hover:border-emerald-500 transition-colors"
          >
            <Home className="h-5 w-5 text-emerald-600 mr-3" />
            <span>Buying a home</span>
          </Link>
          <Link
            href="/mortgage-calculator"
            className="flex items-center border border-gray-300 rounded-md p-4 hover:border-emerald-500 transition-colors"
          >
            <RefreshCw className="h-5 w-5 text-emerald-600 mr-3" />
            <span>Refinance my mortgage</span>
          </Link>
          <Link
            href="/mortgage-calculator"
            className="flex items-center border border-gray-300 rounded-md p-4 hover:border-emerald-500 transition-colors"
          >
            <DollarSign className="h-5 w-5 text-emerald-600 mr-3" />
            <span>Get cash from my home</span>
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center gap-16 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">$100B</h2>
            <p className="text-sm text-gray-600">Home loans funded entirely online</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">400K</h2>
            <p className="text-sm text-gray-600">
              Customers who chose a<br />
              Better Mortgage
            </p>
          </div>
        </div>

        {/* Benefits box */}
        <div className="bg-emerald-50 rounded-md p-6 max-w-md w-full">
          <p className="text-center mb-4">After a few questions, you'll unlock:</p>
          <div className="space-y-3">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-emerald-600 mr-3" />
              <span>Custom mortgage rates</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-emerald-600 mr-3" />
              <span>Exclusive offers</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-emerald-600 mr-3" />
              <span>A personalized dashboard</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <div className="container mx-auto px-4 py-12 border-t">
          <div className="mb-8">
            <div className="text-emerald-800 font-bold text-xl mb-2">Better</div>
            <p className="text-sm text-gray-600 mb-4">
              Better is a family of companies
              <br />
              serving all your homeownership
              <br />
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* ... (rest of the footer content remains the same) */}
          </div>
        </div>
      </div>
    </div>
  );
}
