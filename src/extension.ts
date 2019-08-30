import { ExtensionContext, commands } from 'vscode';

export function activate(context: ExtensionContext) {

    let command = commands.registerCommand('hover-be-gone.closeHoverTooltips', () => {
        commands.executeCommand('hideSuggestWidget');
        commands.executeCommand('closeParameterHints');
    });

    context.subscriptions.push(command);
}

export function deactivate() {
    // Intentionally empty
}