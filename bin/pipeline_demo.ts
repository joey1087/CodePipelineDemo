#!/usr/bin/env node
import { App } from "@aws-cdk/core";
import { CdkPipelineDemoStack } from "../lib/cdk_pipeline_demo-stack";

const app = new App();

new CdkPipelineDemoStack(app, "CdkpipelinesDemoPipelineStack", {
    env: { account: "admin", region: "ap-southeast-2" },
});

app.synth();
