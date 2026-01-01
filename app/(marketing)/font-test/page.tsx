import Link from 'next/link';

export const metadata = {
  title: "Typsnitt Test - Flocken",
  robots: "noindex, nofollow",
};

export default function FontTestIndexPage() {
  return (
    <div className="min-h-screen bg-flocken-cream flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-2xl shadow-card p-12 text-center">
          <h1 className="text-5xl font-bold text-flocken-brown mb-6">
            Typsnitt Test för Flocken 🎨
          </h1>
          <p className="text-xl text-flocken-gray mb-12">
            Välj vilken typ av test du vill se:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Kombinationer */}
            <Link href="/typsnitt-kombinationer" className="group">
              <div className="bg-flocken-olive text-white p-8 rounded-2xl hover:bg-flocken-accent transition transform hover:scale-105">
                <div className="text-4xl mb-4">💝</div>
                <h2 className="text-2xl font-bold mb-3">Kombinationer</h2>
                <p className="text-white/90 mb-4">
                  7 kompletta paket med rubrik + brödtext kombinationer
                </p>
                <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm">
                  🔥 Rekommenderat
                </div>
              </div>
            </Link>

            {/* Enskilda typsnitt */}
            <Link href="/typsnitt-test" className="group">
              <div className="bg-flocken-sand text-flocken-brown p-8 rounded-2xl hover:bg-flocken-warm-beige transition transform hover:scale-105 border-2 border-flocken-brown/10">
                <div className="text-4xl mb-4">🔤</div>
                <h2 className="text-2xl font-bold mb-3">Enskilda Typsnitt</h2>
                <p className="text-flocken-gray mb-4">
                  11 typsnitt testade individuellt
                </p>
                <div className="inline-block bg-flocken-brown/10 px-4 py-2 rounded-full text-sm">
                  För nördiga detaljer
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-12 p-6 bg-flocken-sand rounded-xl">
            <h3 className="font-semibold text-flocken-brown mb-2">💡 Tips:</h3>
            <p className="text-sm text-flocken-gray">
              Börja med <strong>Kombinationer</strong> för att se kompletta lösningar. 
              Kolla <strong>Enskilda Typsnitt</strong> om du vill djupdyka i detaljer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

