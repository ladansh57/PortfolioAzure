//import { myComponent } from "./test/MyComponent";
//import styles from "../conference.module.css";
//import { useClient } from "next/data-client";

//import { useState } from "react";
"use client";

import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import("./test/MyComponent"), {
  ssr: false, // Disable server-side rendering
});

const Page = () => {
  return (
    <div>
     <DynamicComponent />
    </div>
  );
};

export default Page;



