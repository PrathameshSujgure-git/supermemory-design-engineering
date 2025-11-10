import React from 'react';

const SupermemoryPrimaryBtn: React.FC = () => {
  return (
    <div
      className='flex justify-center items-center w-[360px] h-[44px] relative gap-3 p-2 rounded-xl'
      style={{
        background:
          'linear-gradient(182.37deg, #0ff0d2 -91.53%, #5bd3fb -67.8%, #1e0ff0 95.17%)',
        boxShadow:
          '1px 1px 2px 0px #1A88FF inset, 0 2px 10px 0 rgba(5, 1, 0, 0.20)',
      }}
    >
      <img
        src='/supermemory-svg-logo.svg'
        alt='Supermemory Logo'
        className='h-5 w-5'
        style={{ minWidth: '1.5rem' }}
      />
      <div className="text-center justify-center text-neutral-50 text-sm font-medium font-['Space_Grotesk'] leading-6">
        Log in with Supermemory
      </div>
    </div>
  );
};

export default SupermemoryPrimaryBtn;
