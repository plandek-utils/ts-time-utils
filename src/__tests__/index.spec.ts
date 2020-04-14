import dayjs from "dayjs";
import { freezeTime, freezeTimeAwait } from "..";

function nowString() {
  const d = new Date();
  return d.toISOString();
}

function dayjsNow() {
  return dayjs(new Date());
}

const now = dayjsNow().subtract(1, "week");

[
  { time: now, title: "works with Dayjs" },
  { time: now.toDate(), title: "works with Date" },
].forEach(({ time, title }) => {
  describe(title, () => {
    describe("freezeTime()", () => {
      it("executes the given expect inside of the function", () => {
        freezeTime(time, () => {
          expect(nowString()).toEqual(time.toISOString());
        });
        expect.assertions(1);
      });
    });

    describe("freezeTimeAwait()", () => {
      async function doShit(): Promise<string> {
        return Promise.resolve(dayjsNow().toISOString());
      }

      it("executes the given expect inside of the function", async () => {
        await freezeTimeAwait(time, async () => {
          const res = await doShit();
          expect(res).toEqual(time.toISOString());
        });
        expect.assertions(1);
      });
    });
  });
});
