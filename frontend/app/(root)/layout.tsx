import * as React from 'react';
import Navigation from '@/components/ui/Navigation';
import MobileNav from '@/components/ui/MobileNav';
import AppHeader from '@/components/ui/AppHeader';

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <section className="h-lvh relative flex flex-col">
      <AppHeader />
      <div className="md:flex hidden">
        <Navigation />
      </div>
      <main className="flex-1">
        {children}
      </main>
      <div className="md:hidden flex">
        <Navigation />
      </div>
      <footer className="md:flex hidden bg-gray-900 text-white p-4 text-center">
        <p>&copy; 2024 Next Investment</p>
      </footer>
    </section>
  )
}

export default RootLayout