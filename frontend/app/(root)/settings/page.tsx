import React from 'react'

const diffSettings = [
  { title: "Money Management", content: "Add Funds / Withdraw / Change Card or Bank" },
  { title: "Report A Problem", content: "Submit Problem / Live Chat with assistance" },
  { title: "Contact Us", content: "Phone Number, Support Email" },
  { title: "Delete Account", content: "Verify request, Warning, Notcice that all invested shares will be sold and accumulated in User's wallet and proccessed into their account before deletion" },
]

const Settings = () => {
  return (
    <section className='flex m-6 flex-col flex-1 items-center bg-gray-800' >
      <h1 className="text-customCyan text-[2.5rem] m-4 font-bold">Your Account</h1>

      <div className="bg-gray-600 grid grid-cols-2 gap-12 p-6 items-center w-1/3 justify-center">
        {
          diffSettings.map((setting) => {
            return (
              <span className='flex cursor-pointer flex-col text-customCyan text-[1.2rem] font-bold px-8 py-2 rounded-lg gap-2 hover:bg-gray-700'>
                {setting.title}
                <span className=' text-white  py-2 m-2 text-[0.8rem] font-thin rounded-lg'>{setting.content}</span>
              </span>

            )
          })
        }
      </div>
    </section>
  )
}

export default Settings