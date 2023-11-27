import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#ffb6c1', height: '90vh' , alignItems: 'center'}}>
            <Typography
              variant="h1"
              >

              </Typography>
         <p style={{fontSize:"26px",
        fontFamily:"sitka banner"}}>Welcome to Realax Inn,where unparalleled comfort meets exceptional hospitality.Nested in the heart of Madrid, Realax Inn is a heaven of tranquility for both business and leisure travelers.

At Realax Inn, we pride ourselves on creating a warm and inviting atmosphere that feels like a home away from home.Our dedicated team is committed to ensuring that every guest experience is memorable and exceeds expectations.Whether you're here for a relaxing getaway,an important business meeting, or a special event,Realax Inn is the perfect choice for discerning travelers.

Our thoughtfully designed rooms and suites offer a blend of modern amenities and classic charm.Immerse yourself in the plush comfort of our beds,unwind in our well-appointed accommodations,and enjoy the convenience of in-room amenities that cater to your every need.

Indulge your palate at our on-site restaurant,where culinary excellence meets a diverse menu to satisfy every taste.Our commitment to using fresh,locally sourced ingredients ensures a dining experience that is as delightful as it is delicious.

Realax Inn is also an ideal venue for meetings,conferences, and social events.Our versatile event spaces are equipped with state-of-the-art technology and supported by a professional team dedicated to making your event a success.

We take pride in our commitment to sustainability and strive to minimize our environmental impact.From energy-efficient practices to waste reduction initiatives,Realax Inn is dedicated to creating a more sustainable and eco-friendly hospitality experience.<br></br>

At Realax Inn, we believe in going the extra mile to make your stay exceptional.We look forward to welcoming you and providing an unforgettable experience that will leave you relaxed,refreshed, and eager to return.<br></br></p>
        </Box>
      </Container>
    </React.Fragment>
  );
}