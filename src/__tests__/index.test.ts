import { branches, plugins } from "../";

it("applies 6 plugins", () => {
  expect(plugins.length).toBe(6);
});

it("releases on the main branch", () => {
  expect(branches).toContain(["main"]);
});
