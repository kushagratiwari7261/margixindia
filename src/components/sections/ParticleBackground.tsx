import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let animationFrameId: number;

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 120
    };

    let scrollY = window.scrollY;
    let lastTime = performance.now();

    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      init();
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (event.clientY >= rect.top && event.clientY <= rect.bottom) {
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
      } else {
        mouse.x = null;
        mouse.y = null;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      baseX: number;
      baseY: number;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.baseX = x;
        this.baseY = y;
      }

      draw(parallaxOffset: number) {
        if (!ctx) return;
        
        // Seamless scroll resistance wrapping
        let visualY = (this.y + parallaxOffset) % canvas!.height;
        if (visualY < 0) visualY += canvas!.height;

        ctx.beginPath();
        ctx.arc(this.x, visualY, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#FFC107'; // margix-yellow
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#FFC107';
        ctx.fill();
      }

      update(deltaTime: number, parallaxOffset: number) {
        // Wall collision
        if (this.x > canvas!.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas!.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Mouse interaction (Repel)
        if (mouse.x != null && mouse.y != null) {
          // Adjust mouse Y to match the visually wrapped position of the particle
          // so interaction feels correct even when scrolled
          let visualY = (this.y + parallaxOffset) % canvas!.height;
          if (visualY < 0) visualY += canvas!.height;

          let dx = mouse.x - this.x;
          let dy = mouse.y - visualY;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxDistance = mouse.radius;
            const force = (maxDistance - distance) / maxDistance;
            
            // Push away scaled by deltaTime for smoothness
            const directionX = forceDirectionX * force * (7 * deltaTime);
            const directionY = forceDirectionY * force * (7 * deltaTime);
            
            this.x -= directionX;
            this.y -= directionY;
          }
        }

        // Move automatically scaled by deltaTime
        this.x += this.directionX * deltaTime;
        this.y += this.directionY * deltaTime;
        
        this.draw(parallaxOffset);
      }
    }

    function init() {
      particlesArray = [];
      const numberOfParticles = Math.min((canvas!.width * canvas!.height) / 8000, 150);
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 1.5 + 1;
        const x = Math.random() * (canvas!.width - size * 2) + size;
        const y = Math.random() * (canvas!.height - size * 2) + size;
        const directionX = (Math.random() - 0.5) * 2;
        const directionY = (Math.random() - 0.5) * 2;
        particlesArray.push(new Particle(x, y, directionX, directionY, size));
      }
    }

    function animate(currentTime: number) {
      animationFrameId = requestAnimationFrame(animate);
      if (!ctx) return;
      
      // Delta time calculation for 120fps/60fps uniformity
      const deltaTime = (currentTime - lastTime) / 16.666;
      lastTime = currentTime;
      
      // Calculate scroll parallax (0.4 speed factor)
      const parallaxOffset = scrollY * 0.4;

      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(deltaTime, parallaxOffset);
      }
    }

    handleResize();
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
