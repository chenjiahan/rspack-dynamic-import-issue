import { lazy } from "react";

const LazyComponent = lazy(() => import("./Component"));

console.log(LazyComponent);
