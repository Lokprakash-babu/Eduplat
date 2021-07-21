import React from 'react'
import "./Course.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      width: "14rem",
      height:"max-content",
      marginTop:"50px"
    },
    media: {
      height: 140,
    },
  });
const Course = ({courses, course}) => {
    const classes = useStyles();
    const listUI =courses.map((ele)=>{
        return (
            <div className="cardItem" key = {ele.id} onClick={()=>{course(ele.id - 1)}}>
            
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={ele.thumbnailURL}
                        title="Course Title"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {ele.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Number of lessons: {ele.videoLink.length}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        )
    })
    return (
        <div className="cardContainer">
            {listUI}
        </div>
    )
}

export default Course
