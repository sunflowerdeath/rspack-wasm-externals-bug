import { LoroDoc } from "loro-crdt"

const test = () => {
    var doc = new LoroDoc()
    doc.getMap("test")
    console.log(doc.toJSON())
}

export { test }
