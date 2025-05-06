import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
  isLight?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  description, 
  className,
  isLight = false
}) => {
  return (
    <div className={cn("text-center", className)}>
      <h2 className={cn(
        "text-3xl font-bold mb-4", 
        isLight ? "text-white" : "text-gray-900"
      )}>
        {title}
      </h2>
      
      {description && (
        <p className={cn(
          "max-w-2xl mx-auto", 
          isLight ? "text-white/80" : "text-gray-600"
        )}>
          {description}
        </p>
      )}
      
      <div className={cn(
        "w-20 h-1 mx-auto mt-4", 
        isLight ? "bg-white" : "bg-secondary"
      )}></div>
    </div>
  );
};

export default SectionHeading;
