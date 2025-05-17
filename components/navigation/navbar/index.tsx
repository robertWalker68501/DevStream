import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '@/components/navigation/navbar/ThemeToggle';

const Navbar = () => {
  return (
    <nav className='flex-between background-light900_dark200 shadow-light-300 fixed z-50 w-full gap-5 p-6 sm:px-12 dark:shadow-none'>
      <Link
        href='/'
        className='flex items-center gap-1'
      >
        <Image
          src='/assets/images/site-logo.svg'
          alt='DevStream Logo'
          width={23}
          height={23}
        />
        <p className='h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden'>
          Dev<span className='text-primary-500'>Stream</span>
        </p>
      </Link>

      <p>Global Search</p>

      <div className='flex-between gap-5'>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
