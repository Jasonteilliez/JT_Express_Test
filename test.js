import { fileURLToPath } from "url";

const monUrl = fileURLToPath(new URL(".", import.meta.url));

console.log(monUrl);
