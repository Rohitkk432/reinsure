import { RadioGroup } from '@headlessui/react';
import { LoopIcon } from '@/components/icons/loop-icon';
import { SandClock } from '@/components/icons/sand-clock';
import { TagIcon } from '@/components/icons/tag-icon';

const ClaimOptions = [
  {
    name: 'SELF PROCESSING',
    value: 'self',
    icon: <TagIcon className="h-5 w-5 sm:h-auto sm:w-auto" />,
  },
  {
    name: 'Open for bids',
    value: 'bids',
    icon: <LoopIcon className="h-5 w-5 sm:h-auto sm:w-auto" />,
  },
  {
    name: 'TOKEN HOLDER VOTING',
    value: "holder_votes",
    icon: <SandClock className="h-5 w-5 sm:h-auto sm:w-auto" />,
  },
];

type PriceTypeProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function ClaimType({ value, onChange }: PriceTypeProps) {
  return (
    <RadioGroup
      value={value}
      onChange={onChange}
      className="grid grid-cols-3 gap-3"
    >
      {ClaimOptions.map((item, index) => (
        <RadioGroup.Option value={item.value} key={index}>
          {({ checked }) => (
            <span
              className={`relative flex cursor-pointer items-center justify-center rounded-lg border-2 border-solid text-center text-sm font-medium tracking-wider shadow-card transition-all hover:shadow-large bg-light-dark ${
                checked ? 'border-brand' : 'border-light-dark'
              }`}
            >
              <span className="relative flex h-28 flex-col items-center justify-center gap-3 px-2 text-center text-xs uppercase sm:h-36 sm:gap-4 sm:text-sm">
                {item.icon}
                {item.name}
              </span>
            </span>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}
