        const inputElement = document.getElementById('input');
        const outputElement = document.getElementById('output');
        let clearScreen = false; // Untuk menentukan apakah layar harus dihapus
        let hackingInProgress = false; // Untuk menentukan apakah proses hacking sedang berlangsung
        let installedPhoto = null; // Untuk menyimpan foto yang telah diinstal
        let savedPhotos = []; // Untuk menyimpan foto-foto yang telah disimpan
        outputElement.textContent = `Type /? or /help for assistance\n`;
        const element = document.body; // Ganti dengan elemen yang sesuai
 // const hammer = new Hammer(element);

  //hammer.on('press', function(event) {
    //console.log('Tap Detected!', event);
    //menu.style = 'visibility: visible'
    //button1.style = 'visibility: visible'
    //button2.style = 'visibility: visible'
    //outputElement.textContent += `You have opened the secret menu!`;
  //});
        inputElement.addEventListener('keydown', function (c) {
            if (c.key === 'F3') {
              outputElement.textContent = `Type /? or /help for assistance\n`;
              wnText();
            }
        });
        
        inputElement.addEventListener('keydown', function (c) {
            if (c.key === 'F2') {
              outputElement.textContent = `Type /? or /help for assistance\n`;
              outputElement.textContent += `deleting text was successful`;
            }
        });
        
        inputElement.addEventListener('keydown', function (r) {
            if (r.key === 'F1') {
              window.location.href = "index.html";
            }
        });
        
        inputElement.addEventListener('keydown', function (r) {
            if (r.key === 'Escape') {
              window.location.href = "about:blank";
            }
        });
        
        inputElement.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || '') {
                e.preventDefault();
                const command = inputElement.value;
                inputElement.value = '';
                executeCommand(command);
            }
        });
        //('keydown', funtion (r) {
        //  if (r.key === 'Capslock') {
          //  r.preventDefault();
           // const reload = alert//('halo');
          //}
        //});

        function executeCommand(command) {
            if (command === '/?' || command === '/help') {
                showHelpMenu();
            } else if (command === 'help color') {
                showColorHelp();
            } else if (command === 'help command') {
                showCommandHelp();
            } else if (command === 'help install') {
                showInstallHelp();
            } else if (command.startsWith('color ')) {
                changeTextColor(command);
            } else if (command.startsWith('search ')) {
              searchQuery(command);
            } else if (command === '-s hack') {
                startHackerText();
            } else if (command === '-s code') {
              startCodeText();
            } else if (command.startsWith('-s code ')) {
              setTime(command);
            }else if (command === '-d device/battery') {
                getBatteryStatus();
            } else if (command === '-d device/clock') {
                getDeviceClock();
            } else if (command === '-d device/calendar') {
                getDeviceCalendar();
            } else if (command === 'create -a -a') {
              createLink();
            } else if (command === 'update -i' || command === 'update -info') {
              updateInformation();
            } else if (command.startsWith('open -l ')) {
              openWebsite(command);
            }else if (command.startsWith('download ')) {
              download(command);
            }else if (command === 'open yes') {
              openYes();
            } else if (command === 'open no') {
            openNo();
            } else if (command === 'create -link') {
              createLinkWeb
            } else if (command === '!clear') {
              clearText();
           } else if (command === '!exit') {
             exitText();
           } else if (command === '!reload') {
             reloadText();
           }else if (command === '!wn') {
           	wnText();
           } else if (command === 'clear') {
                clearScreen = true; // Set clearScreen ke true untuk membersihkan layar
                stopHackerText();
            } else if (command.startsWith('install photo -link ')) {
                // Mendeteksi perintah instalasi foto dari tautan
                const photoLink = command.replace('install photo -link ', '');
                const account = command.replace('create ', '');

                // Proses unduh dan instalasi foto di sini
                downloadAndInstallPhoto(photoLink);
            } else if (command === 'save') {
                // Simpan foto ke galeri pengguna
                if (installedPhoto) {
                    savePhoto(installedPhoto);
                } else {
                    outputElement.textContent += 'No photo installed to save.\n';
                }
            } else {
                const result = runCommand(command);
                outputElement.textContent += `$ ${command}\n${result}\n`;
            }
        }

        function showHelpMenu() {
            outputElement.textContent += "\n=== Help Menu ===\n";
            outputElement.textContent += "- help color\n";
            outputElement.textContent += "- help command\n";
            outputElement.textContent += "- help install\n";
            outputElement.textContent+= "=================\n"
        }

        function showColorHelp() {
            outputElement.textContent += "\n=== Help Color ===\n";
            outputElement.textContent += "- color red\n";
            outputElement.textContent += "- color yellow\n";
            outputElement.textContent += "- color green\n";
            outputElement.textContent += "- color blue\n";
            outputElement.textContent+= "- color orange\n";
            outputElement.textContent+= "- color purple\n";
            outputElement.textContent+= "- color pink\n";
            outputElement.textContent+= "- color gray\n";
            outputElement.textContent+= "- color black\n";
            outputElement.textContent+= "- color cyan\n";
            outputElement.textContent+= "- color aqua\n";
            outputElement.textContent+= "- color brown\n";
            outputElement.textContent+= "- color white\n";
            outputElement.textContent+= "- color [hex, rgb, hsl color]\n";
            outputElement.textContent += "- color default (to reset to default color)\n";
            outputElement.textContent+= "==================\n"
            // tambahkan warna lainnya jika diperlukan
        }

        function showCommandHelp() {
            outputElement.textContent += "\n=== Help Command ===\n";
            outputElement.textContent += "- -s [system code]\n";
            outputElement.textContent+= "- -d [device information]\n"
            outputElement.textContent+= "- apk -l -n\n"
            outputElement.textContent+= "- create qrcode -link\n"
            outputElement.textContent+= "- create [account] [application]\n"
            outputElement.textContent+= "====================\n"
            // tambahkan command lainnya jika diperlukan
        }

        function showInstallHelp() {
            outputElement.textContent += "\n=== Help Install ===\n";
            outputElement.textContent += "- download apk -n [name apk]\n";
            outputElement.textContent+= "- install photo -link [link photo]\n";
            outputElement.textContent+= "- install video -link [link video]\n"
            outputElement.textContent+= "====================\n"
        }
         function changeTextColor(command) {
            const parts = command.split(' ');
            if (parts.length === 2) {
                const color = parts[1];
                if (color === 'default') {
                    document.body.style.color = 'white'; // Ganti dengan warna default yang Anda inginkan
                } else {
                    document.body.style.color = color;
                }
            } else {
                outputElement.textContent += "Usage: color [color-name] or color default\n";
            }
        }

        let hackingInterval; // Variabel untuk menyimpan interval hacking

        function startHackerText() {
            if (!hackingInProgress) {
                hackingInProgress = true;
                hackingInterval = setInterval(function () {
                  //\n
                    const hackerText = "\nInitializing hack... Access granted... System compromised...\n";
                    
                    appendHackerText(hackerText, 0);
                }, 100);
            }
        }

        function stopHackerText() {
            if (hackingInProgress) {
                hackingInProgress = false;
                clearInterval(hackingInterval); // Menghentikan interval hacking
                outputElement.textContent += '\n'; // Tambahkan baris kosong setelah teks "hacker"
            }
        }
        
        function startCodeText(setMili) {
          let smili = setMili || 1000;
          outputElement.textContent += `\n`;
          for (let i = 0; i < 256; i++) {
    setTimeout(function() {
      
          const code = Math.floor(Math.random() * 2) + 0;
//console.log(code);  // Tampilkan nilai acak di konsol (opsional)
            outputElement.textContent += `${code} `;
      // Tambahkan logika atau fungsi yang ingin dijalankan di sini
    }, i * smili); // Ubah 1000 menjadi interval waktu dalam milidetik sesuai kebutuhan
  }
        }
        
        function setTime(command) {
          const setMili= command.split(' ')[2] || 1000;
          if(setMili) {
            startCodeText(setMili);
          }
        }
        
        function getDeviceClock() {
            const currentTime = new Date();
            const hours = currentTime.getHours().toString().padStart(2, '0');
            const minutes = currentTime.getMinutes().toString().padStart(2, '0');
            const seconds = currentTime.getSeconds().toString().padStart(2, '0');

            const timeString = `${hours}:${minutes}:${seconds}`;
            outputElement.textContent += `\nDevice Clock: ${timeString}\n`;
        }

        function getDeviceCalendar() {
            const currentDate = new Date();
            const day = currentDate.getDate().toString().padStart(2, '0');
            const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Ingat bahwa bulan dimulai dari 0 (Januari adalah 0)
            const year = currentDate.getFullYear();

            const date = `${year}-${month}-${day}`;

            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const calendarString = currentDate.toLocaleDateString(undefined, options);

            outputElement.textContent += `\nDevice Calendar: ${calendarString}\n`;
        }

        function getBatteryStatus() {
            if ('getBattery' in navigator) {
                navigator.getBattery().then(function (battery) {
                    const batteryLevel = (battery.level * 100).toFixed(2); // Mendapatkan level baterai dalam persen
                    outputElement.textContent += `\nBattery Level: ${batteryLevel}%\n`;
                }).catch(function (error) {
                    outputElement.textContent += `\nError getting battery status: ${error}\n`;
                });
            } else {
                outputElement.textContent += "\nBattery status not supported in this browser.\n";
            }
        }

        function appendHackerText(text, index) {
            if (index < text.length) {
                outputElement.textContent += text[index];
                index++;
                setTimeout(() => appendHackerText(text, index), 100); // Tambahkan teks dengan interval 100ms
            } else {
                hackingInProgress = false;
                outputElement.textContent += '\n'; // Tambahkan baris kosong setelah teks "hacker"
            }
        }

        function downloadAndInstallPhoto(photoLink) {
            // Simulasikan proses unduh foto dari tautan
            setTimeout(function () {
                installedPhoto = photoLink; // Menyimpan foto yang telah diinstal
                outputElement.textContent += 'Photo installed.\n';
            }, 2000); // Waktu simulasi 2 detik (gantilah dengan proses unduhan sebenarnya jika diperlukan)
        }

