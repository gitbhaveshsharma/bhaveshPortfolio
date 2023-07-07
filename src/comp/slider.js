import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import styles from "../comp/slide_style.css";

const left = {
  bg: `linear-gradient(0deg, rgb(150 251 196 / 0%) 0%, rgb(249, 245, 134) 100%)`,
  justifySelf: "end",
};
const right = {
  bg: `linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)`,
  justifySelf: "start",
};

const Slider = ({ children }: { children: ReactNode }) => {
  const [{ x, bg, scale, justifySelf }, api] = useSpring(() => ({
    x: 0,
    scale: 1,
    ...left,
  }));
  const bind = useDrag(({ active, movement: [x] }) =>
    api.start({
      x: active ? x : 0,
      scale: active ? 1.1 : 1,
      ...(x < 0 ? left : right),
      immediate: (name) => active && name === "x",
    })
  );

  const avSize = x.to({
    map: Math.abs,
    range: [50, 300],
    output: [0.5, 1],
    extrapolate: "clamp",
  });

  return (
    <animated.div
      {...bind()}
      className={styles.item}
      style={{ background: bg, borderRadius: 40 }}
    >
      <animated.div
        className={styles.av}
        style={{ scale: avSize, justifySelf }}
      />
      <animated.div className={styles.fg} style={{ x, scale }}>
        {children}
      </animated.div>
    </animated.div>
  );
};

export default Slider;
