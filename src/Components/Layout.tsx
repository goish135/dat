import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Dynamic from './Dynamic';


import AddressForm from './AddressForm'

export default function Layout() {
  const [selectedTab, setSelectedTab] = useState('1');

  const handleChange = (event: React.SyntheticEvent<Element, Event>, value: string) => {
    setSelectedTab(value);
  };

  return (
    
    
        
      <TabContext value={selectedTab}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="iPRS" value="1" />
            <Tab label="Dynamic" value="2" />
            <Tab label="Input I" value="3" />
          </TabList>
    
        <TabPanel value="1">Process Change</TabPanel>
        <TabPanel value="2">
            <Dynamic/>
        </TabPanel>
        <TabPanel value="3"><AddressForm/></TabPanel>
      </TabContext>
    
  );
}
