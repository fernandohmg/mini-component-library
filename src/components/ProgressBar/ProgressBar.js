/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

const SIZES = {
  small: {
    "--height": `${8}px`,
  },
  medium: {
    "--height": `${12}px`,
  },
  large: {
    "--height": `${24}px`,
    "--padding": `${4}px`,
  },
};

const ProgressBar = ({ value, size }) => {
  if (value < 0 || value > 100) {
    throw new Error(`Value must be from 0 to 100`);
  }

  const styles = SIZES[size];

  return (
    <BaseProgressBar
      style={styles}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <Bar progress={value} />
    </BaseProgressBar>
  );
};

const BaseProgressBar = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 370px;
  height: var(--height);
  padding: var(--padding);
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: ${(p) => (p.progress === 100 ? "4px" : "4px 0px 0px 4px")};
  height: 100%;
  width: ${(p) => p.progress}%;
`;

export default ProgressBar;
