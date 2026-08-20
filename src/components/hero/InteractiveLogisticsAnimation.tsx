import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Play, Pause, RefreshCw, Zap } from 'lucide-react';

export default function InteractiveLogisticsAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [stage, setStage] = useState<'initial' | 'loading' | 'inefficient' | 'optimizing' | 'optimized' | 'transit' | 'backhaul'>('loading');
  const [utilization, setUtilization] = useState(0);
  
  const truckControls = useAnimation();
  
  // Animation loop logic
  useEffect(() => {
    if (!isPlaying) return;
    
    let isMounted = true;
    
    const runAnimation = async () => {
      while (isMounted && isPlaying) {
        // Stage 1: Loading
        setStage('loading');
        setUtilization(24);
        await new Promise(r => setTimeout(r, 1500));
        
        // Stage 2: Inefficient Load
        if (!isMounted || !isPlaying) break;
        setStage('inefficient');
        setUtilization(68);
        await new Promise(r => setTimeout(r, 2000));
        
        // Stage 3: Optimizing
        if (!isMounted || !isPlaying) break;
        setStage('optimizing');
        // Animate utilization up
        for (let i = 68; i <= 97; i += 3) {
          if (!isMounted || !isPlaying) break;
          setUtilization(i > 97 ? 97 : i);
          await new Promise(r => setTimeout(r, 100));
        }
        setUtilization(97);
        
        // Stage 4: Optimized
        if (!isMounted || !isPlaying) break;
        setStage('optimized');
        await new Promise(r => setTimeout(r, 2000));
        
        // Stage 5: Transit & Backhaul
        if (!isMounted || !isPlaying) break;
        setStage('transit');
        await truckControls.start({ x: 300, opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } });
        
        if (!isMounted || !isPlaying) break;
        setStage('backhaul');
        truckControls.set({ x: -300, opacity: 0 });
        await truckControls.start({ x: 0, opacity: 1, transition: { duration: 1.5, ease: "easeOut" } });
        
        await new Promise(r => setTimeout(r, 2000));
      }
    };
    
    runAnimation();
    
    return () => { isMounted = false; };
  }, [isPlaying, truckControls]);

  const handleOptimize = () => {
    setIsPlaying(true);
    setStage('optimizing');
    setUtilization(68); // start point for manual trigger
  };

  return (
    <div className="relative w-full h-[500px] bg-margix-gray rounded-2xl overflow-hidden border border-white/10 shadow-2xl p-6 flex flex-col justify-between">
      
      {/* Top Metrics Row */}
      <div className="flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${stage === 'optimizing' || stage === 'optimized' ? 'bg-margix-yellow' : 'bg-gray-500'} animate-pulse`} />
          <span className="text-white font-medium text-sm">
            {stage === 'loading' && 'Shipment Data Received...'}
            {stage === 'inefficient' && 'Current Utilization: Suboptimal'}
            {stage === 'optimizing' && 'Margix AI: Load Optimization...'}
            {stage === 'optimized' && 'Load Utilization Maximized'}
            {stage === 'transit' && 'Route Optimization Active'}
            {stage === 'backhaul' && 'Backhaul Opportunity Found'}
          </span>
        </div>
        <div className="bg-margix-black/50 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-lg">
          <span className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Load Utilization</span>
          <div className="text-2xl font-bold text-white flex items-baseline gap-1">
            {utilization}%
            {stage === 'optimized' && <Zap size={16} className="text-margix-yellow" />}
          </div>
        </div>
      </div>

      {/* Main Animation Area */}
      <div className="flex-1 relative flex items-center justify-center">
        <motion.div 
          animate={truckControls}
          className="relative w-80 h-40 border-2 border-gray-600 rounded-r-xl border-l-0 flex items-end p-2"
        >
          {/* Truck Cabin Mock */}
          <div className="absolute right-[-60px] bottom-[-2px] w-14 h-24 bg-gray-700 rounded-t-xl rounded-br-xl border-2 border-gray-600" />
          <div className="absolute right-[-45px] bottom-2 w-8 h-8 rounded-full bg-margix-black border-2 border-gray-500" />
          <div className="absolute left-10 bottom-[-15px] w-8 h-8 rounded-full bg-margix-black border-2 border-gray-500" />
          <div className="absolute left-40 bottom-[-15px] w-8 h-8 rounded-full bg-margix-black border-2 border-gray-500" />
          
          {/* Cargo Boxes Area */}
          <div className="w-full h-full relative overflow-hidden">
            {/* Box 1 */}
            <motion.div 
              className="absolute bg-blue-500/80 border border-blue-400 rounded-sm"
              animate={{
                width: 60,
                height: 60,
                bottom: 0,
                left: stage === 'loading' ? -100 : (stage === 'inefficient' ? 10 : 0),
                opacity: stage === 'initial' ? 0 : 1,
              }}
              transition={{ type: 'spring', stiffness: 100 }}
            />
            {/* Box 2 */}
            <motion.div 
              className="absolute bg-purple-500/80 border border-purple-400 rounded-sm"
              animate={{
                width: 80,
                height: 40,
                bottom: stage === 'inefficient' ? 0 : 60,
                left: stage === 'loading' ? -100 : (stage === 'inefficient' ? 80 : 0),
                opacity: stage === 'initial' ? 0 : 1,
              }}
              transition={{ type: 'spring', stiffness: 90, delay: 0.1 }}
            />
            {/* Box 3 */}
            <motion.div 
              className="absolute bg-margix-yellow/90 border border-yellow-300 rounded-sm"
              animate={{
                width: 50,
                height: 100,
                bottom: 0,
                left: stage === 'loading' ? -100 : (stage === 'inefficient' ? 180 : 60),
                opacity: stage === 'initial' ? 0 : 1,
              }}
              transition={{ type: 'spring', stiffness: 80, delay: 0.2 }}
            />
             {/* Box 4 - the optimization filler */}
             <motion.div 
              className="absolute bg-green-500/80 border border-green-400 rounded-sm"
              animate={{
                width: 100,
                height: 50,
                bottom: stage === 'optimizing' || stage === 'optimized' ? 0 : 120,
                left: stage === 'optimizing' || stage === 'optimized' ? 110 : 50,
                opacity: stage === 'optimizing' || stage === 'optimized' ? 1 : (stage === 'inefficient' ? 0.3 : 0),
              }}
              transition={{ type: 'spring', stiffness: 85, delay: 0.3 }}
            />
            {/* Box 5 - Backhaul */}
            <motion.div 
              className="absolute bg-orange-500/80 border border-orange-400 rounded-sm"
              animate={{
                width: 120,
                height: 80,
                bottom: 0,
                left: 50,
                opacity: stage === 'backhaul' ? 1 : 0,
              }}
              transition={{ type: 'spring', stiffness: 100 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Controls Row */}
      <div className="flex justify-center gap-4 z-10">
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button 
          onClick={handleOptimize}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-margix-yellow text-margix-black font-semibold hover:bg-yellow-400 transition-colors shadow-[0_0_15px_rgba(255,193,7,0.4)]"
        >
          <Zap size={18} />
          Optimize Load
        </button>
        <button 
          onClick={() => { setStage('initial'); setIsPlaying(true); }}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <RefreshCw size={20} />
        </button>
      </div>
    </div>
  );
}
