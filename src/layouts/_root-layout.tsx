import dynamic from 'next/dynamic';
import Loader from '@/components/ui/loader';
import { useIsMounted } from '@/lib/hooks/use-is-mounted';
import ContractProcess from '@/components/contract-overlay/contract-process';

// dynamic imports
const ModernLayout = dynamic(() => import('@/layouts/_modern'), {
  loading: () => <FallbackLoader />,
});

function FallbackLoader() {
  return (
    <div className="fixed z-50 grid h-full w-full place-content-center">
      <Loader variant="blink" />
    </div>
  );
}

export default function RootLayout({
  children,
  contentClassName,
}: React.PropsWithChildren<{ contentClassName?: string }>) {
  const isMounted = useIsMounted();

  // fix the `Hydration failed because the initial UI does not match` issue
  if (!isMounted) return null;

  // render default layout which is modern
  return (
    <>
      <ModernLayout contentClassName={contentClassName}>
        {children}
      </ModernLayout>
      <ContractProcess />
    </>
  );
}
