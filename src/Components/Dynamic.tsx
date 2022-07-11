import React, { useState } from 'react';
import { Tab, Button,Box , Grid} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TextField from '@mui/material/TextField';

import { SelectChangeEvent } from '@mui/material/Select';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

type TabT = {
  value: string
  label: string
}

type panelsT = {
  value: string
  child: JSX.Element
}

export default function Dynamic() {
  const [selectedTab, setSelectedTab] = useState('1');

  const [tabs, setTabs] = useState<TabT[]>([])
  const [panels, setPannels] = useState([] as panelsT[]);

  const [addNum, setAddNum] = useState(0);

  const [tabIndex, setTabIndex] = useState(1)

  const [fab, setFab] = useState('');
  const [cFab, setCfab] = useState('');

  const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: string) => {
    setSelectedTab(newValue);
  };

  const handleSelectFabChange = (event: SelectChangeEvent) => {
    setFab(event.target.value as string);
  };
  const handleSelectCfabChange = (event: SelectChangeEvent) => {
    setCfab(event.target.value as string);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  function createNewTabs(addNumber: number) {

    const newTabs = [] as TabT[]
    const newPanels = [] as panelsT[]
    let newId = tabIndex; 
    for (let i = 0; i < addNumber; i++) {
      newId++;
      newTabs.push({
        value: `${newId}`,
        label: `Defense ${newId}`
      });

      newPanels.push({
        value: `${newId}`,
        child: (<div> Defense Panel {newId}</div>)
      })
    }
    setTabIndex(newId);
    setTabs([...tabs, ...newTabs])
    setPannels([...panels, ...newPanels])
  }

  return (

    <TabContext value={selectedTab}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="Create New" value="1" />

        {tabs.map(tab => (
          <Tab key={tab.value} value={tab.value} label={tab.label} />
        ))}



      </TabList>

      <TabPanel value="1">
      
      {/* <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
      <TextField
          
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={addNum}
          onChange={(e) => setAddNum(parseInt(e.target.value))}
          

        />

      <Button onClick={() => createNewTabs(addNum)} variant='contained' color='primary' >
        Create
      </Button>
      </Box> */}


      
      <Grid container justifyContent="left">
            <Grid item>
              <TextField
                
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                value={addNum}
                onChange={(e) => setAddNum(parseInt(e.target.value))}
                

              />
            </Grid>

            <Grid item alignItems="stretch" style={{ display: "flex" }}>
              <Button variant="contained" color='primary' onClick={() => createNewTabs(addNum)}>
              Create 
              </Button>
            </Grid>
      </Grid>  

      {/* <Grid container spacing={2}>

        <Grid container justifyContent="left">
            <Grid item>
              <TextField
                
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                value={addNum}
                onChange={(e) => setAddNum(parseInt(e.target.value))}
                

              />
            </Grid>

            <Grid item alignItems="stretch" style={{ display: "flex" }}>
              <Button variant="contained" color='primary' onClick={() => createNewTabs(addNum)}>
              Create 
              </Button>
            </Grid>
      </Grid>  
      <Grid item xs={6}>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={fab}
          label="Age"
          // handleSelectFabChange
          onChange={handleSelectFabChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>


      </Grid>
      <Grid item xs={6}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          label="Age"
          
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Grid> 
      <Grid item xs={6}>

        <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="billing address-line1"
            />


        </Grid>
        <Grid item xs={6}>
        <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="billing address-line1"
            />
      </Grid>                 
      </Grid> */}

      </TabPanel>
      {panels.map(panel => (
        <TabPanel key={panel.value} value={panel.value} >
          {panel.child}
        </TabPanel>
      ))}
      
      

    </TabContext>
  );
}