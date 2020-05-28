export const handleDisabled = () => {
  const { hostname } = location
  if (!hostname === 'localhost') {
    // 禁用右键
    document.oncontextmenu = function(e) {
      e.preventDefault()
    }
    // 禁用选中
    document.onselectstart = function(e) {
      e.preventDefault()
    }
    // 禁止打开控制台
    document.onkeydown = document.onkeyup = document.onkeypress = function(event) {
      var e = event || window.event || arguments.callee.caller.arguments[0]

      if (e && e.keyCode == 123) {
        e.returnValue = false
        return false
      }
    }
  }
}
