import { useRef } from "react";
import { useActiveMenuIds } from "../useActiveMenuIds";
import { Menu } from "./Menu";
import { Maps } from "./Maps";
import s from "./App.module.css";

const App = () => {
  const mapsRef = useRef<HTMLDivElement>(null);
  const activeMenuIds = useActiveMenuIds(mapsRef);

  return (
    <div className={s.app}>
      <Menu activeMenuIds={activeMenuIds} />
      <div className={s.maps} ref={mapsRef}>
        <Maps />
      </div>
    </div>
  );
};

export default App;
