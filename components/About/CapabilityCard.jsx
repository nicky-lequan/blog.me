import Image from 'next/image';
import {Tilt} from 'react-tilt';
import {useIsDesktop} from '@/hooks/useIsDesktop';

function CapabilityCard({title, iconSrc}) {
  const isDesktop = useIsDesktop();

  const card = (
    <figure className="w-full md:w-[12.5rem] max-w-md green-violet-gradient p-[0.063rem] rounded-[1.25rem] drop-shadow-xl">
      <div className="bg-white/90 dark:bg-slate-950/90 rounded-[1.25rem] py-4 md:py-5 px-12 min-h-[12rem] md:min-h-[14.5rem] flex flex-col justify-evenly items-center">
        <Image
          src={iconSrc}
          alt={title}
          width={100}
          height={100}
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-[1.1rem] md:text-[1.25rem] font-bold text-center">
          {title}
        </h3>
      </div>
    </figure>
  );

  return isDesktop ? <Tilt>{card}</Tilt> : card;
}

export default CapabilityCard;
