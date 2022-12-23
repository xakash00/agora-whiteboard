import React from "react";
import { useEffect } from "react";
import { createFastboard, createUI } from "@netless/fastboard";
const Whiteboard = () => {
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
        uid: "114",
        uuid: "415545207d0111eda6858354054d6a12",
        roomToken:
          "netlessroom_yws9nu1hluttnu5ob2s1tmrjqszlehbpcmvbdd0xnjcxnzczodizmda4jm5vbmnlpte2nze3nzaymjmwmdgwmczyb2xlptemc2lnpwvkzjjlzjfmnwmzzjrjnwnlyjfizwyymjhhotnkodhjytliymywzdiyngnjowzmywq2nti2mjlmntg3ywqyowymdxvpzd00mtu1nduymddkmdexmwvkyty4ntgzntqwntrknmexmg",
        isWritable: true,
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
    <div>
      <div id="whiteboard" style={styles}></div>
    </div>
  );
};

export default Whiteboard;
