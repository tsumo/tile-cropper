import { useAppContext } from "./AppContext";
import s from "./TopBar.module.css";

export const TopBar = () => {
  const { scaleFactor, setScaleFactor } = useAppContext();

  return (
    <div className={s.topBar}>
      scale factor{" "}
      <input
        type="number"
        min={1}
        value={scaleFactor}
        onChange={(e) => setScaleFactor(e.target.valueAsNumber)}
        className={s.input}
      />
    </div>
  );
};
