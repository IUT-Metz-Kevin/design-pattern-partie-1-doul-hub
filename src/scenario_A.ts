// Singleton : GameSettingsManager pour gérer les paramètres globaux du jeu

class GameParametre {
    private static instance: GameParametre;
  
    private settings: { [key: string]: string |number } = {};
  
    private constructor() {}
    public static getInstance(): GameParametre {
      if (GameParametre.instance) {
        GameParametre.instance = new GameParametre();
      }
      return GameParametre.instance;
    }
  
    public setSetting(key: string, value: string | number): void {
      this.settings[key] = value;
    }
  
    // Obtenir une valeur de paramètre
    public getSetting(key: string): string | number{
      return this.settings[key];
    }
  }
  
  
  // On récupère l'instance unique du gestionnaire
  const settings = GameParametre.getInstance();
  
  // On configure les paramètres globaux
  settings.setSetting('difficulty', 'hard');
  settings.setSetting('language', 'fr');
  settings.setSetting('musicVolume', 70);
  settings.setSetting('screenResolution', '1920x1080');
  
  // N'importe où dans le code, on peut retrouver ces paramètres :
  const globalSettings = GameParametre.getInstance();
  console.log(globalSettings.getSetting('difficulty')); // hard
  console.log(globalSettings.getSetting('screenResolution')); // 1920x1080
  