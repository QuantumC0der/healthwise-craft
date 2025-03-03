
import React, { useState } from "react";
import { PlusCircle, Edit, Trash, Check, X } from "lucide-react";
import { toast } from "sonner";
import supplements from "@/data/supplements";

interface Supplement {
  id: string;
  name: string;
  type: string;
  description: string;
  benefits: string[];
  dosage: string;
  sideEffects: string[];
  price: {
    value: number;
    currency: string;
  };
  brand: string;
  rating: number;
  image: string;
  tags: string[];
  matchScore: number;
  category: string;
}

const defaultSupplement: Supplement = {
  id: "",
  name: "",
  type: "",
  description: "",
  benefits: [],
  dosage: "",
  sideEffects: [],
  price: {
    value: 0,
    currency: "USD"
  },
  brand: "",
  rating: 4.5,
  image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1829&auto=format&fit=crop",
  tags: [],
  matchScore: 0,
  category: ""
};

const SupplementManager: React.FC = () => {
  const [allSupplements, setAllSupplements] = useState<Supplement[]>(supplements);
  const [isEditing, setIsEditing] = useState(false);
  const [currentSupplement, setCurrentSupplement] = useState<Supplement>(defaultSupplement);
  const [tagInput, setTagInput] = useState("");
  const [benefitInput, setBenefitInput] = useState("");
  const [sideEffectInput, setSideEffectInput] = useState("");

  const handleCreateNew = () => {
    setCurrentSupplement({
      ...defaultSupplement,
      id: `s${Date.now()}`
    });
    setIsEditing(true);
  };

  const handleEdit = (supplement: Supplement) => {
    setCurrentSupplement(supplement);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!currentSupplement.name || !currentSupplement.description || !currentSupplement.category) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (allSupplements.some(sup => sup.id === currentSupplement.id)) {
      // Update existing supplement
      setAllSupplements(allSupplements.map(sup => 
        sup.id === currentSupplement.id ? currentSupplement : sup
      ));
      toast.success("Supplement updated successfully");
    } else {
      // Add new supplement
      setAllSupplements([...allSupplements, currentSupplement]);
      toast.success("New supplement created successfully");
    }
    
    setIsEditing(false);
    setCurrentSupplement(defaultSupplement);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentSupplement(defaultSupplement);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this supplement?")) {
      setAllSupplements(allSupplements.filter(sup => sup.id !== id));
      toast.success("Supplement deleted successfully");
    }
  };

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && tagInput) {
      e.preventDefault();
      if (!currentSupplement.tags.includes(tagInput)) {
        setCurrentSupplement({
          ...currentSupplement,
          tags: [...currentSupplement.tags, tagInput]
        });
      }
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setCurrentSupplement({
      ...currentSupplement,
      tags: currentSupplement.tags.filter(t => t !== tag)
    });
  };

  const handleAddBenefit = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && benefitInput) {
      e.preventDefault();
      if (!currentSupplement.benefits.includes(benefitInput)) {
        setCurrentSupplement({
          ...currentSupplement,
          benefits: [...currentSupplement.benefits, benefitInput]
        });
      }
      setBenefitInput("");
    }
  };

  const handleRemoveBenefit = (benefit: string) => {
    setCurrentSupplement({
      ...currentSupplement,
      benefits: currentSupplement.benefits.filter(b => b !== benefit)
    });
  };

  const handleAddSideEffect = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && sideEffectInput) {
      e.preventDefault();
      if (!currentSupplement.sideEffects.includes(sideEffectInput)) {
        setCurrentSupplement({
          ...currentSupplement,
          sideEffects: [...currentSupplement.sideEffects, sideEffectInput]
        });
      }
      setSideEffectInput("");
    }
  };

  const handleRemoveSideEffect = (effect: string) => {
    setCurrentSupplement({
      ...currentSupplement,
      sideEffects: currentSupplement.sideEffects.filter(e => e !== effect)
    });
  };

  if (isEditing) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {currentSupplement.id ? "Edit Supplement" : "Create New Supplement"}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={currentSupplement.name}
                onChange={(e) => setCurrentSupplement({...currentSupplement, name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={currentSupplement.category}
                onChange={(e) => setCurrentSupplement({...currentSupplement, category: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <input
                type="text"
                value={currentSupplement.type}
                onChange={(e) => setCurrentSupplement({...currentSupplement, type: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Brand
              </label>
              <input
                type="text"
                value={currentSupplement.brand}
                onChange={(e) => setCurrentSupplement({...currentSupplement, brand: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={currentSupplement.description}
              onChange={(e) => setCurrentSupplement({...currentSupplement, description: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary h-24"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dosage
            </label>
            <input
              type="text"
              value={currentSupplement.dosage}
              onChange={(e) => setCurrentSupplement({...currentSupplement, dosage: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (USD)
              </label>
              <input
                type="number"
                value={currentSupplement.price.value}
                onChange={(e) => setCurrentSupplement({
                  ...currentSupplement, 
                  price: {...currentSupplement.price, value: parseFloat(e.target.value) || 0}
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                step="0.01"
                min="0"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rating (1-5)
              </label>
              <input
                type="number"
                value={currentSupplement.rating}
                onChange={(e) => setCurrentSupplement({
                  ...currentSupplement, 
                  rating: Math.min(5, Math.max(1, parseFloat(e.target.value) || 1))
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                step="0.1"
                min="1"
                max="5"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="text"
              value={currentSupplement.image}
              onChange={(e) => setCurrentSupplement({...currentSupplement, image: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
            {currentSupplement.image && (
              <div className="mt-2 h-40 rounded-lg overflow-hidden">
                <img src={currentSupplement.image} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Benefits
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {currentSupplement.benefits.map((benefit, index) => (
                <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm flex items-center">
                  {benefit}
                  <button onClick={() => handleRemoveBenefit(benefit)} className="ml-1 text-green-700 hover:text-green-900">
                    ×
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              value={benefitInput}
              onChange={(e) => setBenefitInput(e.target.value)}
              onKeyDown={handleAddBenefit}
              placeholder="Type a benefit and press Enter"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Side Effects
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {currentSupplement.sideEffects.map((effect, index) => (
                <span key={index} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm flex items-center">
                  {effect}
                  <button onClick={() => handleRemoveSideEffect(effect)} className="ml-1 text-yellow-700 hover:text-yellow-900">
                    ×
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              value={sideEffectInput}
              onChange={(e) => setSideEffectInput(e.target.value)}
              onKeyDown={handleAddSideEffect}
              placeholder="Type a side effect and press Enter"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tags
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {currentSupplement.tags.map((tag, index) => (
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
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Supplements</h2>
        <button 
          onClick={handleCreateNew}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition flex items-center"
        >
          <PlusCircle className="h-5 w-5 mr-2" /> New Supplement
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rating
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {allSupplements.map((supplement) => (
              <tr key={supplement.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img className="h-10 w-10 rounded-full object-cover" src={supplement.image} alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{supplement.name}</div>
                      <div className="text-sm text-gray-500">{supplement.brand}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{supplement.category}</div>
                  <div className="text-sm text-gray-500">{supplement.type}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {supplement.price.currency} {supplement.price.value.toFixed(2)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{supplement.rating.toFixed(1)} / 5</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <button 
                    onClick={() => handleEdit(supplement)}
                    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(supplement.id)}
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

export default SupplementManager;
