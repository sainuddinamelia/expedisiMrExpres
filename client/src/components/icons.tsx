import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  isWhite?: boolean;
}

export const MRExpressLogo: React.FC<LogoProps> = ({ className, isWhite = false }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 200 80" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="80" fill="transparent"/>
      <text 
        x="5" 
        y="35" 
        fontFamily="Arial, sans-serif" 
        fontWeight="900" 
        fontSize="24" 
        fill={isWhite ? "#FFF" : "#000"}
      >
        CV.
      </text>
      <text 
        x="40" 
        y="35" 
        fontFamily="Arial, sans-serif" 
        fontWeight="900" 
        fontSize="24" 
        fill="#E63946"
      >
        MR
      </text>
      <text 
        x="80" 
        y="35" 
        fontFamily="Arial, sans-serif" 
        fontWeight="900" 
        fontSize="24" 
        fill={isWhite ? "#FFF" : "#000"}
      >
        express
      </text>
      <text 
        x="5" 
        y="60" 
        fontFamily="Arial, sans-serif" 
        fontSize="12" 
        fill={isWhite ? "#FFF" : "#000"}
      >
        EKSPEDISI MUATAN KAPAL LAUT & DARAT
      </text>
    </svg>
  );
};

export const PELNILogo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg 
      className={cn("h-12", className)} 
      viewBox="0 0 150 80" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="150" height="80" fill="transparent"/>
      <path d="M20,25 L40,40 L20,55 Z" fill="#81C4FF"/>
      <text 
        x="50" 
        y="45" 
        fontFamily="Arial, sans-serif" 
        fontWeight="700" 
        fontSize="24" 
        fill="#FFFFFF"
      >
        PELNI
      </text>
      <text 
        x="50" 
        y="65" 
        fontFamily="Arial, sans-serif" 
        fontSize="12" 
        fill="#E63946"
      >
        LOGISTICS
      </text>
    </svg>
  );
};
