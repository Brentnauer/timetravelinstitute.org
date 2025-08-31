"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Header2.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"777af7a3-596c-3365-48a0-0ceb6cd8cf83","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"777af7a3-596c-3365-48a0-0ceb6cd8cf83","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1756606172634}},"actionLists":{"a":{"id":"a","title":"New Timed Animation","actionItemGroups":[],"useFirstGroupAsInitialState":false,"createdOn":1756607283590}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Header2({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar-logo-left")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.NavbarWrapper
        className={_utils.cx(
          _styles,
          "navbar-logo-left-container",
          "shadow-three"
        )}
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
        <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar-wrapper")}
            tag="div"
          >
            <_Builtin.NavbarBrand
              className={_utils.cx(_styles, "navbar-brand")}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "logo")}
                data-w-id="777af7a3-596c-3365-48a0-0ceb6cd8cf83"
                tag="div"
              >
                {"TTI"}
                <_Builtin.Span className={_utils.cx(_styles, "logo-org")}>
                  {".org"}
                </_Builtin.Span>
              </_Builtin.Block>
            </_Builtin.NavbarBrand>
            <_Builtin.NavbarMenu
              className={_utils.cx(_styles, "nav-menu-wrapper")}
              tag="nav"
              role="navigation"
            >
              <_Builtin.List
                className={_utils.cx(_styles, "nav-menu-two")}
                tag="ul"
                unstyled={true}
              >
                <_Builtin.ListItem>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "nav-link")}
                    button={false}
                    block=""
                    options={{
                      href: "/history",
                    }}
                  >
                    {"History"}
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "nav-link")}
                    button={false}
                    block=""
                    options={{
                      href: "/artifacts",
                    }}
                  >
                    {"Artifacts"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "nav-link")}
                    button={false}
                    block=""
                    options={{
                      href: "/people",
                    }}
                  >
                    {"People"}
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav-divider")}
                    tag="div"
                  />
                </_Builtin.ListItem>
                <_Builtin.ListItem>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "nav-link-accent")}
                    button={false}
                    block=""
                    options={{
                      href: "https://timetravelinstitute.com",
                    }}
                  >
                    {"Back to the BBS"}
                  </_Builtin.Link>
                </_Builtin.ListItem>
              </_Builtin.List>
            </_Builtin.NavbarMenu>
            <_Builtin.NavbarButton
              className={_utils.cx(_styles, "menu-button")}
              tag="div"
            >
              <_Builtin.Icon
                widget={{
                  type: "icon",
                  icon: "nav-menu",
                }}
              />
            </_Builtin.NavbarButton>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.NavbarWrapper>
    </_Component>
  );
}
