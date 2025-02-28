import Image from "next/image"

export default function AboutUs() {
  const timelineEvents = [
    {
      year: "2014",
      description: "Better was founded with the mission to make homeownership simpler, faster, and more accessible for all Americans.",
    },
    {
      year: "2016",
      description: "Launched our digital mortgage platform, allowing customers to get pre-approved in as little as 3 minutes.",
    },
    {
      year: "2018",
      description: "Expanded our services to include homeowners insurance, helping customers save on their policies.",
    },
    {
      year: "2019",
      description: "Introduced Better Real Estate, offering a seamless home buying experience with dedicated agents.",
    },
    {
      year: "2020",
      description: "Launched Better Closing Services to streamline the closing process and reduce costs for homebuyers.",
    },
    {
      year: "2021",
      description: "Introduced the One Day Mortgage, allowing qualified borrowers to get a verified pre-approval in 24 hours.",
    },
    {
      year: "2022",
      description: "Expanded our services to include home equity lines of credit (HELOCs), giving homeowners access to their equity.",
    },
    {
      year: "2023",
      description: "Launched Better Insurance Agency to help customers find the best coverage at the best rates.",
    },
  ]

  const partners = [
    { name: "Goldman Sachs", logo: "/placeholder.svg?height=40&width=80" },
    { name: "Citi", logo: "/placeholder.svg?height=40&width=80" },
    { name: "Ally", logo: "/placeholder.svg?height=40&width=80" },
    { name: "Softbank", logo: "/placeholder.svg?height=40&width=80" },
    { name: "American Express", logo: "/placeholder.svg?height=40&width=80" },
    { name: "KPCB", logo: "/placeholder.svg?height=40&width=80" },
  ]

  return (
    <>
      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-emerald-600 mb-4">Our mission</h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            We're making homeownership simpler, faster —
            <br /> and most importantly, more accessible for all
            <br /> Americans.
          </h1>
        </div>
      </section>

      {/* Status Quo Section */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-xl font-bold mb-4">The status quo is broken</h2>
              <p className="mb-4 text-gray-700">
                The traditional mortgage process is slow, complicated, and full
                of unnecessary fees. It's designed to benefit lenders, not
                borrowers. We believe homeownership should be accessible to
                everyone, not just those who can navigate a complex system.
              </p>
              <p className="mb-6 text-gray-700">
                That's why we've rebuilt the homeownership process from the
                ground up, using technology to make it faster, simpler, and more
                transparent.
              </p>
              <button className="bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-2 px-6 rounded-md">
                Our approach
              </button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Person working at Better"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We're Changing Things Section */}
      <section className="bg-emerald-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">How we're changing things</h2>
          <p className="mb-4 max-w-3xl">
            We've built a digital platform that streamlines the entire mortgage
            process, from application to closing. Our technology eliminates
            unnecessary fees, reduces paperwork, and speeds up the approval
            process.
          </p>
          <p className="mb-4 max-w-3xl">
            We don't pay our loan officers commissions, so they're incentivized
            to find you the best loan, not the most expensive one. And we've
            eliminated lender fees, saving our customers thousands of dollars.
          </p>
          <p className="max-w-3xl">
            The result? A faster, more affordable path to homeownership for
            everyone.
          </p>
        </div>
      </section>

      {/* Backed By Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold mb-8">Backed by</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="w-24">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={80}
                  height={40}
                  className="grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-8 text-center">Company timeline</h2>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative mb-12 ${index % 2 === 0
                    ? "text-right pr-12 md:ml-auto md:mr-1/2 md:pr-8"
                    : "pl-12 md:mr-auto md:ml-1/2 md:pl-8"
                  }`}
              >
                <div
                  className={`bg-gray-100 p-4 rounded-lg inline-block ${index % 2 === 0 ? "md:mr-0" : "md:ml-0"
                    }`}
                >
                  <p className="text-gray-700">{event.description}</p>
                </div>
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-emerald-700 text-white text-xs font-bold py-1 px-3 rounded-full">
                    {event.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
