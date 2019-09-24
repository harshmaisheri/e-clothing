import styled, { css } from "styled-components";

const Text = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

export const ChkoutImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const ChkoutImageHolder = styled.img`
  width: 75%;
  height: 75%;
  border-radius: 10px;
`;

export const ChkoutText = styled.span`
  ${Text}

  @media screen and (max-width: 800px) {
    width: 22%;
  }
`;

export const ChkoutQuantity = styled.div`
  display: flex;
  ${Text}
`;

export const ChkoutValue = styled.span`
  margin: 0 10px;
`;

export const ChkoutArrow = styled.div`
  cursor: pointer;
`;

export const ChkoutRemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  color: crimson;
`;
