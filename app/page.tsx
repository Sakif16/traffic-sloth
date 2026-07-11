import Image from "next/image";
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);

export default function Home() {
  return (
    <div>
      Landing page
    </div>
  );
}
