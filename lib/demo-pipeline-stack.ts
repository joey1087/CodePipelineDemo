import * as CodePipeLine from "@aws-cdk/aws-codepipeline";
import * as CodePipeLineActions from "@aws-cdk/aws-codepipeline-actions";
import { Construct, SecretValue, Stack, StackProps } from "@aws-cdk/core";
import { CdkPipeline, SimpleSynthAction } from "@aws-cdk/pipelines";

export class PipelineDemoStack extends Stack {
    constructor(scope: Construct, id: "string", props?: StackProps) {
        super(scope, id, props);

        const sourceArtifact = new CodePipeLine.Artifact();
        const cloudAssemblyArtifact = new CodePipeLine.Artifact();

        const pipeline = new CdkPipeline(this, "Pipeline", {
            pipelineName: "DemoPipeline",
            cloudAssemblyArtifact: cloudAssemblyArtifact,
            sourceAction: new CodePipeLineActions.GitHubSourceAction({
                actionName: "Github",
                output: sourceArtifact,
                oauthToken: SecretValue.secretsManager("github-token"),
                owner: "Joey",
                repo: "Repo",
            }),
            synthAction: SimpleSynthAction.standardNpmSynth({
                sourceArtifact: sourceArtifact,
                cloudAssemblyArtifact: cloudAssemblyArtifact,
                buildCommand: "npm run build",
            }),
        });
    }
}
