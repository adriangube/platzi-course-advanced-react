import React from "react";

const DETAULT_IMAGE = '/api/assets/category_birds.jpg'
import {Anchor, Image} from "./styles";


export const Category = ({cover = DETAULT_IMAGE, path, emoji = "?"} ) => (
	<Anchor href={path}>
    <Image src={cover} alt=""/>
    {emoji}
	</Anchor>
)
