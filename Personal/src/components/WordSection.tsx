"use client";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export const WordSection = ({
  words,
  className,
  children
}: {
  words: string;
  className?: string;
  children? : React.ReactNode;
}) => {
  return (<>
  <TextGenerateEffect words={words} className={`text-5xl font-extrabold text-center ${className}`}>
    {children}
    </TextGenerateEffect>
  </>)
};
