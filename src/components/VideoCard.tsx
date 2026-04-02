import React from 'react';
import { motion } from 'motion/react';
import { Play, ExternalLink } from 'lucide-react';

interface VideoCardProps {
  videoId: string;
  title: string;
  description?: string;
  index: number;
}

export const VideoCard: React.FC<VideoCardProps> = ({ videoId, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
      className="group relative bg-white rounded-[2rem] overflow-hidden border border-black/5 hover:border-accent/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-accent/5"
    >
      <div className="aspect-[9/16] relative overflow-hidden bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0&modestbranding=1`}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-ink group-hover:text-accent transition-colors">
              {title}
            </h3>
            {description && (
              <p className="mt-2 text-sm text-ink/60 line-clamp-2 leading-relaxed font-medium">
                {description}
              </p>
            )}
          </div>
          <a
            href={`https://youtube.com/shorts/${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-primary hover:bg-accent rounded-xl text-ink/40 hover:text-ink transition-all"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        <div className="mt-6 flex items-center gap-2">
          <div className="flex-1 h-px bg-black/5 group-hover:bg-accent/20 transition-colors" />
          <span className="text-[10px] font-bold text-ink/30 uppercase tracking-widest">
            AI Visual Work
          </span>
        </div>
      </div>
    </motion.div>
  );
};
