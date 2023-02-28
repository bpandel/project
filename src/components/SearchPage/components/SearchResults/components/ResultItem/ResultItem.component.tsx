import { FaStar } from "react-icons/fa";
import * as Styles from "./ResultItem.styles";

export interface IItemProps {
  title: string;
  content: string;
  stars: number;
}

export const Item = ({ title, content, stars }: IItemProps) => {
  return (
    <Styles.Container>
      <Styles.TitleWrapper>
        <Styles.Title>{title}</Styles.Title>
        <Styles.StarsWrapper>
          {stars} <FaStar />
        </Styles.StarsWrapper>
      </Styles.TitleWrapper>
      <Styles.Content>{content}</Styles.Content>
    </Styles.Container>
  );
};
