import { Box, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai'

const ScrollButton = () => {
    const [showScroll, setShowScroll] = useState(false);
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)    
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)            
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop);
    
    return (
        <Box>
            <IconButton onClick={scrollTop} className={showScroll ? 'flex' : 'hidden-button'} sx={{
                position: 'fixed',
                bottom: '20px',
                right: '30px',
                background: '#c7f3c3',
                color: '#1DBF73',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                padding: '10px',
                borderRadius: '50%',
                fontSize: '18px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: '.4s',
                '&:hover': {
                    background: '#1DBF73',
                    color: 'white',
                    transition: '.4s'
                }
            }}>
                <AiOutlineArrowUp />
            </IconButton>
        </Box>
    );
};

export default ScrollButton;