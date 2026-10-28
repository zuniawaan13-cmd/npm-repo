const http = require("http");

// const server=http.createServer((req,res)=>{
//   res.write("Hello from my first server")
//   res.end()

// })

// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

const server = http.createServer((req, res) => {
   if (req.url === "/products") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify([
      { id: 1, name: "Laptop" },
      { id: 2, name: "Phone" }
    ]));
  }
  else if (req.url === "/") {
    res.write("Welcome to home page!");
  } else if (req.url === "/about") {
    res.write("This is about page");
  } else {
    res.write("404 -  Page n0t found");
  }
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// server.listen(3000)
