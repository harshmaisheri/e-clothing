import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.281);
  background-color: white;
  top: 90px;
  right: 50px;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 110%;
  scrollbar-width: thin;
  margin-bottom: 10px;
`;

export const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CartDropDownImage = styled.img`
  padding: 10px;
  width: 90%;
  height: 160px;
  margin: 20px 0 20px -15px;
`;

export const EmptyMessage = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-left: -15px;
`;
