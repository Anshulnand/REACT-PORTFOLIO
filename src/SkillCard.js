import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

const SkillCard = ({ icon, title, description }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default SkillCard;
