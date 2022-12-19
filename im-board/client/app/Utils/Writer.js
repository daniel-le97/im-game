import { logger } from "../../../server/utils/Logger.js"
import { Pop } from "./Pop.js"

const elems = {}

function getElem(id) {
  try {
    elems[id] = elems[id] || document.getElementById(id)
    if (!elems[id]) {
      throw new Error(`Invalid element Id ${id}`)
    }
  } catch (error) {
    logger.error('[ATTEMPTING_TO_SET_HTML]', id)
    Pop.error(error)
  }
}

export function setHTML(id, html) {
  getElem(id)
  elems[id].innerHTML = html
}

export function setText(id, text) {
  getElem(id)
  elems[id].innerText = text
}
