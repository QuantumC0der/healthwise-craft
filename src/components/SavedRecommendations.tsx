
import React from "react";
import { Button } from "@/components/ui/button";
import { Bookmark, Trash2 } from "lucide-react";

interface SavedItem {
  id: string;
  name: string;
  description: string;
  dateAdded: string;
}

interface SavedRecommendationsProps {
  items: SavedItem[];
  onRemove: (id: string) => void;
}

const SavedRecommendations: React.FC<SavedRecommendationsProps> = ({ 
  items, 
  onRemove 
}) => {
  if (items.length === 0) {
    return (
      <div className="text-center p-6 bg-muted/30 rounded-lg">
        <Bookmark className="mx-auto h-12 w-12 text-muted-foreground mb-3" />
        <h3 className="text-lg font-medium mb-2">No saved recommendations</h3>
        <p className="text-muted-foreground">
          Items you save will appear here for easy reference
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-medium mb-4">Saved Recommendations</h3>
      
      {items.map((item) => (
        <div 
          key={item.id}
          className="flex items-start justify-between p-4 rounded-lg bg-card border border-border"
        >
          <div>
            <h4 className="font-medium">{item.name}</h4>
            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
            <p className="text-xs text-muted-foreground mt-2">Added: {item.dateAdded}</p>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => onRemove(item.id)}
            className="text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default SavedRecommendations;
