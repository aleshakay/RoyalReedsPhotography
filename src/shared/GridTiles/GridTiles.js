import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from '../TileData/TileData';
import './GridTiles.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    backgroundColor: '#f7f7f7',
    width: "100%",
    height: "100%"
  },
  ImageList: {
    width:900,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function TitlebarImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList height={280} gap={20} className={classes.ImageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
        </ImageListItem>
        {tileData.map((tile) => (
          <ImageListItem key={tile.img}>
            <img src={tile.img} alt={tile.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
