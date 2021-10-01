import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

const SIZE = {
  small: {
    "--border-width": `${1}px`,
    "--font-size": `${14}px`,
    "--line-height": `${16}px`,
    "--icon-size": `${10}px`,
  },
  large: {
    "--border-width": `${2}px`,
    "--font-size": `${18}px`,
    "--line-height": `${21}px`,
    "--icon-size": `${16}px`,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = SIZE[size];
  return (
    <Input
      style={style}
      label={label}
      width={width}
      placeholder={placeholder}
    />
  );
};

const Input = styled.input`
  width: ${(p) => p.width}px;
  border: transparent;
  border-bottom: var(--border-width) solid ${COLORS.black};
  color: ${COLORS.gray700};
  font-size: var(--font-size);
  font-weight: bold;
  outline-offset: 4px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }

  &:focus {
    color: ${COLORS.black};
  }
`;

export default IconInput;
