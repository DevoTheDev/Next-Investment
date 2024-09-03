import React from 'react'

interface SpacerProps {
    margin?: number | string,
    padding?: number | string,
    children: React.ReactNode
  }

const Spacer = (props: SpacerProps) => {
  // 1/3 width before fired "ClickedOn" prop, expands to full size
    // I will try a strict CSS on the element before PRESS, that is made null until reapplied

    const { margin, padding } = props;

    const proccess = () => {

        let res;

        

        switch (typeof margin) {
            case 'string':
                return  res = margin
            case 'number':
                return res = `m-${margin}`
        }
        if(!res) {
            throw new Error("Missing margin value.")
        }
        return res
    }

    return (

        <span>{props.children}</span>

    )
}

export default Spacer