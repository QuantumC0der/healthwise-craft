
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const Hero = () => {
  console.log("Hero component rendering");
  const [imageError, setImageError] = useState(false);
  
  const handleGetStarted = () => {
    const assessmentElement = document.getElementById("assessment-section");
    if (assessmentElement) {
      assessmentElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const bubbleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    }),
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-soft via-purple-soft to-pink-soft pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Fun background elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-yellow-soft rounded-full animate-float opacity-80"></div>
      <div
        className="absolute top-40 left-10 w-16 h-16 bg-green-soft rounded-full animate-float opacity-80"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 right-20 w-24 h-24 bg-orange-soft rounded-full animate-float opacity-80"
        style={{ animationDelay: "2s" }}
      ></div>
      <div className="absolute -bottom-5 left-1/4 w-40 h-10 bg-purple-soft rounded-full"></div>

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center bg-primary/20 text-primary rounded-full px-4 py-1.5 mb-6"
            >
              <span className="text-sm font-bold">
                Super Duper Health Stuff!
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-6 text-primary"
            >
              Your Health Adventure <br />
              <span className="relative text-secondary inline-block">
                Starts Here!
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-3 bg-accent/40 -z-10 rounded-md"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                ></motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg mb-8 max-w-lg font-body"
            >
              Discover awesome supplement recommendations that are perfect just
              for you! It's like having a health superhero in your pocket! ✨
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={handleGetStarted}
                className="shadow-lg hover-squish bg-gradient-to-r from-primary to-secondary text-white rounded-full"
              >
                Let's Go! 🚀
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="hover-lift rounded-full border-2 border-accent"
              >
                Tell Me More 🤔
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 flex items-center space-x-6"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={bubbleVariants}
                    initial="initial"
                    animate="animate"
                    className={`w-12 h-12 rounded-full border-2 border-white shadow-md bg-gradient-to-br from-accent to-primary flex items-center justify-center text-xs font-bold text-white`}
                  >
                    {i}
                  </motion.div>
                ))}
              </div>
              <div>
                <p className="text-md font-bold font-body">
                  <span className="text-primary">5,000+</span> happy friends
                  using our vitamins!
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div
                className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-primary p-2"
                whileHover={{ rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {!imageError ? (
                  <img
                    src="/placeholder.svg"
                    alt="Supplement health"
                    className="w-full h-auto rounded-2xl"
                    onError={(e) => {
                      console.error("Image failed to load");
                      setImageError(true);
                    }}
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
                    <p className="text-gray-500">Supplement Health Image</p>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="font-display text-2xl mb-2 text-primary">
                    Magic Health Boosters!
                  </h3>
                  <p className="text-muted-foreground font-body">
                    Find the perfect super-powered supplements for your awesome
                    body!
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/60 rounded-full z-0"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/60 rounded-full z-0"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>

      {/* Production credit */}
      <div className="absolute bottom-2 right-4 text-xs opacity-70 font-display rotate-2 text-primary">
        A Rishul Chanana Production
      </div>
    </div>
  );
};

export default Hero;
