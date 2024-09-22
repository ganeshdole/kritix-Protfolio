import {
  BarChart3,
  PieChart,
  TrendingUp,
  Lock,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-5xl/none text-white">
                Manage Your Stock Portfolio Like a Pro
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Effortlessly track, analyze, and optimize your investments with
                our powerful stock portfolio management tools.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
              <button className="w-full sm:w-auto px-6 py-3 text-lg font-semibold text-slate-900 bg-white rounded-full transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900">
                Get Started
              </button>
              <button className="w-full sm:w-auto px-6 py-3 text-lg font-semibold text-white border-2 border-white rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Features
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <BarChart3 className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Real-time Tracking</h3>
              <p className="text-gray-600">
                Monitor your stocks in real-time with live updates and alerts.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <PieChart className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Portfolio Analytics</h3>
              <p className="text-gray-600">
                Gain insights with advanced analytics and performance metrics.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Lock className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                Your data is encrypted and protected with industry-leading
                security.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Expert Advice</h3>
              <p className="text-gray-600">
                Access insights from financial experts to optimize your
                portfolio.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Zap className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Fast Execution</h3>
              <p className="text-gray-600">
                Execute trades quickly and efficiently within the platform.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <TrendingUp className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Performance Tracking</h3>
              <p className="text-gray-600">
                Track your portfolio's performance over time with detailed
                reports.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center max-w-3xl mx-auto">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Start Managing Your Portfolio Today
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of investors who trust StockMaster for their
                portfolio management needs.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <input
                  className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2  text-white font-semibold rounded-md hover:bg-slate-700 bg-black transition-colors duration-300"
                >
                  Sign Up
                </button>
              </form>
              <p className="text-xs text-gray-600">
                By signing up, you agree to our{" "}
                <Link
                  className="underline underline-offset-2 hover:text-blue-600"
                  to="/terms"
                >
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
