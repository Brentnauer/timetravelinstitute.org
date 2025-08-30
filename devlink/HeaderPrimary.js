"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HeaderPrimary.module.css";

export function HeaderPrimary({ as: _Component = _Builtin.NavbarWrapper }) {
  return (
    <_Component
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.NavbarContainer tag="div">
        <_Builtin.NavbarBrand
          options={{
            href: "#",
          }}
        />
        <_Builtin.NavbarMenu tag="nav" role="navigation">
          <_Builtin.NavbarLink
            options={{
              href: "#",
            }}
          >
            {"Home"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            options={{
              href: "#",
            }}
          >
            {"About"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-link-2")}
            options={{
              href: "#",
            }}
          >
            {"Booger"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            options={{
              href: "#",
            }}
          >
            {"Contact"}
          </_Builtin.NavbarLink>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton tag="div">
          <_Builtin.Icon
            widget={{
              type: "icon",
              icon: "nav-menu",
            }}
          />
        </_Builtin.NavbarButton>
      </_Builtin.NavbarContainer>
    </_Component>
  );
}
