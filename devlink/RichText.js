"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./RichText.module.css";

export function RichText({ as: _Component = _Builtin.RichText }) {
  return (
    <_Component className={_utils.cx(_styles, "rich-text")} tag="div" slot="">
      <_Builtin.Heading tag="h1">{"Heading 1"}</_Builtin.Heading>
      <_Builtin.Heading tag="h2">{"Heading 2"}</_Builtin.Heading>
      <_Builtin.Heading tag="h3">{"Heading 3"}</_Builtin.Heading>
      <_Builtin.Heading tag="h4">{"Heading 4"}</_Builtin.Heading>
      <_Builtin.Heading tag="h5">{"Heading 5"}</_Builtin.Heading>
      <_Builtin.Heading tag="h6">{"Heading 6"}</_Builtin.Heading>
      <_Builtin.Paragraph>
        {
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
      </_Builtin.Paragraph>
      <_Builtin.Blockquote>{"Block quote"}</_Builtin.Blockquote>
      <_Builtin.Paragraph>{"Ordered list"}</_Builtin.Paragraph>
      <_Builtin.List tag="ol" unstyled={false}>
        <_Builtin.ListItem>{"Item 1"}</_Builtin.ListItem>
        <_Builtin.ListItem>{"Item 2"}</_Builtin.ListItem>
        <_Builtin.ListItem>{"Item 3"}</_Builtin.ListItem>
      </_Builtin.List>
      <_Builtin.Paragraph>{"Unordered list"}</_Builtin.Paragraph>
      <_Builtin.List tag="ul" unstyled={false}>
        <_Builtin.ListItem>{"Item A"}</_Builtin.ListItem>
        <_Builtin.ListItem>{"Item B"}</_Builtin.ListItem>
        <_Builtin.ListItem>{"Item C"}</_Builtin.ListItem>
      </_Builtin.List>
      <_Builtin.Paragraph>
        <_Builtin.Link
          button={false}
          block=""
          options={{
            href: "https://university.webflow.com/lesson/add-and-nest-text-links-in-webflow",
          }}
        >
          {"Text link"}
        </_Builtin.Link>
      </_Builtin.Paragraph>
      <_Builtin.Paragraph>
        <_Builtin.Strong>{"Bold text"}</_Builtin.Strong>
      </_Builtin.Paragraph>
      <_Builtin.Paragraph>
        <_Builtin.Emphasized>{"Emphasis"}</_Builtin.Emphasized>
      </_Builtin.Paragraph>
      <_Builtin.Paragraph>
        <_Builtin.Superscript>{"Superscript"}</_Builtin.Superscript>
      </_Builtin.Paragraph>
      <_Builtin.Paragraph>
        <_Builtin.Subscript>{"Subscript"}</_Builtin.Subscript>
      </_Builtin.Paragraph>
    </_Component>
  );
}
