export interface ButtonProps {
  testId: string;
  label: string;
  color: "primary" | "secondary";
  disabled?: boolean;
  onClick: Function;
}
