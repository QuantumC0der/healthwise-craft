
import React, { useState } from "react";
import { PlusCircle, Edit, Trash, Check, X } from "lucide-react";
import { toast } from "sonner";

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
  published: boolean;
}

const defaultBlogPost: BlogPost = {
  id: "",
  title: "",
  summary: "",
  content: "",
  date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
  author: "Admin",
  image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
  tags: [],
  published: false
};

// Mock data - in a real app, this would come from a database
const initialBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Super Awesome Vitamins Every Kid Should Know About!",
    summary: "These amazing vitamins help you grow big and strong, fight off colds, and give you tons of energy for playing all day!",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "June 10, 2023",
    author: "Dr. Maya Johnson",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
    tags: ["Vitamins", "Health Tips", "Kids"],
    published: true
  },
  {
    id: "2",
    title: "Why Fish Oil Is Like Brain Food! 🧠",
    summary: "Fish oil has special omega-3s that help your brain work super well! Learn why it's like giving your brain a power boost!",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "May 22, 2023",
    author: "Dr. Lee Kim",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    tags: ["Brain Health", "Omega-3", "Focus"],
    published: true
  }
];

const BlogManager: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<BlogPost>(defaultBlogPost);
  const [tagInput, setTagInput] = useState("");

  const handleCreateNew = () => {
    setCurrentPost({
      ...defaultBlogPost,
      id: Date.now().toString()
    });
    setIsEditing(true);
  };

  const handleEdit = (post: BlogPost) => {
    setCurrentPost(post);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!currentPost.title || !currentPost.summary) {
      toast.error("Please fill in required fields");
      return;
    }

    if (blogPosts.some(post => post.id === currentPost.id)) {
      // Update existing post
      setBlogPosts(blogPosts.map(post => post.id === currentPost.id ? currentPost : post));
      toast.success("Blog post updated successfully");
    } else {
      // Add new post
      setBlogPosts([...blogPosts, currentPost]);
      toast.success("New blog post created successfully");
    }
    
    setIsEditing(false);
    setCurrentPost(defaultBlogPost);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentPost(defaultBlogPost);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      setBlogPosts(blogPosts.filter(post => post.id !== id));
      toast.success("Blog post deleted successfully");
    }
  };

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && tagInput) {
      e.preventDefault();
      if (!currentPost.tags.includes(tagInput)) {
        setCurrentPost({
          ...currentPost,
          tags: [...currentPost.tags, tagInput]
        });
      }
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setCurrentPost({
      ...currentPost,
      tags: currentPost.tags.filter(t => t !== tag)
    });
  };

  const handleTogglePublish = (id: string, currentStatus: boolean) => {
    setBlogPosts(
      blogPosts.map(post => 
        post.id === id ? { ...post, published: !currentStatus } : post
      )
    );
    toast.success(`Blog post ${currentStatus ? 'unpublished' : 'published'} successfully`);
  };

  if (isEditing) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {currentPost.id ? "Edit Blog Post" : "Create New Blog Post"}
          </h2>
          <div className="space-x-2">
            <button 
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              <Check className="h-5 w-5" />
            </button>
            <button 
              onClick={handleCancel}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={currentPost.title}
              onChange={(e) => setCurrentPost({...currentPost, title: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Summary <span className="text-red-500">*</span>
            </label>
            <textarea
              value={currentPost.summary}
              onChange={(e) => setCurrentPost({...currentPost, summary: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary h-20"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content <span className="text-red-500">*</span>
            </label>
            <textarea
              value={currentPost.content}
              onChange={(e) => setCurrentPost({...currentPost, content: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary h-40"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Author
              </label>
              <input
                type="text"
                value={currentPost.author}
                onChange={(e) => setCurrentPost({...currentPost, author: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="text"
                value={currentPost.date}
                onChange={(e) => setCurrentPost({...currentPost, date: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="text"
              value={currentPost.image}
              onChange={(e) => setCurrentPost({...currentPost, image: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
            {currentPost.image && (
              <div className="mt-2 h-40 rounded-lg overflow-hidden">
                <img src={currentPost.image} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tags
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {currentPost.tags.map((tag, index) => (
                <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm flex items-center">
                  {tag}
                  <button onClick={() => handleRemoveTag(tag)} className="ml-1 text-primary/70 hover:text-primary">
                    ×
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleAddTag}
              placeholder="Type a tag and press Enter"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="published"
              checked={currentPost.published}
              onChange={(e) => setCurrentPost({...currentPost, published: e.target.checked})}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="published" className="ml-2 block text-sm text-gray-700">
              Publish this blog post
            </label>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Blog Posts</h2>
        <button 
          onClick={handleCreateNew}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition flex items-center"
        >
          <PlusCircle className="h-5 w-5 mr-2" /> New Post
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Author
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {blogPosts.map((post) => (
              <tr key={post.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{post.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{post.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{post.author}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span 
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      post.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <button 
                    onClick={() => handleTogglePublish(post.id, post.published)}
                    className={`inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded ${
                      post.published 
                        ? 'text-yellow-700 bg-yellow-100 hover:bg-yellow-200' 
                        : 'text-green-700 bg-green-100 hover:bg-green-200'
                    }`}
                  >
                    {post.published ? 'Unpublish' : 'Publish'}
                  </button>
                  <button 
                    onClick={() => handleEdit(post)}
                    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(post.id)}
                    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200"
                  >
                    <Trash className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogManager;
