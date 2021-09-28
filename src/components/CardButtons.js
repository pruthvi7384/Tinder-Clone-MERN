import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

function CardButtons() {
    return (
        <div className="card-buttons">
            <IconButton>
                <ReplayIcon className="replay-btn" fontSize="large"/>
            </IconButton>
            <IconButton>
                <CloseIcon className="close-btn" fontSize="large"/>
            </IconButton>
            <IconButton>
                <StarRateIcon className="star-btn" fontSize="large"/>
            </IconButton>
            <IconButton>
                <FavoriteIcon className="favirate-btn" fontSize="large"/>
            </IconButton>
            <IconButton>
                <FlashOnIcon className="flash-btn" fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default CardButtons
