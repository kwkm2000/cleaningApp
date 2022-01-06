import React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  color?: string | undefined;
}

export default function ArrowRight({ color = "#6B7AFA" }: Props) {
  return (
    <Svg width="8" height="12" viewBox="0 0 8 12" fill="none">
      <Path
        d="M7.32736 6.53761C7.62937 6.27336 7.65094 5.81823 7.39208 5.52671L7.32736 5.46251L1.61308 0.462505C1.31619 0.202732 0.864935 0.232817 0.605163 0.529699C0.365372 0.803745 0.372561 1.20933 0.608593 1.47443L0.672357 1.53761L5.77272 6.00006L0.672357 10.4625C0.398311 10.7023 0.351597 11.1052 0.55035 11.3993L0.605163 11.4704C0.844953 11.7445 1.2479 11.7912 1.54198 11.5924L1.61308 11.5376L7.32736 6.53761Z"
        fill={color}
      />
    </Svg>
  );
}
