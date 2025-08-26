import ReturnBanner from '@/components/ReturnBanner';

export default function WeatherWisePage() {
  return (
    <div>
      <ReturnBanner/>
      <div className="w-full h-[90vh] mt-12">
        <iframe
          src="/projects/weatherwise-proj/index.html"
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>
      </div>
  );
}