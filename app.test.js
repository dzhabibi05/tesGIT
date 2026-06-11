const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

describe("Pengujian Validasi Web Statis", () => {
  let dom;
  let document;

  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
  });

  test('Harus memiliki judul utama "Halo, Dunia!"', () => {
    const h1 = document.querySelector("header h1");
    expect(h1).not.toBeNull();
    expect(h1.textContent).toBe("Halo, Dunia!");
  });

  test('Harus memiliki tombol dengan ID "tombolSapa"', () => {
    const tombol = document.getElementById("tombolSapa");
    expect(tombol).not.toBeNull();
  });
});
