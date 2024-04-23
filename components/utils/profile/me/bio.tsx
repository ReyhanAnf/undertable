"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


export function Bio({ text }: any) {
  return <TextGenerateEffect words={text} />;
}
