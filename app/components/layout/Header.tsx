import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
            HRIG
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/about">
                About
              </Link>
            </li>
            <li>
              <Link href="/deals">
                Deals
              </Link>
            </li>
            <li>
              <Link href="/calculators/arv">
                ARV Calculator
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Call to Action */}
        <Link href="tel:+1234567890">
            Call Us
        </Link>
      </div>
    </header>
  );
};

export default Header;
