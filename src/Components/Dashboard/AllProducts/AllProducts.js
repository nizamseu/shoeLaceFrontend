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



const deleteConfirrm =()=>{
    return Swal.fire({
       icon: 'error',
       title: 'Are you want DELETE It?',
       showCancelButton: true,
       confirmButtonText: 'Yes',
     })

}

const AllProducts = () => {
    const [products,setProducts] = React.useState([]);


    React.useEffect(() => {
        axios.get('https://intense-shore-62067.herokuapp.com/products')
        .then(res=>{
            setProducts(res.data);
        })
    }, []);
// delete a single item
    const handleDelete =(id)=>{
       deleteConfirrm()
       .then((result) => {
           if (result.isConfirmed) {
            axios.delete(`https://intense-shore-62067.herokuapp.com/product/${id}`)
               .then(data=>{
                  if(data?.data?.deletedCount>0){
                      const restItem = products.filter(item=>item._id !== id);
                      console.log(restItem);
                      setProducts(restItem)
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
    console.log(products);
    return (
        <div>
        <h1>All Products</h1>
        {
            products.length>0&& <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product Title</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Brand Name</TableCell>
                  <TableCell align="right">Action</TableCell>
    
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {products?.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.title.slice(0,40) }
                    </TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.brand}</TableCell>
                   
                    <TableCell align="right">
                        <Button sx={{mx:2}} variant='contained' color='info'>EDIT</Button>
                        <Button onClick={()=>handleDelete(row._id)} variant='contained' color='error'>DELETE</Button>
                    </TableCell>
                   
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        }
        </div>
    );
};

export default AllProducts;