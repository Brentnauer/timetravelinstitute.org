"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HomeCards.module.css";

export function HomeCards({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Layout
          className={_utils.cx(_styles, "quick-stack")}
          id={_utils.cx(
            _styles,
            "w-node-_2027709f-921b-868a-2b54-34c62ceda8dc-2ceda8da"
          )}
        >
          <_Builtin.Cell
            id={_utils.cx(
              _styles,
              "w-node-_2027709f-921b-868a-2b54-34c62ceda8dd-2ceda8da"
            )}
          >
            <_Builtin.Block className={_utils.cx(_styles, "card")} tag="div">
              <_Builtin.Heading tag="h2">{"History"}</_Builtin.Heading>
              <_Builtin.Paragraph>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Cell>
          <_Builtin.Cell
            id={_utils.cx(
              _styles,
              "w-node-_2027709f-921b-868a-2b54-34c62ceda8e3-2ceda8da"
            )}
          >
            <_Builtin.Block className={_utils.cx(_styles, "card")} tag="div">
              <_Builtin.Heading tag="h2">{"Artifacts"}</_Builtin.Heading>
              <_Builtin.Paragraph>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Cell>
          <_Builtin.Cell
            id={_utils.cx(
              _styles,
              "w-node-_2027709f-921b-868a-2b54-34c62ceda8e9-2ceda8da"
            )}
          >
            <_Builtin.Block className={_utils.cx(_styles, "card")} tag="div">
              <_Builtin.Heading tag="h2">{"People"}</_Builtin.Heading>
              <_Builtin.Paragraph>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Cell>
        </_Builtin.Layout>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
