import Image from '@/components/ui/image';
import cn from 'classnames';
import { StaticImageData } from 'next/image';
type ItemType = {
  id?: string | number;
  name: string;
  logo: StaticImageData;
  balance?: string;
  coinType?: string;
};
type CardProps = {
  item: ItemType;
  className?: string;
  variant?: 'small' | 'medium' | 'large';
};

const variants = {
  small: 'w-6 h-6',
  medium: 'w-8 h-8',
  large: 'w-8 h-8 sm:w-10 sm:h-10',
};

function handleImageSize(variant: string) {
  let size: number = 0;
  if (variant === 'large') {
    size = 40;
  } else if (variant === 'medium') {
    size = 32;
  } else {
    size = 24;
  }
  return size;
}

export default function ListCard({
  item,
  className = 'p-3 tracking-wider rounded-lg sm:p-4',
  variant = 'small',
}: CardProps) {
  const { name, logo, balance, coinType } = item ?? {};
  return (
    <div
      className={cn(
        'xl:text-xs text-2xs flex items-center justify-between bg-light-dark shadow-card',
        className
      )}
    >
      <div className="flex items-center">
        <div className={cn('rounded-full', variants[variant])}>
          <Image
            src={logo}
            alt={name}
            width={handleImageSize(variant)}
            height={handleImageSize(variant)}
          />
        </div>

        <div className="ml-2">
          {name}
          {coinType && (
            <span className="xl:text-xs text-2xs block pt-0.5 font-normal capitalize text-gray-400">
              {coinType}
            </span>
          )}
        </div>
      </div>
      <div className="overflow-hidden text-ellipsis pl-2 -tracking-wider">
        {balance}
      </div>
    </div>
  );
}
