import React from "react";
//consumer because we are importing useStoreContext from the global state
import { useStoreContext } from "../../utils/GlobalState";

function Nav() {
  const [store] = useStoreContext();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          BLOGGING IS TIGHT!!!
        </a>
        {store.loading ? (
          <a className="navbar-brand ml-auto">Loading.....</a>
        ) : (
          <></>
        )}
      </nav>
    </>
  );
}

export { Nav };
