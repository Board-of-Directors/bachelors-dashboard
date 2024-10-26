import { WrapperProps } from "@/types/utils";
import { cn } from "@/utils/cn";

export const MainContainer = ({ children, className }: WrapperProps) => (
  <main className={cn(className, "w-full h-full bg-white flex flex-col overflow-y-clip")}>
    {children}
  </main>
);
