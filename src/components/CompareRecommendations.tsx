
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, Info } from "lucide-react";

interface Supplement {
  id: string;
  name: string;
  rating: number;
  price: number;
  benefits: string[];
  dosage: string;
  considerations: string[];
}

interface CompareProps {
  supplements: Supplement[];
}

const CompareRecommendations: React.FC<CompareProps> = ({ supplements }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  
  const handleItemSelect = (position: number, value: string) => {
    const newItems = [...selectedItems];
    newItems[position] = value;
    setSelectedItems(newItems);
  };
  
  const compareItems = selectedItems
    .map(id => supplements.find(s => s.id === id))
    .filter(Boolean) as Supplement[];
    
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-medium">Compare Supplements</h2>
      
      <div className="flex flex-wrap gap-4">
        {[0, 1].map((position) => (
          <div key={position} className="w-full md:w-[calc(50%-0.5rem)]">
            <Select
              value={selectedItems[position]}
              onValueChange={(value) => handleItemSelect(position, value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={`Select supplement ${position + 1}`} />
              </SelectTrigger>
              <SelectContent>
                {supplements.map((supplement) => (
                  <SelectItem 
                    key={supplement.id} 
                    value={supplement.id}
                    disabled={selectedItems.includes(supplement.id) && selectedItems.indexOf(supplement.id) !== position}
                  >
                    {supplement.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>
      
      {compareItems.length === 2 && (
        <div className="rounded-lg border overflow-hidden">
          <Table>
            <TableCaption>Compare supplement details side by side</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Feature</TableHead>
                <TableHead>{compareItems[0].name}</TableHead>
                <TableHead>{compareItems[1].name}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Rating</TableCell>
                <TableCell className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      fill={i < compareItems[0].rating ? "currentColor" : "none"} 
                      className="w-4 h-4 text-yellow-400"
                    />
                  ))}
                </TableCell>
                <TableCell className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      fill={i < compareItems[1].rating ? "currentColor" : "none"}
                      className="w-4 h-4 text-yellow-400"
                    />
                  ))}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Price</TableCell>
                <TableCell>${compareItems[0].price.toFixed(2)}</TableCell>
                <TableCell>${compareItems[1].price.toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Dosage</TableCell>
                <TableCell>{compareItems[0].dosage}</TableCell>
                <TableCell>{compareItems[1].dosage}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Benefits</TableCell>
                <TableCell>
                  <ul className="list-disc pl-5 space-y-1">
                    {compareItems[0].benefits.map((benefit, i) => (
                      <li key={i} className="text-sm">{benefit}</li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell>
                  <ul className="list-disc pl-5 space-y-1">
                    {compareItems[1].benefits.map((benefit, i) => (
                      <li key={i} className="text-sm">{benefit}</li>
                    ))}
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Considerations</TableCell>
                <TableCell>
                  <ul className="list-disc pl-5 space-y-1">
                    {compareItems[0].considerations.map((consideration, i) => (
                      <li key={i} className="text-sm">{consideration}</li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell>
                  <ul className="list-disc pl-5 space-y-1">
                    {compareItems[1].considerations.map((consideration, i) => (
                      <li key={i} className="text-sm">{consideration}</li>
                    ))}
                  </ul>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default CompareRecommendations;
