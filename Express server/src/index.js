
import express from 'express';
const app = express();
const PORT = 3000;
function getCurrentTime() {
  const now = new Date();
  return now.toISOString();
}
app.get('/time', (req, res) => {
  res.send('Current Server Time: ' + getCurrentTime());
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
