import * as React from 'react';
import Navigation from '@/components/ui/Navigation';
import MobileNav from '@/components/ui/MobileNav';
import AppHeader from '@/components/ui/AppHeader';

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <section>
      <main>
        {children}
      </main>
    </section>
  )
}

export default RootLayout