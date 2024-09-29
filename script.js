import chalk from "chalk";

const showLogo = () => {
    console.log(
        chalk.red(`
    ███╗   ██╗ ██████╗ ██████╗ ██╗  ██╗
    ████╗  ██║██╔═══██╗██╔══██╗██║ ██╔╝
    ██╔██╗ ██║██║   ██║██████╔╝█████╔╝
    ██║╚██╗██║██║   ██║██╔═══╝ ██╔═██╗
    ██║ ╚████║╚██████╔╝██║     ██║  ██╗
    ╚═╝  ╚═══╝ ╚═════╝ ╚═╝     ╚═╝  ╚═╝
    `)
    );

    console.log(chalk.green("\n✨ Projeto criado com sucesso!"));
    console.log(chalk.yellow("⚡ Siga as instruções abaixo para começar:\n"));
};

const main = () => {
    showLogo();
    // Qualquer outra configuração que deseja fazer no pós-instalação
};

main();
