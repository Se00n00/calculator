const {app, Menu, Tray, BrowserWindow}=require('electron');
const path=require('path');


const MainWindow=()=>{
    const win = new BrowserWindow({
        height:600,
        width:780,
        resizable:true,
        icon:path.join(__dirname,'./rendered/pnng.png'),
        // transparent:true,
        // frame:false,
        webPreferences:{
            preload: path.join(__dirname,'preload.js')
        }
    });
    win.loadFile(path.join(__dirname,"./rendered/index.html"));
    
}


const template=[];
const menu=Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

app.whenReady().then(MainWindow);

//for macOs
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })


  module.exports={
    exito:function(){
        app.quit();
    }
  }
