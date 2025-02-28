"use client"

import { useState } from "react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(300000)
  const [monthlyPayment, setMonthlyPayment] = useState(2146)
  const [downPayment, setDownPayment] = useState(60000)
  const [loanTerm, setLoanTerm] = useState(30)
  const [interestRate, setInterestRate] = useState(7.5)

  // Calculate payment breakdown (simplified)
  const principal = Math.round(monthlyPayment * 0.6)
  const interest = Math.round(monthlyPayment * 0.25)
  const taxes = Math.round(monthlyPayment * 0.1)
  const insurance = Math.round(monthlyPayment * 0.05)

  return (
    <div className="min-h-screen bg-white">
      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        {/* Calculator header */}
        <div className="bg-emerald-50 rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">Mortgage calculator</h1>
          <p className="text-gray-600 mb-8">
            Use our mortgage calculator to estimate your monthly mortgage payment, including principal, interest, taxes,
            and insurance.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Home price</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="text"
                    value={homePrice.toLocaleString()}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "")
                      setHomePrice(value ? Number.parseInt(value) : 0)
                    }}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Monthly payment</label>
                <div className="flex items-center justify-between">
                  <div className="relative flex-grow">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="text"
                      value={monthlyPayment.toLocaleString()}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "")
                        setMonthlyPayment(value ? Number.parseInt(value) : 0)
                      }}
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">/mo</span>
                  </div>
                  <Button className="ml-4 bg-emerald-600 hover:bg-emerald-700">Get started</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <Select defaultValue="ca">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ca">California</SelectItem>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="tx">Texas</SelectItem>
                  <SelectItem value="fl">Florida</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Down payment</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="text"
                  value={downPayment.toLocaleString()}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "")
                    setDownPayment(value ? Number.parseInt(value) : 0)
                  }}
                  className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Credit score</label>
              <Select defaultValue="excellent">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select score" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">Excellent (720+)</SelectItem>
                  <SelectItem value="good">Good (680-719)</SelectItem>
                  <SelectItem value="fair">Fair (640-679)</SelectItem>
                  <SelectItem value="poor">Poor (below 640)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Loan term</label>
              <Select defaultValue="30">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">30 years</SelectItem>
                  <SelectItem value="20">20 years</SelectItem>
                  <SelectItem value="15">15 years</SelectItem>
                  <SelectItem value="10">10 years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Payment breakdown */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4">${monthlyPayment.toLocaleString()}/mo</h2>

              <div className="mb-6">
                <div className="h-4 rounded-full overflow-hidden bg-gray-200 mb-2">
                  <div className="flex h-full">
                    <div
                      className="bg-emerald-600 h-full"
                      style={{ width: `${(principal / monthlyPayment) * 100}%` }}
                    ></div>
                    <div
                      className="bg-purple-500 h-full"
                      style={{ width: `${(interest / monthlyPayment) * 100}%` }}
                    ></div>
                    <div className="bg-blue-500 h-full" style={{ width: `${(taxes / monthlyPayment) * 100}%` }}></div>
                    <div
                      className="bg-orange-500 h-full"
                      style={{ width: `${(insurance / monthlyPayment) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-600 mr-2"></div>
                      <span className="text-sm">Principal & Interest</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-sm">Interest</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm">Property Taxes</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
                      <span className="text-sm">Insurance</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Calculate taxes
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Loan details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Loan amount</span>
                  <span className="font-medium">${(homePrice - downPayment).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Down payment</span>
                  <span className="font-medium">
                    ${downPayment.toLocaleString()} ({Math.round((downPayment / homePrice) * 100)}%)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interest rate</span>
                  <span className="font-medium">{interestRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Loan term</span>
                  <span className="font-medium">{loanTerm} years</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ sections */}
        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-bold mb-4">How does a mortgage calculator help me?</h2>
            <p className="text-gray-600 mb-4">
              A mortgage calculator helps you estimate your monthly mortgage payment based on your loan amount, interest
              rate, loan term, and other factors. It can help you determine how much house you can afford and how
              different loan options might affect your monthly payment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">How much monthly mortgage payment can I afford?</h2>
            <p className="text-gray-600 mb-4">
              Financial experts typically recommend that your monthly mortgage payment (including principal, interest,
              taxes, and insurance) should not exceed 28% of your gross monthly income. For example, if your annual
              income is $75,000, your gross monthly income is $6,250, and your monthly mortgage payment should not
              exceed $1,750.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">How to calculate monthly mortgage payment?</h2>
            <p className="text-gray-600 mb-4">The monthly mortgage payment calculation uses the following formula:</p>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">M = P [ i(1 + i)^n ] / [ (1 + i)^n - 1]</li>
              <li className="mb-2">M = monthly mortgage payment</li>
              <li className="mb-2">P = principal (loan amount)</li>
              <li className="mb-2">i = monthly interest rate (annual rate divided by 12)</li>
              <li className="mb-2">n = number of payments (loan term in years multiplied by 12)</li>
            </ol>
            <p className="text-gray-600 mb-4">
              For example, if you have a $300,000 loan with a 7.5% interest rate for 30 years, your monthly principal
              and interest payment would be approximately $2,097.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">What are the mortgage rates?</h2>
            <p className="text-gray-600 mb-4">
              Mortgage rates vary based on several factors, including your credit score, loan term, loan amount, and
              down payment. Here are some sample rates:
            </p>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Loan Type</TableHead>
                    <TableHead>Rate</TableHead>
                    <TableHead>APR</TableHead>
                    <TableHead>Points</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>30-Year Fixed</TableCell>
                    <TableCell>7.5%</TableCell>
                    <TableCell>7.62%</TableCell>
                    <TableCell>0.0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>15-Year Fixed</TableCell>
                    <TableCell>6.75%</TableCell>
                    <TableCell>6.92%</TableCell>
                    <TableCell>0.0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>5/1 ARM</TableCell>
                    <TableCell>6.25%</TableCell>
                    <TableCell>6.38%</TableCell>
                    <TableCell>0.0</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">How is Better's mortgage calculator different?</h2>
            <p className="text-gray-600 mb-4">
              Our mortgage calculator provides a comprehensive view of your potential mortgage payment, including
              principal, interest, taxes, and insurance. It also allows you to adjust various parameters to see how they
              affect your monthly payment.
            </p>
            <p className="text-gray-600 mb-4">
              Unlike many other calculators, Better's mortgage calculator also shows you how much you might save by
              working with Better, thanks to our commission-free loan officers and no lender fees.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">How to reduce your monthly mortgage payment?</h2>
            <p className="text-gray-600 mb-4">There are several ways to reduce your monthly mortgage payment:</p>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Make a larger down payment to reduce the loan amount</li>
              <li className="mb-2">Extend the loan term (though this will increase the total interest paid)</li>
              <li className="mb-2">Find a lower interest rate by improving your credit score or shopping around</li>
              <li className="mb-2">Eliminate private mortgage insurance (PMI) by putting down at least 20%</li>
              <li className="mb-2">Refinance your mortgage when rates drop</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">How much home can I afford?</h2>
            <p className="text-gray-600 mb-4">
              The amount of home you can afford depends on your income, debts, down payment, credit score, and current
              mortgage rates. As a general rule, your total monthly housing costs (mortgage payment, property taxes,
              insurance) should not exceed 28% of your gross monthly income, and your total debt payments should not
              exceed 36%.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Next steps to buying a house</h2>
            <p className="text-gray-600 mb-4">
              Once you've used our mortgage calculator to estimate your monthly payment, here are the next steps to
              buying a house:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Get pre-approved for a mortgage to know exactly how much you can borrow</li>
              <li className="mb-2">Find a real estate agent to help you search for homes</li>
              <li className="mb-2">Start house hunting within your budget</li>
              <li className="mb-2">Make an offer on a home you love</li>
              <li className="mb-2">Complete the mortgage application process</li>
              <li className="mb-2">Get a home inspection and appraisal</li>
              <li className="mb-2">Close on your new home</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">More resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium mb-2">First-time homebuyer guide</h3>
                <p className="text-sm text-gray-600 mb-2">Everything you need to know about buying your first home.</p>
                <Link href="/" className="text-emerald-600 hover:text-emerald-700 text-sm">
                  Read more →
                </Link>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium mb-2">Mortgage rates</h3>
                <p className="text-sm text-gray-600 mb-2">Current mortgage rates and how they affect your payment.</p>
                <Link href="/" className="text-emerald-600 hover:text-emerald-700 text-sm">
                  Read more →
                </Link>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium mb-2">Closing costs</h3>
                <p className="text-sm text-gray-600 mb-2">Understanding the fees associated with closing on a home.</p>
                <Link href="/" className="text-emerald-600 hover:text-emerald-700 text-sm">
                  Read more →
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

