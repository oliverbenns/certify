import styled from "@react-pdf/styled-components";
import { colors, fontSizes, spacings } from "./theme";

export const Page = styled.Page`
  background-color: ${colors.isabelline};
  padding: ${spacings.large};
`;

export const Container = styled.View`
  padding: ${spacings.large};
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: ${colors.white};
`;

export const Heading = styled.Text`
  font-family: "Helvetica";
  font-weight: bold;
  color: ${colors.font};
  font-size: ${fontSizes.extraLarge};
`;

export const Description = styled.Text`
  font-family: "Helvetica";
  font-weight: bold;
  color: ${colors.font};
  font-size: 12px;
`;

export const Image = styled.Image``;
