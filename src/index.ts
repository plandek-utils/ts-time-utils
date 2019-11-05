import { Dayjs, isDayjs } from "dayjs";
import timekeeper from "timekeeper";

/**
 * @internal
 */
function getDate(time: Dayjs | Date) {
  return isDayjs(time) ? time.toDate() : time;
}

/**
 * Executes the given function, freezing the time first to the given `time`, and resetting the function execution (uses `timekeeper`)
 *
 * ```typescript
 * // assume now is "2019-03-21T12:21:13.000Z"
 *
 * function renderTime() {
 *   const d = new Date()
 *   console.log(d.toISOString())
 * }
 *
 * renderTime() // => logs "2019-03-21T12:21:13.000Z"
 *
 * const time = new Date("2018-01-02T13:14:15.123Z")
 * const res = freezeTime(time, () => { renderTime(); return 'blah' }) // => logs "2018-01-02T13:14:15.123Z"
 * console.log(res) // => logs 'blah' (freezeTime() returns the result of the passed function)
 *
 * renderTime() // => logs "2019-03-21T12:21:13.010Z" (time is unfrozen, let's say that a 10ms have passed)
 * ```
 *
 * @param time the time that will be the new "now"
 * @param fn function to execute, on which the time will be frozen as `time`
 */
export function freezeTime<T>(time: Dayjs | Date, fn: () => T): T {
  timekeeper.freeze(getDate(time));
  const result = fn();
  timekeeper.reset();
  return result;
}

/**
 * same as `freezeTime()` but it expects an async function. It will await for the function's return and return it before resetting the time
 *
 * TODO: this needs concurrency testing
 *
 * @param time the time that will be the new "now"
 * @param fn async function to execute, on which the time will be frozen as `time`
 * @see freezeTime
 */
export async function freezeTimeAwait<T>(
  time: Dayjs | Date,
  fn: () => Promise<T>
): Promise<T> {
  timekeeper.freeze(getDate(time));
  const result = await fn();
  timekeeper.reset();
  return result;
}
