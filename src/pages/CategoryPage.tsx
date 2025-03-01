
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Sparkles, ChevronRight, Search, Filter } from "lucide-react";
import supplements from "../data/supplements";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const title = categoryId === "all" ? "All Supplements" : categoryId?.replace("-", " & ");
  
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSupplements, setFilteredSupplements] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  
  // Get all unique tags from supplements for filtering
  const allTags = [...new Set(supplements.flatMap(supp => supp.tags))];
  
  // Filter supplements by category
  useEffect(() => {
    let filtered = categoryId === "all" 
      ? supplements
      : supplements.filter(supp => 
          supp.category.toLowerCase() === categoryId?.replace("-", " "));
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(supp => 
        supp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        supp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        supp.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Apply tag filters
    if (activeFilters.length > 0) {
      filtered = filtered.filter(supp => 
        activeFilters.some(filter => supp.tags.includes(filter))
      );
    }
    
    setFilteredSupplements(filtered);
  }, [categoryId, searchTerm, activeFilters]);

  const handleTagFilter = (tag) => {
    if (activeFilters.includes(tag)) {
      setActiveFilters(activeFilters.filter(t => t !== tag));
    } else {
      setActiveFilters([...activeFilters, tag]);
    }
  };

  // Get all unique categories
  const categories = [...new Set(supplements.map(supp => supp.category))];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-16">
        <section className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl md:text-5xl font-display text-primary mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title} 
              <motion.span
                animate={{ rotate: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="inline-block ml-2"
              >
                <Sparkles className="h-8 w-8 text-yellow-400" />
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-foreground/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {categoryId === "all" 
                ? "Discover our complete range of high-quality supplements designed to support your health journey!"
                : `Explore our selection of ${title} supplements designed to boost your wellbeing and health!`}
            </motion.p>
          </div>
          
          {/* Search and Filtering */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search supplements..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex-shrink-0">
                <div className="group relative">
                  <button className="flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-lg hover:bg-secondary/20 transition">
                    <Filter className="h-5 w-5" />
                    <span>Filter by benefit</span>
                  </button>
                  
                  <div className="absolute z-10 right-0 mt-2 bg-white rounded-lg shadow-lg p-4 w-64 hidden group-hover:block hover:block">
                    <div className="grid grid-cols-2 gap-2">
                      {allTags.slice(0, 20).map((tag, index) => (
                        <button
                          key={index}
                          className={`text-sm px-2 py-1 rounded-full text-left ${
                            activeFilters.includes(tag) 
                              ? 'bg-primary text-white' 
                              : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                          onClick={() => handleTagFilter(tag)}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Category navigation */}
            <div className="overflow-x-auto pb-2">
              <div className="flex space-x-2 min-w-max">
                <Link
                  to="/category/all"
                  className={`px-4 py-2 rounded-full text-sm ${
                    categoryId === 'all' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  All Categories
                </Link>
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/category/${category.toLowerCase().replace(' & ', '-')}`}
                    className={`px-4 py-2 rounded-full text-sm ${
                      categoryId === category.toLowerCase().replace(' & ', '-') 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Applied filters */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-4">
                <span className="text-sm text-gray-500">Active filters:</span>
                {activeFilters.map((filter, index) => (
                  <span 
                    key={index} 
                    className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full flex items-center"
                  >
                    {filter}
                    <button 
                      className="ml-1 text-primary/70 hover:text-primary"
                      onClick={() => handleTagFilter(filter)}
                    >
                      ×
                    </button>
                  </span>
                ))}
                <button 
                  className="text-sm text-gray-500 hover:text-primary underline"
                  onClick={() => setActiveFilters([])}
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {filteredSupplements.length > 0 ? (
              filteredSupplements.map((supplement, index) => (
                <motion.div
                  key={supplement.id}
                  className="bg-gradient-to-br from-blue-soft to-purple-soft rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <div className="mb-4 h-40 rounded-2xl overflow-hidden">
                    <img 
                      src={supplement.image} 
                      alt={supplement.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-display text-primary mb-2">{supplement.name}</h3>
                  <p className="text-foreground/70 mb-4">{supplement.description.substring(0, 100)}...</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {supplement.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="bg-yellow-300 text-yellow-800 rounded-full px-3 py-1 text-sm font-medium">
                      {supplement.category}
                    </span>
                    <Link 
                      to={`/supplements/${supplement.id}`} 
                      className="text-primary hover:text-secondary flex items-center"
                    >
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <h3 className="text-xl font-medium mb-2">No supplements found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            )}
          </motion.div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-display text-primary mb-6">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display text-primary mb-2">🤔 How do I choose the right supplement?</h3>
                  <p className="text-foreground/70">Take our fun quiz to get personalized recommendations based on your health goals and needs!</p>
                </div>
                <div>
                  <h3 className="text-xl font-display text-primary mb-2">⏰ How often should I take these supplements?</h3>
                  <p className="text-foreground/70">Each supplement has its own recommended dosage. Always follow the instructions on the label or consult with a healthcare professional.</p>
                </div>
                <div>
                  <h3 className="text-xl font-display text-primary mb-2">🌈 Are these supplements safe?</h3>
                  <p className="text-foreground/70">All our supplements are thoroughly tested for quality and safety. However, it's always best to consult with your doctor before starting any new supplement.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
