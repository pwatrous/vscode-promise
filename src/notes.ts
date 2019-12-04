// To better understand the VSCode extension AP we cloned a spell checker extension.
// We chose this extension because it demonstrates how to use the API to to underline errors.
// These notes were gathered from this processes.

// Import the  VSCode extension API
import * as vscode from 'vscode';

// This was called in the extension.ts file.
// All it does in instantiate and call a class the holds the core code.
export function activate(context: vscode.ExtensionContext): void {
	let linter = new SpellProvider();

	linter.activate(context);
}

// This is the public facing method this is called by the extension.ts file.
public activate(context: vscode.ExtensionContext) {

let subscriptions: vscode.Disposable[] = context.subscriptions;

// Attaches calls to check the file for spelling errors to file changes.
vscode.workspace.onDidChangeTextDocument(this.TriggerDiffDiagnostics, this, subscriptions)


// Here is where promiseKeeper would be called.

}

// Called the check the file when the file changes.
private TriggerDiffDiagnostics(event: vscode.TextDocumentChangeEvent) {
	this.TriggerDiagnostics(event.document);
}

// The code for getting the file's text.
// document = event.document
document: vscode.TextDocument
let docToCheck = document.getText();

// Code for underlining code in the file.
let lineRange = new vscode.Range(problem.startLine, problem.startChar, problem.endLine, problem.endChar);
let loc = new vscode.Location(document.uri, lineRange);

let diag = new vscode.Diagnostic(lineRange, problem.message, this.convertSeverity(problem.type));