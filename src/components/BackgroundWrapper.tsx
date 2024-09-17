
import React, { ReactNode } from 'react';

interface BackgroundWrapperProps {
  children: ReactNode;
  background: ReactNode;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children, background }) => {
  const wrapperStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1, // Keep it behind other components
  };

  return (
    <div style={wrapperStyle}>
      {/* The actual background component */}
      {background}

      {/* The content that goes on top of the background */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;