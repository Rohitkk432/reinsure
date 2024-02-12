import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CurrencySwapIcons from '@/components/ui/currency-swap-icons';
import { CoinList } from '@/components/ui/currency-swap-icons';
import TransactionInfo from '@/components/ui/transaction-info';
import NextLink from 'next/link';
import Image from '../ui/image';

interface FarmListTypes {
  from: string;
  token: any;
  apy: number;
  validity: number;
  underwriter: string;
  liquidity: number;
}

export default function FarmList({
  from,
  token,
  apy,
  validity,
  underwriter,
  liquidity,
  children,
}: React.PropsWithChildren<FarmListTypes>) {
  let [isExpand, setIsExpand] = useState(false);
  return (
    <NextLink href={'/nft-details'}>
      <div className="relative mb-3 overflow-hidden rounded-lg bg-light-dark shadow-card transition-all last:mb-0 hover:shadow-large">
        <div
          className="relative grid h-auto cursor-pointer grid-cols-2 items-center gap-3 py-4 sm:h-20 sm:grid-cols-3 sm:gap-6 sm:py-0 lg:grid-cols-5"
          onClick={() => setIsExpand(!isExpand)}
        >
          <div className="col-span-2 px-4 sm:col-auto sm:px-8 xl:px-4">
            <span>
              <Image
                src={token?.logo}
                width={27}
                height={27}
                objectFit="cover"
                alt="Insuree Image"
              />
            </span>
            {token?.symbol}
          </div>
          <div className="px-4 text-xs font-medium uppercase tracking-wider text-white sm:px-8 sm:text-sm">
            <span className="mb-1 block font-medium text-gray-400 sm:hidden">
              Underwriter
            </span>
            {underwriter?.name}
          </div>
          <div className="px-4 text-xs font-medium uppercase tracking-wider text-white sm:px-8 sm:text-sm">
            <span className="mb-1 block font-medium text-gray-400 sm:hidden">
              APY
            </span>
            {apy + '%'}
          </div>
          <div className="hidden px-4 text-xs font-medium uppercase tracking-wider text-white sm:px-8 sm:text-sm lg:block">
            {liquidity}
          </div>
          <div className="hidden px-4 text-xs font-medium uppercase tracking-wider text-white sm:px-8 sm:text-sm lg:block">
            {new Date(validity).toDateString()}
          </div>
        </div>
        {/* <AnimatePresence initial={false}>
        {isExpand && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className="border-t border-dashed border-gray-700 px-4 py-4 sm:px-8 sm:py-6">
              <div className="mb-6 flex items-center justify-center rounded-lg bg-gray-900 p-3 text-center text-xs font-medium uppercase tracking-wider text-white sm:h-13 sm:text-sm">
                get {from}/{to} lp tokens for staking
              </div>
              <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <TransactionInfo
                    label="Liquidity:"
                    value={liquidity}
                    className="text-xs sm:text-sm"
                  />
                  <TransactionInfo
                    label="Multiplier:"
                    value={multiplier}
                    className="text-xs sm:text-sm"
                  />
                </div>
              </div>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
      </div>
    </NextLink>
  );
}
