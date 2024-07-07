import Navigation from "@/components/ui/Navigation"
import Image from "next/image"
import { InvestorProvider } from "@/components/contexts/InvestorContext"

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen relative flex flex-col bg-gray-800">
    <header className="bg-gradient-to-r from-customCream to-gray-800 text-white p-4 flex items-center gap-2">
      <img src={"/coin-stack.svg"} alt="Dollar Circle" height={40} width={40} className="text-white" />
      <h1 className="text-2xl font-extrabold flex">
        <p className="text-gray-800">Next</p>
        <p className="text-customCyanDark">Investment</p>
      </h1>
    </header>
    <Navigation />
    <main className="flex-grow p-4">
      <InvestorProvider>
      {children}
      </InvestorProvider>
    </main>
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2024 Next Investment</p>
    </footer>
  </div>
  )
}

export default RootLayout