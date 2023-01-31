import { VController } from "./Controllers/VController.js";

class App {
  VController = new VController();
  // valuesController = new ValuesController();
}

window["app"] = new App();
