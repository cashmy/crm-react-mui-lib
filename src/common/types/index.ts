export type ColorType =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";
export type ColorTypeString =
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success"
  | string; // Allow any string for custom colors

export type TooltipPlacement =
  | "top-start"
  | "top"
  | "top-end"
  | "left-start"
  | "left"
  | "left-end"
  | "bottom-start"
  | "bottom"
  | "bottom-end"
  | "right-start"
  | "right"
  | "right-end";

export type TextFieldSize = "small" | "medium";
export type TextFieldVariant = "outlined" | "filled" | "standard";
export type TextFieldType =
  | "text"
  | "number"
  | "email"
  | "password"
  | "tel"
  | "url";

export type Variant = "outlined" | "filled" | "standard";
