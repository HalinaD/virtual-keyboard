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
      this.elems.keysBox.appendChild(this.getkeys());
  
      this.elems.keys = this.elems.keysBox.querySelectorAll(".keyboard__key");
  
      this.elems.main.appendChild(this.elems.keysBox);
      
      document.body.appendChild(this.elems.main);
  
      document.querySelectorAll(".textarea-field").forEach(element => {
        element.addEventListener("focus", () => {
          this.extend(element.value, currentValue => {
            element.value = currentValue;
          });
        });
      });

      const body = document.querySelector("body");

      document.addEventListener("keydown", (e) => {
        let pos = document.querySelector(".textarea-field").selectionStart;
        let prev = this.properties.value.slice(0, pos);
        let next = this.properties.value.slice(pos);

          body.lastElementChild.firstElementChild.childNodes.forEach( btn => {
            if (e.code == "Key" + btn.innerText.toUpperCase()) {
              document.querySelector(".textarea-field").focus();
              btn.classList.add("keyboard__key--keyboard");
              this.properties.value = prev + btn.innerText + next;
            } else if (e.code == "CapsLock" && btn.innerText == "keyboard_capslock") {
              btn.classList.add("keyboard__key--keyboard");
              btn.click();

            } else if (e.code == "ShiftLeft" && btn.innerText == "arrow_upward") {
              btn.classList.add("keyboard__key--keyboard");
         //     this.useshift(true);
              btn.click();
            } else if (e.code == "ControlLeft" && btn.innerText == "Ctrl") {
              btn.classList.add("keyboard__key--keyboard");
              btn.click();
              btn.classList.add("keyboard__key--ctrl");
              btn.innerHTML = "Ctrl";
              } else if (e.code == "AltLeft" && btn.innerText == "Alt") {
                btn.classList.add("keyboard__key--keyboard");
                btn.click();
                btn.classList.add("keyboard__key--ctrl");
                btn.innerHTML = "Alt";

            } else if (e.code == "Enter" && btn.innerText == "keyboard_return") {
              btn.classList.add("keyboard__key--keyboard");
              this.properties.value = prev + "\n" + next;
            } else if (e.code == "Backspace" && btn.innerText == "keyboard_backspace") {
              btn.classList.add("keyboard__key--keyboard");
              this.properties.value = prev.substring(0, prev.length - 1) + next;
            } else if (e.code == "Space" && btn.innerText == "space_bar") {
              btn.classList.add("keyboard__key--keyboard");
              this.properties.value = prev + " " + next;

            } else if (e.code == "Tab" && btn.innerText == "keyboard_tab") {
              document.querySelector(".textarea-field").focus();
              btn.classList.add("keyboard__key--keyboard");
              this.properties.value = prev + "    " + next;
        //      this.triggerevent("oninput");
              
              
            } else if ( e.code == "ArrowLeft" && btn.innerText == "keyboard_arrow_left") {
              document.querySelector(".textarea-field").focus();
              btn.classList.add("keyboard__key--keyboard");
              this.properties.value += "⇐"
         //     this.triggerevent("oninput");
            } else if ( e.code == "ArrowRight" && btn.innerText == "keyboard_arrow_right") {
              document.querySelector(".textarea-field").focus();
              btn.classList.add("keyboard__key--keyboard");
              this.properties.value += "⇒"
         //     this.triggerevent("oninput");
            }  else if ( e.code == "ArrowDown" && btn.innerText == "keyboard_arrow_down") {
              document.querySelector(".textarea-field").focus();
              btn.classList.add("keyboard__key--keyboard");
              this.properties.value += "⇓"
        //      this.triggerevent("oninput");
            }  else if ( e.code == "ArrowUp" && btn.innerText == "keyboard_arrow_up") {
              document.querySelector(".textarea-field").focus();
              btn.classList.add("keyboard__key--keyboard");
              this.properties.value += "⇑"
         //     this.triggerevent("oninput");
            } else if ( 
            e.key == "/" && btn.innerText == "?" ||
            e.key == btn.innerText) { btn.classList.add("keyboard__key--keyboard");
            this.properties.value = prev + btn.innerText + next;
}
          })
          
      });

      document.addEventListener("keyup", (e) => {
        body.lastElementChild.firstElementChild.childNodes.forEach( btn => {
            if (btn.innerText !== "check_circle") {
              btn.classList.remove("keyboard__key--keyboard");
            } 
             if (e.code == "ShiftLeft" && btn.innerText == "arrow_upward") {
              btn.classList.remove("keyboard__key--keyboard");
         //     this.useshift(true);
              btn.click();}
        })
      });
    },

    extend(initialValue, oninput) {
        this.properties.value = initialValue || "";
        this.ehandlers.oninput = oninput;
      },
    
 getkeys() {
      const fragment = document.createDocumentFragment();
      const keymap = [
       "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
        "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\" ,
        "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
        "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "up", 
        "ctrl", "alt", "space", "lang", "left", "down", "right", 
      ];
  
      const createIconHTML = (icon_name) => {
      return `<i class="material-icons">${icon_name}</i>`;
      };
  
      keymap.forEach(key => {
        const keybtn = document.createElement("button");
        const insertLineBreak = ["backspace", "]", "enter", "?"].indexOf(key) !== -1;
  
        keybtn.setAttribute("type", "button");
        keybtn.classList.add("keyboard__key");
  
        switch (key) {
          case "backspace":
              keybtn.classList.add("keyboard__key--cmdbtn");
              keybtn.innerHTML = createIconHTML("keyboard_backspace");
              keybtn.addEventListener("click", () => {
                let pos = document.querySelector(".textarea-field").selectionStart;
                let prev = this.properties.value.slice(0, pos);
                let next = this.properties.value.slice(pos);

                document.querySelector(".textarea-field").focus();
                this.properties.value = prev.substring(0, prev.length - 1) + next;
               // this.triggereventprev("oninput");
              });
 
  
            break;
  
          case "caps":
            keybtn.classList.add("keyboard__key--cmdbtn", "keyboard__key--light");
            keybtn.innerHTML = createIconHTML("keyboard_capslock");
  
            keybtn.addEventListener("click", () => {
              document.querySelector(".textarea-field").focus();
           //   this.usecapslock();
              keybtn.classList.toggle("keyboard__key--active", this.properties.capsLock);
            });
  
            break;

            case "ctrl":
              keybtn.classList.add("keyboard__key--ctrl");
              keybtn.innerHTML = "Ctrl";
    
              break;

              case "alt":
                keybtn.classList.add("keyboard__key--ctrl");
                keybtn.innerHTML = "Alt";
      
                break;   
  
          case "enter":
            keybtn.classList.add("keyboard__key--cmdbtn");
            keybtn.innerHTML = createIconHTML("keyboard_return");
  
            keybtn.addEventListener("click", () => {
              let pos = document.querySelector(".textarea-field").selectionStart;
              let prev = this.properties.value.slice(0, pos);
              let next = this.properties.value.slice(pos);

              
              document.querySelector(".textarea-field").focus();
              this.properties.value = prev + "\n" + next;
              this.triggerevent("oninput");
            });
  
            break;
  
          case "space":
            keybtn.classList.add("keyboard__key--large");
            keybtn.innerHTML = createIconHTML("space_bar");
  
            keybtn.addEventListener("click", () => {
              let pos = document.querySelector(".textarea-field").selectionStart;
              let prev = this.properties.value.slice(0, pos);
              let next = this.properties.value.slice(pos);

              document.querySelector(".textarea-field").focus();
              this.properties.value = prev + " " + next;
          //    this.triggerevent("oninput");

              
            });
  
            break;

          case "shift":
            shift = true;
            keybtn.classList.add("keyboard__key--shift");
            keybtn.innerHTML = createIconHTML("arrow_upward");
            
         keybtn.addEventListener("mousedown", () => {
              document.querySelector(".textarea-field").focus();

              this.useshift(true);
              keybtn.classList.toggle("keyboard__key--active", this.properties.shift);
            })

            keybtn.addEventListener("mouseup", () => {
              document.querySelector(".textarea-field").focus();

           //   this.useshift(false);
              keybtn.classList.toggle("keyboard__key--active", this.properties.shift);
            })

        
            break;
          
          case "lang":
            keybtn.classList.add("keyboard__key--cmdbtn");
            keybtn.innerHTML = "Lang";

            keybtn.addEventListener("click", () => {
              document.querySelector(".textarea-field").focus();
          //    this.changelanguage();
              keybtn.innerHTML = this.properties.lang ? "Ru": "En"
             
              keybtn.classList.toggle(this.properties.lang);

              localStorage.setItem('language', this.changelanguage);

            });

            break;

          case "left":
            const charleft = "⇐";
            keybtn.classList.add("keyboard__key--arrow");
            keybtn.innerHTML = createIconHTML("keyboard_arrow_left");

            keybtn.addEventListener("click", () => {
                document.querySelector(".textarea-field").focus();
                this.properties.value += charleft
                this.triggerevent("oninput");
            });

            break;

          case "right": 
          const charright = "⇒"

          keybtn.classList.add("keyboard_arrow--arrow");
          keybtn.innerHTML = createIconHTML("keyboard_arrow_right");

          keybtn.addEventListener("click", () => {
            document.querySelector(".textarea-field").focus();
              this.properties.value += charright   
          //    this.triggerevent("oninput");
          });

            break;

            case "up":
              const charup = "⇑";
              keybtn.classList.add("keyboard__key--arrow");
              keybtn.innerHTML = createIconHTML("keyboard_arrow_up");

              keybtn.addEventListener("click", () => {
                document.querySelector(".textarea-field").focus();
                  this.properties.value += charup
          //        this.triggerevent("oninput");
              });

              break; 


              case "down":
                  const chardown = "⇓"
                  
                  input = document.querySelector('.textarea-field')
                  keybtn.classList.add("keyboard_arrow--arrow");
                  keybtn.innerHTML = createIconHTML("keyboard_arrow_down");

                  keybtn.addEventListener("click", () => {
                    document.querySelector(".textarea-field").focus();
                      this.properties.value += chardown
                      //document.querySelector(".textarea-field").className += " myClass";
                      //input.classList.toggle("myClass")
                 //     this.triggerevent("oninput");
                  });

                  break; 

            case "Tab":
              keybtn.classList.add("keyboard__key--tab");
              keybtn.innerHTML = createIconHTML("keyboard_tab");
              document.querySelector(".textarea-field").focus();
              keybtn.addEventListener("click", () => {
                let pos = document.querySelector(".textarea-field").selectionStart;
                let prev = this.properties.value.slice(0, pos);
                let next = this.properties.value.slice(pos);
  
                document.querySelector(".textarea-field").focus();
                this.properties.value = prev + "    " + next;
              //  this.triggerevent("oninput");
              });
              break;
          
         
  
          default:
            keybtn.textContent = key;
  
            keybtn.addEventListener("click", () => {
              let pos = document.querySelector(".textarea-field").selectionStart;
              let prev = this.properties.value.slice(0, pos);
              let next = this.properties.value.slice(pos);

              document.querySelector(".textarea-field").focus();
              if (this.properties.capsLock && this.properties.shift) {
                this.properties.value = prev + keybtn.textContent.toLowerCase() + next;
              } else if (this.properties.shift) {
                this.properties.value = prev + keybtn.textContent.toUpperCase() + next;
              } else if (this.properties.capsLock) {
                this.properties.value = prev + keybtn.textContent.toUpperCase() + next;
              }else {
                this.properties.value = prev + keybtn.textContent.toLowerCase() + next;
              }
            
              
              this.triggerevent("oninput");
            });
  
            break;
        }
  
        fragment.appendChild(keybtn);
  
        if (insertLineBreak) {
          fragment.appendChild(document.createElement("br"));
        }
      });
  
      return fragment;
    },
   
    
    }
