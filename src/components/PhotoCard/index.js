import React, {Fragment, useEffect, useRef, useState} from "react";
import {Img, ImgWrapper, Article} from "./styles";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {useNearScreen} from "../../hooks/useNearScreen";
import {FavButton} from "../FavButton";
import {ToggleLikeMutation} from "../../container/ToggleLikeMutation";


const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [show, ref] = useNearScreen();

  return (
    <Article ref={ref}>
      {
        show && <Fragment>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} alt="image"/>
            </ImgWrapper>
          </a>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  !liked && toggleLike({variables: {
                    input: { id }
                  }});
                  setLiked(!liked)
                };
                return <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
              }
            }
          </ToggleLikeMutation>
        </Fragment>
      }
    </Article>
  )
}
