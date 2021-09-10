export function emitEvent(name, data) {
  dispatchEvent(new CustomEvent(name, { detail: data }))
}

export function listenEvent(name, call) {
  window.addEventListener(name, call)
}
