import React, { useRef, useEffect } from 'react';
import { useGetAllDaos } from '~/graph/'

export default function DaosVisualiser() {
  const canvasRef = useRef(null);
  const { data: daos } = useGetAllDaos();

  console.log('daos', daos)

  function getRand(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  function getNeonColor(num: number) {
     // The RGBA values for neon colors range from 0 to 255
  const neonRed = Math.round(255 * (Math.random() * num / 100));
  const neonGreen = Math.round(255 * (Math.random() * num / 100));
  const neonBlue = 0;

  // The alpha value determines the transparency of the color
  const alpha = 0.8;

  return `rgba(${neonRed}, ${neonGreen}, ${neonBlue}, ${alpha})`;
  }

  useEffect(() => {
    if (!daos) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');


    // draw constantly moving blinking random colored stars, makes stars bigger if dao has more members 
    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        daos.forEach((dao, index) => {
            ctx.beginPath();
            
            ctx.fillStyle = getNeonColor(dao.proposals.length)
            
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;

            // draw twinkling stars shaped like stars, bigger if dao has more proposals
            ctx.arc(x, y, 1 * dao.members.length, 0, 2 * Math.PI);
            ctx.fill();

            // draw moving stars
            ctx.arc(x, y, Math.random() * 2, 0, 2 * Math.PI);
            ctx.fill();
        });
    }, 100);
  }, [daos]);
  
  if (typeof window !== 'undefined') {
   return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
  } else return null;
}
