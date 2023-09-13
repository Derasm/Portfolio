import { describe, expect, test } from "vitest"

const globalObj = {
    id: 1,
    name: "test",
    characterName: "TestName",
}

describe("Initial Test suite for testing purposes, heh", () => {
    test("Assertations are working", () => {
        expect(globalObj.characterName).toBe("TestName")
        globalObj.characterName = "TestName2"
        expect(globalObj.characterName).toBe("TestName2")
    })
})
