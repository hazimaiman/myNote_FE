import React from "react";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { Button, Typography, Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

function Header({ username, onSignOut }) {
  return (
    <header style={{ backgroundColor: '#f1efe7' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" padding={2}>
        <Typography variant="h4" component="h1" display="flex" alignItems="center">
          <NoteAltIcon fontSize="large" style={{ marginRight: '8px' }} />
          myNote
        </Typography>
        {username && (
          <Box display="flex" alignItems="center">
            <Typography variant="subtitle1" style={{ marginRight: '16px', fontSize: '1.2em', fontWeight: 500, color: '#333' }}>
              Welcome, <span style={{ fontWeight: 700 }}>{username}</span>!
            </Typography>
            <Button 
              variant="contained" 
              startIcon={<LogoutIcon />} 
              onClick={onSignOut}
              style={{
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                color: '#fff',
                borderRadius: '20px',
                padding: '6px 20px',
                textTransform: 'none',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
              }}
            >
              Sign Out
            </Button>
          </Box>
        )}
      </Box>
    </header>
  );
}

export default Header;
