import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const CartImageContainer = styled.img`
  width: 30%;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.281);
`;

export const CartItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px;
`;

export const CartNameContainer = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const CartPriceContainer = styled.span`
  font-size: 14px;
`;
