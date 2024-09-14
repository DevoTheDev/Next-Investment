import React from 'react'
import List from '@/components/ui/List'


type Setting = {title:string, content: string}
const diffSettings: Setting[] = [
  { title: "Money Management", content: "Add Funds / Withdraw / Change Card or Bank" },
  { title: "Report A Problem", content: "Submit Problem / Live Chat with assistance" },
  { title: "Contact Us", content: "Phone Number, Support Email" },
  { title: "Delete Account", content: "Verify request, Warning, Notcice that all invested shares will be sold and accumulated in User's wallet and proccessed into their account before deletion" },
]

const Settings = () => {
  return (
    <section className='flex flex-col flex-1 items-center bg-gray-700 h-lvh' >
      <h1 className="text-customCyan text-[2.5rem] m-4 font-bold">Your Account</h1>
        <List<Setting>
        data={diffSettings}
        listContainer={{ tailwindClass: 'grid grid-cols-2 md:w-1/2 sm:w-full bg-gray-500 rounded-xl mb-8' }}
        listings={{
          container: {
            tailwindClass: 'bg-gray-500 p-8 hover:bg-gray-600 m-6 rounded-xl cursor-pointer'
          }
        }}
        _Title={{
          keyValueContainer: {
            tailwindClass: 'font-extrabold mb-6 text-[1.5rem] text-customCyan hover:text-white'
          }
        }}
        _Content={{
          keyValueContainer: {
            tailwindClass: 'text-gray-300'
          }
        }}
        />
    </section>
  )
}

export default Settings