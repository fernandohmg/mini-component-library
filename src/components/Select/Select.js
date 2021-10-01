import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectComponent value={value} onChange={onChange}>
        {children}
      </SelectComponent>
      <IconWrapper id="chevron-down" size={16} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectComponent = styled.select`
  background-color: ${COLORS.transparentGray15};
  color: inherit;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;
  width: fit-content;
  height: 43px;
  border: none;
  appearance: none;
`;

const IconWrapper = styled(Icon)`
  font-weight: 700;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 80%;
`;

export default Select;
