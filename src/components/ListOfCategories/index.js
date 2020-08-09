import React, {useState, useEffect} from "react";
import {Category} from "../Category";
import {List, Item} from "./styles";
import {API_BASE_URL} from "../../constants";


export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(function(){
    fetch(`${API_BASE_URL}/categories`)
      .then(res => res.json())
      .then(response => setCategories(response));
  }, []);
  return (
    <List>
      {
        categories.map(category =>
          <Item key={category.id}>
           <Category {...category} />
          </Item>)
      }
    </List>
  )
}
