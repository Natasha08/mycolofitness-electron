function dataTarget(document) {

document.addEventListener('dragover',function(event){
  event.preventDefault();
  return false;
},false);

document.addEventListener('drop',function(event){
  event.preventDefault();
  console.log(event.dataTransfer.files[0].path);
  return false;
},false);

}
module.exports = dataTarget;
