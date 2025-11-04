const { contextBridge } = require('electron');
const { contextBridge, shell } = require('electron');

contextBridge.exposeInMainWorld('api', {
  openInBrowser: (url) => shell.openExternal(url)
});

const { contextBridge, shell } = require('electron');

contextBridge.exposeInMainWorld('api', {
  openInBrowser: (url) => shell.openExternal(url)
});

