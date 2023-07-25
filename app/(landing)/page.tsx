import Link from 'next/link';

import { Button } from '@/components/ui/button';

const LandingPage = () => {
  return (
    <div>
      LandingPage (Unprotected)
      <Link href='/sign-in'>
        <Button>Sign-In</Button>
      </Link>
      <Link href='/sign-up'>
        <Button>Sign-Up</Button>
      </Link>
    </div>
  );
};
export default LandingPage;
