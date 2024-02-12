import { ArrowUp } from '@/components/icons/arrow-up';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper';
import { useBreakpoint } from '@/lib/hooks/use-breakpoint';
import { useIsMounted } from '@/lib/hooks/use-is-mounted';
import cn from 'classnames';

type Price = {
  name: number;
  value: number;
};

type LivePriceFeedProps = {
  id: string;
  name: string;
  symbol: string;
  icon: React.ReactElement;
  balance: string;
  usdBalance: string;
  change: string;
  isChangePositive: boolean;
  isBorder?: boolean;
  prices: Price[];
};

export function LivePriceFeed({
  id,
  name,
  symbol,
  icon,
  balance,
  usdBalance,
  change,
  isChangePositive,
  prices,
  isBorder,
}: LivePriceFeedProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-4 rounded-lg bg-light-dark p-5 lg:flex-row',
        {
          'light:border light:border-slate-200': !isBorder,
          'shadow-card': !isBorder,
        }
      )}
    >
      <div className="mt-4 mr-2 flex items-center text-xs font-medium 2xl:text-sm">
        <span
          className="mr-5 truncate tracking-tighter text-gray-400 2xl:w-24 3xl:w-auto"
          title={`${usdBalance} USD`}
        >
          {usdBalance} USD
        </span>
        <span
          className={`flex items-center  ${
            isChangePositive ? 'text-green-500' : 'text-red-500'
          }`}
        >
          <span className={`mr-2 ${!isChangePositive ? 'rotate-180' : ''}`}>
            <ArrowUp />
          </span>
          {change}
        </span>
      </div>

      <div
        className="h-48 w-full pt-4"
        data-hello={isChangePositive ? '#22c55e' : '#D6455D'}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={prices}>
            <defs>
              <linearGradient id={`${name}-${id}`} x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor={isChangePositive ? '#22c55e' : '#D6455D'}
                  stopOpacity={0.5}
                />
                <stop
                  offset="100%"
                  stopColor={isChangePositive ? '#22c55e' : '#D6455D'}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <Area
              type="linear"
              dataKey="value"
              stroke={isChangePositive ? '#22c55e' : '#D6455D'}
              strokeWidth={2.5}
              fill={`url(#${`${name}-${id}`})`}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

interface PriceFeedSliderProps {
  limit: number;
  gridClassName: string;
  priceFeeds: LivePriceFeedProps[];
}

export default function PriceFeedSlider({
  limit,
  priceFeeds,
  gridClassName,
}: PriceFeedSliderProps) {
  const isMounted = useIsMounted();
  const breakpoint = useBreakpoint();

  const sliderBreakPoints = {
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1700: {
      slidesPerView: 2.5,
      spaceBetween: 24,
    },
  };

  return isMounted &&
    ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].indexOf(breakpoint) !== -1 ? (
    <Swiper
      modules={[A11y]}
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={sliderBreakPoints}
      observer={true}
      dir="ltr"
    >
      {priceFeeds.map((item) => (
        <SwiperSlide key={item.id}>
          <LivePriceFeed {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <div className={cn('grid', gridClassName)}>
      {priceFeeds.slice(0, limit ?? 4).map((item) => (
        <LivePriceFeed key={item.id} {...item} />
      ))}
    </div>
  );
}
