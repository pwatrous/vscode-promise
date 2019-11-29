/*

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext): void {
	let linter = new SpellProvider();

	linter.activate(context);
}

public activate(context: vscode.ExtensionContext) {

let subscriptions: vscode.Disposable[] = context.subscriptions;
vscode.workspace.onDidChangeTextDocument(this.TriggerDiffDiagnostics, this, subscriptions)

}

// NOT GOOD :(
private TriggerDiffDiagnostics(event: vscode.TextDocumentChangeEvent) {
	this.TriggerDiagnostics(event.document);
}

// document = event.document
document: vscode.TextDocument
let docToCheck = document.getText();


let lineRange = new vscode.Range(problem.startLine, problem.startChar, problem.endLine, problem.endChar);
let loc = new vscode.Location(document.uri, lineRange);

let diag = new vscode.Diagnostic(lineRange, problem.message, this.convertSeverity(problem.type));

*/