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
        const grey = Math.random() * 255;  // Harmaasävyn intensiteetti
        pixels[i] = grey;
        pixels[i + 1] = grey;
        pixels[i + 2] = grey;
        pixels[i + 3] = 30;  // Muutetaan 50 -> 30 hienovaraisemmaksi
      }

      ctx.putImageData(imageData, 0, 0);
      if (!isEnergyMode) {
        requestAnimationFrame(noise);
      }
    }

    function createRipple() {
      // Sijoitetaan partikkelit tasaisemmin koko ruudulle
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      
      // Määritellään kolme kokoluokkaa "tähdille"
      const sizeClass = Math.random();
      let size;
      if (sizeClass < 0.7) {  // 70% todennäköisyys pienille tähdille
        size = 1;
      } else if (sizeClass < 0.95) {  // 25% keskikokoisille
        size = 2;
      } else {  // 5% kirkkaille tähdille
        size = 3;
      }
      
      return {
        x: x,
        y: y,
        size: size,
        life: 1.0,
        // Hitaampi, pehmeämpi liike
        speedX: (Math.random() - 0.5) * 0.1,  // Todella hidas liike
        speedY: (Math.random() - 0.5) * 0.1,
        // Satunnainen kirkkaus tähdille
        brightness: 0.5 + Math.random() * 0.5,  // Vaihteleva kirkkaus
        twinkle: Math.random() * Math.PI  // Tuikkimisen vaihe
      };
    }

    function drawRipples() {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const pixels = imageData.data;

      for (const particle of activeRipples) {
        const x = Math.floor(particle.x);
        const y = Math.floor(particle.y);
        
        // Päivitä tuikkiminen
        particle.twinkle += 0.02;
        const twinkleEffect = (Math.sin(particle.twinkle) + 1) * 0.5;  // 0-1 välillä
        
        if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
          if (particle.size === 1) {
            // Pienimmät tähdet ovat yksittäisiä pisteitä
            drawStar(x, y, particle, pixels, twinkleEffect);
          } else if (particle.size === 2) {
            // Keskikokoiset tähdet ovat pieniä ristejä
            drawCrossStar(x, y, particle, pixels, twinkleEffect);
          } else {
            // Suurimmat tähdet ovat kirkkaita ristejä hohdolla
            drawBrightStar(x, y, particle, pixels, twinkleEffect);
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
    }

    function drawStar(x, y, particle, pixels, twinkle) {
      const index = (y * canvas.width + x) * 4;
      const brightness = particle.brightness * twinkle;
      setPixelColor(index, particle, pixels, brightness);
    }

    function drawCrossStar(x, y, particle, pixels, twinkle) {
      const brightness = particle.brightness * twinkle;
      // Piirrä risti
      for (let i = -1; i <= 1; i++) {
        setPixelIfValid(x + i, y, particle, pixels, brightness);
        setPixelIfValid(x, y + i, particle, pixels, brightness);
      }
    }

    function drawBrightStar(x, y, particle, pixels, twinkle) {
      const brightness = particle.brightness * twinkle;
      // Piirrä kirkas risti hohdolla
      for (let i = -2; i <= 2; i++) {
        setPixelIfValid(x + i, y, particle, pixels, brightness);
        setPixelIfValid(x, y + i, particle, pixels, brightness);
      }
      // Lisää diagonaalit
      setPixelIfValid(x + 1, y + 1, particle, pixels, brightness * 0.7);
      setPixelIfValid(x - 1, y - 1, particle, pixels, brightness * 0.7);
      setPixelIfValid(x + 1, y - 1, particle, pixels, brightness * 0.7);
      setPixelIfValid(x - 1, y + 1, particle, pixels, brightness * 0.7);
    }

    function setPixelIfValid(x, y, particle, pixels, brightness) {
      if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
        const index = (y * canvas.width + x) * 4;
        setPixelColor(index, particle, pixels, brightness);
      }
    }

    function setPixelColor(index, particle, pixels, brightness) {
      pixels[index] = 180 * brightness * particle.life;     // Hieman valkoista
      pixels[index + 1] = 200 * brightness * particle.life; // mukaan
      pixels[index + 2] = 255 * brightness * particle.life; // Eniten sinistä
      pixels[index + 3] = 255 * particle.life;
    }

    function animateRipples() {
      if (isEnergyMode) {
        // Vähennetään partikkelien määrää
        if (Math.random() < 0.1) {  // Vähennetään todennäköisyyttä (0.3 -> 0.1)
          activeRipples.push(createRipple());
        }

        // Päivitä partikkelit
        for (let i = activeRipples.length - 1; i >= 0; i--) {
          const particle = activeRipples[i];
          
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          // Hidastetaan häipymistä
          particle.life -= 0.002;  // Hidastetaan häipymistä (0.02 -> 0.01)
          
          if (particle.life <= 0) {
            activeRipples.splice(i, 1);
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


