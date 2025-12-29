'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createSupabaseClient } from '@/lib/supabase/client';
import { Container } from '@/components/shared/Container';
import { Button } from '@/components/shared/Button';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const supabase = createSupabaseClient();
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error || !session) {
        setError('Länken är ogiltig eller har gått ut. Be om en ny länk för att återställa ditt lösenord.');
        setLoading(false);
        return;
      }

      setSession(session);
      setLoading(false);
    };

    checkSession();
  }, []);

  const validatePassword = (): boolean => {
    if (password.length < 6) {
      setError('Lösenordet måste vara minst 6 tecken långt.');
      return false;
    }

    if (password !== confirmPassword) {
      setError('Lösenorden matchar inte.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validatePassword()) {
      return;
    }

    setSubmitting(true);

    try {
      const supabase = createSupabaseClient();
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) {
        setError(error.message || 'Ett fel uppstod när lösenordet skulle uppdateras.');
        setSubmitting(false);
        return;
      }

      setSuccess(true);
      setSubmitting(false);

      // Redirect till startsidan efter 2 sekunder
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (err) {
      setError('Ett oväntat fel uppstod. Försök igen senare.');
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-flocken-sand flex items-center justify-center py-12 px-4">
        <Container className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-soft p-8 text-center">
            <div className="mb-4">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-flocken-olive border-t-transparent"></div>
            </div>
            <h1 className="text-2xl font-bold text-flocken-brown mb-2">
              Kontrollerar session...
            </h1>
            <p className="text-flocken-brown/70">
              Vänta medan vi verifierar din session.
            </p>
          </div>
        </Container>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-flocken-sand flex items-center justify-center py-12 px-4">
        <Container className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-soft p-8 text-center">
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
              Ogiltig session
            </h1>
            <p className="text-flocken-brown/70 mb-6">{error}</p>
            <Button
              onClick={() => router.push('/')}
              variant="secondary"
              className="w-full"
            >
              Tillbaka till startsidan
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen bg-flocken-sand flex items-center justify-center py-12 px-4">
        <Container className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-soft p-8 text-center">
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
              Lösenord uppdaterat!
            </h1>
            <p className="text-flocken-brown/70 mb-6">
              Ditt lösenord har uppdaterats. Du omdirigeras nu till startsidan.
            </p>
            <Button
              onClick={() => router.push('/')}
              className="w-full"
            >
              Till startsidan
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-flocken-sand flex items-center justify-center py-12 px-4">
      <Container className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-soft p-8">
          <h1 className="text-2xl font-bold text-flocken-brown mb-2 text-center">
            Återställ lösenord
          </h1>
          <p className="text-flocken-brown/70 mb-6 text-center">
            Ange ett nytt lösenord för ditt konto.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-flocken-brown mb-2"
              >
                Nytt lösenord
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-flocken-cream rounded-xl focus:outline-none focus:ring-2 focus:ring-flocken-olive focus:border-transparent"
                placeholder="Minst 6 tecken"
                required
                minLength={6}
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-flocken-brown mb-2"
              >
                Bekräfta lösenord
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border border-flocken-cream rounded-xl focus:outline-none focus:ring-2 focus:ring-flocken-olive focus:border-transparent"
                placeholder="Bekräfta lösenordet"
                required
                minLength={6}
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={submitting}
            >
              {submitting ? 'Uppdaterar...' : 'Uppdatera lösenord'}
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

