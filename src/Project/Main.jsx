import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// const RoomCard = () => {
//   const [currentRoom, setCurrentRoom] = useState('standard');
// const handleRoomClick = (roomType) => {
//   setCurrentRoom(roomType);
// };
const DemoPaper = styled(Paper)(({ theme, backgroundImage, backgroundColor}) => ({
  width: "800px",
  height: "600px",
  // padding: theme.spacing(2),
  // ...theme.typography.body2,
  // textAlign: 'center',
  backgroundColor: backgroundColor || 'none',
  backgroundImage: backgroundImage || 'none', // Default to 'none' if no backgroundImage is provided
  backgroundSize: 'cover', // Adjust as needed
}));
const FullScreenPaper = styled(Paper)(({ theme, backgroundImage }) => ({
  width: '1450px', // Set the width to 100% to span the full length of the screen
  height: '750px', // Adjust the height as needed
  // padding: theme.spacing(2),
  // ...theme.typography.body2,
  // textAlign: 'center',
  backgroundImage: backgroundImage || 'none',
  backgroundSize:'cover',
}));

export default function SquareCorners() {
  const navigate=useNavigate();
  return (
    <div>
       <FullScreenPaper square backgroundImage="url('https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_1280.jpg')">
       <Button
          className="abc "
          onClick={() => navigate("/BookingForm")}
          variant="contained"
          type="submit"
          style={{backgroundColor:"blue",width:'200px',height:'50px',fontFamily:'initial',
        marginTop:"650px",
      marginLeft:"600px"}}
        >
          BOOK NOW
          </Button>
       </FullScreenPaper>
       <Stack direction="row" spacing={0}>
       <DemoPaper square backgroundImage="url('https://cdn.pixabay.com/photo/2018/07/28/18/20/hotel-3568679_1280.jpg')">
       </DemoPaper>
       <DemoPaper square backgroundColor="black">
       <Typography variant="h1"
       color="white">
          The Royal <br></br>
        </Typography>
        <Typography variant="h2"
        color="yellow">
          Escape
        </Typography>
        <br></br>
        <br></br>
        <br></br>
        <Typography variant="body1"
        color="white"
        textAlign="center">
          "Step into our beach hotel, where the sun-kissed sands and ocean breeze welcome you to a haven of relaxation. Your comfort is our priority, from the tranquil rooms to the seaside amenities. Embrace the coastal charm, and let us ensure your stay is as refreshing as the waves just steps away. Welcome to a beachfront retreat designed for your ultimate enjoyment!"
        </Typography>
          </DemoPaper>
      </Stack>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
<Stack direction="row" spacing={3}>
<Card sx={{ Width: "800px" }}>
      <CardActionArea onClick={() => navigate("/RoomCard")} >
        <CardMedia
          component="img"
          height="300"
          image="https://cdn.pixabay.com/photo/2017/07/08/09/21/room-beach-view-2483881_1280.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ROOMS
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ Width: "800px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2022/01/10/0433/MADEL-P0806-Bathroom-Guest-Makeup.jpg/MADEL-P0806-Bathroom-Guest-Makeup.4x3.jpg?imwidth=1280"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ACCESSIBILITY
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ Width: "800px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://cdn.pixabay.com/photo/2020/05/22/08/17/breakfast-5204352_1280.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            RESTAURANT
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
}

