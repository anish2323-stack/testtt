import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

interface PageTransitionWrapperProps {
  children: React.ReactNode;
  pageName: string;
}

const PageTransitionWrapper: React.FC<PageTransitionWrapperProps> = ({ children, pageName }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setShowContent(false);
    
    // Reset loading state when page changes
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [pageName]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  if (isLoading) {
    return (
      <LoadingScreen 
        onLoadingComplete={handleLoadingComplete}
        isPageTransition={true}
        currentPage={pageName}
      />
    );
  }

  return (
    <div className={`transition-all duration-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {children}
    </div>
  );
};

export default PageTransitionWrapper;