function savePhoto(photo) {
    if (photo) {
        fetch(photo)
            .then(response => response.blob()) // Mengambil blob (binary large object) gambar dari URL
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'saved_photo.jpg'; // Nama file yang akan disimpan
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                outputElement.textContent += 'Photo saved to gallery.\n';
            })
            .catch(error => {
                outputElement.textContent += 'Error saving photo: ' + error + '\n';
            });
    } else {
        outputElement.textContent += 'No photo installed to save.\n';
    }
}

function createLink() {
  
}

function updateInformation() {
  outputElement.textContent+= "\n=== Update ===\n"
  outputElement.textContent+= "- Update not found\n"
  outputElement.textContent+= "- Wait for next update!\n"
  outputElement.textContent+= "==============\n"
}

function openWebsite(command) {
  //let openWebsite = prompt('Enter link')
  //outputElement.textContent += ` Link: ${openWebsite}`;
  //let selectLink = prompt(`Select :\n 1. www."${openWebsite}".com\n 2. www.${openWebsite}.org\n 3. www.${openWebsite}.net\n 4. www.${openWebsite}.gg\n 5. www.${openWebsite}.id\n 6. ${openWebsite}\nType number of link to select and open`)
  //if(selectLink == '1'){
    //window.location.href = (`www.${openWebsite}.com`)
 // }
  //if(selectLink == '2'){
  // window.location.href = (`www.${openWebsite}.org`)
  //}
  //if(selectLink == '3'){
   // window.location.href = (`www.${openWebsite}.net`)
 // }
// if(selectLink == '4'){
  //  window.location.href = (`www.${openWebsite}.gg`)
 // }
 // if(selectLink == '5'){
   // window.location.href = (`www.${openWebsite}.id`)
// }
  //if(selectLink == '6'){
  //  window.location.href = (`${openWebsite}`)
// }
  //if(selectLink == 'Exit'){
   // outputElement.textContent += 'Menu was exited';
  //}
  const Website = command.split(' ')[2];
  if(Website){
    window.location.href =`https://www.${Website}`;
  }
}

