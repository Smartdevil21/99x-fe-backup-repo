import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.unobserve(ref.current);
        }
      },
    //   {
    //     rootMargin: '0px 0px 100px 0px',
    //   }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <img
      ref={ref}
      src={isLoaded ? src : ''}
      alt={alt}
      data-src={src}
      loading="lazy"
    //   style={{  width: '100%', objectFit: 'cover' }}
    />
  );
}
export default LazyImage