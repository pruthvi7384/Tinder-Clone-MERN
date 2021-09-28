import React from 'react'
import { IconButton } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { useHistory } from 'react-router';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

function Header({ backbutton }) {
    const history = useHistory();
    console.log(history);
    return (
        <div className="header">
        {backbutton ? (<IconButton onClick={()=>history.replace(backbutton)}>
                            <ArrowBackIosIcon fontSize="large"/>
                        </IconButton>
                        ) : (   <IconButton>
                            <PersonIcon fontSize="large" />
                        </IconButton>)
                        }
            <Link to="/">
                <IconButton>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9wVaZa0m9lVu5dzowiUBb1SFxngTTrBAwgNJz0YGqmZ6V2tq3HnM-Qq1tBjqA78soFb4&usqp=CAU" alt="tinder logo"/>
                </IconButton>
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
