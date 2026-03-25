import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type ButtonIconProps = {
  type?: ButtonIconTypeStyleProps;
};

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BRAND.GREEN.LIGHT};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const IconContainer = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(ArrowUpRight).attrs<ButtonIconProps>(
  ({ theme, type }) => ({
    size: 24,
    color:
      type === "PRIMARY"
        ? theme.COLORS.BRAND.GREEN.DARK
        : type === "SECONDARY"
        ? theme.COLORS.BRAND.RED.DARK
        : theme.COLORS.BASE.GRAY_200,
  })
)``;
