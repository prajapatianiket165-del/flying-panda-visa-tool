module.exports = (req, res, next) => {
  const { country, city, visaType } = req.body;
  const validVisaTypes = ["Tourist", "Business", "Student"];

  if (!country || !city || !visaType) {
    return res.status(400).json({ message: "country, city and visaType are required" });
  }

  if (!validVisaTypes.includes(visaType)) {
    return res.status(400).json({ message: "Invalid visa type" });
  }

  next();
};
