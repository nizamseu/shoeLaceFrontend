import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {  Switch, Route, Link, useRouteMatch } from "react-router-dom";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Review from "../Review/Review";
import AddProduct from "../AddProduct/AddProduct";
import AllProducts from "../AllProducts/AllProducts";
import './dashboard.css'
import MyOrders from "../My Orders/MyOrders";
import Pay from "../Pay/Pay";
import ManageOrders from "../ManageOrders/ManageOrders";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { path, url } = useRouteMatch();
  const [userData,setUserData] =React.useState([])
  const {user} = useAuth()
const email =user.email
//load user
  React.useEffect(() => {
    axios.get(`http://localhost:5000/users/${email}`)
    .then(res=>{
      setUserData(res);
    })

  }, []);

console.log(userData?.userType);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar style={{backgroundColor:'#0C71EA',marginBottom:'-5px',marginRight:'-.1px'}}>
       ShoeLACE
      </Toolbar>
      
      <Divider />
      <List className='menu'>
        <Link to={"/"}>Home</Link>
        <br /><br />
        <Link to={`${url}/addproduct`}>Add Product</Link>
        <br /><br />
        <Link to={`${url}/makeadmin`}>Make Admin</Link>
        <br /><br />
        <Link to={`${url}/review`}>Review</Link>
        <br /><br />
        <Link to={`${url}/myorders`}>My Orders</Link>
        <br /><br />
        <Link to={`${url}/pay`}>Pay</Link>
        <br /><br />
        <Link to={`${url}/products`}>Manage Products</Link>
        <br /><br />
        <Link to={`${url}/manageOrders`}>Manage Orders</Link>
        <br /><br />
       
      </List>
      
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Box>
          <Switch>
            <Route exact path={path}>
               <DashboardHome />
            </Route>
            <Route path={`${path}/addproduct`} >
              <AddProduct />
            </Route>
            <Route path={`${path}/makeadmin`}  >
                <MakeAdmin />
            </Route>
            <Route path={`${path}/review`}  >
                <Review />
            </Route>
            <Route path={`${path}/products`}  >
                <AllProducts />
            </Route>
            <Route path={`${path}/manageOrders`}  >
                <ManageOrders />
            </Route>
            <Route path={`${path}/myorders`}  >
                <MyOrders />
            </Route>
            <Route path={`${path}/pay`}  >
                <Pay />
            </Route>
          </Switch>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
