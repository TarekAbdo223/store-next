"use client";

import { toast as toastManager } from "@/components/ui/toast";

type ToastProps = {
  title?: string;
  description?: string;
  type?: "success" | "info" | "warning" | "error" | "loading";
};

export function useToast() {
  return {
    toast: ({ title, description, type }: ToastProps) => {
      toastManager.add({
        title,
        description,
        type,
      });
    },
  };
}
