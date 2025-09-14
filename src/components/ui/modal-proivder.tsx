"use client";

import { useEffect, useState } from "react";
import ProModal from "../ProModal";

export default function ModalProvider() {
  const [isMounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!isMounted) return null;
  return <ProModal />;
}
