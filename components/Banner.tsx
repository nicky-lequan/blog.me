import Image from 'next/image';

export default function Header(): JSX.Element {
  return (
    <div className="flex justify-center">
      <Image
        src="/img/banner.png"
        alt="banner image"
        width={1170}
        height={180}
      />
    </div>
  );
}
