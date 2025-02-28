import Image from "next/image"
import { Star } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-emerald-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-medium mb-4 text-emerald-300">
            Mortgages
            <br />
            made simple
          </h1>
          <div className="flex justify-center mb-8">
            <Image
              src="/placeholder.svg?height=400&width=200"
              alt="Phone showing Better app"
              width={200}
              height={400}
              className="mt-8"
            />
          </div>
          <div className="flex justify-center gap-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm">4.8/5</span>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button className="bg-emerald-400 hover:bg-emerald-500 text-emerald-900 font-medium py-2 px-6 rounded-full">
              Start my approval
            </button>
            <span className="text-sm mt-2">3 min • No credit impact</span>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden max-w-xs">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Customer testimonial"
                  width={300}
                  height={400}
                  className="w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <p className="text-sm">
                    "I applied for my mortgage loan on a Sunday and closed in 21 days. Better's online process was
                    simple, and the team was there when I needed them."
                  </p>
                  <p className="text-xs mt-2">- John D.</p>
                </div>
                <div className="absolute top-4 left-4">
                  <button className="bg-white text-emerald-800 text-xs font-medium py-1 px-3 rounded-full">Read</button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Find out why
                <br />
                we're better.
              </h2>
              <button className="bg-emerald-800 hover:bg-emerald-900 text-white font-medium py-2 px-6 rounded-full mb-4">
                See all our reviews
              </button>
              <div className="flex items-center gap-2 text-sm">
                <span>TrustPilot</span>
                <span>Excellent</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-3 w-3 fill-emerald-800 text-emerald-800" />
                  ))}
                </div>
                <span>4.8 out of 5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Got questions?</h2>
          <p className="text-xl md:text-2xl mb-8">We've got answers</p>

          <div className="flex flex-wrap gap-4">
            <button className="border border-emerald-800 text-emerald-800 font-medium py-1 px-4 rounded-full">
              Get your price
            </button>
            <button className="border border-emerald-800 text-emerald-800 font-medium py-1 px-4 rounded-full">
              Chat with us
            </button>
            <button className="border border-emerald-800 text-emerald-800 font-medium py-1 px-4 rounded-full">
              Schedule a time
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Buying your first home with Better</h3>
              <p className="mb-4">Learn about the home buying process with Better Mortgage.</p>
              <button className="text-emerald-800">→</button>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">One Day Mortgage?</h3>
              <p className="mb-4">
                What does it mean to get a "One Day Mortgage" from Better? It means a streamlined, digital process that
                can get you a mortgage commitment letter in 24 hours.
              </p>
              <button className="text-emerald-800">→</button>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Better HELOC</h3>
              <p className="mb-4">
                A Home Equity Line of Credit (HELOC) gives you access to your home's equity. Tap into it when you need
                it, and only pay interest on what you use.
              </p>
              <button className="text-emerald-800">→</button>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Insurance</h3>
              <button className="text-emerald-800">→</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

