import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import logo from '../../assests/Logo/logo.png';
import '../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { isOpen } from '../../features/auth/openSlice';
import { Avatar } from '@mui/material';
import { useGetUpdateUserQuery } from '../../features/auth/profileApi';



const DashboardNavbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const value = useSelector((state) => state.open.value)
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const user = useSelector((state) => state.auth.user);
    const { data } = useGetUpdateUserQuery(user?.email);
    const dispatch = useDispatch()

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    // const renderMenu = (
    //     <Menu
    //         anchorEl={anchorEl}
    //         anchorOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //         }}
    //         id={menuId}
    //         keepMounted
    //         transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //         }}
    //         open={isMenuOpen}
    //         onClose={handleMenuClose}
    //     >
    //         <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    //         <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    //     </Menu>
    // );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            className='profile-menu'
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <EmailOutlinedIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsNoneOutlinedIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            {/* <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem> */}
        </Menu>
    );

    return (
        <Box sx={{
            width: '100%',
            borderBottom: '1px solid #bfbfbf',
            position: 'fixed',
            left: 0,
            top: 0,
            zIndex: 999
        }}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Box sx={{ width: '150px', padding: '10px 0' }}>
                            <Link to='/'>
                                <img src={logo} alt='' />
                            </Link>
                        </Box >
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <EmailOutlinedIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="error">
                                    <NotificationsNoneOutlinedIcon />
                                </Badge>
                            </IconButton>
                           {user?.role === 'Candidate' && <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                 <Avatar alt="Travis Howard" src={data?.data?.img} />
                                {/* <AccountCircle /> */}
                            </IconButton>}
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                onClick={() => dispatch(isOpen())}
                            >
                                {value ? <ClearOutlinedIcon /> : <MenuOutlinedIcon />}
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {/* {renderMenu} */}
            </Box>
        </Box>
    );
}

export default DashboardNavbar;