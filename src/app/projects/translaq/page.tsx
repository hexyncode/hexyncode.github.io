import ReturnBanner from '@/components/ReturnBanner';

export default function TranslaqPage() {
  return (
    <div>
      <ReturnBanner/>
      <div className="w-full h-[90vh] mt-12">
        <iframe
          src="https://formalizer-spanish.onrender.com/"
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>
      </div>
  );
}