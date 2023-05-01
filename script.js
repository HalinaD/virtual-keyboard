window.addEventListener("DOMContentLoaded", function () {
    
    var title = document.createElement('h1');
      title.className = 'title';
      title.innerHTML = 'Клавиатура создана в операционной системе Windows';
      document.body.appendChild(title);
  
    var subtitle = document.createElement('h3');
      subtitle.className = 'subtitle';
      subtitle.innerHTML = 'Для смены языка используйте кнопку Lang';
      document.body.appendChild(subtitle);   
      keyboard.start();
  });