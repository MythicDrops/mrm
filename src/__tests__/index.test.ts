import { branches, plugins } from "../";

it("applies 5 plugins", () => {
  expect(plugins.length).toBe(5);
});

it("releases on the main branch", () => {
  expect(branches).toContain("main");
});
