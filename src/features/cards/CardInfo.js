import { toggleFavorite } from "../favorites/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function CardInfo({ card }) {
  const dispatch = useDispatch();

  return (
    <>
      <h2>{card.name}</h2>
    </>
  );
}
