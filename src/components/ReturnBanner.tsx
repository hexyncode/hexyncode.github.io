import Link from "next/link";

const ReturnBanner = () => {
  return (
    <div className='fixed w-full p-2 text-center bg-gray-950 z-50'>
        <Link prefetch={true} href={'/'} className="w-full block">&laquo; Return to main site</Link>
    </div>
  );
};

export default ReturnBanner;