import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "sst-with-trpc",
      region: "eu-west-1",
    };
  },
  stacks(app) {
    app.setDefaultFunctionProps({
      memorySize: 512,
      runtime: "nodejs18.x",
    })
    app.stack(API);
  }
} satisfies SSTConfig;
