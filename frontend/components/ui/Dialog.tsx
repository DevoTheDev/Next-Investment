import React from 'react'

type DialogProps = {
    children: any
}

const StyleOptions = {
    darkBackGround : "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80",
    defaultSizeAdjust: "sm:w-1/2 md:1/3 lg:w-1/3",
    fullSize: "w-full h-full",
    fullWidth: "w-full",
    fullHeight: "h-full",
    fitToChild: "w-max h-max"

}

const Dialog = (
    { children }: DialogProps
    ) => {
  return (
    <div className={StyleOptions.darkBackGround}>
    <div className={`relative ${StyleOptions.fitToChild} bg-red-400 rounded-lg p-5`}>
       {children}
    </div>
</div>
  )
}

export default Dialog