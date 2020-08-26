import React from "react";

const DETAULT_IMAGE = '/api/assets/category_birds.jpg'
import {Link, Image} from "./styles";


export const Category = ({cover = DETAULT_IMAGE, path="#", emoji = "?"} ) => (
	<Link to={path}>
    <Image src={cover} alt=""/>
    {emoji}
	</Link>
)
