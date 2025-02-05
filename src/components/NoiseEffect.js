import React, { useEffect, useRef } from 'react';

function NoiseEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let isEnergyMode = false; // Animaatio ei ole päällä aluksi
    let activeColor = null;
    let animationId = null;
    const activeRipples = []; // Taulukko aktiivisille renkaille

    function noise() {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const pixels = imageData.data;

      for (let i = 0; i < pixels.length; i += 4) {
        const grey = Math.random() * 255;
        pixels[i] = grey;
        pixels[i + 1] = grey;
        pixels[i + 2] = grey;
        pixels[i + 3] = 50;
      }

      ctx.putImageData(imageData, 0, 0);
      if (!isEnergyMode) {
        requestAnimationFrame(noise);
      }
    }

    function createRipple() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 0,
        maxRadius: 100 + Math.random() * 50,
        color: activeColor
      };
    }

    function drawRipples() {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const pixels = imageData.data;

      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const index = (y * canvas.width + x) * 4;
          let inRipple = false;

          for (const ripple of activeRipples) {
            const distance = Math.sqrt((x - ripple.x) ** 2 + (y - ripple.y) ** 2);
            if (distance < ripple.radius) {
              inRipple = true;
              break;
            }
          }

          const grey = Math.random() * 255;
          if (inRipple) {
            pixels[index] = activeColor === 'red' ? grey : 0;
            pixels[index + 1] = activeColor === 'green' ? grey : 0;
            pixels[index + 2] = activeColor === 'blue' ? grey : 0;
            pixels[index + 3] = 100; // Värin läpinäkyvyys
          } else {
            pixels[index] = grey;
            pixels[index + 1] = grey;
            pixels[index + 2] = grey;
            pixels[index + 3] = 50;
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
    }

    function animateRipples() {
      if (isEnergyMode) {
        // Lisää uusi rengas satunnaisesti
        if (Math.random() < 0.05) { // 5% todennäköisyys joka framella
          activeRipples.push(createRipple());
        }

        // Päivitä ja poista renkaat
        for (let i = activeRipples.length - 1; i >= 0; i--) {
          const ripple = activeRipples[i];
          ripple.radius += 2; // Renkaitten kasvu
          if (ripple.radius > ripple.maxRadius) {
            activeRipples.splice(i, 1); // Poista rengas, jos se on liian suuri
          }
        }

        drawRipples();
        animationId = requestAnimationFrame(animateRipples);
      }
    }

    noise(); // Aloitetaan kohina

    window.toggleRipple = (color) => {
      activeColor = color; // Aseta aktiivinen väri
      isEnergyMode = !isEnergyMode; // Vaihda energiatila

      if (isEnergyMode) {
        // Aloita animaatio
        animateRipples();
      } else {
        // Pysäytä animaatio
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
        activeRipples.length = 0; // Tyhjennä aktiiviset renkaat
        noise(); // Palauta kohina
      }
    };

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    />
  );
}

export default NoiseEffect;


