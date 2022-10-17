import { Button, InputAdornment, makeStyles, Typography } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import TextField from '@material-ui/core/TextField';
import React from 'react'
import { useState } from 'react';

const useStyles = makeStyles(theme => ({ 
  root: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

const MintDetailsDialog = ({ open, onMint, onClose }) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');
  const handleMint = () => {
    if (name && desc && image) {
      onMint(name, desc, image);
    }
  }
  const classes = useStyles();
  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose} PaperProps={{ className: classes.root }}>
      <Typography variant="h4">NFT Details</Typography>
      <TextField size="small" variant="outlined" value={name} onChange={e => setName(e.target.value)} label="Name" fullWidth/>
      <TextField size="small" variant="outlined" value={desc} onChange={e => setDesc(e.target.value)} label="Description" fullWidth/>
      <TextField 
        size="small" 
        variant="outlined" 
        value={image} 
        onChange={e => setImage(e.target.value)} 
        label="IPFS Image URL" 
        fullWidth
        InputProps={{
          startAdornment: <InputAdornment position="start">ipfs://</InputAdornment>,
        }}
      />
      <Button variant="contained" color="primary" onClick={handleMint}>
        Mint NFT
      </Button>
    </Dialog>
  )
}

export default MintDetailsDialog;