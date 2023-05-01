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

const keyboard = {
  properties: {
    shift: false,
    capsLock: false,
    value: "",
    lang: false
  },
  
  elems: {
    keys: [],
    main: null,
    keysBox: null,
    language : null
  },
  
  ehandlers: {
    oninput: null
  },

    start() {
        var input = document.createElement('textarea');
        input.className = 'textarea-field';
        input.placeholder = 'Press any button...'
        document.body.appendChild(input);
        
      this.elems.keysBox = document.createElement("div");
      this.elems.main = document.createElement("div");
     
      this.elems.main.classList.add("keyboard");
      this.elems.keysBox.classList.add("keyboard__box");
      //this.elems.keysBox.appendChild(this.somefunction());
  
      this.elems.keys = this.elems.keysBox.querySelectorAll(".keyboard__key");
  
      this.elems.main.appendChild(this.elems.keysBox);
      
      document.body.appendChild(this.elems.main);
  
      document.querySelectorAll(".textarea-field").forEach(element => {
        element.addEventListener("focus", () => {
          this.extend(element.value, currentValue => {
            element.value = currentValue;
          });
        });
      });}}