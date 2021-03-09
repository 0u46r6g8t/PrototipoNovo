export const splitWord = (word: string) => {
  let ext = '', name = '';
  ext = word.split('.')[1]
  name = word.substring(0, 5);
  return name.concat('.', ext);
}

export const splitWordFull = (word: string) => {
  let primary_name = word.split("_")[0];

  return primary_name;
}