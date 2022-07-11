import React, { useState } from 'react';


import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import { Icon } from '@mui/material';
import { Add } from '@mui/icons-material';
import Button from '@mui/material/Button';

function AddressForm() {



  const [cFab, setCfab] = useState('');
  const handleCfabChange = (event: SelectChangeEvent<string>) => {
    setCfab(event.target.value);
  };

  const [pFab, setPfab] = useState('');
  const handlePfabChange = (event: SelectChangeEvent<string>) => {
    setPfab(event.target.value);
  };

  const [cSch, setCSch] = useState('');
  const handleCSchChange = (event: SelectChangeEvent<string>) => {
    setCSch(event.target.value);
  };

  const [pSch, setCPch] = useState('');
  const handleCPchChange = (event: SelectChangeEvent<string>) => {
    setCPch(event.target.value);
  };  

  const [pFch, setPfch] = useState('');
  const handlePFchChange = (event: SelectChangeEvent<string>) => {
    setPfch(event.target.value);
  }; 

  const [cFch, setCFch] = useState('');
  const handleCFchChange = (event: SelectChangeEvent<string>) => {
    setCFch(event.target.value);
  };  

  const [pFlow, setPFlow] = useState('');
  const handlePFlowChange = (event: SelectChangeEvent<string>) => {
    setPFlow(event.target.value);
  }; 

  const [cFlow, setCFlow] = useState('');
  const handleCFlowChange = (event: SelectChangeEvent<string>) => {
    setCFlow(event.target.value);
  };   

  const [pRms, setPRms] = useState('');
  const handlePRmsChange = (event: SelectChangeEvent<string>) => {
    setPRms(event.target.value);
  };
  const [cRms, setCRms] = useState('');
  const handleCRmsChange = (event: SelectChangeEvent<string>) => {
    setCRms(event.target.value);
  };         

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#2894FF' : '#2894FF',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
  }));

  return (
   

      <Grid container
        spacing={2}
        justifyContent="center"
        >
        <Grid container item xs={12} md={8} spacing={2}
        style={{margin: "1%",padding:"1%"}}
        // backgroundColor:"Yellow"
        >
        <Grid item xs={2} >
          
        </Grid>         
        <Grid item xs={4}>
          <Item>POR</Item>
          
        </Grid>
        <Grid item xs={4}>
        <Item>CIP</Item>
        </Grid> 
        <Grid item xs={12} sm={2}>

        </Grid>         
        <Grid item xs={2} >
          <Item>Fab</Item>
          </Grid>            
          <Grid item xs={4}>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Fab</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pFab}
                label="pFab"
                onChange={handlePfabChange}
              >


                {['F2','F5','F3','F12'].map((e,index)=> { 
                 return (<MenuItem key={e} value={e}>{e}</MenuItem>)
                })}

              </Select>
            </FormControl>


          </Grid>
          
          <Grid item xs={4}>


            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Fab</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cFab}
                label="cFab"
                onChange={handleCfabChange}
              >
              {['F2','F5','F3','F12'].map((e,index)=> { 
                return (<MenuItem key={e} value={e}>{e}</MenuItem>)
              })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={2}>

          </Grid> 
          <Grid item xs={2}>
          
          <Item>Tool ID</Item>
          </Grid>            
          <Grid item xs={12} sm={4}>
            <TextField
              id="pToolId"
              name="pToolId"
              label="Tool ID"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField 
            id="cToolId" 
            name="pToolId" 
            label="Tool ID" fullWidth 
            />
          </Grid>

          <Grid item xs={12} sm={2}>

          </Grid> 

          <Grid item xs={2}>
          <Item>Chamber Loop Count</Item>
          
          </Grid>            
          <Grid item xs={12} sm={4}>
            <TextField
              id="pCLC"
              name="pCLC"
              label="chamber loop count"
              fullWidth
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
          <TextField
              id="cCLC"
              name="cCLC"
              label="chamber loop count"
              fullWidth
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={2}>

          </Grid>          
          <Grid item xs={2}>
          <Item>Siview CH</Item>
          
          </Grid>            
          <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Siview CH</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pSch}
                label="Siview CH"
                onChange={handleCPchChange}
              >
              {['A','B','C','1','2','3'].map((e,index)=> { 
                return (<MenuItem key={e} value={e}>{e}</MenuItem>)
              })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Siview CH</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cSch}
                label="Siview CH"
                onChange={handleCSchChange}
              >
              {['A','B','C','1','2','3'].map((e,index)=> { 
                return (<MenuItem key={e} value={e}>{e}</MenuItem>)
              })}
              </Select>
            </FormControl>

            
          </Grid>
          <Grid item xs={12} sm={1}>
          <Button variant="contained" endIcon={<Add />} fullWidth>
            Add
          </Button>
          </Grid>
          <Grid item xs={12} sm={1}>

          </Grid>
          <Grid item xs={2}>
          <Item>FDC CH</Item>
          
          </Grid>            
          <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">FDC CH</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pFch}
                label="FDC CH"
                onChange={handlePFchChange}
              >
              {['A','B','C','1','2','3'].map((e,index)=> { 
                return (<MenuItem key={e} value={e}>{e}</MenuItem>)
              })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">FDC CH</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cFch}
                label="FDC CH"
                onChange={handleCFchChange}
              >
              {['A','B','C','1','2','3'].map((e,index)=> { 
                return (<MenuItem key={e} value={e}>{e}</MenuItem>)
              })}
              </Select>
            </FormControl>

            
          </Grid>
          <Grid item xs={12} sm={1}>
          <Button variant="contained" endIcon={<Add />} fullWidth>
            Add
          </Button>
          </Grid>
          <Grid item xs={12} sm={1}></Grid> 


          <Grid item xs={2}>
          
          <Item>PART6</Item>
          </Grid>            
          <Grid item xs={12} sm={4}>
            <TextField
              id="pPart6"
              name="pPart6"
              label="Part6"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField 
            id="cPart6" 
            name="pPart6" 
            label="Part6" fullWidth 
            />
          </Grid>

          <Grid item xs={12} sm={2}>

          </Grid> 

          {/* <Grid item xs={2}></Grid> */}
          <Grid item xs={2} >
            
          <Item>Flow Recipe</Item>
          </Grid>            
          <Grid item xs={4}>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Flow Recipe</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pFlow}
                label="Flow Recipe"
                onChange={handlePFlowChange}
              >


                {['Flow-1','Flow-2','Flow-3','Flow-4','Flow-5'].map((e,index)=> { 
                 return (<MenuItem key={e} value={e}>{e}</MenuItem>)
                })}

              </Select>
            </FormControl>


          </Grid>
          
          <Grid item xs={4}>


            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Flow Recipe</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cFlow}
                label="Flow Recipe"
                onChange={handleCFlowChange}
              >
                {['Flow-1','Flow-2','Flow-3','Flow-4','Flow-5'].map((e,index)=> { 
                 return (<MenuItem key={e} value={e}>{e}</MenuItem>)
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={2}>

          </Grid>           
          <Grid item xs={2} >
          <Item>RMS Lv1 Recipe</Item>
          </Grid>            
          <Grid item xs={4}>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">RMS Lv1 Recipe</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pRms}
                label="RMS Lv1 Recipe"
                onChange={handlePRmsChange}
              >


                {['RMS-1','RMS-2','RMS-3','RMS-4','RMS-5'].map((e,index)=> { 
                 return (<MenuItem key={e} value={e}>{e}</MenuItem>)
                })}

              </Select>
            </FormControl>


          </Grid>
          
          <Grid item xs={4}>


            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">RMS Lv1 Recipe</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cRms}
                label="RMS Lv1 Recipe"
                onChange={handleCRmsChange}
              >
                {['RMS-1','RMS-2','RMS-3','RMS-4','RMS-5'].map((e,index)=> { 
                 return (<MenuItem key={e} value={e}>{e}</MenuItem>)
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={2}>

          </Grid>           
        </Grid>
       
      </Grid>
   
  );
}

export default AddressForm;


/*
  <FormControlLabel
      control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
      label="Use this address for payment details"
    />
 */