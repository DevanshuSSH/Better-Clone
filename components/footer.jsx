import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-emerald-800 font-bold text-lg mb-4">Better</h3>
            <p className="text-sm text-gray-600 mb-4">
              A fast, fair, and accessible way to your dream home. We're on a
              mission to make homeownership simpler, faster, and more accessible
              for all Americans.
            </p>
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-400 hover:text-emerald-800">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="/" className="text-gray-400 hover:text-emerald-800">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="/" className="text-gray-400 hover:text-emerald-800">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-gray-900 font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  Lender information (provided)
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  Mortgage calculator
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  Home purchase calculator
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  Mortgage refinance calculator
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  Rent vs buy calculator
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  HELOC payment calculator
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  HELOC vs cash-out refinance
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  Buy a home
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  Refinance
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  Real estate resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-us" className="text-gray-600 hover:text-emerald-800">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  Learning center
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  Investor relations
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  Legal
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  help@better.com
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  1-800-123-4567
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  Diversity
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  NMLS Consumer Access
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  Disclosures & Licensing
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  API Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-800">
                  Product Disclosures
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mb-8">
          <div className="border border-gray-200 rounded p-1">
            <span className="sr-only">Equal Housing Opportunity</span>
            <div className="h-6 w-6 bg-gray-200"></div>
          </div>
          <div className="border border-gray-200 rounded p-1">
            <span className="sr-only">Housing Certification</span>
            <div className="h-6 w-6 bg-gray-200"></div>
          </div>
        </div>
        <div className="text-xs text-gray-500 text-center">
          <p className="mb-2">
            © 2023 Better Holdco, Inc. and/or its affiliates. Better, Better Real
            Estate, Better Mortgage, Better Settlement Services, Better Cover
            and Better are trademarks of Better Holdco, Inc. All rights
            reserved.
          </p>
          <p>
            Better Mortgage Corporation. NMLS #330511. 3 World Trade Center, 175
            Greenwich Street, 59th Floor, New York, NY 10007. Loans made or
            arranged pursuant to a California Finance Lenders Law License.
          </p>
        </div>
      </div>
    </footer>
  );
}