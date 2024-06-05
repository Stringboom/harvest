import app from "./app";
import { PORT } from "./config/env";

app.listen(PORT, () => {
  console.log(`Node.js backend running on port ${PORT}`);
});
