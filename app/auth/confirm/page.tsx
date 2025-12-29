'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { createSupabaseClient } from '@/lib/supabase/client';
import { Container } from '@/components/shared/Container';
import { Button } from '@/components/shared/Button';

function AuthConfirmContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verifyToken = async () => {
      const tokenHash = searchParams.get('token_hash') || searchParams.get('token');
      const type = searchParams.get('type') || 'recovery';
      const redirectTo = searchParams.get('redirect_to');

      // Om ingen token finns, visa felmeddelande
      if (!tokenHash) {
        setStatus('error');
        setMessage('Ogiltig länk. Be om en ny länk för att återställa ditt lösenord.');
        return;
      }

      try {
        const supabase = createSupabaseClient();
        
        // Verifiera token
        const { error } = await supabase.auth.verifyOtp({
          token_hash: tokenHash,
          type: type as any,
        });

        if (error) {
          setStatus('error');
          setMessage('Länken är ogiltig eller har gått ut. Be om en ny länk.');
          return;
        }

        // Success - session skapas automatiskt av SDK
        setStatus('success');
        setMessage('Din länk är verifierad! Du omdirigeras nu...');

        // Säker redirect-hantering
        let destination = '/';
        if (type === 'recovery') {
          destination = '/reset-password';
        } else if (redirectTo) {
          // Open-redirect skydd: tillåt endast relativa paths eller samma origin
          try {
            const redirectUrl = new URL(redirectTo, window.location.origin);
            if (redirectUrl.origin === window.location.origin) {
              destination = redirectUrl.pathname + redirectUrl.search;
            }
          } catch {
            // Ignorera ogiltiga URLs
          }
        }

        // Auto-redirect efter 1 sekund
        setTimeout(() => {
          router.push(destination);
        }, 1000);
      } catch (error) {
        setStatus('error');
        setMessage('Ett fel uppstod. Försök igen senare.');
      }
    };

    verifyToken();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-flocken-sand flex items-center justify-center py-12 px-4">
      <Container className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-soft p-8 text-center">
          {status === 'loading' && (
            <>
              <div className="mb-4">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-flocken-olive border-t-transparent"></div>
              </div>
              <h1 className="text-2xl font-bold text-flocken-brown mb-2">
                Verifierar länk...
              </h1>
              <p className="text-flocken-brown/70">
                Vänta medan vi verifierar din länk.
              </p>
            </>
          )}

          {status === 'success' && (
            <>
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto text-flocken-olive"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-flocken-brown mb-2">
                Länk verifierad!
              </h1>
              <p className="text-flocken-brown/70 mb-6">{message}</p>
              <div className="space-y-3">
                <Button
                  onClick={() => router.push('/reset-password')}
                  className="w-full"
                >
                  Fortsätt till lösenordsåterställning
                </Button>
                <a
                  href="flocken://"
                  className="block text-flocken-olive hover:underline text-sm"
                >
                  Öppna Flocken-appen
                </a>
              </div>
            </>
          )}

          {status === 'error' && (
            <>
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-flocken-brown mb-2">
                Ogiltig länk
              </h1>
              <p className="text-flocken-brown/70 mb-6">{message}</p>
              <Button
                onClick={() => router.push('/')}
                variant="secondary"
                className="w-full"
              >
                Tillbaka till startsidan
              </Button>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}

export default function AuthConfirmPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-flocken-sand flex items-center justify-center py-12 px-4">
          <Container className="max-w-md w-full">
            <div className="bg-white rounded-2xl shadow-soft p-8 text-center">
              <div className="mb-4">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-flocken-olive border-t-transparent"></div>
              </div>
              <h1 className="text-2xl font-bold text-flocken-brown mb-2">
                Laddar...
              </h1>
            </div>
          </Container>
        </div>
      }
    >
      <AuthConfirmContent />
    </Suspense>
  );
}

