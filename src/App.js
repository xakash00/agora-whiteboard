
import "./App.css";
import { useEffect } from "react";
import { createFastboard, createUI } from "@netless/fastboard";

function App() {
  const styles = {
    width: "100%",
    height: "72vh",
    backgroundColor: "#fff",
  };

  let app;
  async function mountFastboard(div) {
    app = await createFastboard({
      sdkConfig: {
        appIdentifier: "yj-J8GWuEe2PfG3c9c975A/Qx3WgUu-5RCjDQ",
        region: "in-mum",
      },
      joinRoom: {
        uid: "104",
        uuid: "415545207d0111eda6858354054d6a12",
        roomToken:"NETLESSROOM_YWs9NU1hLUtTNU5Ob2s1TmRjQSZleHBpcmVBdD0xNjcxMTg5MTEzNzk3Jm5vbmNlPTE2NzExODU1MTM3OTcwMCZyb2xlPTEmc2lnPWY5Y2VmZmY5YTQwZTJjYjY3MTliMDM5OTkzYjJhOWMyYmJiZDRkZWZiNjQ2Yzk3Nzk0ZWUwZWI1NmE1ZTdmNmUmdXVpZD00MTU1NDUyMDdkMDExMWVkYTY4NTgzNTQwNTRkNmExMg",
        isWritable: true 
      },
      managerConfig: {
        cursor: false,
      },
    });
    window.app = app;
    return createUI(app, div);
  }

  useEffect(() => {
    const timeout_id = setTimeout(
      () => mountFastboard(document.getElementById("whiteboard")),
      0
    );
    return () => clearTimeout(timeout_id);
  }, []);


  return (
    <div className="App">
      <div id="whiteboard" style={styles}></div>
    </div>
  );
}

export default App;
