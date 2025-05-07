export type Variant = "success" | "warning" | "danger";

export interface AlertProps {
  onClose?: () => void;
  description?: string;
  variant?: Variant;
  header: string;
}
