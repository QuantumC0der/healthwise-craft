
import React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "lucide-react";

interface HealthMetric {
  id: string;
  name: string;
  currentValue: number;
  targetValue: number;
  unit: string;
  history: { date: string; value: number }[];
}

interface ProgressTrackerProps {
  metrics: HealthMetric[];
  onAddReading: (metricId: string, value: number) => void;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ 
  metrics, 
  onAddReading 
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium">Progress Tracker</h2>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          View History
        </Button>
      </div>
      
      <div className="space-y-5">
        {metrics.map((metric) => {
          const progressPercentage = (metric.currentValue / metric.targetValue) * 100;
          
          return (
            <div key={metric.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{metric.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Current: {metric.currentValue} {metric.unit} / 
                    Target: {metric.targetValue} {metric.unit}
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    const newValue = window.prompt(`Enter new ${metric.name} reading:`);
                    if (newValue && !isNaN(parseFloat(newValue))) {
                      onAddReading(metric.id, parseFloat(newValue));
                    }
                  }}
                >
                  Add Reading
                </Button>
              </div>
              
              <Progress value={progressPercentage} className="h-2" />
              
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0 {metric.unit}</span>
                <span>{metric.targetValue} {metric.unit}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressTracker;
