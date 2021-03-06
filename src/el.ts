import * as config from "./utils/config";
import { MiraiApiHttpConfig } from "mirai-ts";
import defaultConfig from "./config/default";

export default class El {
  qq: number;
  /**
   * MiraiAPIHTTP setting.yml
   */
  setting: MiraiApiHttpConfig;
  config: any;
  constructor(el: El) {
    this.qq = 0;
    this.setting = {
      host: "0.0.0.0",
      port: 4859,
      authKey: "el-psy-congroo",
      cacheSize: 4096,
      enableWebsocket: true,
      cors: ["*"],
    };
    this.config = defaultConfig;
    // 合并
    config.merge(this, el);
  }
}
