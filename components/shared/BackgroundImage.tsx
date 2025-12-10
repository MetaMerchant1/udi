import React from 'react';

interface BackgroundImageProps {
  src: string;
  alt?: string;
  opacity?: number;
  overlay?: 'gradient' | 'dark' | 'light' | 'none';
  overlayOpacity?: number;
  parallax?: boolean;
  zoom?: boolean;
}

export default function BackgroundImage({
  src,
  alt = '',
  opacity = 100,
  overlay = 'gradient',
  overlayOpacity = 70,
  parallax = false,
  zoom = false,
}: BackgroundImageProps) {
  const overlayClasses = {
    gradient: `bg-gradient-to-br from-secondary-800/${overlayOpacity} via-secondary-900/${overlayOpacity} to-[#1c2a2f]/${overlayOpacity}`,
    dark: `bg-black/${overlayOpacity}`,
    light: `bg-white/${overlayOpacity}`,
    none: '',
  };

  return (
    <>
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center ${
          parallax ? 'bg-fixed' : ''
        } ${zoom ? 'group-hover:scale-110 transition-transform duration-700' : ''}`}
        style={{
          backgroundImage: `url('${src}')`,
          opacity: opacity / 100,
        }}
        role="img"
        aria-label={alt}
      ></div>

      {/* Overlay */}
      {overlay !== 'none' && (
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`}></div>
      )}
    </>
  );
}
