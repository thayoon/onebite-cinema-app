"use client";

import { createPortal } from "react-dom";
import style from "./modal.module.css";
import { ReactNode, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scroll({
        top: 0,
      });
    }
  }, []);

  return createPortal(
    <dialog
      ref={dialogRef}
      onClose={() => router.back()}
      onClick={(e) => {
        if ((e.target as any).nodeName === "DIALOG") {
          router.back();
        }
      }}
      className={style.modal}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
}
