"use client";

import { useState } from "react";
import FaqItem from "./FaqItem";
import { FAQ_ITEMS } from "./faq";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return <ul className="faq-accordion" aria-label="Perguntas e respostas sobre a Aitak Odontologia">
    {FAQ_ITEMS.map((item, index) => <FaqItem key={item.id} item={item} index={index} open={openIndex === index} onToggle={() => setOpenIndex(index)} />)}
  </ul>;
}
