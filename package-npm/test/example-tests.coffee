Tinytest.add 'uppercase', (test) ->
  test.isNotNull uppercase, 'uppercase should be available'
  test.equal uppercase('testing'), 'TESTING', 'should uppercase testing to TESTING'
  console.log 'TESTING  == ', uppercase('testing')
