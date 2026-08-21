
import { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRightLeft, Volume2, VolumeX, Play, Pause } from 'lucide-react';

export default function BackhaulSection() {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Changed to false: no autoplay
  const [isEnded, setIsEnded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [isDragging, setIsDragging] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isEnded) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        setIsEnded(false);
        setIsPlaying(true);
        return;
      }
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying, isEnded]);

  // Spacebar to toggle play/pause
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay]);

  // Track video progress
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration && !isDragging) {
        setProgress((video.currentTime / video.duration) * 100);
        setCurrentTime(formatTime(video.currentTime));
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(formatTime(video.duration));
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setIsEnded(true);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
    };
  }, [isDragging]);

  return (
    <section id="backhauling" className="py-24 bg-white overflow-hidden border-t border-neutral-100">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-margix-yellow/10 border border-margix-yellow/30 text-amber-800 text-xs font-bold uppercase tracking-wider mb-6">
            <ArrowRightLeft size={14} className="text-amber-600" />
            The Backhaul Advantage
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight mb-4 lg:mb-6">
            Never Drive Empty Again
          </h2>
          <p className="text-base lg:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Margix AI eliminates deadhead by automatically securing return shipments
            at your destination — turning every return trip into revenue.
          </p>
        </div>
      </div>

      {/* Video Canvas */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full rounded-xl md:rounded-3xl border-2 md:border-4 border-white shadow-xl md:shadow-2xl overflow-hidden bg-neutral-900 group">
          <video 
            ref={videoRef}
            src="/assets/backhaul-video.mp4"
            muted={isMuted}
            playsInline
            preload="auto"
            poster="/assets/backhaul.png"
            className="w-full h-auto object-cover cursor-pointer"
            onClick={togglePlay}
          />

          {/* Big Center Play/Pause or Replay indicator */}
          {(!isPlaying || isEnded) && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-20 cursor-pointer" onClick={togglePlay}>
              <div className="p-4 md:p-6 bg-black/50 backdrop-blur-md rounded-full text-white shadow-2xl transition-transform transform hover:scale-110">
                {isEnded ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><polygon points="10 8 16 12 10 16" fill="currentColor"/></svg>
                ) : (
                  <Play className="w-8 h-8 md:w-12 md:h-12 ml-1 md:ml-2" fill="currentColor" />
                )}
              </div>
              {isEnded && <p className="absolute bottom-[30%] text-white/80 text-sm font-bold">Click to Replay</p>}
            </div>
          )}

          {/* Bottom Controls Bar */}
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-8 pb-3 px-3 sm:pt-10 sm:pb-4 sm:px-5 transition-opacity duration-300 z-30 ${!isPlaying ? 'opacity-100' : 'opacity-100 lg:opacity-0 lg:group-hover:opacity-100'}`}>
            {/* Custom Progress Bar with Large Hit Area */}
            <div 
              className="w-full h-6 flex items-center cursor-pointer mb-1 group/bar"
              onMouseDown={(e) => {
                setIsDragging(true);
                const bar = e.currentTarget;
                const updateProgress = (clientX: number) => {
                  const rect = bar.getBoundingClientRect();
                  const p = Math.max(0, Math.min((clientX - rect.left) / rect.width, 1));
                  setProgress(p * 100);
                  if (videoRef.current && videoRef.current.duration) {
                    videoRef.current.currentTime = p * videoRef.current.duration;
                    setCurrentTime(formatTime(videoRef.current.currentTime));
                  }
                };
                updateProgress(e.clientX);

                const handleMouseMove = (moveEvent: MouseEvent) => updateProgress(moveEvent.clientX);
                const handleMouseUp = () => {
                  setIsDragging(false);
                  window.removeEventListener('mousemove', handleMouseMove);
                  window.removeEventListener('mouseup', handleMouseUp);
                };
                window.addEventListener('mousemove', handleMouseMove);
                window.addEventListener('mouseup', handleMouseUp);
              }}
            >
              <div className="w-full h-1.5 bg-white/20 rounded-full relative transition-all group-hover/bar:h-2.5">
                <div 
                  className="absolute top-0 left-0 h-full bg-margix-yellow rounded-full pointer-events-none"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg scale-0 group-hover/bar:scale-100 transition-transform" />
                </div>
              </div>
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button 
                  onClick={togglePlay}
                  className="p-2 hover:bg-white/10 rounded-full text-white transition-all"
                  title={isPlaying ? "Pause (Space)" : "Play (Space)"}
                >
                  {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
                </button>
                <button 
                  onClick={toggleMute}
                  className="p-2 hover:bg-white/10 rounded-full text-white transition-all"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                <span className="text-white/70 text-xs font-mono ml-1 w-20">
                  {currentTime} / {duration}
                </span>
              </div>
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest hidden sm:block">
                Press Space to {isPlaying ? 'Pause' : 'Play'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
