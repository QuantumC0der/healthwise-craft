
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Privacy = () => {
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
            Privacy Policy
          </motion.h1>
          
          <motion.div 
            className="bg-white rounded-3xl shadow-lg p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-display text-primary mb-4">🔒 Your Privacy Matters!</h2>
              <p>Last Updated: June 2023</p>
              
              <h3 className="text-xl font-display text-primary mt-6 mb-3">What Information We Collect</h3>
              <p>We collect information that you provide directly to us, such as when you create an account, fill out a form, or complete our health questionnaire. This may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your name and contact information</li>
                <li>Health goals and preferences</li>
                <li>Dietary restrictions and allergies</li>
                <li>Current supplement usage</li>
              </ul>
              
              <h3 className="text-xl font-display text-primary mt-6 mb-3">How We Use Your Information</h3>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide personalized supplement recommendations</li>
                <li>Improve our questionnaire and recommendation algorithms</li>
                <li>Send you updates about products that match your health profile</li>
                <li>Respond to your questions and feedback</li>
              </ul>
              
              <h3 className="text-xl font-display text-primary mt-6 mb-3">Sharing Your Information</h3>
              <p>We take your privacy seriously and do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who help us deliver our services</li>
                <li>Partners who fulfill product orders (with your consent)</li>
                <li>When required by law or to protect our rights</li>
              </ul>
              
              <h3 className="text-xl font-display text-primary mt-6 mb-3">Your Rights</h3>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and associated data</li>
                <li>Opt out of marketing communications</li>
              </ul>
              
              <h3 className="text-xl font-display text-primary mt-6 mb-3">Security</h3>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              
              <h3 className="text-xl font-display text-primary mt-6 mb-3">Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p>📧 privacy@supplementmatch.com</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
