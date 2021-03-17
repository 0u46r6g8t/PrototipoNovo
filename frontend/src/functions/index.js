import fs from 'fs';

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

  primary_name = primary_name.split(" ")[0].concat(" ", primary_name.split(" ")[1]);

  return primary_name;
}

export const splitWordEnd = (word: string) => {
  let secondary_name = word.split("_")[1];

  return secondary_name;
}

export const listenImages =  () => {

  console.log(fs);

  // fs.readFileSync('../../assets/imagens_clb', 'utf-8', (err, file) => {
  //   if(err) throw err;
  //   console.log(file);
  // })

  // readdir('../assets/image_clb', function(error, file){
  //   if(error)
  //     throw Error(error);
  //   console.log(file);
  // });
}