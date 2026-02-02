import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/admin');
  }, [router]);

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-light tracking-wide text-stone-800 mb-2">
          CASTLE SOLUTIONS
        </h1>
        <p className="text-stone-400 text-sm">Redirecting...</p>
      </div>
    </div>
  );
}
