import * as React from "react";
import * as Types from "./types";

declare function Section(props: {
  as?: React.ElementType;
  runtimeProps?: Types.Devlink.RuntimeProps;
  content?: Types.Basic.RichTextChildren;
  contentSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
