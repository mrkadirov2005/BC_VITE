import Link from 'next/link';

const RedirectPage = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/super_admin" className="text-white text-lg font-semibold hover:text-blue-400 transition duration-300">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default RedirectPage;
