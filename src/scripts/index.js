const foo = (bar) => {
  const blub = bar ?? 'hello world'
  console.log(blub)
}

foo('test')
foo()
