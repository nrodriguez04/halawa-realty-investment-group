import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="text-2xl font-bold">HRIG</a>
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/about">
                <a className="hover:text-gray-300">About</a>
              </Link>
            </li>
            <li>
              <Link href="/deals">
                <a className="hover:text-gray-300">Deals</a>
              </Link>
            </li>
            <li>
              <Link href="/calculators/arv">
                <a className="hover:text-gray-300">ARV Calculator</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="hover:text-gray-300">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Call to Action */}
        <Link href="tel:+1234567890">
          <a className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Call Us
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
