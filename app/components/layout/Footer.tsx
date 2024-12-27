import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Halawa Realty Investment Group. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="/privacy-policy">
            <a className="hover:text-gray-400">Privacy Policy</a>
          </Link>
          <Link href="/terms-of-service">
            <a className="hover:text-gray-400">Terms of Service</a>
          </Link>
        </div>
        <div className="mt-4">
          <p>Contact us: <a href="mailto:info@hrig.com" className="hover:underline">info@hrig.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

