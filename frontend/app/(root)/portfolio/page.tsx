import InformationComponent from '@/components/ui/Listing';
import { Stock, top30_default } from '@/constants';
import * as React from 'react';
type Props = Stock & {

}
const Portfolio = (props: Props) => {

  return (
    <section>
        <h1 className='text-customCyan text-start text-[2rem] py-4 pl-6 font-thin bg-black'>Portfolio</h1>
    </section>
  )
}

export default Portfolio