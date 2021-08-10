const things = [1, 2, 3];

console.log('???');

(async function () {
  for await (const thing of things) {
    const foo = await dosomething(thing);
  }
})();

async function dosomething(i) {
  console.log('v', i);
}
