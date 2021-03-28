import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import tileData from '../TileData/TileData';
import './GridTiles.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'auto',
    backgroundColor: theme.palette.background.paper,
    backgroundColor: '#f7f7f7',
    position: 'absolute',
    top: 4,
  },
 
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function TitlebarImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList sx={{ width: "60%", height: "500px" }} variant="woven" gap={30} cols={2} className={classes.ImageList}>
        {tileData.map((tile) => (  
          <ImageListItem key="tile.img">
            <img 
              srcSet={`${tile.img} ?w=261&fit=crop&auto=format 1x,
              ${tile.img}?w=261&fit=crop&auto=format&dpr=2 2x`}
              alt={tile.title}
              loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
