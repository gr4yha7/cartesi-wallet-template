import { Args, Command, Flags } from "@oclif/core";
import c from "ansi-colors";
import { DownloadTemplateResult, downloadTemplate } from "giget";
import ora from "ora";

const DEFAULT_TEMPLATES_BRANCH = "main";

export default class CreateCommand extends Command {
    static description = "Create application";

    static examples = ["<%= config.bin %> <%= command.id %>"];

    static args = {
        name: Args.string({
            description: "application and directory name",
            required: true,
        }),
    };

    static flags = {
        branch: Flags.string({
            description: 'repository branch name to use',
            default: DEFAULT_TEMPLATES_BRANCH,
        }),
    };

    private async download(
        branch: string,
        out: string,
    ): Promise<DownloadTemplateResult> {
        const template = `https://codeload.github.com/prototyp3-dev/frontend-web-cartesi/tar.gz/refs/heads/${branch}`
        return downloadTemplate(template, {
            dir: out,
            forceClean: true,
            install: true
        });
    }

    public async run(): Promise<void> {
        const { args, flags } = await this.parse(CreateCommand);
        const spinner = ora("Creating application...").start();
        try {
            const { dir } = await this.download(
                flags.branch,
                args.name,
            );
            spinner.succeed(`Application created at ${c.cyan(dir)}`);
        } catch (e: any) {
            spinner.fail(`Error creating application: ${c.red(e.message)}`);
        }
    }
}