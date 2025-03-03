
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogManager from "@/components/admin/BlogManager";
import SupplementManager from "@/components/admin/SupplementManager";
import { toast } from "sonner";

// Hard-coded admin credentials (in a real app, this would be in a secure backend)
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "Rishul123";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Check if user is already authenticated (from session storage)
  useEffect(() => {
    const adminAuth = sessionStorage.getItem("adminAuth");
    if (adminAuth === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuth", "true");
      toast.success("Successfully logged in as admin");
    } else {
      toast.error("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("adminAuth");
    toast.info("Logged out successfully");
  };

  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
        </div>
      </MainLayout>
    );
  }

  if (!isAuthenticated) {
    return (
      <MainLayout className="container-custom py-20">
        <div className="max-w-md mx-auto">
          <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-primary">
            <h1 className="text-3xl font-display text-primary mb-6 text-center">Admin Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout className="container-custom py-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-display text-primary">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          Logout
        </button>
      </div>

      <Tabs defaultValue="blogs" className="w-full">
        <TabsList className="w-full mb-8">
          <TabsTrigger value="blogs" className="flex-1">Blog Posts</TabsTrigger>
          <TabsTrigger value="supplements" className="flex-1">Supplements</TabsTrigger>
          <TabsTrigger value="settings" className="flex-1">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="blogs">
          <BlogManager />
        </TabsContent>
        
        <TabsContent value="supplements">
          <SupplementManager />
        </TabsContent>
        
        <TabsContent value="settings">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Admin Settings</h2>
            <p className="text-gray-600">
              This section is under development. Future functionality will include user management,
              site configuration, and analytics.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

export default Admin;
