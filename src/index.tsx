import * as React from "react";
import log from "./log";

console.log("foo");

const Foo = () => {
  return (
    <div>
      <p>Hello World</p>
    </div>
  );
};

console.log("Foo", Foo);

log();
