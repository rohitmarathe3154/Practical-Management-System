import Subject from "../model/Subject.js";

export const createSubject = async (req, res) => {
  const { name, code, email } = req.body;
  try {
    const subject = new Subject({
      name,
      code,
      email
    //   createdBy: req.user.id, // Admin's ID from token
    });
    const saveSubject = await subject.save();
    res.status(201).json({saveSubject});
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

export const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find().populate("email", "name email");
    res.status(200).json(subjects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};
