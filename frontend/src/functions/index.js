  export const splitWord = (word: string) => {
  let ext = '', name = '';
  ext = word.split('.')[1];
  name = word.substring(0, 7);
  if ( ext == word.match('jpg', 'png', 'jpeg') ){
    return name.concat('...', ext);
  }else{
    return name.concat('... '); 
  }
}

export const splitWordFull = (word: string) => {
  let primary_name = word.split("_")[0];

  return primary_name;
}

export const splitWordEnd = (word: string) => {
  let secondary_name = word.split("_")[1];

  return secondary_name;
}