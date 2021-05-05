import React from "react";
import Svg, {
  G,
  Defs,
  ClipPath,
  Rect,
  Path,
} from "react-native-svg";
import { View, StyleProp, ViewStyle } from "react-native";

export type IconProps = {
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  fill?: string
}

export const BackIcon = ({ width = 25, height = 25, style = {}, fill = "#ffffff" }: IconProps) => {
  return (
    <View style={style}>
      <Svg width={width} height={height} viewBox="0 0 25 25" fill="none">
        <G clip-path="url(#clip0)">
          <Path d="M8.15471 3.97613C8.50716 3.62368 9.06203 3.62368 9.41448 3.97613C9.75502 4.31667 9.75502 4.88344 9.41448 5.22319L3.02675 11.6109H24.1054C24.5967 11.6109 25 12.0015 25 12.4928C25 12.9842 24.5967 13.3874 24.1054 13.3874H3.02675L9.41448 19.7633C9.75502 20.1157 9.75502 20.6833 9.41448 21.023C9.06203 21.3755 8.50716 21.3755 8.15471 21.023L0.254795 13.1231C-0.0857456 12.7826 -0.0857456 12.2158 0.254795 11.876L8.15471 3.97613Z" fill={fill} />
        </G>
        <Defs>
          <ClipPath id="clip0">
            <Rect width={width} height={height} fill={fill} />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export const OptionsIcon = ({ width = 25, height = 25, style = {}, fill = "#FFFFFF" }: IconProps) => {
  return (
    <View style={style}>
      <Svg width={width} height={height} viewBox="0 0 25 25" fill="none">
        <Path d="M25 11.5385H1.66663V13.4615H25V11.5385ZM25 2.53204H1.66663V4.45512H25V2.53204ZM25 20.5449H1.66663V22.4679H25V20.5449Z" fill={fill} />
      </Svg>
    </View>
  );
};

export const Component = ({ width = 25, height = 25, style = {} }: IconProps) => {
  return <View style={style}>


  </View>;
};
