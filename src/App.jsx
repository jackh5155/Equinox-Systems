import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-8 border-b border-gray-100">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-blue-600">Equinox Systems</span>
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">Program</a>
          <a href="#portfolio" className="text-sm font-semibold leading-6 text-gray-900">Portfolio</a>
          <a href="#pricing" className="text-sm font-semibold leading-6 text-gray-900">Pricing</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500">Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Premium Websites, <span className="text-blue-600">Zero Upfront Cost</span>.
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Tailored online presence for small businesses. Professional design, hosting, and support — all for a flat monthly subscription. No hidden fees, no generic templates.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              Apply for the Program
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div id="features" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Why Equinox?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to grow online
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We handle the tech so you can focus on your business. Our program is designed specifically for tradespeople, contractors, and local service providers.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Fully Custom Design
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  We build from scratch to match your brand and needs. No templates, no compromises.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Mobile Optimized
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Your site will look great and work perfectly on every device, from phones to desktops.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  SEO Ready
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Built-in search engine optimization to help local customers find you more easily.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Hosting & Support
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Continuous maintenance, updates, and support are included in your subscription.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
