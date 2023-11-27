import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

const RoomCard = () => {

  
  
  const navigate=useNavigate();
  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
    <Stack direction="row" spacing={3}>
      <Card sx={{ width: '500px' }}>
        <CardActionArea onClick={() => navigate("/BookingForm")}>
          <CardMedia
            component="img"
            height="300"
            image="data:image/jpeg;base64,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"
            alt="standard room"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            STANDARD ROOM
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ width: '500px' }}>
        <CardActionArea onClick={() => navigate("/BookingForm")}>
          <CardMedia
            component="img"
            height="300"
            image="https://media.cnn.com/api/v1/images/stellar/prod/160920113053-beachfront-hotel-20-resort-at-pedregal-2.jpg?q=w_1900,h_1069,x_0,y_0,c_fill"
            alt="suite room"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              SUITE ROOM
            </Typography>
          </CardContent>
        </CardActionArea >
      </Card>
      <Card sx={{ width: '500px' }}>
        <CardActionArea onClick={() => navigate("/BookingForm")}>
          <CardMedia

            component="img"
            height="300"
            image="https://coral.com.cy/wp-content/uploads/2022/01/2.-Sea-View-Room-Coral-Beach-Hotel-_-Resort.jpg"
            alt="suite room"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               DELUXE ROOM
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      
    </Stack>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
  );
};

export default RoomCard;