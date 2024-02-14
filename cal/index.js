const {app, BrowserWindow}=require('electron');
const path=require('path');

const MainWindow=()=>{
    const win = new BrowserWindow({
        height:700,
        width:400,
        resizable:true,
        transparent:true,
        frame:false,
        webPreferences:{
            preload: path.join(__dirname,'preload.js')
        }
    });
    win.loadFile(path.join(__dirname,"./rendered/index.html"));
    
}

app.whenReady().then(MainWindow);

//for macOs
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
