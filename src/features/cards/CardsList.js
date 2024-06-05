import { useGetAllCardsQuery } from "./apiSlice";
import Modal from "react-modal";
import { useState } from "react";
import {
  BoardContainer,
  ListContainer,
  ListTitle,
  CardContainer,
  CardTitle,
  AddCardButton,
  AddListButton,
  CheckboxListContainer,
  CheckboxItem,
  Checkbox,
  Textarea,
  SubmitButton,
} from "./styles.js";

export default function CardsList() {
  const { data, isError, isLoading } = useGetAllCardsQuery();
  const [selectedCards, setSelectedCards] = useState([]);
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [modalCard, setModalCard] = useState(null); // Neu hinzugefügt
  const [cardsText, setCardsText] = useState({});

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading..</div>;
  }

  function handleOpenModal(card) {
    setModalCard(card); // Setzt die ausgewählte Karte für das Modal
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
    setModalCard(null); // Setzt die ausgewählte Karte zurück, wenn das Modal geschlossen wird
  }

  function handleCheckboxChange(cardId) {
    setSelectedCards(function (prevSelected) {
      if (prevSelected.includes(cardId)) {
        return prevSelected.filter(function (id) {
          return id !== cardId;
        });
      } else {
        return prevSelected.concat(cardId);
      }
    });
  }

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleSubmit() {
    const date = new Date().toLocaleDateString();
    setCardsText(function (prevCardsText) {
      const updatedCardsText = { ...prevCardsText };
      selectedCards.forEach(function (cardId) {
        updatedCardsText[cardId] = `Update ${date}${text}`;
      });
      return updatedCardsText;
    });

    const selectedCardNames = data
      .flatMap((list) => list.cards)
      .filter((card) => selectedCards.includes(card.id))
      .map((card) => card.name)
      .join(", ");

    alert(`Update was added to ${selectedCardNames}`);
  }

  return (
    <BoardContainer>
      {data.map((list) => (
        <ListContainer key={list.id}>
          <ListTitle>{list.name}</ListTitle>

          {list.cards.map((card) => (
            <CardContainer key={card.id}>
              <CardTitle>{card.name}</CardTitle>
              <button onClick={() => handleOpenModal(card)}>Show Info</button>
            </CardContainer>
          ))}
          <AddCardButton>+ Add another card</AddCardButton>
        </ListContainer>
      ))}
      <CheckboxListContainer>
        <h3>Select Cards</h3>
        {data.map((list) =>
          list.cards.map((card) => (
            <CheckboxItem key={card.id}>
              <Checkbox
                checked={selectedCards.includes(card.id)}
                onChange={() => handleCheckboxChange(card.id)}
              />
              {card.name}
            </CheckboxItem>
          ))
        )}
        <Textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Please type your update here"
        />
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </CheckboxListContainer>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Info Modal"
      >
        {modalCard && ( // Überprüfen, ob eine Karte ausgewählt wurde
          <>
            <h2>{modalCard.name}</h2>
            <p>{cardsText[modalCard.id]}</p>
            <button onClick={handleCloseModal}>Close</button>
          </>
        )}
      </Modal>
    </BoardContainer>
  );
}
