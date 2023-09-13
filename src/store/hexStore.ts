import { defineStore } from "pinia"
import { Hex, Grid, HexStore } from "honeycomb-grid"

interface hexStoreInterface {
    selectedHexes: Hex[]
    hexGrid: HexStore<Hex>
}
export const useHexStore = defineStore("hexes", {
    // other options...
    state: (): hexStoreInterface => {
        return {
            selectedHexes: [],
            hexGrid: null,
        }
    },
    actions: {
        addHexToSelected(hex: Hex) {
            this.selectedHexes.push(hex)
        },
    },
})
