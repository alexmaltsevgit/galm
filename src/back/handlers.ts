import { dialog, BrowserWindow, ipcMain } from "electron";

export const initHandlers = (mainWindow: BrowserWindow) => {
  ipcMain.handle(
    "pick-folder",
    async () =>
      await dialog.showOpenDialog(mainWindow, {
        properties: ["openDirectory"],
      })
  );
};
