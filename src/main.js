function toggle(){
  let element = document.getElementById('iframeKu');
  let hidden = element.getAttribute('hidden');

  if (hidden) {
    element.removeAttribute('hidden');
    
  } else {
    element.setAttribute('hidden','hidden');
    
  }
}

