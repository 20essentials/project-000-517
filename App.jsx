import React from "react";
import { createRoot } from "react-dom/client";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  global: {
    "*": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      fontFamily:
        "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
    },
    "*, *::before, *::after": {
      boxSizing: "inherit",
    },
    a: {
      WebkitTapHighlightColor: "transparent",
    },
    html: {
      scrollBehavior: "smooth",
      scrollbarWidth: "thin",
      scrollbarColor: "transparent transparent",
    },
    body: {
      height: "100vh",
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      placeContent: "center",
      backgroundColor: "black",
    },
  },
  container: {
    width: "360px",
    height: "360px",
    borderRadius: "20px",
    boxShadow: "inset 0 0 20px 0 #fff4",
    position: "relative",
    transition: "box-shadow 0.4s ease-in-out",
    ":hover": {
      boxShadow: "inset 0 0 150px 0 #fff2",
    },
    "@media (width <= 1111px)": {
      zoom: "0.7",
    },
  },
  subContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  row: {
    width: "100%",
    flexGrow: 1,
    position: "relative",
    top: "-4px",
    backgroundImage: "url('assets/band.png')",
    backgroundRepeat: "repeat-x",
    backgroundSize: "837px",
    overflow: "hidden",
    zIndex: -1,
    animationName: {
      "0%": { backgroundPositionX: "0" },
      "100%": { backgroundPositionX: "-837px" },
    },
    animationDuration: "20s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    animationFillMode: "both",
  },
});

function App() {
  return (
    <section {...stylex.props(styles.container)}>
      <article {...stylex.props(styles.subContainer)}>
        {Array.from({ length: 7 }).map((_, i) => (
          <aside
            key={i}
            {...stylex.props(styles.row)}
            style={{ animationDelay: `${i * -3.5}s` }}
          />
        ))}
      </article>
    </section>
  );
}

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
