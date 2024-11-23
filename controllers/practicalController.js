import Practical from "../model/Practical.js";
import Subject from "../model/Subject.js";
import User from "../model/User.js";

export const createPractical = async (req, res) => {
  const { subjectId, title, description } = req.body;
  try {
    const subject = await Subject.findById(subjectId);
    if (!subject) return res.status(404).json({ msg: "Subject not found" });

    const practical = new Practical({
      subjectId,
      title,
      description,
      email, // Teacher's email
    });
   const savePracticals =  await practical.save();
    res.status(201).json({savePracticals});
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

export const getPracticals = async (req, res) => {
  try {
    const practicals = await Practical.find()
      .populate("subjectId", "name code")
      .populate("email", "name email")
      .populate("enrolledStudents", "name email");
    res.status(200).json(practicals);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

export const enrollInPractical = async (req, res) => {
  const { practicalId } = req.body;
  try {
    const practical = await Practical.findById(practicalId);
    if (!practical) return res.status(404).json({ msg: "Practical not found" });

    if (practical.enrolledStudents.includes(req.user.id))
      return res.status(400).json({ msg: "Already enrolled in this practical" });

    practical.enrolledStudents.push(req.user.id);
    await practical.save();
    res.status(200).json({ msg: "Enrolled successfully", practical });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};
