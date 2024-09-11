import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="text-blue-400 hover:underline mb-4 inline-block"
        >
          &larr; Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            1. Introduction
          </h2>
          <p className="text-gray-300">
            Welcome to FlowNotes. We are committed to protecting your privacy.
            This Privacy Policy explains how our Chrome extension works and how
            it interacts with your Notion database.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. How FlowNotes Works
          </h2>
          <p>FlowNotes is a Chrome extension that:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Operates locally within your browser</li>
            <li>Interacts directly with your personal Notion database</li>
            <li>
              Does not collect or store any of your information on our servers
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. Information Storage
          </h2>
          <p>
            All information processed by FlowNotes is stored exclusively in your
            own Notion database. We do not:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Collect any personal information</li>
            <li>Store any of your data on our servers</li>
            <li>Have access to your Notion database or its contents</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p>
            Since FlowNotes doesn't collect or store any of your data, the
            security of your information depends on your Notion account's
            security and your browser's security settings. We recommend:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Keeping your Notion account secure with a strong password</li>
            <li>Ensuring your browser is up-to-date</li>
            <li>
              Being cautious about using FlowNotes on public or shared computers
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            5. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. We will notify you of any changes by posting the
            new Privacy Policy on this page and updating the "Last Updated"
            date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our
            practices, please contact us at naveen.aifanatic@gmail.com.
          </p>
        </section>

        <p className="mt-8 text-sm text-gray-400">
          Last Updated: {new Date().toDateString()}
        </p>
      </div>
    </div>
  );
}
