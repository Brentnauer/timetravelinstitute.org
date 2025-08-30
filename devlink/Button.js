"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function Button({ as: _Component = _Builtin.Link }) {
  return (
    <_Component
      button={true}
      block=""
      options={{
        href: "#",
      }}
    >
      {"Button Text"}
    </_Component>
  );
}
