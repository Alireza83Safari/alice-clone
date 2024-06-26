import React from "react";

export default function layout(props: {
  intro: React.ReactNode;
  tagline: React.ReactNode;
  about: React.ReactNode;
  categories: React.ReactNode;
  blog: React.ReactNode;
  news: React.ReactNode;
}) {
  return (
    <>
      {props.intro}
      {props.tagline}
      {props.about}
      {props.categories}
      {props.blog}
      {props.news}
    </>
  );
}
