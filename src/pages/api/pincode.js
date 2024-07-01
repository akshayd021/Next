export default function handler(req, res) {
  const pincodes = [
    { pincode: 395004, city: "Surat", state: "Gujarat" },
    { pincode: 394300, city: "Bharuch", state: "Gujarat" },
    { pincode: 400004, city: "Ahmedabad", state: "Gujarat" },
    { pincode: 382010, city: "Gandhinagar", state: "Gujarat" },
    { pincode: 360001, city: "Rajkot", state: "Gujarat" },
    { pincode: 361001, city: "Jamnagar", state: "Gujarat" },
    { pincode: 364001, city: "Bhavnagar", state: "Gujarat" },
    { pincode: 395002, city: "Vadodara", state: "Gujarat" },
    { pincode: 396001, city: "Valsad", state: "Gujarat" },
    { pincode: 382721, city: "Anand", state: "Gujarat" },
  ];

  res.status(200).json(pincodes);
}
