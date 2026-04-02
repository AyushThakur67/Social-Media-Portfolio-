import React, { useEffect } from 'react';

interface InstagramReelProps {
  id: string;
}

export const InstagramReel: React.FC<InstagramReelProps> = ({ id }) => {
  return (
    <div className="w-full aspect-[9/16] max-w-[400px] mx-auto overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-2xl">
      <iframe
        src={`https://www.instagram.com/reel/${id}/embed/`}
        className="w-full h-full border-none"
        allowTransparency={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        scrolling="no"
      />
    </div>
  );
};
