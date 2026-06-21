export default function stripDebugPlugin({ types: t }) {
  return {
    visitor: {
      DebuggerStatement(path) {
        path.remove()
      },
      CallExpression(path) {
        let callee = path.node.callee
        let isConsoleCall = false

        // Check for console.* calls
        if (
          callee.type === 'MemberExpression' &&
          callee.object.type === 'Identifier' &&
          callee.object.name === 'console'
        ) {
          isConsoleCall = true
        }

        // Check for alert() calls
        if (callee.type === 'Identifier' && callee.name === 'alert') {
          path.replaceWith(t.unaryExpression('void', t.numericLiteral(0)))
          return
        }

        if (isConsoleCall) {
          path.replaceWith(t.unaryExpression('void', t.numericLiteral(0)))
        }
      }
    }
  }
}
