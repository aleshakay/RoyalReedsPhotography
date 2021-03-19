import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import tileData from '../TileData/TileData';
import './WeddingAlbum';

const useStyles = makeStyles({
  root: {
    width: 500,
    height: 450,
    // overflowY: 'scroll',
  },
});

export default function MasonryImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <div className="WeddingAlbum">
      <ImageList variant="masonry" cols={3} gap={16}>
        {tileData.map((tile) => (
          <ImageListItem key={tile.img}>
            <img
              srcSet={`${tile.img}?w=161&fit=crop&auto=format 1x,
                ${tile.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={tile.title}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
    </div>
  );
}

