import React from "react";
import Head from "next/head";
import axios from "axios";

export default function blog({ data }) {
  console.log("ini data", data);
  const dataList = data.map((x, i) => <li key={x.id}>{x.title}</li>);
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <h1>blog</h1>
      <ul>{dataList}</ul>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await res.json();
  // .then(response => response.json())
  // .then(json => console.log(json))
  return {
    props: {
      data,
    },
  };
}
