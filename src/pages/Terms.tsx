
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-display text-primary mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Terms of Service
          </motion.h1>
          
          <motion.div 
            className="bg-white rounded-3xl shadow-lg p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-display text-primary mb-4">📝 Please Read Carefully</h2>
              <p>Last Updated: June 2023</p>
              
              <h3 className="text-xl font-display text-primary mt-6 mb-3">Agreement to Terms</h3>
              <p>
                By accessing or using MySupplementMatch, you agree to be bound by these Terms of Service. 
                If you disagree with any part of the terms, you may not access the service.
              </p>
              
              <h3 className="text-xl font-display text-primary mt-6 mb-3">Use of Our Service</h3>
              <p>Our service provides personalized supplement recommendations based on information you provide. By using our service, you understand and agree that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Recommendations are for informational purposes only and are not medical advice</li>
                <li>You should consult with a healthcare professional before starting any supplement regimen</li>
                <li>Results may vary and we don't guarantee specific outcomes</li>
                <li>You are responsible for verifying the safety and appropriateness of any recommendation</li>
              </ul>
              
              <h3 className="text-xl font-display text-primary mt-6 mb-3">User Accounts</h3>
              <p>When you create an account with us, you must provide accurate and complete information. You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintaining the confidentiality of your account password</li>
                <li>Restricting access to your computer or mobile device</li>
                <li>All activities that occur under your account</li>
              </ul>
              
              <h3 className="text-xl font-display text-primary mt-6 mb-3">Intellectual Property</h3>
              <p>
                The service and its original content, features, and functionality are owned by MySupplementMatch and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              
              <h3 className="text-xl font-display text-primary mt-6 mb-3">Limitation of Liability</h3>
              <p>
                In no event shall MySupplementMatch, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              
              <h3 className="text-xl font-display text-primary mt-6 mb-3">Governing Law</h3>
              <p>
                These Terms shall be governed by the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.
              </p>
              
              <h3 className="text-xl font-display text-primary mt-6 mb-3">Changes to Terms</h3>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              
              <h3 className="text-xl font-display text-primary mt-6 mb-3">Contact Us</h3>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p>📧 terms@supplementmatch.com</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
