import {Api, StackContext} from "sst/constructs";

export function API({stack}: StackContext) {
    const api = new Api(stack, "api", {
        routes: {
            // "ANY /api/{proxy+}": "packages/functions/src/server.handler",
            "GET /api/{proxy+}": "packages/functions/src/server.handler",
            "POST /api/{proxy+}": "packages/functions/src/server.handler",
        },
        cors: {
            allowMethods: ["GET", "POST", "HEAD", "OPTIONS"],
            allowOrigins: ["*"],
        }
    });
    stack.addOutputs({
        ApiEndpoint: api.url,
    });
}



// const api = new Api(stack, "api", {
//     routes: {
//         // "ANY /api/{proxy+}": "packages/functions/src/server.handler",
//         "GET /api/{proxy+}": "packages/functions/src/server.handler",
//         "POST /api/{proxy+}": "packages/functions/src/server.handler",
//     },
//     cors: {
//         allowMethods: ["GET", "POST", "HEAD", "OPTIONS"],
//         allowOrigins: ["*"],
//     }
// });