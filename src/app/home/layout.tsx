import React from "react";

export default function layout(props: {
  intro: React.ReactNode;
  tagline: React.ReactNode;
}) {
  return (
    <>
      {props.intro}
      {props.tagline}
    </>
  );
}
