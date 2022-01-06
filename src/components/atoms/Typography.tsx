import React from "react";
import { StyleSheet, Text, StyleProp, TextStyle } from "react-native";
import { Theme } from "$Constants/Theme";
import { FontType } from "../../@types/Variables";

type Props = React.ComponentPropsWithRef<typeof Text> & {
  children: string;
  link?: boolean;
  style?: StyleProp<TextStyle>;
};

function BaseText(props: Props) {
  return (
    <Text
      {...props}
      style={[
        styles.textWrapper,
        props.style,
        props.link === true && { color: Theme.color.link },
      ]}
    >
      {props.children}
    </Text>
  );
}

export function Title0(props: Props) {
  return (
    <BaseText
      {...props}
      style={[
        {
          fontSize: Theme.font.title0.fontSize,
          fontWeight: Theme.font.title0.fontWeight as FontType,
          color: Theme.color.accent,
        },
        props.style,
      ]}
    >
      {props.children}
    </BaseText>
  );
}

export function Title1(props: Props) {
  return (
    <BaseText
      {...props}
      style={[
        {
          fontSize: Theme.font.title1.fontSize,
          fontWeight: Theme.font.title1.fontWeight as FontType,
        },
        props.style,
      ]}
    >
      {props.children}
    </BaseText>
  );
}

export function Title2(props: Props) {
  return (
    <BaseText
      {...props}
      style={[
        {
          fontSize: Theme.font.title2.fontSize,
          fontWeight: Theme.font.title2.fontWeight as FontType,
          color: Theme.color.accent,
        },
        props.style,
      ]}
    >
      {props.children}
    </BaseText>
  );
}

export function Title3(props: Props) {
  return (
    <BaseText
      {...props}
      style={[
        {
          fontSize: Theme.font.title3.fontSize,
          fontWeight: Theme.font.title3.fontWeight as FontType,
          color: Theme.color.accent,
        },
        props.style,
      ]}
    >
      {props.children}
    </BaseText>
  );
}

export function Title4(props: Props) {
  return (
    <BaseText
      {...props}
      style={[
        {
          fontSize: Theme.font.title4.fontSize,
          fontWeight: Theme.font.title4.fontWeight as FontType,
          color: Theme.color.accent,
        },
        props.style,
      ]}
    >
      {props.children}
    </BaseText>
  );
}

export function Title5(props: Props) {
  return (
    <BaseText
      {...props}
      style={[
        {
          fontSize: Theme.font.title5.fontSize,
          fontWeight: Theme.font.title5.fontWeight as FontType,
          color: Theme.color.accent,
        },
        props.style,
      ]}
    >
      {props.children}
    </BaseText>
  );
}

export function Title6(props: Props) {
  return (
    <BaseText
      {...props}
      style={[
        {
          fontSize: Theme.font.title6.fontSize,
          fontWeight: Theme.font.title6.fontWeight as FontType,
          color: Theme.color.accent,
        },
        props.style,
      ]}
    >
      {props.children}
    </BaseText>
  );
}

export function Body1(props: Props) {
  return (
    <BaseText
      {...props}
      style={[
        {
          fontSize: Theme.font.body1.fontSize,
          fontWeight: Theme.font.body1.fontWeight as FontType,
          color: Theme.color.subtext1,
        },
        props.style,
      ]}
    >
      {props.children}
    </BaseText>
  );
}

export function Body2(props: Props) {
  return (
    <BaseText
      {...props}
      style={[
        {
          fontSize: Theme.font.body2.fontSize,
          fontWeight: Theme.font.body2.fontWeight as FontType,
          lineHeight: Theme.font.body2.lineHeight,
          color: Theme.color.accent,
        },
        props.style,
      ]}
    >
      {props.children}
    </BaseText>
  );
}

const styles = StyleSheet.create({
  textWrapper: {},
});
