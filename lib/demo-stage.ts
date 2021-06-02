import { Stage, Construct, StageProps, CfnOutput } from "@aws-cdk/core";
import { CdkPipelineDemoStack } from "./cdk_pipeline_demo-stack";

export class DemoStage extends Stage {
    public readonly apiUrl: CfnOutput;

    constructor(scope: Construct, id: string, props?: StageProps) {
        super(scope, id, props);

        const service = new CdkPipelineDemoStack(this, "DemoStack");

        this.apiUrl = service.apiUrl;
    }
}
