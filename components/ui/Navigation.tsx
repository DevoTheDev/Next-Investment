import * as React from 'react'
import { navigationValues } from '@/constants';
import Link from 'next/link';

interface Props extends Partial<HTMLElement> {}

const Navigation = (props: Props) => {
  const { className } = props;

  return (
    <section className="bg-gray-800 flex flex-row 
    gap-12 py-2 justify-end px-8 
    font-bold shadow-bottom-cyan"
    >
      {
        navigationValues.map((navItem) => {
          return (
            <div key={navItem.title}  
            className="hover:text-customCyanDark hover:bg-gray-900 
            cursor-pointer text-customCream
            py-2 px-4 rounded-2xl transition duration-400
            ">
              <Link href={navItem.route} >
                {navItem.title}
              </Link>
            </div>
          )
        })
      }
    </section>
  );
};

export default Navigation;
