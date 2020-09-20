function orderByYear (movies) {
  if (movies.length === 0) return 0
  const copy=[ ...movies ];
  copy.sort(function(a,b) {
          return a.year - b.year || a.title.localCompare(b.title);
  })
  console.log(copy)
  return(copy)
}