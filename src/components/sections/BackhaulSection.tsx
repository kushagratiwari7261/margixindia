import { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRightLeft, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BackhaulSection() {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
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
      <section id="backhauling" className="py-20 lg:py-24 bg-white overflow-hidden border-b border-neutral-200">
        {/* Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10">
            <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-orange-900 text-xs font-bold uppercase tracking-wider mb-3">
                  <ArrowRightLeft size={13} className="text-[#FF7D44]" />
                  Return Trip Optimization
                </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight mb-4">
                    Eliminating Empty Deadhead Return Miles
                  </h2>
                    <p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                      Margix matches return freight at your truck's delivery destination through collaborative 3PL capacity pooling — turning empty highway miles into verified revenue.
                    </p>
                  </div>
              </div>

              {/* Video Canvas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
              >
                  <div className="relative w-full rounded-2xl border border-neutral-200 shadow-sm overflow-hidden bg-neutral-900 group">
                    <video
                      ref={videoRef}
                      src="/assets/backhaul-video.mp4"
                      muted={isMuted}
                      playsInline
                      preload="none"
                      poster="/assets/backhaul.png"
                      className="w-full h-auto object-cover"
                    />

                    <div className="absolute inset-0 z-10 cursor-pointer" onClick={togglePlay} />

                    {(!isPlaying || isEnded) && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-20 cursor-pointer" onClick={togglePlay}>
                            <div className="p-4 md:p-5 bg-white/90 backdrop-blur-sm rounded-full text-neutral-900 shadow-lg transition-transform transform hover:scale-105">
                              {isEnded ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><polygon points="10 8 16 12 10 16" fill="currentColor"/></svg>
                              ) : (
                  <Play className="w-8 h-8 ml-1" fill="currentColor" />
                              )}
                            </div>
                            {isEnded && <p className="absolute bottom-[28%] text-white text-xs font-semibold">Click to Replay Demonstration</p>}
                          </div>
          )}

                          {/* Bottom Controls Bar */}
                            <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent pt-8 pb-3 px-4 transition-opacity duration-200 z-30 ${!isPlaying ? 'opacity-100' : 'opacity-100 lg:opacity-0 lg:group-hover:opacity-100'}`}>
                              <div
                                className="w-full h-5 flex items-center cursor-pointer mb-1 group/bar"
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
                                  <div className="w-full h-1 bg-white/30 rounded-full relative transition-all group-hover/bar:h-2">
                                    <div
                                      className="absolute top-0 left-0 h-full bg-[#fdc101] rounded-full pointer-events-none"
                                      style={{ width: `${progress}%` }}
                />
                                  </div>
                                </div>

                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <button
                                      onClick={togglePlay}
                                      className="p-1.5 hover:bg-white/10 rounded-md text-white transition-all cursor-pointer"
                                      title={isPlaying ? "Pause" : "Play"}
                                    >
                                      {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
                                    </button>
                                    <button
                                      onClick={toggleMute}
                                      className="p-1.5 hover:bg-white/10 rounded-md text-white transition-all cursor-pointer"
                                      title={isMuted ? "Unmute" : "Mute"}
                                    >
                                      {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
                                    </button>
                                      <span className="text-white/80 text-xs font-mono">
                                        {currentTime} / {duration}
                                      </span>
                                  </div>
                                    <span className="text-white/60 text-[10px] uppercase tracking-wider hidden sm:block">
                                      Press Space to {isPlaying ? 'Pause' : 'Play'}
                                    </span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </section>
                        );
}
