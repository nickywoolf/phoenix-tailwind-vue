import { mount } from "@vue/test-utils"
import Hello from "@/Hello.vue"

describe("Hello.vue", () => {
    it("says hello", () => {
        const wrapper = mount(Hello)
        expect(wrapper.text()).toContain("Hello!")
    })
})