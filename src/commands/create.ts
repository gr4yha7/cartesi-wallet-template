import { Args, Command, Flags } from "@oclif/core";
import c from "ansi-colors";
import { DownloadTemplateResult, downloadTemplate } from "giget";
import ora from "ora";

const DEFAULT_TEMPLATES_BRANCH = "main";

export default class CreateCommand extends Command {
    static description = "Create application";

    static examples = ["<%= config.bin %> <%= command.id %> myApp --template javascript"];

    static args = {
        name: Args.string({
            description: "application and directory name",
            required: true,
        }),
    };

    static flags = {
        template: Flags.string({
            description: "template name to use",
            required: true,
            options: [
              "javascript",
              "typescript",
              "rust",
            ],
        }),
        branch: Flags.string({
            description: 'repository branch name to use',
            default: DEFAULT_TEMPLATES_BRANCH,
        }),
    };

    private async download(
        template: string,
        branch: string,
        out: string,
    ): Promise<DownloadTemplateResult> {
        let langTemplate = ''
        if (template === 'javascript') {
            langTemplate = `https://codeload.github.com/ETIM-PAUL/cartesi_vault/tar.gz/refs/heads/${branch}`
        } else if (template === 'rust') {
            langTemplate = `https://codeload.github.com/gr4yha7/cartesi_vault_rust/tar.gz/refs/heads/${branch}`
        }
        return downloadTemplate(langTemplate, {
            dir: out,
            forceClean: true,
            install: true,
        });
    }

    public async run(): Promise<void> {
        const { args, flags } = await this.parse(CreateCommand);
        const spinner = ora("Creating application...").start();
        try {
            const { dir } = await this.download(
                flags.template,
                flags.branch,
                args.name,
            );
            spinner.succeed(`Application created at ${c.cyan(dir)}`);
        } catch (e: any) {
            spinner.fail(`Error creating application: ${c.red(e.message)}`);
        }
    }
}