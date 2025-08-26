import React, { useEffect, useState, useRef } from 'react';
import './CursorGlow.css';

const CursorGlow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const glowRef = useRef(null);
  const secondaryRef = useRef(null);
  const innerRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const updateGlowPosition = (x, y) => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.left = `${x - 60}px`;
          glowRef.current.style.top = `${y - 60}px`;
        }
        if (secondaryRef.current) {
          secondaryRef.current.style.left = `${x - 40}px`;
          secondaryRef.current.style.top = `${y - 40}px`;
        }
        if (innerRef.current) {
          innerRef.current.style.left = `${x - 20}px`;
          innerRef.current.style.top = `${y - 20}px`;
        }
      });
    };

    const handleMouseMove = (e) => {
      updateGlowPosition(e.clientX, e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Main glow effect */}
      <div 
        ref={glowRef}
        className={`cursor-glow ${isVisible ? 'visible' : ''}`}
      />
      
      {/* Secondary glow for extra brightness */}
      <div 
        ref={secondaryRef}
        className={`cursor-glow-secondary ${isVisible ? 'visible' : ''}`}
      />
      
      {/* Inner bright spot */}
      <div 
        ref={innerRef}
        className={`cursor-glow-inner ${isVisible ? 'visible' : ''}`}
      />
    </>
  );
};

export default CursorGlow;
