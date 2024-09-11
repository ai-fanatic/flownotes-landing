"use client";

import Link from "next/link";
import {
  BrainIcon,
  CheckIcon,
  LockIcon,
  DatabaseIcon,
  ChevronDownIcon,
} from "lucide-react";

export function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BrainIcon className="h-8 w-8 text-blue-400" />
          <span className="text-2xl font-bold text-white">Flow Notes</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#home" className="text-gray-300 hover:text-blue-400">
            Home
          </Link>
          <Link href="#features" className="text-gray-300 hover:text-blue-400">
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-gray-300 hover:text-blue-400"
          >
            How It Works
          </Link>
          <Link href="#pricing" className="text-gray-300 hover:text-blue-400">
            Pricing
          </Link>
          <Link href="#faq" className="text-gray-300 hover:text-blue-400">
            FAQ
          </Link>
        </nav>
      </header>

      <main>
        <section id="home" className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Transform Your Voice into Organized Notes
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Seamlessly capture and save voice notes directly to your Notion
            database
          </p>
          <a
            href="#"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Add to Chrome - It's Free!
          </a>
        </section>

        <section id="features" className="bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <BrainIcon className="h-12 w-12 text-blue-400" />, // Changed from MusicIcon to BrainIcon
                  title: "Voice-to-Text Conversion",
                },
                {
                  icon: <DatabaseIcon className="h-12 w-12 text-blue-400" />,
                  title: "Direct Notion Integration",
                },
                {
                  icon: <CheckIcon className="h-12 w-12 text-blue-400" />,
                  title: "Customizable Categories",
                },
                {
                  icon: <LockIcon className="h-12 w-12 text-blue-400" />,
                  title: "Secure and Private",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Install the Chrome extension",
                "Connect to your Notion account",
                "Start recording voice notes",
                "Access your notes in Notion",
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <p className="text-lg text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="privacy" className="bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-8">
              Your Privacy is Our Priority
            </h2>
            <div className="max-w-2xl mx-auto">
              <ul className="space-y-4">
                {[
                  "End-to-end encryption",
                  "No data storage on our servers",
                  "Compliance with data protection regulations",
                ].map((point, index) => (
                  <li key={index} className="flex items-center">
                    <CheckIcon className="h-6 w-6 text-green-400 mr-2" />
                    <span className="text-lg text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <Link href="/privacy" className="text-blue-400 hover:underline">
                  Read our full Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Start Using Flow Notes for Free
            </h2>
            <div className="max-w-md mx-auto bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-center text-3xl font-bold text-white mb-4">
                  $0
                </h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Unlimited voice notes",
                    "Direct Notion integration",
                    "Voice-to-text conversion",
                    "Customizable categories",
                    "End-to-end encryption",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-400 mr-2" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Add to Chrome Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
              {[
                {
                  question: "How do I install Flow Notes?",
                  answer:
                    "Simply click the 'Add to Chrome' button on our website, and follow the prompts to add the extension to your browser.",
                },
                {
                  question: "Is my data secure?",
                  answer:
                    "Yes, we use end-to-end encryption and do not store any of your data on our servers. Your notes are sent directly to your Notion database.",
                },
                {
                  question: "How do I connect Flow Notes to my Notion account?",
                  answer:
                    "After installation, click on the Flow Notes icon in your Chrome browser and follow the prompts to authorize the connection to your Notion account.",
                },
                {
                  question:
                    "Can I customize where my notes are saved in Notion?",
                  answer:
                    "Yes, you can select which Notion database to use for your notes, and even create custom categories within the extension.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-6 rounded-lg shadow-md"
                >
                  <button className="flex justify-between items-center w-full text-left">
                    <span className="text-lg font-semibold text-white">
                      {item.question}
                    </span>
                    <ChevronDownIcon className="h-5 w-5 text-gray-300" />
                  </button>
                  <p className="mt-4 text-gray-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Flow Notes</h3>
              <p className="text-gray-300">
                Transform your voice into organized notes with our Chrome
                extension.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300">
              &copy; {new Date().getFullYear()} Flow Notes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
