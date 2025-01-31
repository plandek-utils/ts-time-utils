// src/index.ts
import timekeeper from "timekeeper";
function freezeTime(time, fn) {
  timekeeper.freeze(time);
  try {
    const result = fn();
    timekeeper.reset();
    return result;
  } catch (e) {
    timekeeper.reset();
    throw e;
  }
}
async function freezeTimeAwait(time, fn) {
  timekeeper.freeze(time);
  try {
    const result = await fn();
    timekeeper.reset();
    return result;
  } catch (e) {
    timekeeper.reset();
    throw e;
  }
}
export {
  freezeTime,
  freezeTimeAwait
};
//# sourceMappingURL=index.mjs.map