function openYes() {
  window.location.href = (`${openWebsite}`)
}

function createLinkWeb() {
  let webLink = prompt('Enter Website Name')
  window.location.href = (`${webLink}`)
}

function searchQuery(command) {
  const search = command.split(' ')[1];
  if(search) {
    //alert(`${search}`)
    window.location.href = `https://www.google.com/search?q=${search}`;
  }
  //let search = prompt('Input Query')
}

function download(command) {
  const outputDiv = document.getElementById("output");

  // Pecah perintah menjadi bagian-bagian
  const commandParts = command.split(' ');

  // Cari indeks dari opsi -l dan -n
  const linkIndex = commandParts.indexOf('-l');
  const nameIndex = commandParts.indexOf('-n');

  // Periksa apakah kedua opsi ditemukan dan link berada sebelum nama
  if (linkIndex !== -1 && nameIndex !== -1 && linkIndex < nameIndex) {
    // Dapatkan link dan nama dari argumen perintah
    const link = commandParts[linkIndex + 1];
    const name = commandParts[nameIndex + 1];

    // Tampilkan hasil di dalam div output
    outputDiv.innerHTML += `<div>${command}</div>`;
    outputDiv.innerHTML += `<div>Downloading ${name} from ${link}</div>`;

    // Anda dapat menambahkan logika pengunduhan sesuai kebutuhan
    // Misalnya, menggunakan window.open(link) untuk membuka tautan unduhan di jendela baru.
  } else {
    return "Invalid command format. Use: apk -l[link] -n[name]";
  }
}


        function clearText() {
            //outputElement.textContent = ''; // Menghapus semua teks pada layar
            //window.location.href = ('index.html')
            outputElement.textContent = `Type /? or /help for assistance`;
            outputElement.textContent += `\ndeleting text was successful\n`;
            //alert('deleting text was successful!')
        }
        
        function exitText() {
        	window.location.href = ('about:blank')
        }
        
        function reloadText() {
        	window.location.href = ('index.html')
        }
        
        function wnText() {
        	outputElement.textContent += `\n=== What New ===\n`;
        	outputElement.textContent += `Version: 0.1 BETA1\n`;
        	outputElement.textContent += `New Feature :\n`;
        	outputElement.textContent += `- Not Found\n`;
        	outputElement.textContent += `================\n`;
        }

        function runCommand(command) {
            // Di sini Anda dapat menambahkan logika untuk menjalankan perintah yang dimasukkan
            // Misalnya, Anda dapat menggunakan fetch() untuk berinteraksi dengan server atau menjalankan perintah JavaScript sederhana.
            // Contoh sederhana di bawah ini hanya mengembalikan pesan default.
            return 'Command not recognized';
        }
