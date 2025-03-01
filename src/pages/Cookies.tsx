
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Cookies = () => {
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
            Cookie Policy
          </motion.h1>
          
          <motion.div 
            className="bg-white rounded-3xl shadow-lg p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-display text-primary mb-4">🍪 Cookies & Your Privacy</h2>
              <p>Last Updated: June 2023</p>
              
              <h3 className="text-xl font-display text-primary mt-6 mb-3">What Are Cookies?</h3>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They help us recognize your device and remember certain information about your visit, like your preferences and settings.
              </p>
              
              <h3 className="text-xl font-display text-primary mt-6 mb-3">Types of Cookies We Use</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly. They enable basic functions like page navigation and access to secure areas.</li>
                <li><strong>Preference Cookies:</strong> Allow us to remember choices you make and provide enhanced, personalized features.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant advertisements.</li>
              </ul>
              
              <h3 className="text-xl font-display text-primary mt-6 mb-3">How We Use Cookies</h3>
              <p>We use cookies for various purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Remembering your preferences and settings</li>
                <li>Keeping you signed in to your account</li>
                <li>Understanding how you use our website</li>
                <li>Improving our website based on your behavior</li>
                <li>Providing personalized content and recommendations</li>
              </ul>
              
              <h3 className="text-xl font-display text-primary mt-6 mb-3">Managing Cookies</h3>
              <p>
                Most web browsers allow you to control cookies through their settings preferences. 
                However, limiting cookies may affect the functionality of our website.
              </p>
              
              <h3 className="text-xl font-display text-primary mt-6 mb-3">Third-Party Cookies</h3>
              <p>
                Some cookies are placed by third parties on our behalf. These third parties may include analytics providers, 
                advertising networks, and social media platforms. We do not control the use of these third-party cookies.
              </p>
              
              <h3 className="text-xl font-display text-primary mt-6 mb-3">Changes to Our Cookie Policy</h3>
              <p>
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
              </p>
              
              <h3 className="text-xl font-display text-primary mt-6 mb-3">Contact Us</h3>
              <p>If you have any questions about our Cookie Policy, please contact us at:</p>
              <p>📧 privacy@supplementmatch.com</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
