import { contextBridge, ipcRenderer } from "electron";
import { Command } from "./command";

class _Api {
  public openFolder = async () => await ipcRenderer.invoke(Command.PickFolder);
}

contextBridge.exposeInMainWorld("electron", new _Api());
