# Compile as .vsix
npm install -g @vscode/vsce
cd vsix-reverse-shell
vsce package --allow-missing-repository
