'use client';

import React from 'react';
import BgGrad from './BgGrad';
import { motion } from 'motion/react';

interface NovaOrbProps {
  size?: number;
  className?: string;
}

const NovaOrb: React.FC<NovaOrbProps> = ({ size = 200, className = '' }) => {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div
        // className='overflow-hidden flex items-center justify-center relative bg-gradient-to-b from-neutral-900 to-blue-950 rounded-[348.49px] shadow-[0px_0.576923131942749px_1.730769395828247px_0px_rgba(41,95,255,0.10)] shadow-[0px_2.884615421295166px_2.884615421295166px_0px_rgba(41,95,255,0.09)] shadow-[0px_6.923077583312988px_4.038461685180664px_0px_rgba(41,95,255,0.05)] shadow-[0px_12.115384101867676px_4.615385055541992px_0px_rgba(41,95,255,0.01)] shadow-[0px_18.46154022216797px_5.192307949066162px_0px_rgba(41,95,255,0.00)] shadow-[inset_0px_1.875px_5.625px_0px_rgba(10,14,20,1.00)]'
        className='rounded-full relative overflow-hidden border-[black] border-[1px]'
        style={{
          width: size,
          height: size,
          // background: 'linear-gradient(180deg, #0D121A 0%, #132B54 100%)',
          boxShadow: `${(1 * size) / 30}px ${(2 * size) / 30}px ${(4 * size) / 30}px 0 #0A0E14 inset, 0 ${(18.462 * size) / 30}px ${(5.192 * size) / 30}px 0 rgba(41, 95, 255, 0.00), 0 ${(12.115 * size) / 30}px ${(4.615 * size) / 30}px 0 rgba(41, 95, 255, 0.01), 0 ${(6.923 * size) / 30}px ${(4.038 * size) / 30}px 0 rgba(41, 95, 255, 0.05), 0 ${(2.885 * size) / 30}px ${(2.885 * size) / 30}px 0 rgba(41, 95, 255, 0.09), 0 ${(0.577 * size) / 30}px ${(1.731 * size) / 30}px 0 rgba(41, 95, 255, 0.10)`,
        }}
      >
        <div className='rotate-[30.76deg] z-[-1] absolute top-[-30%] left-[-60%]'>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
          >
            <BgGrad size={size * 1.8} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NovaOrb;
