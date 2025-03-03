
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import MainLayout from "./layouts/MainLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout showHeader={false} showFooter={false}>
      <div className="flex items-center justify-center min-h-screen p-4">
        <motion.div 
          className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 sm:p-8">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-red-500 text-4xl font-display">404</span>
            </div>
            
            <h1 className="text-2xl font-display text-center mb-2">Page Not Found</h1>
            <p className="text-muted-foreground text-center mb-6">
              We couldn't find the page you were looking for. It might have been moved or deleted.
            </p>
            
            <div className="flex justify-center">
              <Link 
                to="/" 
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to Homepage
              </Link>
            </div>
          </div>
          
          <div className="bg-sage-50 px-6 py-4 text-sm text-center">
            <p className="text-muted-foreground">
              Looking for something specific? Try navigating using the main menu.
            </p>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
