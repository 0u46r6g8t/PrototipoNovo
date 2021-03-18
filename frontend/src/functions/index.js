import path from 'path';
import fs from 'fs';

// Functions 

function readdir(path){
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, paths) =>{
      if(err){
          reject(err)
      } else {
          resolve(paths)
      }
    })
  })
}

// ---------

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

// Verificar erros na função, pois estou tentando importar o module fs só que o mesmo não é reconhecido como um modulo.

export const listenImages =  () => {
  const photoImage = path.resolve(__dirname, '..', 'assets', 'imagens_clb'); 
  
  const handlePhoto = readdir(photoImage);

  console.log(handlePhoto);

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