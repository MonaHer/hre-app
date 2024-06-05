import styled from "styled-components";

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  overflow-x: auto;
  background-color: #f4f5f7;
  height: 100vh;
`;

export const ListContainer = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  width: 300px;
  padding: 10px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
`;

export const ListTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
`;

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  padding: 8px;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const CardTitle = styled.div`
  font-size: 14px;
  color: #333;
`;

export const AddCardButton = styled.button`
  background-color: #5aac44;
  border: none;
  color: #fff;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #519839;
  }
`;

export const AddListButton = styled.button`
  background-color: #0079bf;
  border: none;
  color: #fff;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #026aa7;
  }
`;

export const CheckboxListContainer = styled.div`
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
`;

export const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 10px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border-radius: 3px;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const SubmitButton = styled(AddListButton)`
  background-color: #0079bf;
  margin-top: 10px;

  &:hover {
    background-color: #026aa7;
  }
`;
