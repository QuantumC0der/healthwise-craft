
import { useState } from 'react'
import './App.css'
import { motion } from 'framer-motion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/10 font-body">
      <div className="container-custom py-12">
        <header className="mb-12">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-display text-primary text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to Your App
          </motion.h1>
          <motion.p 
            className="text-lg text-center text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A beautifully designed application with modern UI elements and playful animations
          </motion.p>
        </header>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {[1, 2, 3].map((item) => (
            <div 
              key={item}
              className="bg-card hover-lift rounded-lg p-6 shadow-md border border-border"
            >
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-primary text-xl">✦</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Feature {item}</h3>
              <p className="text-muted-foreground">
                This is a brief description of the amazing feature your app provides.
              </p>
            </div>
          ))}
        </motion.div>

        <div className="bg-card rounded-xl p-8 border border-border shadow-lg max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Interactive Counter</h2>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCount((count) => count - 1)}
              className="px-5 py-3 rounded-md bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium hover-squish transition-colors"
            >
              -
            </button>
            <div className="w-16 h-16 rounded-lg bg-primary flex items-center justify-center animate-float">
              <span className="text-2xl font-bold text-primary-foreground">{count}</span>
            </div>
            <button
              onClick={() => setCount((count) => count + 1)}
              className="px-5 py-3 rounded-md bg-primary hover:bg-primary/80 text-primary-foreground font-medium hover-squish transition-colors"
            >
              +
            </button>
          </div>
          <p className="text-center mt-6 text-muted-foreground">
            Click the buttons to increase or decrease the count!
          </p>
        </div>
      </div>
      
      <footer className="py-8 bg-muted mt-20">
        <div className="container-custom text-center text-muted-foreground">
          <p>© 2023 Your Amazing App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
