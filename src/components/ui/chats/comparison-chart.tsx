import { useState, Fragment } from 'react';
import { format } from 'date-fns';
import cn from 'classnames';
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Bitcoin } from '@/components/icons/bitcoin';
import { EthereumDark } from '@/components/icons/ethereum-dark';
import { SwapIcon } from '@/components/icons/swap-icon';
import { Refresh } from '@/components/icons/refresh';
import Button from '@/components/ui/button';
import { ArrowUp } from '@/components/icons/arrow-up';
import { RadioGroup } from '@/components/ui/radio-group';
import { motion } from 'framer-motion';
import { useBreakpoint } from '@/lib/hooks/use-breakpoint';
import Image from 'next/image';
import {
  weeklyComparison,
  monthlyComparison,
  yearlyComparison,
  orderbookData,
} from '@/data/static/price-history';
import { Usdc } from '@/components/icons/usdc';

function CustomAxis({ x, y, payload }: any) {
  return (
    <g transform={`translate(${x},${y})`} className="text-sm text-gray-400">
      <text x={0} y={0} dy={25} textAnchor="middle" fill="currentColor">
        {payload.value}
      </text>
    </g>
  );
}

interface RadioOptionProps {
  value: string;
}

function RadioGroupOption({ value }: RadioOptionProps) {
  return (
    <RadioGroup.Option value={value}>
      {({ checked }) => (
        <span
          className={`relative flex h-8 cursor-pointer items-center justify-center rounded-lg px-3 text-sm uppercase tracking-wider ${
            checked ? 'text-white' : 'text-brand dark:text-gray-400'
          }`}
        >
          {checked && (
            <motion.span
              className="absolute bottom-0 left-0 right-0 h-full w-full rounded-lg bg-brand shadow-large"
              layoutId="statusIndicator"
            />
          )}
          <span className="relative">{value}</span>
        </span>
      )}
    </RadioGroup.Option>
  );
}

export default function ComparisonChart() {
  const breakpoint = useBreakpoint();
  const [price, setPrice] = useState(6.2);
  const [date, setDate] = useState(1624147200);
  const [status, setStatus] = useState('Month');
  const [chartData, setChartData] = useState(orderbookData);
  const [priceDiff, setPriceDiff] = useState(-1.107);
  const [percentage, setPercentage] = useState('2.22%');
  const [toggleCoin, setToggleCoin] = useState(false);
  const formattedDate = format(new Date(date * 1000), 'MMMM d, yyyy hh:mma');

  const handleOnChange = (value: string) => {
    setStatus(value);
    switch (value) {
      case 'Week':
        setChartData(weeklyComparison);
        break;
      case 'Month':
        setChartData(monthlyComparison);
        break;
      case 'Year':
        setChartData(yearlyComparison);
        break;
      default:
        setChartData(monthlyComparison);
        break;
    }
  };

  return (
    <div className="rounded-lg bg-light-dark p-6 shadow-card sm:p-8">
      <div className="flex flex-col-reverse justify-between gap-8 md:items-start lg:flex-row lg:items-center lg:gap-4">
        <div>
          <div className="text-sm uppercase tracking-wider text-gray-400 sm:text-base">
            <span className="flex items-center gap-2.5">
              <span
                className={cn(
                  'flex items-center gap-2.5',
                  toggleCoin ? 'flex-row-reverse' : 'flex-row'
                )}
              >
                <span>
                  <Image
                    src={
                      'https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png'
                    }
                    width={30}
                    height={30}
                    alt="Token"
                  />
                  <Usdc className="h-auto w-7 lg:w-9" />
                </span>
              </span>
              <span
                className={cn(
                  'flex items-end font-medium text-gray-400',
                  toggleCoin ? 'flex-row-reverse' : 'flex-row'
                )}
              >
                <span>GFC</span>/<span>USDC</span>
              </span>
            </span>
          </div>
          <div className="mt-5 flex items-end gap-3 text-base font-medium text-white sm:text-xl lg:flex-wrap 2xl:flex-nowrap">
            <span className={cn('flex items-center gap-4')}>
              {' '}
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Last traded price:{' '}
              </span>
              <span>62.3$</span>
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 h-56 sm:mt-8 md:h-96 lg:h-[380px] xl:h-[402px] 2xl:h-[30rem] 3xl:h-[496px] 4xl:h-[580px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={200}
            height={200}
            data={chartData}
            barSize={25}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 5,
            }}
            onMouseMove={(data) => {
              if (data.isTooltipActive) {
                setDate(
                  data.activePayload && data.activePayload[0].payload.date
                );
                setPrice(
                  data.activePayload && data.activePayload[0].payload.btc
                );
                setPriceDiff(
                  data.activePayload && data.activePayload[0].payload.diff
                );
                setPercentage(
                  data.activePayload && data.activePayload[0].payload.percentage
                );
              }
            }}
          >
            {/* <XAxis dataKey="name" tick={<CustomAxis />} /> */}
            <Tooltip
              content={<></>}
              cursor={{
                strokeWidth: 0,
                fill: '#1F2937',
              }}
            />
            <CartesianGrid
              vertical={false}
              strokeDasharray="10 5"
              stroke="#374151"
            />
            <Bar dataKey="btc" stackId="a" fill="rgb(34 197 94)" />
            <Bar dataKey="eth" stackId="a" fill="rgb(239 68 68)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
