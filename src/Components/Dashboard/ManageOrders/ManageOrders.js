import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import ManageModal from './ManageModal';
import { confirmAlert } from '../../../utility';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './manageOrder.css'

const deleteConfirrm =()=>{
    return Swal.fire({
       icon: 'error',
       title: 'Are you want DELETE It?',
       showCancelButton: true,
       confirmButtonText: 'Yes',
     })

}
const ManageOrders = () => {
    const [orders,setOrders] = React.useState([]);
    const [status,setStatus] =React.useState('')
    const [reloadData,setReloadData]= React.useState(false)
    const [open, setOpen] = React.useState(false);
    const [id,setId] =React.useState('')
    
    const handleOpen = (value) =>{
      setId(value)
      setOpen(true)
      
    };
    const handleClose = () => setOpen(false);


    React.useEffect(() => {
        axios.get('https://intense-shore-62067.herokuapp.com/orders')
        .then(res=>{
            setOrders(res.data);
        })
    }, [reloadData]);
// delete a single item
    const handleDelete =(id)=>{
       deleteConfirrm()
       .then((result) => {
           if (result.isConfirmed) {
            axios.delete(`https://intense-shore-62067.herokuapp.com/deleteOrder/${id}`)
               .then(data=>{
                  if(data?.data?.deletedCount>0){
                      const restItem = orders.filter(item=>item._id !== id);
                      setOrders(restItem)
                  }
               })
               Swal.fire({
                   icon: 'error',
                   title: 'DELETED',
                   showConfirmButton: false,
                   timer: 1000
   
               }) 
           } 
         })
    }

  

    const handleUpdate =async()=>{
        console.log(id);
        await axios.patch(`https://intense-shore-62067.herokuapp.com/updateOrderStatus/${id}`,{status:status})
        .then(res=>{
          if(res.data){
            handleClose()
            setReloadData(true)
            setStatus('')
            confirmAlert("Update")
            
          }
        })
    }

const onChange=(e)=>{
    setStatus(e.target.value);
}

console.log(status);
    return (
      <>
        <div>
        <h1>Manage Orders</h1>
        {
            orders.length>0&& <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product Title</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Product Brand</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Action</TableCell>
    
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {orders?.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name }
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.brand}</TableCell>
                    <TableCell align="right">
                      {
                        row.status === 'cancel' && <span className='manageOrder' style={{background:'#FF7676'}}>{row.status}</span>
                      }
                      {
                        row.status === 'shipping' && <span className='manageOrder' style={{background:'#38AF86'}}>{row.status}</span>
                      }
                      {
                        row.status === 'pending' && <span className='manageOrder' style={{background:'#76C5FF'}}>{row.status}</span>
                      }
                     
                      <KeyboardArrowDownIcon sx={{mx:3}} onClick={()=>handleOpen(row._id)} />
                      </TableCell>
                   
                    <TableCell align="right">
                        <Button onClick={()=>handleDelete(row._id)} variant='contained' color='error'>DELETE</Button>
                    </TableCell>
                   
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        }
        </div>
        <ManageModal
        open={open}
        handleClose={handleClose}
        onChange={onChange}
        handleUpdate={handleUpdate}
        ></ManageModal>
      </>
    );
};

export default ManageOrders;