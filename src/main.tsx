
import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles/globals.css'

// Add a simple loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background">
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    <p className="mt-4 text-muted-foreground">Loading your supplements...</p>
  </div>
);

// Lazy load the App component
const App = lazy(() => import('./App.tsx'));

// Start rendering as soon as possible
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <App />
    </Suspense>
  </React.StrictMode>,
)
