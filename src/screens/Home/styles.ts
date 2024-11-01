import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_700};
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BRAND.GREEN.DARK};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
