import { ReactNode, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import * as Styles from "./Accordion.styles";

interface IAccordionProps<T> {
  children?: ReactNode;
  title: string;
  onExpand: (dataItem: T) => void;
  dataItem: T;
}

export const Accordion = <T,>({
  title,
  children,
  onExpand,
  dataItem,
}: IAccordionProps<T>) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded((prevValue) => !prevValue);
    if (!isExpanded) {
      onExpand(dataItem);
    }
  };

  return (
    <Styles.Container>
      <Styles.Button onClick={handleButtonClick} data-testid="button">
        <Styles.ButtonTitle>{title}</Styles.ButtonTitle>
        <Styles.ChevronWrapper>
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </Styles.ChevronWrapper>
      </Styles.Button>
      {isExpanded && <Styles.Content>{children}</Styles.Content>}
    </Styles.Container>
  );
};
