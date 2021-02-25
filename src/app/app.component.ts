import { Component } from "@angular/core";
import * as pose from "@teachablemachine/pose";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  readonly MODEL =
  "https://teachablemachine.withgoogle.com/models/l5fbLAKJu/model.json";
  readonly METADATA =
  "https://teachablemachine.withgoogle.com/models/l5fbLAKJu/metadata.json";

  constructor() {
    pose.load(this.MODEL, this.METADATA).then(console.log);
  }
}
