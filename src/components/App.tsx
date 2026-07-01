import { useRef } from "react";
import { useActiveMenuIds } from "../useActiveMenuIds";
import { Menu } from "./Menu";
import { TopBar } from "./TopBar";
import { Maps } from "./Maps";
import s from "./App.module.css";
import { AppContextProvider } from "./AppContext";

const App = () => {
  const mapsRef = useRef<HTMLDivElement>(null);
  const activeMenuIds = useActiveMenuIds(mapsRef);

  return (
    <AppContextProvider>
      <div className={s.app}>
        <Menu activeMenuIds={activeMenuIds} />
        <div className={s.mainContent} ref={mapsRef}>
          <TopBar />
          <div className={s.maps}>
            <Maps />
          </div>
        </div>
      </div>
    </AppContextProvider>
  );
};

export default App;
