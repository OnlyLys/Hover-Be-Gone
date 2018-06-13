'use strict';

import { ExtensionContext, commands } from 'vscode';

export function activate(context: ExtensionContext) {

    let command = commands.registerCommand('hover-be-gone.escape', () => {
        commands.executeCommand('hideSuggestWidget');
        commands.executeCommand('closeParameterHints');
    });

    context.subscriptions.push(command);
}

// this method is called when your extension is deactivated
export function deactivate() {
}