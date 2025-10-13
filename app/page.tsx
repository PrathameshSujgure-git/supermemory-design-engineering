import Image from 'next/image';
import NovaOrb from '@/components/NovaOrb';
import BgGrad from '@/components/BgGrad';

export default function Home() {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      <div className='relative flex justify-center items-center'>
        <div className='relative flex place-items-center justify-center z-10 blur-[6px]'>
          <NovaOrb size={300} />
        </div>
        <div className='absolute z-0 opacity-40 top-[10px] blur-[10px]'>
          <NovaOrb size={300} />
        </div>
      </div>
    </main>
  );
}
