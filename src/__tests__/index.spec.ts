import { freezeTime, freezeTimeAwait } from "..";

function nowString() {
  const d = new Date();
  return d.toISOString();
}

const now = new Date("2019-01-01");

describe("freezeTime()", () => {
  it("executes the given expect inside of the function", () => {
    freezeTime(now, () => {
      expect(nowString()).toEqual(now.toISOString());
    });
    expect.assertions(1);
  });

  it("if something goes wrong, unfreezes time before throwing exception", () => {
    expect(nowString()).not.toEqual(now.toISOString()); // not frozen
    try {
      freezeTime(now, () => {
        expect(nowString()).toEqual(now.toISOString()); // frozen
        throw new Error("going wrong");
      });
    } catch (e) {
      expect(e.message).toEqual("going wrong");
      expect(nowString()).not.toEqual(now.toISOString()); // not frozen
    }

    expect.assertions(4);
  });
});

describe("freezeTimeAwait()", () => {
  async function doShit(): Promise<string> {
    return Promise.resolve(nowString());
  }

  it("executes the given expect inside of the function", async () => {
    await freezeTimeAwait(now, async () => {
      const res = await doShit();
      expect(res).toEqual(now.toISOString());
    });
    expect.assertions(1);
  });

  it("if something goes wrong, unfreezes time before throwing exception", async () => {
    expect(nowString()).not.toEqual(now.toISOString()); // not frozen
    try {
      await freezeTimeAwait(now, async () => {
        expect(nowString()).toEqual(now.toISOString()); // frozen
        const res = await doShit();
        expect(res).toEqual(now.toISOString());
        throw new Error("going wrong");
      });
    } catch (e) {
      expect(e.message).toEqual("going wrong");
      expect(nowString()).not.toEqual(now.toISOString()); // not frozen
    }

    expect.assertions(5);
  });
});
