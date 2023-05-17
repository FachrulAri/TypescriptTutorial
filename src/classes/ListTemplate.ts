import { hasFormatter } from "../interfaces/HasFormatter.js";

export class listTemplate {
  constructor(private container: HTMLUListElement) {}
  render(item: hasFormatter, heading: string, pos: "start" | "end") {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement("p");
    p.innerText = item.format();
    li.append(p);

    pos === "start" ? this.container.prepend(li) : this.container.append(li);
  }
}
// register a list container (ul) in the constructor
// create a render method to render a new 'li' to the container
