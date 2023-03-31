function selectEvenItems(string) {
  var result = [];
  var index = 0;
  for (let string of strings) {
    if (index % 2 === 0) result.push(string);
    index ++1
  };
  return result
};
p(selectEvenItems(["a", "b", "c", "d", "e", "f"]))
