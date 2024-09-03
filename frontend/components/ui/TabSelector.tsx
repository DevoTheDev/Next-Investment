import React, { useState } from 'react';
import { Stock } from '../contexts/Investor/investor-types';
import { ChevronDownIcon } from 'lucide-react';


export interface Tab {
    title: string,
    content: string | number | React.ReactNode
}

interface TabSelectorProps {
    tabs: Tab[]
}

const TabSelector = (props: TabSelectorProps) => {

    const { tabs } = props;

    const [selectedValue, setSelectedValue] = useState();
    const [activeTab, setActiveTab] = useState<string>();
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const handleTabChange = (sectionName: string) => {
        setActiveTab(sectionName);
    };

    return (
        <div className="bg-transparent flex flex-col">
            <div className='flex cursor-pointer bg-gray-800 rounded-lg'>
                {
                    tabs.map((tab, i) => {

                        const active = tab.title === activeTab;
                        const absolutes = "flex justify-center w-1/3 p-4 rounded-lg"
                        return (
                            <div
                            key={i}
                                className={`${active ? `border-customCyan border-y-2 ${absolutes} font-bold text-customCyan bg-gray-900` : `${absolutes} text-white`}`}
                                onClick={() => handleTabChange(tab.title)}
                            >
                                {tab.title}
                            </div>
                        )
                    })
                }
            </div>
            <div>
                
            </div>
            <div className='flex justify-center' >
                {
                    tabs.map((tab, i) => {
                        return (
                            <div key={i} >
                                {tab.title === activeTab && <div>{tab.content}</div>}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TabSelector;
