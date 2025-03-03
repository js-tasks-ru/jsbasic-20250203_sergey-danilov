function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  const div = document.getElementById('text');

  button.onclick = () => {
    if (div.hidden){
      div.hidden = false;
    } else {
      div.hidden = true;
    }
  }

}
