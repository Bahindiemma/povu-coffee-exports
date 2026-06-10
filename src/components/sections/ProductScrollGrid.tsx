'use client';

/* eslint-disable @next/next/no-img-element */
// A scroll-assembling photo grid (concept from Jhey's pen): the centre image
// starts full-bleed and shrinks into a 5x3 subgrid while the surrounding
// coffee/origin tiles scale and fade in. Plain <img> on the tiles is deliberate
// - the centre tile's width/height are animated, which fights next/image.

import { useLayoutEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

const U = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=800&q=60&auto=format&fit=crop`;

const LAYER_1 = [
  '1559056199-641a0ac8b55e',
  '1610889556528-9a770e32642f',
  '1524350876685-274059332603',
  '1497935586351-b67a49e012bf',
  '1498804103079-a6351b050096',
  '1611854779393-1b2da9d400fe',
];
const LAYER_2 = [
  '1442512595331-e89e73853f31',
  '1509042239860-f550ce710b93',
  '1501339847302-ac426a4a7cbb',
  '1447933601403-0c6688de566e',
  '1485808191679-5f86510681a2',
  '1559525839-b184a4d698c7',
];
const LAYER_3 = ['1453614512568-c4024d13c247', '1517256064527-09c73fc73e38'];
const SCALER = '1504630083234-14187a9df0f5';

// Each layer owns its own scroll-derived opacity + scale. Keeping the transforms
// inside the child (rather than an array of MotionValues in the parent) keeps the
// bindings stable.
function GridLayer({
  progress,
  images,
  scaleStart,
}: {
  progress: MotionValue<number>;
  images: string[];
  scaleStart: number;
}) {
  // Tiles grow from nothing (scale 0 -> 1). At scale 0 they have no size, so
  // they are effectively hidden until they assemble - no separate opacity needed.
  const scale = useTransform(progress, [scaleStart, scaleStart + 0.4], [0, 1]);
  const opacity = useTransform(scale, [0, 0.5], [0, 1]);
  return (
    <motion.div className="psg-layer" style={{ scale, opacity }}>
      {images.map((id) => (
        <div key={id}>
          <img src={U(id)} alt="" loading="lazy" />
        </div>
      ))}
    </motion.div>
  );
}

export default function ProductScrollGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const scalerCellRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ vw: 1280, vh: 800, cw: 240, ch: 300 });

  useLayoutEffect(() => {
    const measure = () => {
      const cell = scalerCellRef.current;
      if (!cell) return;
      setDims({
        vw: window.innerWidth,
        vh: window.innerHeight,
        cw: cell.offsetWidth,
        ch: cell.offsetHeight,
      });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Centre image: full-bleed -> grid cell, finishing by ~85% so the assembled
  // grid holds for a beat before the section releases.
  const scalerW = useTransform(scrollYProgress, [0, 0.85], [dims.vw, dims.cw], { clamp: true });
  const scalerH = useTransform(scrollYProgress, [0, 0.85], [dims.vh, dims.ch], { clamp: true });

  const layers = [
    { images: LAYER_1, scaleStart: 0.28 },
    { images: LAYER_2, scaleStart: 0.38 },
    { images: LAYER_3, scaleStart: 0.48 },
  ];

  return (
    <section ref={sectionRef} className="psg-section" aria-label="POVU coffee gallery">
      <div className="px-6 pt-24 text-center md:pt-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.4em] text-gold"
        >
          Kyegegwa Wild-Type Robusta
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-[clamp(30px,4.4vw,56px)] font-bold leading-tight text-cream"
        >
          From Hill to Cup
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-4 max-w-md font-sans text-[13.5px] text-cream/45"
        >
          Scroll to see the origin come together, frame by frame.
        </motion.p>
      </div>

      <div className="psg-content">
        <div className="psg-grid">
          {layers.map((layer, li) => (
            <GridLayer
              key={li}
              progress={scrollYProgress}
              images={layer.images}
              scaleStart={layer.scaleStart}
            />
          ))}
          <div ref={scalerCellRef} className="psg-scaler">
            <motion.img
              src={U(SCALER)}
              alt="POVU Kyegegwa wild-type Robusta beans"
              style={{ width: scalerW, height: scalerH }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
