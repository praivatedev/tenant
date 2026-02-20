const express = require("express");
const cors = require("cors");
const connDb = require("./config/db");
const dotenv = require("dotenv");
const houseRoutes = require("./controllers/house");
const userRoutes = require("./controllers/users");
const rentalRoutes = require("./controllers/rental");
const complaintRoutes = require("./controllers/complaints"); // ✅ must match the actual path!
const messageRoutes = require("./controllers/message");


dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin:  [
    "http://localhost:5173", // for local testing
    "https://tenant-chi.vercel.app",
    "http://localhost:5174",

  ],
    credentials: true,
  })
);

app.use((req, res, next) => {
  console.log("➡️ Incoming Request:", req.method, req.originalUrl);
  next();
});

app.get("/", (req, res) => res.send("Backend is alive 🚀"));

app.use("/api/house", houseRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/rental", rentalRoutes);
app.use("/api/complaints", complaintRoutes); // ✅ consistent path
app.use("/api/messages", messageRoutes);

const runServer = async () => {
  await connDb();
  app.listen(process.env.PORT, "0.0.0.0", () => console.log("✅ Server is running on port 4050"));
};

runServer();


// server.js
// const pdf = require("pdfkit");

// app.get("/payment/receipt/:paymentId", async (req, res) => {
//   try {
//     const { paymentId } = req.params;
//     const payment = await Payment.findById(paymentId);
//     if (!payment) return res.status(404).send("Payment not found");

//     const doc = new pdf();
//     res.setHeader("Content-Type", "application/pdf");
//     res.setHeader(
//       "Content-Disposition",
//       `attachment; filename=Rent_Receipt_${payment.tenantName}_${payment.month}.pdf`
//     );

//     doc.text(`Tenant: ${payment.tenantName}`);
//     doc.text(`Amount Paid: Ksh ${payment.amount}`);
//     doc.text(`Balance: Ksh ${payment.balance}`);
//     doc.text(`Payment Method: ${payment.method}`);

//     doc.end();
//     doc.pipe(res);
//   } catch (err) {
//     console.error("❌ PDF route error:", err);
//     res.status(500).send("Internal server error");
//   }
// });

