import Button from '@/components/ui/button';
import FarmList from '@/components/farms/list';
import ActiveLink from '@/components/ui/links/active-link';
import { FarmsData } from '@/data/static/farms-data';
import { Fragment, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { Transition } from '@/components/ui/transition';
import { RadioGroup } from '@/components/ui/radio-group';
import { Listbox } from '@/components/ui/listbox';
import { Switch } from '@/components/ui/switch';
import { ChevronDown } from '@/components/icons/chevron-down';
import { SearchIcon } from '@/components/icons/search';
import routes from '@/config/routes';
import axios from 'axios';
import Loader from '../ui/loader';

const sort = [
  { id: 1, name: 'Hot' },
  { id: 2, name: 'APY' },
  { id: 3, name: 'Latest' },
];

function SortList() {
  const [selectedItem, setSelectedItem] = useState(sort[0]);
  return (
    <div className="relative w-full lg:w-auto">
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <Listbox.Button className="flex h-11 w-full items-center justify-between rounded-lg bg-light-dark px-4 text-sm text-white md:w-36 lg:w-40 xl:w-48">
          {selectedItem.name}
          <ChevronDown />
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0 translate-y-2"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 -translate-y-0"
          leaveTo="opacity-0 translate-y-2"
        >
          <Listbox.Options className="absolute right-0 z-20 mt-2 w-full min-w-[150px] origin-top-right rounded-lg bg-[rgba(0,0,0,0.5)] p-3 px-1.5 shadow-large shadow-gray-900 backdrop-blur">
            {sort.map((item) => (
              <Listbox.Option key={item.id} value={item}>
                {({ selected }) => (
                  <div
                    className={`block cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-white transition  ${
                      selected ? 'my-1 bg-gray-700' : 'hover:bg-gray-700'
                    }`}
                  >
                    {item.name}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}

function Search() {
  return (
    <form
      className="relative flex w-full rounded-full lg:w-auto lg:basis-72 xl:w-48"
      noValidate
      role="search"
    >
      <label className="flex w-full items-center">
        <input
          className="h-11 w-full appearance-none rounded-lg border-2 border-gray-600 bg-transparent py-1 pr-5 pl-10 text-sm tracking-tighter text-white outline-none transition-all placeholder:text-gray-500 focus:border-gray-500"
          placeholder="Search farms"
          autoComplete="off"
        />
        <span className="pointer-events-none absolute left-0 flex h-full w-8 cursor-pointer items-center justify-center pl-2 text-gray-600 text-gray-500 hover:text-gray-900 sm:pl-3">
          <SearchIcon className="h-4 w-4" />
        </span>
      </label>
    </form>
  );
}

function StackedSwitch() {
  const [isStacked, setIsStacked] = useState(false);
  return (
    <Switch
      checked={isStacked}
      onChange={setIsStacked}
      className="flex items-center gap-2 text-gray-400 sm:gap-3"
    >
      <div
        className={cn(
          isStacked ? 'bg-white' : 'bg-gray-500',
          'relative inline-flex h-[22px] w-10 items-center rounded-full transition-colors duration-300'
        )}
      >
        <span
          className={cn(
            isStacked
              ? 'translate-x-5 bg-light-dark'
              : 'translate-x-0.5 bg-light-dark',
            'inline-block h-[18px] w-[18px] transform rounded-full bg-white transition-transform duration-200'
          )}
        />
      </div>
      <span className="inline-flex text-xs font-medium uppercase tracking-wider text-white sm:text-sm">
        Stacked only
      </span>
    </Switch>
  );
}

function Status({ status, setStatus }: any) {
  return (
    <RadioGroup
      value={status}
      onChange={setStatus}
      className="flex items-center sm:gap-3"
    >
      <RadioGroup.Option value="live">
        {({ checked }) => (
          <span
            className={`relative flex h-11 w-20 cursor-pointer items-center justify-center rounded-lg text-center text-xs font-medium tracking-wider sm:w-24 sm:text-sm ${
              checked ? 'text-white' : 'text-white/50'
            }`}
          >
            {checked && (
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-full w-full rounded-lg bg-brand shadow-large"
                layoutId="statusIndicator"
              />
            )}
            <span className="relative">LIVE</span>
          </span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="finished">
        {({ checked }) => (
          <span
            className={`relative flex h-11 w-20 cursor-pointer items-center justify-center rounded-lg text-center text-xs font-medium tracking-wider sm:w-24 sm:text-sm ${
              checked ? 'text-white' : 'text-white/50'
            }`}
          >
            {checked && (
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-full w-full rounded-lg bg-brand shadow-large"
                layoutId="statusIndicator"
              />
            )}
            <span className="relative">FINISHED</span>
          </span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
}

export default function Farms() {
  const [marketData, setMarketData] = useState([]);
  const [status, setStatus] = useState('live');
  const [loading, setLoading] = useState(false);

  const getMarketData = async () => {
    setLoading(true);
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://8e7c-122-172-83-203.ngrok-free.app/marketplace/list',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setMarketData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  useEffect(() => {
    getMarketData();
  }, []);

  return (
    <>
      {loading && (
        <div className="absolute inset-0 flex h-full w-full items-center justify-center">
          <Loader variant="blink" />
        </div>
      )}
      {!loading && (
        <div className="mx-auto w-full">
          <div
            className={cn(
              'mb-6 flex flex-col justify-between gap-4',
              'md:flex-row md:items-center md:gap-6'
            )}
          >
            <div className="flex items-center justify-between gap-4">
              <Status />
              <div className={cn('md:hidden')}>
                <StackedSwitch />
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 lg:gap-8">
              <div className={cn('hidden shrink-0 ', 'md:block')}>
                <StackedSwitch />
              </div>
              <Search />
              <SortList />
            </div>
          </div>

          <div className="mb-3 hidden grid-cols-3 gap-6 rounded-lg bg-light-dark shadow-card sm:grid lg:grid-cols-5">
            <span className="px-6 py-6 text-sm tracking-wider text-gray-300">
              Token
            </span>
            <span className="px-6 py-6 text-sm tracking-wider text-gray-300">
              Underwriter
            </span>
            <span className="px-6 py-6 text-sm tracking-wider text-gray-300">
              APY
            </span>
            <span className="hidden px-6 py-6 text-sm tracking-wider text-gray-300 lg:block">
              Liquidity
            </span>
            <span className="hidden px-4 py-6 text-sm tracking-wider text-gray-500 text-gray-300 lg:block">
              Validity
            </span>
          </div>

          {status === 'live' &&
            marketData.map((item: any) => (
              <FarmList
                key={item?._id}
                from={'BTC'}
                token={item?.token_name}
                underwriter={item?.underwriter}
                apy={item.apy}
                liquidity={item?.liquidity}
                validity={item?.validity.$date}
              />
            ))}
        </div>
      )}
    </>
  );
}
