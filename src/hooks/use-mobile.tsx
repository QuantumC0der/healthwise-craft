
import { useState, useEffect } from 'react';

/**
 * Hook to detect if the current viewport is mobile sized
 * @param breakpoint The width threshold in pixels to consider "mobile"
 * @returns boolean indicating if the viewport is mobile-sized
 */
export function useMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Set initial value
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Call once to set initial state
    checkMobile();
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile;
}
