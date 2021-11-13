import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './manageOrder.css'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const ManageModal = ({open,handleClose,onChange,handleUpdate}) => {
//     onst [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
    return (
        <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Update Your Status
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <select className='manageModel' onChange={onChange}>
               <option value="pending">Pending</option>
                <option value="shipping">Shipping</option>
                <option value="cancel">Cancel</option>
        </select> <br />
        <Button variant='contained' color='info' onClick={handleUpdate}>Update Now</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
    );
};

export default ManageModal;